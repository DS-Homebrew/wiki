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

Avant la version 1.4.0, la liste blanche ne contenait que deux sections. Dans la version 1.4.0, elles ont introduit une troisième section, qui a été faite pour bloquer les linkers qui contournent les deux premières. La troisième section charge jusqu'à huit sections différentes de la ROM et les vérifie avec un hachage pour voir si la ROM a été altérée. Cependant, en raison de l'absence de tout contrôle d'intégrité, il est possible de déborder dans l'adresse du vecteur d'exception/interruption en utilisant une valeur suffisamment grande. Mieux encore, cela fonctionne sur ARM7 (le processeur de sécurité), ce qui en fait le premier exploit pour le processeur ARM7. Puisque cela se produit avant le verrouillage des registres SCFG, les homebrews avancés (comme les dumpers Slot-1) peuvent être lancés.

Malheureusement, les exigences sont strictes. Cela nécessite la version 1.4.0 et un linker avec une ROM modifiée. L'exploit n'est jamais sorti officiellement, car Unlaunch était beaucoup plus simple à installer et avait moins d'exigences (juste un moyen d'accéder à un homebrew) pour les mêmes avantages.

### Appareil photo Nintendo DSi
L’appareil photo Nintendo DSi a la possibilité de prendre des photos dans le format JPEG et de les enregistrer soit sur la mémoire système, soit sur la carte SD. La façon dont il est chargé le limite aux seules images DSi, en raison de l'absence du HMAC approprié stocké dans une balise EXIF personnalisée. Toutes les images personnalisées ne sont pas lisibles sur la DSi, qu'elles aient été prises par un PC ou éditées par un PC, à moins qu'elles ne soient correctement enregistrées.

Un fichier `pit.bin` est utilisé afin de charger les images. Cependant, la taille de l'en-tête à l'offset 0x16 n'est pas vérifiée, de sorte qu'une valeur de taille d'en-tête suffisamment grande peut dépasser les limites et provoquer l'écrasement du tampon et aller vers un code non signé. C'est ainsi que Memory Pit fonctionne.

### Deuxième phase de démarrage Nintendo DSi
La deuxième phase de démarrage de la Nintendo DSi charge le « title.tmd » du lanceur en mémoire. Cependant, aucun contrôle de la taille limite des fichiers n'est spécifié, ce qui signifie que les 80 000 premiers octets sont chargés dans la RAM, le reste pouvant être une charge utile personnalisée. C'est la base de l'exploit Unlaunch.

### RTCom
RTCom est l'utilisation de l'horloge temps réel de la 3DS pour permettre aux processeurs ARM7 et ARM11 de communiquer entre eux, même dans TWL_FIRM. Cela permet d'utiliser des fonctionnalités 3DS en mode DS(i). Il s'agit notamment de l'entrée analogique du pad circulaire, de l'activation du plein écran et de la prise en charge du gyroscope. Actuellement, les seuls homebrews DS publics qui utilisent RTCom sont certaines versions de GBARunner2 qui prennent en charge la fonction gyroscopique de la 3DS. Pour activer RTCom, vous devrez utiliser [TWPatch](https://gbatemp.net/threads/542694/).
