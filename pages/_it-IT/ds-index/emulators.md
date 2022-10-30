---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Emulatori su DS
description: Un riferimento agli Emulatori su DS
---

Esistono molti emulatori per DS e DSi. Questa pagina fornisce una spiegazione completa sugli emulatori e loaders inclusi in TWiLight Menu++.

### Elenco dei sistemi supportati da TWiLight Menu++

| Formato                 | Loader                                           | Estensioni                             | File di salvataggio                            |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                                |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                                |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                |
| Atari XEGS              | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                                |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]               | `.col`                                 |                                                |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nome rom].sav`[^2]                     |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nome rom].pub`, `saves/[nome rom].prv` |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                               |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                               |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                            |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[nome rom].srm`[^6]                           |
| Intellivision           | [Nintellivision][nintellivision]                 | `.int`                                 |                                                |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[nome rom].sms.sav`                           |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                   | `.ngp`, `.ngc`                         | `/data/ngpds/[nome rom].ngp.fla`               |
| Fast Video              | Coming Soon                                      | `.fv`                                  |                                                |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[nome rom].sav`                               |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                |
| Rocket Video            | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]               | `.sg`                                  |                                                |
| Sord M5                 | [ColecoDS][colecods]                             | `.m5`                                  |                                                |
| SNES                    | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[nome rom].srm`                               |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                           | `.ws`, `.wsc`                          | ???                                            |
| Xvid                    | [tuna-viDS][tunavids]                            | `.avi`                                 |                                                |

- Footnotes -
{:footnotes}

Questi sono solo gli emulatori e i loader consigliati presenti in TWiLight Menu++. Esistono altri emulatori per queste console (come lolSnes, Gbaemu4ds, ecc.)

### Altri emulatori per DS

| Formato | Loader         | Estensione | File di salvataggio |
| ------- | -------------- | ---------- | ------------------- |
| Neo Geo | [neoDS][neods] | `.neo`     | (sconosciuto)       |

## Note su emulatori specifici
### RAM Disk
- Per far sì che **jEnesisDS** o **neoDS** funzionino sulla scheda SD del DSi, è necessario utilizzare un RAM disk con nds-bootstrap
   - In TWiLight Menu++ è integrato un creatore di RAM disk per jEnesisDS. Dovrai essere tu a creare i RAM disk per neoDS. Vedi [Creare RAM Disk](../twilightmenu/creating-ram-disks) per capire come fare
   - La ragione per cui i RAM disk sono utilizzati è perchè gli agganci ARM7 degli emulatori non funzionano correttamente

### Confronto tra PicoDriveTWL e jEnesisDS
- **PicoDriveTWL**
   - È stato sviluppato per DSi
   - Non richiede i RAM Disk di nds-bootstrap
      - È supportato il salvataggio sulla scheda SD del DSi
      - Tempi di caricamento più rapidi tra TWiLight Menu++ e l'emulatore sulla scheda SD del DSi
   - Supporta gli argomenti
   - Il limite è di 2.5 MB su una **Flashcard**
      - Sfrutta la RAM extra del DSi o il DS Memory Pak per aumentare questo limite
   - Nessuna emulazione del suono
   - Il framerate è molto instabile

- **jEnesisDS**
   - Modalità DS
      - Richiede i RAM disk di nds-bootstrap per poter essere usato sulla scheda SD del DSi
      - Non è possibile salvare sulla scheda SD del DSi
   - Un po' lento per caricare
   - Non supporta gli argomenti
   - Il limite è di 3 MB su tutte le piattaforme (questo perchè le rom sono caricate nella RAM)
      - Non supporta il DS Memory Pak o il DSi Extended Memory
      - C'è una patch per Sonic 3 & Knuckles che rimuove il multiplayer, diminuendo le dimensioni
   - Emulazione del suono
   - Il framerate è stabile


<!-- Links for tables -->
[^1]: File di testo che contengono il percorso per un'applicazione homebrew e gli argomenti per lanciarla, vedi [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) per maggiori informazioni
[^2]: Solo per le rom commerciali, i programmi homebrew non hanno file di salvataggio specifici
[^3]: Funziona solo da una flashcard SuperCard DSTWO dato che ha una potenza di elaborazione maggiore e RAM dentro la flashcard
[^4]: Quando si usa la modalità DSi, può usare il DSP per un suono migliore
[^5]: Richiede una flashcart Slot-2, quindi funziona solo su DS Phat e DS Lite
[^6]: jEnesis può salvare solamente quando viene eseguito da una flashcard, ma PicoDriveTWL può farlo sia da SD che da flashcard

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
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
[snemulds]: https://www.gamebrew.org/wiki/SnemulDS_-_Revival
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
