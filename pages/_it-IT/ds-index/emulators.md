---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Emulatori su DS
description: Un riferimento agli Emulatori su DS
---

Esistono molti emulatori per DS e DSi. This page provides a comprehensive explanation on the many emulators and loaders bundled into **TW**i**L**ight Menu++.

### Elenco dei sistemi supportati da TWiLight Menu++

| Formato                 | Loader                                           | Estensioni                             | File di salvataggio                                                         |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | --------------------------------------------------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                                                             |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                                                             |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                                             |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                                             |
| Atari XEGS              | [A8DS][a8ds]                                     | `.xex`, `.atr`                         |                                                                             |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]               | `.col`                                 |                                                                             |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, nativo | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nome rom].sav`[^2]                                                  |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nome rome].pub`, `saves/[nome rom].prv`, `saves/[nome rom].sav`[^7] |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                                             |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                                                            |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], nativo[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                                                            |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                                                         |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`, `.md`                          | `[nome rom].srm`[^6]                                                        |
| Intellivision           | [Nintellivision][nintellivision]                 | `.int`                                 |                                                                             |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[nome rom].sms.sav`                                                        |
| MSX                     | [ColecoDS][colecods]                             | `.msx`                                 | ???                                                                         |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                   | `.ngp`, `.ngc`                         | `/data/ngpds/[nome rom].ngp.fla`                                            |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]           | `.fv`                                  |                                                                             |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[nome rom].sav`                                                            |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                                             |
| Rocket Video            | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                                             |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]               | `.sg`                                  |                                                                             |
| Sord M5                 | [ColecoDS][colecods]                             | `.m5`                                  |                                                                             |
| SNES                    | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]                                                        |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                           | `.ws`, `.wsc`                          | ???                                                                         |
| Xvid                    | [tuna-viDS][tunavids]                            | `.avi`                                 |                                                                             |

Questi sono solo gli emulatori e i loader consigliati presenti in TWiLight Menu++. Esistono altri emulatori per queste console (come lolSnes, Gbaemu4ds, ecc.)

### Altri emulatori per DS

| Formato | Loader         | Estensione | File di salvataggio |
| ------- | -------------- | ---------- | ------------------- |
| Neo Geo | [neoDS][neods] | `.neo`     | (sconosciuto)       |

### BIOS usage

| Formato             | Loader                               | Path             | Required  |
| ------------------- | ------------------------------------ | ---------------- | --------- |
| Game Boy (Color)    | [GameYob][gameyob][^9]               | User-set         | No        |
| Game Boy Advance    | [GBARunner2][gbarunner2], native[^5] | `/_gba/bios.bin` | See [^10] |
| Famicom Disk System | [nesDS][nesds]                       | `/disksys.rom`   | Yes       |

- Footnotes -
{:footnotes}

## Note su emulatori specifici

### RAM Disk
- In order for **jEnesisDS**, **SNEmulDS** (legacy version), or **neoDS** to work on the DSi SD card, you'll have to use a RAM disk with nds-bootstrap
    - A RAM disk maker for jEnesisDS and SNEmulDS (legacy version) is built into nds-bootstrap. Dovrai essere tu a creare i RAM disk per neoDS. Vedi [Creare RAM Disk](../twilightmenu/creating-ram-disks) per capire come fare
    - La ragione per cui i RAM disk sono utilizzati è perchè gli agganci ARM7 degli emulatori non funzionano correttamente

### Confronto tra PicoDriveTWL e jEnesisDS
- **PicoDriveTWL**
    - È stato sviluppato per DSi
    - Non richiede i RAM Disk di nds-bootstrap
        - È supportato il salvataggio sulla scheda SD del DSi
        - Tempi di caricamento più rapidi tra TWiLight Menu++ e l'emulatore sulla scheda SD del DSi
    - Supporta gli argomenti
    - Il limite è di 3 MB su una **Flashcard**
        - Takes advantage of the DSi extra RAM or DS Memory Expansion Pak to extend this limit
    - Nessuna emulazione del suono
    - Il framerate è molto instabile

- **jEnesisDS**
    - Modalità DS
        - Richiede i RAM disk di nds-bootstrap per poter essere usato sulla scheda SD del DSi
        - Non è possibile salvare sulla scheda SD del DSi
    - Un po' lento per caricare
    - Non supporta gli argomenti
    - Il limite è di 3 MB su tutte le piattaforme (questo perchè le rom sono caricate nella RAM)
        - No DS Memory Expansion Pak or DSi Extended Memory support
        - There is a patch for *Sonic 3 & Knuckles* that removes the multiplayer, getting the size count down
    - Emulazione del suono
    - Il framerate è stabile


<!-- Links for tables -->
[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^7]: Solo quando si esegue in modalità B4DS
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the flashcard
[^4]: Quando viene eseguito in modalità DSi, può utilizzare il DSP per un suono migliore
[^5]: Requires a Slot-2 flashcart and thus only works on DS Phat and DS Lite
[^6]: jEnesis può salvare solo quando viene eseguito da una flashcard, ma PicoDriveTWL può salvare da SD e flashcard
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
