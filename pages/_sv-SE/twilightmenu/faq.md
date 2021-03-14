---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: FAQ & Felsökning
description: Vanliga frågor och felsökning för TWiLight Menu++
---

För fler FAQs, besök [GBAtemp tråden](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### F: Varför fastnar min 3DS / 2DS på svarta skärmar, kraschar, stängs av osv. när TWiLight Menu++ startas upp?
S: TWL_FIRM kan på något sätt bli skadad. Följ denna guide för att åtgärda problemet: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### F: Jag får en vit skärm medan jag startar upp TWiLight Menu++. Hur fixar jag det?
- Försök först att sätta konsolen i viloläge (t.ex. stänga konsolens lock, eller trycka på sovknappen på O2DS), sedan väcker du upp konsolen
- If that doesn't work, format your SD card to FAT32 with 32 KB cluster/allocation size
- Om det inte heller fungerar, prova ett annat SD-kort

#### TWiLight Menu++ startas om eller ger ett Guru Meditation Error när jag startar ett spel. Hur fixar jag detta?
S: Gå in i TWLMenu++'s inställningar, och inaktivera `Uppdatera 'nyligen spelat' listan`.

#### Why do I get a white screen when trying to load a game from SD card?
- Kontrollera först [kompatibilitetslistan nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) och se till att ditt spel är kompatibelt
- Prova med alla fusk inaktiverade för det spelet eftersom vissa fusk inte är kompatibla med nds-bootstrap just nu, du kan använda <kbd class="l">L</kbd> för att inaktivera alla fusk för ett spel
- Om spelet du försöker starta är ett DSi Enhanced spel, se då till att TWiLight Menu++ är inställd till att använda `DS Mode`
- Om det fungerade tidigare tar du bort `fatTable` och `patchOffsetCache` i `sd:/_nds/nds-bootstrap/`

#### F: Hur använder jag fusk?
S: Du måste ha en fusk DB i form av en `usrcheat.dat` fil i mappen `sd:/_nds/TWiLightMenu/extras/`. Den mest uppdaterade fuskdatabasen är [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Alternativt kan du använda [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) för att skapa din egna fusk DB.

#### F: Hur visar jag en anpassad bild på den översta skärmen i DSi temat?
En slumpmässig `.png` bild i `sd:/_nds/TWiLightMenu/dsimenu/photos/` visas varje gång menyn laddas.

- Bilderna får inte vara större än 208x156
- Om du har fel är det sannolikt ett fel med bildstorleken. Använd [tinypng](https://tinypng.com) för att minska storleken

#### F: Hur får jag spel?
Du kan ladda ner homebrew-spel från [Universal-DB](https://db.universal-team.net/ds) och [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). För att få dumpar av dina retail spel:
- På DS kan du använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) för att dumpa dina GBA-spel och, om du har ett Slot-2 minneskort, DS spel
- På DSi kan du använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) för att dumpa dina DS spel och DSiWare
- På 3DS kan du använda [GodMode9](https://github.com/d0k3/GodMode9/releases) för att dumpa dina DS-spel, DSiWare och Virtual Console-titlar

#### F: Kan jag få sparfiler från mina spelkort på mitt SD-kort eller tvärtom?
Ja, du kan använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) på DSi och 3DS eller [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) på 3DS.

#### How do I change TWiLight Menu++'s language?
1. Open TWiLight Menu++ settings, you can do this by holding <kbd>SELECT</kbd> while loading TWiLight Menu++
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard / 3DS) or twice (on DSi)
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the next two options as they control the language of DS games and their titles in TWiLight Menu++

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?

| Format                    | Loader                                           | Extensions                             | Save file                          |
| ------------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------- |
| ARGV[^1]                  | Native                                           | `.argv`                                |                                    |
| Atari 2600                | [StellaDS][stellads]                             | `.a26`                                 |                                    |
| Atari 5200                | [A5200DS][a5200ds]                               | `.a52`                                 |                                    |
| Atari 7800                | [A7800DS][a7800ds]                               | `.a78`                                 |                                    |
| Atari XEGS                | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                    |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]         |
| DSiWare                   | [Unlaunch][unlaunch]                             | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                    |
| Game Boy (Color)          | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                   |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                   |
| Game Gear                 | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^6]               |
| Master System             | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`               |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                    |
| NES / Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                   |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                    |
| RVID Video                | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                    |
| SNES[^7]                  | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]               |
{:.table}

- Footnotes -
{:footnotes}

#### Why isn't touch input working on sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Can The Biggest Loser boot TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the cartridge
[^4]: When running in DSi Mode, it can use the DSP for better sound
[^5]: Requires a Slot-2 flashcard and thus only works on DS Phat and DS Lite
[^6]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard
[^7]: Only shown when using a flashcard, 3DS's internal SD card, or DSi with Unlaunch installed
[^8]: Can only save when running from a flashcard

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
