---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Informations sur les homebrews de la Nintendo DS
---

### Développement

Le développement de homebrew pour Nintendo DS utilise les outils de devkitPro, comme devkitARM, libnds, et libfat. Cependant, il y a toujours la possiblité d'utiliser des logiciels alternatifs:

- **Bibliothèques pour gérer la carte SD :** DevkitPro recommande libfat. Nous recommandons d'utiliser libslim à la place, car il permet l'utilisation de différentes partitions, est plus rapide, et ne se bloque pas
- **Librairie Graphique :** Nous recommandons d'utiliser easyGL2D, qui est installé avec libnds. Cependant, vous pouvez utiliser la librairie NightFox
- **Toolchains entières :** Nous recommandons d'utiliser devkitARM et libnds, car elle est compatible avec la DSi et a un écosystème plus grand. Cependant, si vous ciblez exclusivement des flashcards sur une Nintendo DS, vous pouvez utiliser ToolchainGenericDS

### Flashcards

Les flashcards DS sont une méthode slot-1 pour exécuter des applications Nintendo DS. Les Flashcards ont l'avantage de garder séparés les fichiers de la console et les fichiers portables, ainsi que la possibilité d'être utilisé sans modifier votre système et d'être utilisables sur les consoles DS Phat/Lite. Cependant, contrairement au modding sur la console, il y a plusieurs flashcards sur le marché, chacune avec des exigences différentes sur le noyau. Le noyau que vous utilisez est le plus important.

[Il y a un index des flashcards **en cours d'écriture**](https://nightyoshi370.github.io/mm-github-pages-starter/), qui contient des noyaux, des firmwares, des avis et des liens d'achat.

### DLDI

Différents emplacements de carte SD utilisent un matériel différent (la plupart du temps) et le code écrit pour une carte ne fonctionnera pas nécessairement pour une autre carte. Le DLDI (abréviation de Dynamically Linked Device Interface, en français Interface de Périphérique Liée Dynamiquement) tente de résoudre ce problème en faisant un patch du code de gestion de la carte SD. Des chargeurs comme YSMenu, Wood R4 et TWiLight Menu++ peuvent automatiquement appliquer un patch DLDI sur un homebrew, mais si vous avez besoin de le corriger manuellement, n'hésitez pas à utiliser un [patcheur DLDI](https://www.chishm.com/DLDI#tools) selon votre appareil.

### Time bomb

Une Time Bomb est une date d'expiration sur les noyaux de flashcard que les fabricants utilisent pour forcer les utilisateurs à acheter une nouvelle carte. Une fois que l'horloge de votre système aura dépassé une certaine date, le noyau refusera de démarrer. Heureusement, dépasser cette date ne modifie pas le firmware de la flashcard, ce qui nous donne deux options pour le contourner :

- Comme il dépend de l'horloge du système, vous pouvez changer la date pour revenir en arrière. Cela va entrainer des dysfonctionnements dans les jeux qui utilisent votre horloge système, mais cela vous permettra d'utiliser le noyau par défaut.
- Puisqu'il dépend du noyau et non du firmware, vous pouvez passer à un noyau alternatif. Il y a deux options disponibles :
  - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- Le menu est assez moche et n'affiche que des fichiers `.nds` , mais il a une bien meilleure prise en charge des jeux, le support des cheats et aucune exigence de pack de mémoire
  - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) -- Ceci est utile si vous souhaitez avoir toutes vos ROMs de différentes consoles dans le même menu, Il y a deux façons de faire tourner des jeux DS avec TWiLight Menu++:
    - Avec B4DS: Nécessite un Pack d'extension de mémoire pour une compatibilité de jeu étendue et ne prend pas en charge les cheats. Mais il fonctionne sur toutes les flashcards où TWiLight Menu++ fonctionne
    - Avec YSMenu: Obtient les avantages de compatibilité de YSMenu avec le meilleur menu de TWiLight Menu++, cependant, les cheats ne sont pas prises en charge actuellement

Nous vous recommandons YSMenu, avec TWiLight Menu++ si vous le préférez, en raison de la plus grande compatibilité, et d'aucun besoin pour un pack d'extension de mémoire. Si vous voulez installer YSMenu, DeadSkullzJr a fait un [dépôt Dropbox](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) avec tous les noyaux de démarrage principaux configurés pour votre flashcard. Tout ce que vous devez faire est un glisser-déposer vers la racine de votre carte SD et vous avez terminé. Les instructions pour installer TWiLight Menu++ sont [sur la page d'installation de la flashcard](../twilightmenu/installing-flashcard).

Afin de vérifier si votre flashcard possède une Time Bomb, réglez votre système sur la plus récent date possible et lancez la flashcard.

### Support ARGV
ARGV est un émetteur d'information entre deux applications Nintendo DS homebrew. Il peut être utilisé pour les forwarders ou les menus alternatifs.

- Les homebrew doivent être programmés pour en tirer profit. Par exemple, GBARunner2, NesDS et GameYob ont tous une implémentation ARGV
- Il y a aussi besoin d'un moyen de définition des variables ARGV. TWiLight Menu++ et HBMenu permettent de définir les arguments ARGV
