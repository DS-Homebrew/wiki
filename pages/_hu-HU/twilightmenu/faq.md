---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: GYIK & hibaelhárítás
description: TWiLight Menu++ GYIK és hibaelhárítás
---

További GYIK-ért látogassa meg a [GBAtemp üzenetszálat](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Why does my 3DS / 2DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM might've somehow got corrupted. Kövesd ezt az útmutatót a hiba javításához: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### How do I fix getting a white screen when booting TWiLight Menu++?
- Először próbáld meg a konzolodat alvó üzemmódba rakni (pl. lecsukva a konzol tetejét vagy a sleep gomb megnyomásával az O2DS-en), majd felkelteni a konzolt belőle
- Ha ez nem működik, formázd az SD kártyádat FAT32-re 32KB cluster/foglalási mérettel
- Ha ez sem működik, próbálj egy másik SD kártyát

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Go into TWLMenu++ Settings, and disable `Update recently played list`.

#### Why do I get a white screen when trying to load a game from SD Card?
- Először ellenőrizd [az nds-bootstrap kompatibilitás listát ](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) legyél biztos benne, hogy a játékod kompatiblis
- Próbáld meg az összes csalás kikapcsolásával annál a játéknál, mert néhány csalás nem kompatibilis az nds-bootstrap-pel jelenleg; az <kbd class="l">L</kbd> gombot tudod használni egy játék összes csalásának kikapcsolásához
- Ha a betölteni kívánt játék egy DSi kibővített játék, akkor ellenőrizd, hogy a TWiLight Menu++ `DS mód`-ra van-e állítva
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból

#### How do I use cheats?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### How do I show a custom picture on the top screen of the DSi theme?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- A kép(ek) felbontása nem lehet nagyobb, mint 208x156
- Ha hibát tapasztalsz, az leginkább a képméret hiba. Használd a [tinypng](https://tinypng.com)-t a méret csökkentéséhez

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). To get dumps of your retail games:
- DS-en használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a GBA játékaid dumpolásához, illetve ha van Slot-2 flashcard-od, DS játékokra
- DSi-n használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a DS játékaid és a DSiWare dumpolásához
- 3DS-n használhatod a [GodMode9](https://github.com/d0k3/GodMode9/releases)-t a DS játékaid, DSiWare és Virtual Console címek dumpolásához

#### Can I get the save files from my game cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### How do I change TWiLight Menu++'s language?
1. Nyisd meg a TWiLight Menu++ beállításokat, ezt a <kbd>SELECT</kbd> gomb nyomvatartásával tudod megtenni, a TWiLight Menu++ betöltésekor
1. Nyomj <kbd class="l">L</kbd> vagy <kbd class="face">Y</kbd> gombot egyszer (flashcard-on / 3DS-en) vagy kétszer (DSi-n)
1. Módosítsd az első opciót, amíg nem látod a nyelvet, amit szeretnél, majd lépj ki a beállításokból
   - Elképzelhető, hogy módosítanád a következő két opciót, ami a DS játékok és címeik nyelvét befolyásolja a a TWiLight Menu++-ben

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

[^1]: Szöveg fájlokról, amik egy DS homebrew app útvonalát és argumentumait tartalmazzák az indításhoz, lásd az [nds-hb-menu README-jét](https://github.com/devkitPro/nds-hb-menu#passing-arguments) a további információkért
[^2]: Csak kereskedelmi ROM-okhoz, a homebrew-ok nem rendelkeznek kifejezett mentés fájlokkal
[^3]: Csak egy SuperCard DSTWO flashcard-ról indítva működik, mert az rendelkezik a szükséges további feldolgozási kapacitással és RAM-mal a cartridge-en belül
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
