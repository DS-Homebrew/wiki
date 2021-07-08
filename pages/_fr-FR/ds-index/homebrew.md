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

- **Bibliothèques de carte SD :** [DevkitPro](https://devkitpro.org/) recommande [libfat](https://github.com/devkitPro/libfat). Nous recommandons d'utiliser [libslim](https://github.com/DS-Homebrew/libslim/) à la place, car il permet l'utilisation de différentes partitions, des vitesses plus rapides et non bloquantes
- **Bibliothèques graphiques :** Nous recommandons d'utiliser [easyGL2D](http://rel.phatcode.net/junk.php?id=117), qui est livré avec libnds. Cependant, vous pouvez utiliser [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Chaînes de compilation entières :** Nous recommandons d'utiliser [devkitARM](https://devkitpro.org/wiki/Getting_Started) et [libnds](https://libnds.devkitpro.org/), car elle inclut la compatibilité DSi et a un écosystème plus grand. Cependant, si votre cible est exclusivement des linkers sur une Nintendo DS, n'hésitez pas à utiliser [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Linkers

Les linkers DS sont une méthode slot-1 pour exécuter des applications Nintendo DS. Les linkers ont l'avantage de garder séparés les fichiers de la console et les fichiers portables, ainsi que la possibilité d'être utilisé sans modifier votre système et d'être utilisables sur les consoles DS Phat/Lite. Cependant, contrairement au modding sur la console, il y a plusieurs linkers sur le marché, chacune avec des exigences différentes sur le logiciel. Le logiciel que vous utilisez est le plus important.

[Il y a un index des flashcards **en cours d'écriture**](https://nightyoshi370.github.io/mm-github-pages-starter/), qui contient des logiciels, des avis et des liens d'achat.

### DLDI

Différents emplacements de carte SD utilisent un matériel différent (la plupart du temps) et le code écrit pour une carte ne fonctionnera pas nécessairement pour une autre carte. Le DLDI (abréviation de Dynamically Linked Device Interface, en français Interface de Périphérique Liée Dynamiquement) tente de résoudre ce problème en faisant un patch du code de gestion de la carte SD. Des chargeurs comme YSMenu, Wood R4 et TWiLight Menu++ peuvent automatiquement appliquer un patch DLDI sur un homebrew, mais si vous avez besoin de le corriger manuellement, n'hésitez pas à utiliser un [patcheur DLDI](https://www.chishm.com/DLDI#tools) selon votre appareil.

### Time bomb

In some flashcard kernels, an arbitrary expiration date (more commonly known as a time bomb) is coded in by the kernel developers as a way to get consumers to buy their latest product. The procedure for how this works is the following:

1. The flashcard is booted into and loads up the kernel file from the SD card without checking if it's the kernel intended by the developers
1. Each time the kernel file from the SD card is loaded, it checks if the system date is past a certain date

If the second test comes out positive, the kernel will refuse to boot. This can be tested by setting your date to the latest value possible. However, the security is weak and the results aren't cached, meaning that there are ways to work around it:

If you want to use the default kernel that the flashcard manufacturers intended, the system clock can be set back in the device's System Settings application. Keep in mind, though, that this may break any game that relies on the system clock (such as Animal Crossing: Wild World).

However, the kernels that come with these cards are fundamentally flawed and it is preferable to outright replace them. Thankfully, 3rd party developers have made alternatives you can use:

- [YSmenu - menu + game loader](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Although it does not have the advantage of a customizable all-in-one menu, the game loader has far better compatibility with support for action-replay cheats
- [TWiLight Menu++ with nds-bootstrap](/twilightmenu/installing-flashcard) - Has a customizable all-in-one menu and supports cheats, but its B4DS mode (the mode used when it doesn't have the DSi's capabilities) has weak compatibility, some games even requiring the Memory Expansion Pak
- [TWiLight Menu++ with YSmenu](/twilightmenu/installing-flashcard) - Customizable all-in-one menu with high compatibility, but lacks cheat support

### Support ARGV
ARGV is an information transmitter between two homebrew Nintendo DS applications. It can be used for forwarders or alternative menus.

- Les homebrew doivent être programmés pour en tirer profit. Par exemple, GBARunner2, NesDS et GameYob ont tous une implémentation ARGV
- Il y a aussi besoin d'un moyen de définition des variables ARGV. TWiLight Menu++ et HBMenu permettent de définir les arguments ARGV
