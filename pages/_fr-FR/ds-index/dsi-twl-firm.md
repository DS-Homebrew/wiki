---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Informations sur la Nintendo DSi et le TWL_FIRM de la Nintendo 3DS
---

### Configurer le CFW
Alors que la plupart des avantages du Custom Firmware sont pour la Nintendo DSi et la famille de systèmes Nintendo 3DS, il vous permet de déverrouiller les possibilités de vos consoles. L'installation d'un Custom Firmware est assez facile, et dans la plupart des cas, tout ce dont vous avez besoin est d'une carte (micro)SD. Nous avons le meilleur des guides pour vous, avec des instructions pas à pas.

- [Guide de Hacking 3DS](https://3ds.hacks.guide)
   - Commande Lightning : `mod 3ds`
   - Commande Kuriisu : `guide 3ds`
- [Guide de Hacking DSi](https://dsi.cfw.guide)
   - Commande Lightning : `mod dsi cfw`
   - Commande Kuriisu : `guide dsi`

### Vitesse du CPU
Le Nintendo DS livré avec un processeur de 67 MHz en 2004. Le Nintendo DSi est livré avec un processeur 133 MHz en 2009. La plupart des jeux de la bibliothèque Nintendo DS ont été faits avant la sortie de la Nintendo DSi et en tant que tel, le seul processeur disponible pour eux était 67 MHz. Certaines applications sont faites pour cette vitesse et, par conséquent, ne fonctionnent pas bien avec une vitesse plus élevée. La plupart des jeux, cependant, vont surpasser leur performance originale avec une vitesse plus élevée.

nds-bootstrap a une option TWL Clock Speed, mais il n'essaiera pas d'ajuster la ROM pour qu'elle fonctionne avec la vitesse d'horloge plus élevée. Cela se produira sur l'application elle-même, et les applications qui ne fonctionnent pas avec une vitesse plus élevée ne sont PAS un bug de nds-bootstrap.

### Menu Système Nintendo DSi
Le menu de la console Nintendo DSi utilise un entier signé 32 bits pour déterminer la quantité d'espace libre sur l'appareil. Utiliser une source de périphérique qui dépasse la limite d'entier 32 bits, ce compteur est débordé dans un nombre négatif, ce qui plante dans un écran noir "Une erreur s'est produite".

Les plages qui le font déborder sont déterminées par des paires de deux. Par exemple, 1-2 Go d'espace libre est autorisé alors que 3-4 ne l'est pas. 5-6 Go d'espace libre est autorisé alors que 7-8 ne l'est pas.

Ce plantage ne se produira jamais si le menu du système est lancé à partir d'une véritable puce NAND (car il dépasse 128 Mo), mais un système de redirection (comme hiyaCFW) provoquerait un déclenchement de cette erreur. Heureusement, ce bogue peut facilement être résolu en plaçant des fichiers factices pour régler le compteur à un nombre positif. hiyaCFW le fera automatiquement pour vous dans la dernière version.

Dans la version 1.4.0, les signatures RSA dans la liste blanche de la cartouche DS ne sont pas vérifiées. Il y a un exploit concernant une vulnérabilité dans la liste blanche des linker Nintendo DSi qui vous permet d'accéder au processeur ARM9, Elle nécessite la version 1.4.0 (il a été corrigé dans les versions futures et n'existait pas dans les versions précédentes) et un linker avec une ROM modifiée.

### Accès Nintendo DSi Slot-1 & blocage
L'accès Slot-1 est bloqué lors du lancement d'applications à partir du menu système, sauf si lesdites applications sont soit le lanceur Slot-1 lui-même, soit les paramètres du système. Afin de lancer normalement les cartouches slot-1 non lanceables, vous devrez soit faire un exploit de configuration système, soit installer Unlaunch. Sans l'un ou l'autre de ceux-ci, vous ne pouvez pas lancer de flashcards non disponibles et vous ne pouvez pas dumper des ROMs sur votre carte SD.

La liste blanche des linkers est vérifiée via les signatures RSA sont contenues via des clés RSA sur chaque firmware sauf 1.4.0. Cela signifie que les gens peuvent mettre en liste blanche leurs propres cartes

Avant la 1.4.0, la liste blanche ne contenait que deux sections. En 1.4.0, ils ont introduit une troisième section qui a été faite pour bloquer les linkers qui ont contourné les deux premières. La troisième section charge jusqu'à huit sections différentes de la rom et les vérifie avec un hachage pour voir si la rom a été altérée. Cependant, en raison de l'oubli de la mise en place de toute vérification de bon état de santé, nous pouvons déborder dans le vecteur d'exception / adresse d'interruption en utilisant une valeur suffisamment grande. Mieux encore, cela fonctionne sur ARM7 (aka le processeur de sécurité) donc cela en fait le premier exploit pour le processeur ARM7. Puisque cela se produit avant le verrouillage des registres SCFG, nous pouvons exécuter des homebrew avancés (comme des dumpers Slot-1 & dumpers externes slot-1)

Malheureusement, les exigences sont strictes. Il nécessite la version 1.4.0 et un linker avec une ROM modifiée. En outre, l'exploit n'a jamais été officiellement publié, car Unlaunch étant beaucoup plus simple à installer et ayant beaucoup moins de prérequis (juste un moyen de se lancer dans le homebrew) avec les mêmes avantages.

### Caméra Nintendo DSi
L'application Caméra Nintendo DSi a la possibilité de prendre des photos JPEG et de les enregistrer soit sur la mémoire système, soit sur la carte SD. La façon dont elle est faite la restreint à des images prises sur DSi en raison de l'absence du propre HMAC stocké dans une balise personnalisée EXIF. Toute image personnalisée n'est pas lisible sur la DSi, qu'elles soient prises sur PC ou éditées le PC.

Un fichier `pit.bin` est utilisé pour charger des images. Cependant, la taille de l'en-tête à l'offset 0x16 n'est pas vérifiée, de sorte qu'une taille d'en-tête suffisante peut dépasser les limites et faire en sorte que le tampon soit écrasé et saute au code non signé. C'est ainsi que Memory Pit fonctionne.

### Nintendo DSi bootstage 2
La deuxième phase de démarrage de la Nintendo DSi charge en mémoire le "title.tmd" du lanceur. Cependant, ils ne spécifient pas de vérification de la taille du fichier, ce qui signifie que les 80k premiers octets sont chargés dans la RAM alors que le reste peut être un payload personnalisé. C'est la base de l'exploit Unlaunch.

### RTCom
RTCom est l'utilisation du RTC de la 3DS pour permettre aux processeurs ARM7 et ARM11 de communiquer entre eux, même en TWL_FIRM. Cela permet d'utiliser des fonctionnalités 3DS en mode DS(i). Cela inclut l'entrée analogique du pad circulaire, l'activation du plein écran et la prise en charge du gyroscope. Actuellement, le seul homebrew public qui utilisent RTCom sont certaines versions de GBARunner2 qui ont le support de la fonctionnalité gyroscope de la 3DS. Pour activer RTCom, vous devrez utiliser [TWPatch](https://gbatemp.net/threads/542694/).
