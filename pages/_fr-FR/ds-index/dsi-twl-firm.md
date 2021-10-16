---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Informations sur la Nintendo DSi et le TWL_FIRM de la Nintendo 3DS
---

### Configurer le CFW
The main benefit of modding your DSi and 3DS families of systems is that you can unlock more possibilities with your consoles. L'installation d'un Custom Firmware est assez facile, et dans la plupart des cas, tout ce dont vous avez besoin est d'une carte (micro)SD. Voila le meilleur des guides pour vous, avec des instructions pas à pas:

- [Guide de Hacking 3DS](https://3ds.hacks.guide)
   - Commande Lightning : `mod 3ds`
   - Commande TWLHelper : `guide 3ds`
   - Kurisu command: `guide 3ds`
- [Guide de Hacking DSi](https://dsi.cfw.guide)
   - Commande Lightning : `mod dsi`
   - Commande TWLHelper : `guide dsi`
   - Kurisu command: `guide dsi`

### Vitesse du CPU
The Nintendo DS shipped with a 67 MHz processor in 2004, and the Nintendo DSi shipped with a 133 MHz processor five years later. La plupart des jeux sur Nintendo DS ont été faits avant la sortie de la Nintendo DSi et en tant que tel, le seul processeur disponible était celui de 67 MHz. Some applications tied themselves to that clock speed and as a result, they will not work well with a higher clock speed. La plupart des jeux, cependant, vont surpasser leur performance originale avec une vitesse plus élevée.

nds-bootstrap a une option TWL Clock Speed, mais il n'essaiera pas d'ajuster la ROM pour qu'elle fonctionne avec la vitesse d'horloge plus élevée. Cela se produira sur l'application elle-même, et les applications qui ne fonctionnent pas avec une vitesse plus élevée ne sont PAS un bug de nds-bootstrap.

### Menu Nintendo DSi
Dans la version 1.4.0, les signatures RSA dans la liste blanche des Cartouches DS ne sont pas vérifiées. C'est une vulnérabilité qui peut être exploitée et qui vous permet d'accéder au processeur ARM9. Elle nécessite la version 1.4.0 (l'exploit a été corrigé dans les versions futures et n'existait pas dans les versions précédentes) et une flashcard avec une ROM modifiée.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see [hiyaCFW FAQ & Troubleshooting](../hiyacfw/faq#the-free-space-bug).

### Accès Nintendo DSi Slot-1 & blocage
Slot-1 access is blocked when launching applications from the system menu, except if said applications are either the Slot-1 launcher itself or System Settings. Afin de lancer normalement les cartouches slot-1 non lançables, vous devrez soit faire un exploit des paramètres système, soit installer Unlaunch. Sans l'un ou l'autre, vous ne pouvez pas lancer de flashcards non lançables et vous ne pouvez pas dumper de ROMs sur votre carte SD.

Avant la 1.4.0, la liste blanche ne contenait que deux sections. En 1.4.0, une troisième section est introduite. Elle a été faite pour bloquer les flashcards qui ont contourné les deux premières. La troisième section charge jusqu'à huit sections différentes de la rom et les vérifie avec un hachage pour voir si la rom a été altérée. Cependant, en raison de la mauvaise mise en place d'une vérification de bon état, nous pouvons déborder dans l'adresse vector/interrupt de l'exception en utilisant une valeur suffisamment grande. Mieux encore, cela fonctionne sur ARM7 (le processeur de sécurité), ce qui en fait le premier exploit du processeur ARM7. Puisque cela se produit avant le verrouillage des registres SCFG, nous pouvons exécuter des homebrew avancés (comme des dumpers Slot-1).

Malheureusement, les exigences sont strictes. Il nécessite la version 1.4.0 et une flashcard avec une ROM modifiée. Pour cela, l'exploit n'a jamais été officiellement publié, à cause de Unlaunch, qui est beaucoup plus simple à installer et qui a moins de pré-requis (juste un moyen de lancer le homebrew) avec les mêmes avantages.

### Caméra Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG format and save them to either the System Memory or the SD card. La façon dont elle est faite la restreint à des images prises sur DSi en raison de l'absence du propre HMAC stocké dans une balise personnalisée EXIF. Any custom images are not readable on the DSi, whether they're PC taken or PC edited, unless properly saved.

Un fichier `pit.bin` est utilisé pour charger des images. Cependant, la taille de l'en-tête à l'offset 0x16 n'est pas vérifiée, de sorte qu'une taille d'en-tête suffisante peut dépasser les limites et faire en sorte que le tampon soit écrasé et saute au code non signé. C'est ainsi que le Memory Pit fonctionne.

### Nintendo DSi bootstage 2
La deuxième phase de démarrage de la Nintendo DSi charge en mémoire le "title.tmd" du menu principal. Cependant, ils ne spécifient pas de vérification de la taille du fichier, ce qui signifie que les 80k premiers octets sont chargés dans la RAM et que le reste peut être un payload personnalisé. C'est la base de l'exploit Unlaunch.

### RTCom
RTCom est l'utilisation du RTC de la 3DS pour permettre aux processeurs ARM7 et ARM11 de communiquer entre eux, même dans TWL_FIRM. Cela permet d'utiliser des fonctionnalités 3DS en mode DS(i). Cela inclut l'entrée analogique du pad circulaire, l'activation du plein écran et la prise en charge du gyroscope. Actuellement, les seuls homebrew DS public qui utilisent RTCom sont certaines versions de GBARunner2 qui ont le support de la fonctionnalité gyroscope de la 3DS. Pour activer RTCom, vous devrez utiliser [TWPatch](https://gbatemp.net/threads/542694/).
