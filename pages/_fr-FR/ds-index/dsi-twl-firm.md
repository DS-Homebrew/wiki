---
lang: fr-FR
layout: wiki
section: ds-index
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
category: Reference
description: An explanation of all things DS modding
---

### Configurer le CFW
La plupart des avantages du Custom Firmware sont pour la Nintendo DSi et la famille de systèmes Nintendo 3DS, il vous permet de déverrouiller les possibilités de vos consoles. L'installation d'un Custom Firmware est assez facile, et dans la plupart des cas, tout ce dont vous avez besoin est d'une carte (micro)SD. Nous avons le meilleur des guides pour vous, avec des instructions pas à pas.

- [Guide de Hacking 3DS](https://3ds.hacks.guide)
  - Commande Lightning : `mod 3ds`
  - Commande Kuriisu : `guide 3ds`
- [Guide de Hacking DSi](https://dsi.cfw.guide)
  - Commande Lightning : `mod dsi cfw`
  - Commande Kuriisu : `guide dsi`

### Vitesse du CPU
La Nintendo DS est livrée avec un processeur de 67Mhz en 2004. La Nintendo DSi est livrée avec un processeur de 133 MHz en 2009. La plupart des jeux de la bibliothèque Nintendo DS ont été faits avant la sortie de la Nintendo DSi et en tant que tel, le seul processeur disponible pour eux était 67Mhz. Certaines applications sont faites pour cette vitesse et, par conséquent, ne fonctionnent pas bien avec une vitesse plus élevée. La plupart des jeux, cependant, vont surpasser leur performance originale avec une vitesse plus élevée.

nds-bootstrap a une option TWL Clock Speed, mais il n'essaiera pas d'ajuster la ROM pour qu'elle fonctionne avec la vitesse d'horloge plus élevée. Cela se produira sur l'application elle-même, et les applications qui ne fonctionnent pas avec une vitesse plus élevée ne sont PAS un bug de nds-bootstrap.

### Menu Système Nintendo DSi
Le menu de la console Nintendo DSi utilise un entier de 32 bits signé pour déterminer l'espace libre sur la NAND. En utilisant la NAND réelle, le montant ne va jamais dépasser 128 Mo, donc il est sûr. Cependant, lorsque nous redirigeons la NAND vers la carte SD, elle dépasse la limite de l'entier 32 bits, ce qui la fait déborder vers un nombre négatif. Le nombre négatif d'espace libre provoquera malheureusement un message d'erreur "Une erreur s'est produite", ne vous laissant pas démarrer dans le menu. Heureusement, cela peut être corrigé en faisant un fichier factice pour le mettre dans un nombre positif.

Les nombres positifs et négatifs sont déterminés par des paires de deux. Par exemple, 1-2 Go d'espace libre est autorisé alors que 3-4 ne l'est pas. 5-6 Go d'espace libre est autorisé alors que 7-8 ne l'est pas.

Dans la version 1.4.0, les signatures RSA dans la liste blanche de la Carte DS ne sont pas vérifiées. Il y a un exploit concernant une vulnérabilité dans la liste blanche de la flashcard Nintendo DSi qui vous permet d'accéder au processeur ARM9, Elle nécessite la version 1.4.0 (il a été corrigé dans les versions futures et n'existait pas dans les versions précédentes) et une flashcard avec une ROM modifiée.

### Accès Nintendo DSi Slot-1 & Blocage
L'accès Slot-1 est bloqué lors du lancement d'applications à partir du menu Système, sauf si ces applications sont soit le lanceur Slot-1, soit les paramètres du système. Afin de lancer normalement les cartouches slot-1 non lançables, vous devrez soit faire un exploit des paramètres système, soit installer Unlaunch. Sans l'un ou l'autre, vous ne pouvez pas lancer de flashcards non lançables et vous ne pouvez pas dumper de ROMs sur votre carte SD.

La liste blanche de la flashcard est vérifiée via les signatures RSA qui sont contenues via des clés RSA sur chaque firmware y compris 1.4.0. Cela signifie que les gens peuvent mettre en liste blanche leurs propres cartes

Avant la 1.4.0, la liste blanche ne contenait que deux sections. En 1.4.0, une troisième section est introduite. Elle a été faite pour bloquer les flashcards qui ont contourné les deux premières. La troisième section charge jusqu'à huit sections différentes de la rom et les vérifie avec un hachage pour voir si la rom a été altérée. Cependant, en raison de l'oubli de la mise en place d'une vérification de bon état, nous pouvons déborder dans l'adresse vector/interrupt de l'exception en utilisant une valeur suffisamment grande. Mieux encore, cela fonctionne sur ARM7 (le processeur de sécurité), ce qui en fait le premier exploit du processeur ARM7. Puisque cela se produit avant le verrouillage des registres SCFG, nous pouvons exécuter des homebrew avancés (comme des dumpers Slot-1 & dumpers externes slot-1)

Malheureusement, les exigences sont strictes. Il nécessite la version 1.4.0 et une flashcard avec une ROM modifiée. En outre, l'exploit n'a jamais été officiellement publié, à cause de Unlaunch, qui est beaucoup plus simple à installer et qui a moins de pré-requis (juste un moyen de lancer le homebrew) avec les mêmes avantages.

### Caméra Nintendo DSi
L'application Nintendo DSi Camera a la possibilité de prendre des photos dans le format JPEG et de les enregistrer soit sur la mémoire système, soit sur la carte SD. La façon dont elle est faite la restreint à des images prises sur DSi en raison de l'absence du propre HMAC stocké dans une balise personnalisée EXIF. Toute image personnalisée n'est pas lisible sur la DSi, qu'elles soient prises sur PC ou éditées le PC.

Un fichier `pit.bin` est utilisé pour charger des images. Cependant, la taille de l'en-tête à l'offset 0x16 est décochée, de sorte qu'une taille d'en-tête suffisante peut dépasser les limites et faire en sorte que le tampon soit écrasé et saute au code non signé. C'est ainsi que le Memory Pit fonctionne.

### Nintendo DSi Bootstage 2
La deuxième phase de démarrage de la Nintendo DSi charge en mémoire le "title.tmd" du menu principal. Cependant, ils ne spécifient pas de vérification de la taille du fichier, ce qui signifie que les 80k premiers octets sont chargés dans la RAM et que le reste peut être un payload personnalisé. C'est la base de l'exploit Unlaunch.
