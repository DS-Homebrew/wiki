---
lang: de-DE
layout: wiki
section: ds-index
category: reference
title: Emulatoren für den DS
description: Eine Referenz zu Emulatoren auf dem DS
---

Es gibt viele Emulatoren für den DS und DSi. Diese Seite bietet eine umfassende Erklärung zu den vielen Emulatoren und Ladern, die in **TW**i**L**ight Menu++ gebündelt sind.

### Liste der von TWiLight Menu++ unterstützten Systeme

| Format                  | Loader                                          | Erweiterungen                          | Save file                                                                  |
| ----------------------- | ----------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| ARGV[^1]                | Nativ                                           | `.argv`                                |                                                                            |
| Atari 2600              | [StellaDS][stellads]                            | `.a26`                                 |                                                                            |
| Atari 5200              | [A5200DS][a5200ds]                              | `.a52`                                 |                                                                            |
| Atari 7800              | [A7800DS][a7800ds]                              | `.a78`                                 |                                                                            |
| Atari XEGS              | [A8DS][a8ds]                                    | `.xex`, `.atr`                         |                                                                            |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]              | `.col`                                 |                                                                            |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, nativ | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]                                                 |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]    | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].pub`, `saves/[rom name].prv`, `saves/[rom name].sav`[^7] |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                              | `.plg`                                 |                                                                            |
| Game Boy (Color)        | [GameYob][gameyob]                              | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                                                           |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], native[^5]        | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                                                           |
| Game Gear               | [S8DS][s8ds]                                    | `.gg`                                  | `[rom name].gg.sav`                                                        |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]     | `.gen`, `.md`                          | `[rom name].srm`[^6]                                                       |
| Intellivision           | [Nintellivision][nintellivision]                | `.int`                                 |                                                                            |
| Master System           | [S8DS][s8ds]                                    | `.sms`                                 | `[rom name].sms.sav`                                                       |
| MSX                     | [ColecoDS][colecods]                            | `.msx`                                 | ???                                                                        |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                  | `.ngp`, `.ngc`                         | `/data/ngpds/[rom name].ngp.fla`                                           |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]          | `.fv`                                  |                                                                            |
| NES/Famicom             | [nesDS][nesds]                                  | `.nes`, `.fds`                         | `[rom name].sav`                                                           |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                        | `.pce`                                 |                                                                            |
| Rocket Video            | [Rocket Video Player][rvidplayer]               | `.rvid`                                |                                                                            |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]              | `.sg`                                  |                                                                            |
| Sord M5                 | [ColecoDS][colecods]                            | `.m5`                                  |                                                                            |
| SNES                    | [SNEmulDS][snemulds]                            | `.smc`, `.sfc`                         | `[rom name].srm`[^8]                                                       |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                          | `.ws`, `.wsc`                          | ???                                                                        |
| Xvid                    | [tuna-viDS][tunavids]                           | `.avi`                                 |                                                                            |

Dies sind nur die empfohlenen Emulatoren und Lader, die in TWiLight Menu++ vorhanden sind. Es gibt andere Emulatoren für diese Konsolen (wie LolSnes, Gbaemu4ds, etc.)

### Andere Emulatoren für den DS

| Format  | Loader         | Erweiterungen | Save file   |
| ------- | -------------- | ------------- | ----------- |
| Neo Geo | [neoDS][neods] | `.neo`        | (unbekannt) |

### BIOS usage

| Format              | Loader                               | Path             | Required  |
| ------------------- | ------------------------------------ | ---------------- | --------- |
| Game Boy (Color)    | [GameYob][gameyob][^9]               | User-set         | Nein      |
| Game Boy Advance    | [GBARunner2][gbarunner2], native[^5] | `/_gba/bios.bin` | See [^10] |
| Famicom Disk System | [nesDS][nesds]                       | `/disksys.rom`   | Ja        |

- Fußnoten -
{:footnotes}

## Hinweise zu bestimmten Emulatoren

### RAM-Disks
- In order for **jEnesisDS**, **SNEmulDS** (legacy version), or **neoDS** to work on the DSi SD card, you'll have to use a RAM disk with nds-bootstrap
    - A RAM disk maker for jEnesisDS and SNEmulDS (legacy version) is built into nds-bootstrap. Sie müssen Ihre eigene RAM-Festplatte für neoDS erstellen. Siehe [Erstellen von RAM-Festplatten](../twilightmenu/creating-ram-disks) wie man dies tut
    - Der Grund, warum RAM-Festplatten verwendet werden, liegt darin, dass die ARM7-Hooks dieser Emulatoren nicht richtig funktionieren

### Vergleich zwischen PicoDriveTWL und jEnesisDS
- **PicoDriveTWL**
    - Wurde für DSi gemacht
    - Benötigt keine nds-bootstrap RAM-Festplatten
        - Speichern wird auf DSi SD-Karten unterstützt
        - Schnellere Ladezeiten zwischen TWiLight Menu++ und Emulator auf der DSi SD-Karte
    - Unterstützt Argumente
    - Limit ist 3 MB auf eine **Flashcard**
        - Takes advantage of the DSi extra RAM or DS Memory Expansion Pak to extend this limit
    - Keine Sound-Emulation
    - Die Framerate ist extrem abgehackt

- **jEnesisDS**
    - DS-Modus
        - Erfordert, dass die RAM-Disk von nds-bootstrap für DSi SD-Karten verwendet wird
        - Speichern ist für DSi SD-Karten nicht möglich
    - Das Laden dauert eine Weile
    - Keine Unterstützung durch Argumente
    - Die Grenze liegt bei 3 MB auf allen Plattformen (aufgrund des Ladens von Roms im RAM)
        - No DS Memory Expansion Pak or DSi Extended Memory support
        - There is a patch for *Sonic 3 & Knuckles* that removes the multiplayer, getting the size count down
    - Sound-Emulation
    - Die Framerate ist gleichmäßig


<!-- Links for tables -->
[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^7]: Nur wenn im B4DS Modusausgeführt wird
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the flashcard
[^4]: Wenn er im DSi Modus läuft, kann er den DSP für besseren Soundverwenden
[^5]: Requires a Slot-2 flashcart and thus only works on DS Phat and DS Lite
[^6]: jEnesis kann nur speichern, wenn von einer Flashcard ausgeführt wird, aber PicoDriveTWL kann von SD und Flashcardspeichern
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
