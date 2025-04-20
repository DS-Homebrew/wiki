---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Émulateurs sur la DS
description: Une référence des émulateurs sur la DS
---

Il existe de nombreux émulateurs pour la DS et la DSi. This page provides a comprehensive explanation on the many emulators and loaders bundled into **TW**i**L**ight Menu++.

### Liste des systèmes pris en charge par TWiLight Menu++

| Format                  | Chargeur                                        | Extensions                             | Fichier de sauvegarde                                                                     |
| ----------------------- | ----------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------- |
| ARGV[^1]                | Natif                                           | `.argv`                                |                                                                                           |
| Atari 2600              | [StellaDS][stellads]                            | `.a26`                                 |                                                                                           |
| Atari 5200              | [A5200DS][a5200ds]                              | `.a52`                                 |                                                                                           |
| Atari 7800              | [A7800DS][a7800ds]                              | `.a78`                                 |                                                                                           |
| Atari XEGS              | [A8DS][a8ds]                                    | `.xex`, `.atr`                         |                                                                                           |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]              | `.col`                                 |                                                                                           |
| DS                      | [nds-bootstrap][ndsbs], kernel du linker, natif | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nom de la ROM].sav`[^2]                                                           |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]    | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nom de la rom].pub`, `saves/[nom de la rom].prv`, `saves/[nom de la rom].sav`[^7] |
| Plugin DSTWO            | [DSTWO][dstwo][^3]                              | `.plg`                                 |                                                                                           |
| Game Boy (Color)        | [GameYob][gameyob]                              | `.gb`, `.sgb`, `.gbc`                  | `[nom de la ROM].sav`                                                                     |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], natif[^5]         | `.agb`, `.gba`, `.mb`                  | `[nom de la rom].sav`                                                                     |
| Game Gear               | [S8DS][s8ds]                                    | `.gg`                                  | `[nom de la ROM].gg.sav`                                                                  |
| Mega Drive              | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]     | `.gen`, `.md`                          | `[nom de la rom].srm`[^6]                                                                 |
| Intellivision           | [Nintellivision][nintellivision]                | `.int`                                 |                                                                                           |
| Master System           | [S8DS][s8ds]                                    | `.sms`                                 | `[nom de la ROM].sms.sav`                                                                 |
| MSX                     | [ColecoDS][colecods]                            | `.msx`                                 | ???                                                                                       |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                  | `.ngp`, `.ngc`                         | `/data/ngpds/[nom de la ROM].ngp.fla`                                                     |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]          | `.fv`                                  |                                                                                           |
| NES/Famicom             | [nesDS][nesds]                                  | `.nes`, `.fds`                         | `[nom de la ROM].sav`                                                                     |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                        | `.pce`                                 |                                                                                           |
| Rocket Video            | [Rocket Video Player][rvidplayer]               | `.rvid`                                |                                                                                           |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]              | `.sg`                                  |                                                                                           |
| Sord M5                 | [ColecoDS][colecods]                            | `.m5`                                  |                                                                                           |
| SNES                    | [SNEmulDS][snemulds]                            | `.smc`, `.sfc`                         | `[rom name].srm`[^8]                                                                      |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                          | `.ws`, `.wsc`                          | ???                                                                                       |
| Xvid                    | [tuna-viDS][tunavids]                           | `.avi`                                 |                                                                                           |

Ce ne sont que des émulateurs et chargeurs recommandés qui sont présents dans TWiLight Menu++. Il existe d'autres émulateurs pour ces consoles (comme lolSnes, gbaemu4DS, etc.)

### Autres émulateurs pour la DS

| Format  | Chargeur       | Extensions | Fichier de sauvegarde |
| ------- | -------------- | ---------- | --------------------- |
| Neo Geo | [neoDS][neods] | `.neo`     | (inconnu)             |

### BIOS usage

| Format              | Chargeur                             | Path             | Required  |
| ------------------- | ------------------------------------ | ---------------- | --------- |
| Game Boy (Color)    | [GameYob][gameyob][^9]               | User-set         | Non       |
| Game Boy Advance    | [GBARunner2][gbarunner2], native[^5] | `/_gba/bios.bin` | See [^10] |
| Famicom Disk System | [nesDS][nesds]                       | `/disksys.rom`   | Oui       |

- Notes de pied de page -
{:footnotes}

## Notes sur les émulateurs spécifiques

### Disques RAM
- In order for **jEnesisDS**, **SNEmulDS** (legacy version), or **neoDS** to work on the DSi SD card, you'll have to use a RAM disk with nds-bootstrap
    - A RAM disk maker for jEnesisDS and SNEmulDS (legacy version) is built into nds-bootstrap. Vous devrez créer votre propre disque RAM pour neoDS. Consultez [Création de disques RAM](../twilightmenu/creating-ram-disks) pour savoir comment procéder
    - La raison pour laquelle les disques RAM sont utilisés est que les hooks ARM7 de ces émulateurs ne fonctionnent pas correctement

### Comparaison entre PicoDriveTWL et jEnesisDS
- **PicoDriveTWL**
    - A été conçu pour la DSi
    - Ne nécessite pas de disques RAM de nds-bootstrap
        - La sauvegarde est prise en charge sur les cartes SD de la DSi
        - Temps de chargement plus rapide entre TWiLight Menu++ et l'émulateur sur la carte SD de la DSi
    - Supporte les arguments
    - La limite est de 3 Mo sur un **linker**
        - Takes advantage of the DSi extra RAM or DS Memory Expansion Pak to extend this limit
    - Pas d'émulation du son
    - La fréquence d'images est extrêmement irrégulière

- **jEnesisDS**
    - Mode DS
        - Requiert l'utilisation d'un disque RAM de nds-bootstrap pour les cartes SD de DSi
        - La sauvegarde n'est pas disponible pour les cartes SD de DSi
    - Le chargement prend un certain temps
    - Ne supporte pas les arguments
    - La limite est de 3 Mo sur toutes les plates-formes (en raison du chargement des ROMs dans la RAM)
        - No DS Memory Expansion Pak or DSi Extended Memory support
        - There is a patch for *Sonic 3 & Knuckles* that removes the multiplayer, getting the size count down
    - Émulation du son
    - La fréquence d'images est régulière


<!-- Links for tables -->
[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^7]: Uniquement en mode B4DS
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the flashcard
[^4]: Lorsqu'il fonctionne en mode DSi, il peut utiliser le DSP pour un meilleur son
[^5]: Requires a Slot-2 flashcart and thus only works on DS Phat and DS Lite
[^6]: jEnesis ne peut sauvegarder que lorsqu'il fonctionne à partir d'un linker, mais PicoDriveTWL peut sauvegarder à partir d'une SD et d'un linker
[^8]: Saving requires a flashcard or a new version of the emulator (legacy version is used by default)
[^9]: Has a bug where the BIOS screen is not shown when starting a game via arguments
[^10]: Not required for native, required for a few games with GBARunner2, required for all games with GBARunner3

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[a8ds]: https://github.com/wavemotion-dave/A8DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
[fastvideodsplayer]: https://github.com/Gericom/FastVideoDSPlayer
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[ngpds]: https://github.com/FluBBaOfWard/NGPDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[nitroswan]: https://github.com/FluBBaOfWard/NitroSwan
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://github.com/FluBBaOfWard/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
