---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Informations sur la Nintendo DSi et le TWL_FIRM de la Nintendo 3DS
---

### Configurer le CFW
Comme la plupart des avantages du Custom Firmware sont pour la Nintendo DSi et la famille Nintendo 3DS, il vous permet de démultiplier les moyens d'utilisation de vos consoles. L'installation d'un Custom Firmware est assez facile, et dans la plupart des cas, tout ce dont vous avez besoin est d'une carte (micro)SD. Voila le meilleur des guides pour vous, avec des instructions pas à pas:

- [Guide de Hacking 3DS](https://3ds.hacks.guide)
   - Commande Lightning : `mod 3ds`
   - Commande TWLHelper : `guide 3ds`
   - Kurisu command: `guide 3ds`
- [Guide de Hacking DSi](https://dsi.cfw.guide)
   - Commande Lightning : `mod dsi`
   - Commande TWLHelper : `guide dsi`
   - Kurisu command: `guide dsi`

### Vitesse du CPU
La Nintendo DS était livrée avec un processeur 67 MHz en 2004, et la Nintendo DSi avec un processeur 133 MHz cinq ans plus tard. La plupart des jeux sur Nintendo DS ont été faits avant la sortie de la Nintendo DSi et en tant que tel, le seul processeur disponible était celui de 67 MHz. Certaines applications sont faites pour cette vitesse et, par conséquent, ne fonctionnent pas bien avec une vitesse plus élevée. La plupart des jeux, cependant, vont surpasser leur performance originale avec une vitesse plus élevée.

nds-bootstrap a une option TWL Clock Speed, mais il n'essaiera pas d'ajuster la ROM pour qu'elle fonctionne avec la vitesse d'horloge plus élevée. Cela se produira sur l'application elle-même, et les applications qui ne fonctionnent pas avec une vitesse plus élevée ne sont PAS un bug de nds-bootstrap.

### Menu Nintendo DSi
Dans la version 1.4.0, les signatures RSA dans la liste blanche des Cartouches DS ne sont pas vérifiées. C'est une vulnérabilité qui peut être exploitée et qui vous permet d'accéder au processeur ARM9. Elle nécessite la version 1.4.0 (l'exploit a été corrigé dans les versions futures et n'existait pas dans les versions précédentes) et une flashcard avec une ROM modifiée.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see [hiyaCFW FAQ & Troubleshooting](../hiyacfw/faq#the-free-space-bug).

### Accès Nintendo DSi Slot-1 & blocage
L'accès Slot-1 est bloqué lors du lancement d'applications à partir du menu système, sauf si lesdites applications sont soit le lanceur Slot-1 lui-même, soit les paramètres du système. Afin de lancer normalement les cartouches slot-1 non lançables, vous devrez soit faire un exploit des paramètres système, soit installer Unlaunch. Sans l'un ou l'autre, vous ne pouvez pas lancer de flashcards non lançables et vous ne pouvez pas dumper de ROMs sur votre carte SD.

Avant la 1.4.0, la liste blanche ne contenait que deux sections. En 1.4.0, une troisième section est introduite. Elle a été faite pour bloquer les flashcards qui ont contourné les deux premières. La troisième section charge jusqu'à huit sections différentes de la rom et les vérifie avec un hachage pour voir si la rom a été altérée. Cependant, en raison de la mauvaise mise en place d'une vérification de bon état, nous pouvons déborder dans l'adresse vector/interrupt de l'exception en utilisant une valeur suffisamment grande. Mieux encore, cela fonctionne sur ARM7 (le processeur de sécurité), ce qui en fait le premier exploit du processeur ARM7. Puisque cela se produit avant le verrouillage des registres SCFG, nous pouvons exécuter des homebrew avancés (comme des dumpers Slot-1).

Malheureusement, les exigences sont strictes. Il nécessite la version 1.4.0 et une flashcard avec une ROM modifiée. Pour cela, l'exploit n'a jamais été officiellement publié, à cause de Unlaunch, qui est beaucoup plus simple à installer et qui a moins de pré-requis (juste un moyen de lancer le homebrew) avec les mêmes avantages.

### Caméra Nintendo DSi
L'application Nintendo DSi Camera a la possibilité de prendre des photos dans le format JPEG et de les enregistrer soit sur la mémoire système, soit sur la carte SD. La façon dont elle est faite la restreint à des images prises sur DSi en raison de l'absence du propre HMAC stocké dans une balise personnalisée EXIF. Toute image personnalisée n'est pas lisible sur la DSi, qu'elles soient prises sur PC ou éditées sur PC, sauf sauvegardées correctement.

Un fichier `pit.bin` est utilisé pour charger des images. Cependant, la taille de l'en-tête à l'offset 0x16 n'est pas vérifiée, de sorte qu'une taille d'en-tête suffisante peut dépasser les limites et faire en sorte que le tampon soit écrasé et saute au code non signé. C'est ainsi que le Memory Pit fonctionne.

### Nintendo DSi bootstage 2
La deuxième phase de démarrage de la Nintendo DSi charge en mémoire le "title.tmd" du menu principal. Cependant, ils ne spécifient pas de vérification de la taille du fichier, ce qui signifie que les 80k premiers octets sont chargés dans la RAM et que le reste peut être un payload personnalisé. C'est la base de l'exploit Unlaunch.

### RTCom
RTCom est l'utilisation du RTC de la 3DS pour permettre aux processeurs ARM7 et ARM11 de communiquer entre eux, même dans TWL_FIRM. Cela permet d'utiliser des fonctionnalités 3DS en mode DS(i). Cela inclut l'entrée analogique du pad circulaire, l'activation du plein écran et la prise en charge du gyroscope. Actuellement, les seuls homebrew DS public qui utilisent RTCom sont certaines versions de GBARunner2 qui ont le support de la fonctionnalité gyroscope de la 3DS. Pour activer RTCom, vous devrez utiliser [TWPatch](https://gbatemp.net/threads/542694/).
