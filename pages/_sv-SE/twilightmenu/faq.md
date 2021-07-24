---
lang: sv-SE
layout: faq
section: twilightmenu
category: other
title: FAQ & Felsökning
long_title: TWiLight Meny++ FAQ & Felsökning
description: Vanliga frågor och felsökning för TWiLight Menu++
---

För fler FAQs, besök [GBAtemp tråden](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Why does my 3DS/2DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM kan på något sätt bli skadad. Följ denna guide för att åtgärda problemet: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Jag får en vit skärm medan jag startar upp TWiLight Menu++. Hur fixar jag det?
- Försök först att sätta konsolen i viloläge (t.ex. stänga konsolens lock, eller trycka på sovknappen på O2DS), sedan väcker du upp konsolen
- Om det inte fungerar, formatera ditt SD-kort till FAT32 med 32 KB kluster/allokeringsstorlek
- Om det inte heller fungerar, prova ett annat SD-kort

#### Where is the Acekard/Wood UI theme?
The acekard (also called Wood UI) theme was removed due to its buggy behaviour and causing SD Card corruption. Please wait for a fix. Progress for the return of this theme can be found in [this PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Go into TWLMenu++ Settings, and disable `Update recently played list`.

#### Why do I get a white screen when trying to load a game from SD card?
- Kontrollera först [kompatibilitetslistan nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) och se till att ditt spel är kompatibelt
- Prova med alla fusk inaktiverade för det spelet eftersom vissa fusk inte är kompatibla med nds-bootstrap just nu, du kan använda <kbd class="l">L</kbd> för att inaktivera alla fusk för ett spel
- Om det fungerade tidigare tar du bort `fatTable` och `patchOffsetCache` i `sd:/_nds/nds-bootstrap/`

#### How do I use cheats?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- På 3DS finns denna databas tillgänglig i appen Universal-Updater som "NDS Cheat Databases." Detta kommer automatiskt att installera den till önskad plats.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### How do I show a custom picture on the top screen of the DSi theme?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- Bilderna får inte vara större än 208x156
- Om du har fel är det sannolikt ett fel med bildstorleken. Använd [tinypng](https://tinypng.com) för att minska storleken

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- På DS kan du använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) för att dumpa dina GBA-spel och, om du har ett Slot-2 minneskort, DS spel
- På DSi kan du använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) för att dumpa dina DS spel och DSiWare
- På 3DS kan du använda [GodMode9](https://github.com/d0k3/GodMode9/releases) för att dumpa dina DS-spel, DSiWare och Virtual Console-titlar

#### Can I get the save files from my game cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### How do I change TWiLight Menu++'s language?
1. Öppna TWiLight Menu++ inställningar, du kan göra detta genom att hålla ner <kbd>SELECT</kbd> medan du laddar TWiLight Menu++
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard/3DS) or twice (on DSi)
1. Ändra det första alternativet tills du ser vilket språk du vill ha, avsluta sedan inställningarna
   - Du kanske också vill ändra de kommande två alternativen eftersom dom kontrollerar språket i DS spel och deras titlar i TWiLight Menu++

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?

| Format                  | Loader                                           | Extensions                             | Save file                                      |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                                |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                                |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                |
| Atari XEGS              | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                                |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]                     |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].pub`, `saves/[rom name].prv` |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                               |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                               |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                            |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^6]                           |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`                           |
| MPEG4 Video             | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                                |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                               |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                |
| RVID Video              | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                |
| SNES[^7]                | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]                           |
{:.table}

- Footnotes -
{:footnotes}

#### Why isn't touch input working on sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Can The Biggest Loser boot TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: Textfiler som innehåller sökvägen till en DS homebrew-app och argument för att starta den med, läs [nds-hb-menu's README](https://github. com/devkitPro/nds-hb-menu#passing-arguments) för mer info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^3]: Fungerar endast från ett SuperCard DSTWO minneskort eftersom det har ytterligare processorkraft och RAM inuti spelkortet
[^4]: När du kör i DSi läge så kan det använda DSP för bättre ljud
[^5]: Kräver ett kortplats för Slot-2 och fungerar därmed bara på DS Phat och DS Lite
[^6]: jEnesis kan bara spara när du kör från ett minneskort, men PicoDriveTWL kan spara från både SD och minneskort
[^7]: Visas endast när du använder ett minneskort, 3DS:ets inbyggda SD-kort eller DSi med Unlaunch installerat
[^8]: Kan bara spara när du kör från ett minneskort

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
