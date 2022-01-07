---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / TWL_FIRM de Nintendo 3DS
description: Informations sur la Nintendo DSi et le TWL_FIRM de la Nintendo 3DS
---

### Configurer le CFW
Le principal avantage du modding des systèmes des familles DSi et 3DS est que vous pouvez débloquer davantage de possibilités avec vos consoles. L'installation d'un firmware personnalisé est assez facile et, dans la plupart des cas, tout ce dont vous avez besoin est d'une carte (micro)SD. Voici le meilleur des guides que vous pouvez suivre, avec des instructions étape par étape :

- [Guide de hacking 3DS](https://3ds.hacks.guide)
   - Commande de Lightning : `mod 3ds`
   - Commande de TWLHelper : `guide 3ds`
   - Commande de Kuriisu : `guide 3ds`
- [Guide de hacking DSi](https://dsi.cfw.guide)
   - Commande de Lightning : `mod dsi`
   - Commande de TWLHelper : `guide dsi`
   - Commande de Kuriisu : `guide dsi`

### Vitesses du CPU
La Nintendo DS a été dotée d'un processeur de 67 MHz en 2004, et la Nintendo DSi d'un processeur de 133 MHz cinq ans plus tard. La plupart des jeux de la bibliothèque Nintendo DS ont été réalisés avant la sortie de la Nintendo DSi, et à ce titre, le seul processeur dont ils disposaient était de 67 MHz. Certaines applications se sont liées à cette vitesse d'horloge et, par conséquent, elles ne fonctionneront pas bien avec une vitesse d'horloge plus élevée. La plupart des jeux, cependant, sont plus performants que l'originale avec une vitesse d'horloge plus élevée.

nds-bootstrap a une option de vitesse d'horloge TWL, mais il n'essaiera pas d'ajuster la ROM pour qu'elle fonctionne correctement avec une vitesse d'horloge plus élevée. Cela dépend de l'application elle-même, et les applications qui ne fonctionnent pas avec une vitesse d'horloge plus élevée ne sont PAS un bug du côté de nds-bootstrap.

### Menu Nintendo DSi
Dans la version 1.4.0, les signatures RSA de la liste blanche des cartes de jeu DS ne sont pas vérifiées. Il s'agit d'une vulnérabilité qui peut être exploitée et qui permet de prendre le contrôle du processeur ARM9. Elle nécessite la version 1.4.0 (elle a été corrigée dans les versions ultérieures et n'existait pas dans les versions précédentes) et un linker avec une ROM modifiée.

Il y a également un glitch connu dans la façon dont le menu Nintendo DSi calcule l'espace libre qui peut causer une erreur lors de l'utilisation du menu ne provenant pas de la NAND originale, pour plus d'informations consultez [FAQ et dépannage de hiyaCFW](../hiyacfw/faq#le-bug-de-lespace-libre).

### Accès au Slot-1 Nintendo DSi et blocage
L'accès au Slot-1 est bloqué lors du lancement d'applications à partir du menu système, sauf si ces applications sont le lanceur Slot-1 lui-même ou les paramètres système. Afin de lancer normalement les cartouches Slot-1 non lançables, vous devrez soit faire un exploit des paramètres système, soit installer Unlaunch. Sans l'un ou l'autre, vous ne pouvez pas lancer de linkers non lançables et vous ne pouvez pas dumper de ROMs sur votre carte SD.

Avant la version 1.4.0, la liste blanche ne contenait que deux sections. Dans la version 1.4.0, elles ont introduit une troisième section, qui a été faite pour bloquer les linkers qui contournent les deux premières. La troisième section charge jusqu'à huit sections différentes de la ROM et les vérifie avec un hachage pour voir si la ROM a été altérée. Cependant, en raison de l'absence de tout contrôle d'intégrité, il est possible de déborder dans l'adresse du vecteur d'exception/interruption en utilisant une valeur suffisamment grande. Mieux encore, cela fonctionne sur ARM7 (le processeur de sécurité), ce qui en fait le premier exploit du processeur ARM7. Puisque cela se produit avant le verrouillage des registres SCFG, nous pouvons exécuter des homebrew avancés (comme des dumpers Slot-1).

Malheureusement, les exigences sont strictes. Il nécessite la version 1.4.0 et une flashcard avec une ROM modifiée. Pour cela, l'exploit n'a jamais été officiellement publié, à cause de Unlaunch, qui est beaucoup plus simple à installer et qui a moins de pré-requis (juste un moyen de lancer le homebrew) avec les mêmes avantages.

### Caméra Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG format and save them to either the System Memory or the SD card. La façon dont elle est faite la restreint à des images prises sur DSi en raison de l'absence du propre HMAC stocké dans une balise personnalisée EXIF. Any custom images are not readable on the DSi, whether they're PC taken or PC edited, unless properly saved.

Un fichier `pit.bin` est utilisé pour charger des images. Cependant, la taille de l'en-tête à l'offset 0x16 n'est pas vérifiée, de sorte qu'une taille d'en-tête suffisante peut dépasser les limites et faire en sorte que le tampon soit écrasé et saute au code non signé. C'est ainsi que le Memory Pit fonctionne.

### Nintendo DSi bootstage 2
La deuxième phase de démarrage de la Nintendo DSi charge en mémoire le "title.tmd" du menu principal. Cependant, ils ne spécifient pas de vérification de la taille du fichier, ce qui signifie que les 80k premiers octets sont chargés dans la RAM et que le reste peut être un payload personnalisé. C'est la base de l'exploit Unlaunch.

### RTCom
RTCom est l'utilisation du RTC de la 3DS pour permettre aux processeurs ARM7 et ARM11 de communiquer entre eux, même dans TWL_FIRM. Cela permet d'utiliser des fonctionnalités 3DS en mode DS(i). Cela inclut l'entrée analogique du pad circulaire, l'activation du plein écran et la prise en charge du gyroscope. Actuellement, les seuls homebrew DS public qui utilisent RTCom sont certaines versions de GBARunner2 qui ont le support de la fonctionnalité gyroscope de la 3DS. Pour activer RTCom, vous devrez utiliser [TWPatch](https://gbatemp.net/threads/542694/).
