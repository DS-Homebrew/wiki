---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Informations sur les homebrews de la Nintendo DS
---

### Développement
Le développement d'homebrews pour Nintendo DS utilise généralement les outils devkitPro, tels que devkitARM, libnds et libfat. Toutefois, il est possible de bifurquer et d'utiliser des logiciels alternatifs :

- **Bibliothèques de cartes SD :** [libfat](https://github.com/devkitPro/libfat) est incluse dans libnds et généralement recommandée, [libslim](https://github.com/DS-Homebrew/libslim/) peut parfois mieux fonctionner mais est parfois instable
- **Bibliothèques graphiques :** [easyGL2D](http://rel.phatcode.net/junk.php?id=117), qui est incluse avec libnds, est recommandée, cependant [NightFox Lib](https://github.com/knightfox75/nds_nflib) peut être utilisée à la place
- **Chaînes d'outils entières :** [devkitARM](https://devkitpro.org/wiki/Getting_Started) et [libnds](https://libnds.devkitpro.org/) sont recommandées, car elles incluent la compatibilité DSi et ont un écosystème plus large, cependant [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) est une option pour le développement exclusif aux linkers

Pour commencer, [ce fil GBAtemp](https://gbatemp.net/threads/useful-resources-to-help-you-out-with-starting-to-make-nds-homebrew.580507/#post-9322674) contient beaucoup de bonnes ressources pour les débutants. Pour plus d'informations techniques sur la DS(i), consultez [GBATEK](https://problemkaputt.de/gbatek-contents.htm).

### Linkers
Les linkers en mode DS sont une méthode de type Slot-1 pour exécuter les applications Nintendo DS. Les linkers ont l'avantage de séparer les fichiers de la console et les fichiers portables, de pouvoir être utilisés sans modder votre système et d'être utilisables sur les consoles DS Tank/Lite. Cependant, contrairement au modding de la console elle-même, il existe plusieurs linkers sur le marché, chacun ayant des exigences différentes en matière de kernel. Le kernel que vous utilisez est le plus important.

### DLDI
Les différents emplacements de carte SD ont un matériel différent (la plupart du temps) et le code écrit pour une carte ne fonctionnera pas nécessairement pour une autre carte. Le DLDI (abréviation de Dynamically Linked Device Interface, littéralement « interface de dispositifs liés dynamiquement ») tente de résoudre ce problème en ajoutant un correctif externe au code de gestion de la carte SD. Des lanceurs comme YSMenu, Wood R4 et TWiLight Menu++ peuvent automatiquement patcher un homebrew avec un patch DLDI, mais si vous devez le patcher manuellement, vous pouvez utiliser un [patcheur DLDI](https://www.chishm.com/DLDI#tools) sur un ordinateur.

### Bombe à retardement
Dans certains kernels de linkers, une date d'expiration arbitraire (plus communément appelée « bombe à retardement ») est codée par les développeurs du kernel afin d'inciter les consommateurs à acheter leur dernier produit. La procédure à suivre pour ce faire est la suivante :

1. Le linker est démarré et charge le fichier kernel de la carte SD sans vérifier s'il s'agit du kernel prévu par les développeurs
1. À chaque fois que le fichier kernel de la carte SD est chargé, il vérifie si la date du système a dépassé une certaine date

Si le deuxième test est positif, le kernel refusera de démarrer. Vous pouvez le tester en réglant votre date sur la dernière valeur possible. Toutefois, la sécurité est faible et les résultats ne sont pas mis en cache, ce qui signifie qu'il existe des moyens de contourner le problème :

Si vous souhaitez utiliser le kernel par défaut prévu par les fabricants de linkers, l'horloge système peut être réglée dans l'application des paramètres système de l'appareil. En revanche, gardez à l'esprit que cela peut casser tout jeu qui repose sur l'horloge système (comme *Animal Crossing: Wild World*).

Toutefois, les kernels fournis avec ces cartes sont fondamentalement défectueux et il est préférable de les remplacer purement et simplement. Heureusement, des développeurs tiers ont créé des alternatives que vous pouvez utiliser :

- [YSmenu - menu + lanceur de jeu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) - Bien qu'il n'ait pas l'avantage d'un menu tout-en-un personnalisable, le lanceur de jeu a une bien meilleure compatibilité avec le support des codes de triche Action Replay
- [TWiLight Menu++ avec nds-bootstrap](../twilightmenu/installing-flashcard) - Possède un menu tout-en-un personnalisable et supporte les codes de triche, mais son mode B4DS (le mode utilisé lorsqu'il n'a pas les capacités de la DSi) a une faible compatibilité, certains jeux nécessitant même le Memory Expansion Pak
- [TWiLight Menu avec YSmenu](../twilightmenu/installing-flashcard) - Menu tout-en-un personnalisable avec une grande compatibilité, mais manque de support pour les codes de triche

### Support de l'ARGV
L'ARGV est un transmetteur d'informations entre deux applications homebrews Nintendo DS. Il peut être utilisé pour les forwarders ou les menus alternatifs.

- Les homebrews doivent être programmés pour en tirer parti. Par exemple, GBARunner2, NesDS et GameYob ont tous un support de l'ARGV
- Il faut également prévoir un moyen de définir les variables ARGV. TWiLight Menu++ et HBMenu permettent de définir les arguments ARGV
