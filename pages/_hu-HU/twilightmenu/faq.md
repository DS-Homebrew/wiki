---
lang: hu-HU
layout: faq
section: twilightmenu
category: other
title: GYIK & hibaelhárítás
long_title: TWiLight Menu++ GYIK & hibaelhárítás
description: TWiLight Menu++ GYIK és hibaelhárítás
---

További GYIK-ért látogassa meg a [GBAtemp üzenetszálat](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Miért történik, hogy a 3DS/2DS eszközöm, fekete képernyőn ragad, összeomlik, kikapcsol, stb. amikor elindítom a TWiLight Menu++-t?
A TWL_FIRM elképzelhető, hogy valahogy megsérült. Kövesd ezt az útmutatót a hiba javításához: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Hogyan javítom, ha fehér képernyőt kapok a TWiLight Menu++ bootolásakor?
- Először próbáld meg a konzolodat alvó üzemmódba rakni (pl. lecsukva a konzol tetejét vagy a sleep gomb megnyomásával az O2DS-en), majd felkelteni a konzolt belőle
- Ha ez nem működik, formázd az SD kártyádat FAT32-re 32 KB cluster/foglalási mérettel
- Ha ez sem működik, próbálj egy másik SD kártyát

#### Hol van az Acekard/Wood UI téma?
Az acekard (másként Wood UI) téma eltávolításra került a hibás működése miatt és mert SD kártya hibát eredményez. Kérjük várj a javítására. A téma visszatérésének menetrendje megtalálható ebben a [PR cikkben](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Hogyan javítom azt, ha a TWiLight Menu++ újraindul, vagy Guru Meditation Error hibát ad, amikor egy játékot indítok?
Menj a TWLMenu++ beállításaiba és kapcsold ki a `Utoljára játszott lista frissítés` opciót.

#### Miért kapok fehér képernyőt, ha megpróbálok betölteni egy játékot az SD kártyáról?
- Először ellenőrizd [az nds-bootstrap kompatibilitás listát ](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) legyél biztos benne, hogy a játékod kompatiblis
- Próbáld meg az összes csalás kikapcsolásával annál a játéknál, mert néhány csalás nem kompatibilis az nds-bootstrap-pel jelenleg; az <kbd class="l">L</kbd> gombot tudod használni egy játék összes csalásának kikapcsolásához
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból

#### Hogyan használhatom a csalásokat?
Szükséged van egy csalás adatbázisra a `usrcheat.dat` fájl formájában, az `sd:/_nds/TWiLightMenu/extras/` mappában. A leginkább frissített csalás adatbázis [DeadSkullzJr ](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/) adatbázisa.
- A 3DS-en az az adatbázis elérhető az Universal Updater appban, mint "NDS Cheat Databases." Ez automatikusan telepíti azt a szükséges helyre.

Alternatívaként használhatod az [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)-t, hogy létrehozd a saját csalás adatbázisod.

#### Hogyan jelenítek meg egy egyedi képet a felső képernyőn a DSi témában?
Egy véletlen `.png` kép az `sd:/_nds/TWiLightMenu/dsimenu/photos/` mappából kerül megjelenítésre minden alkalommal, amikor a menü betöltésre kerül.

- A kép(ek) felbontása nem lehet nagyobb, mint 208x156
- Ha hibát tapasztalsz, az leginkább a képméret hiba. Használd a [tinypng](https://tinypng.com)-t a méret csökkentéséhez

#### Hogyan szerezhetek játékokat?
Homebrew játékokat az [Universal-DB](https://db.universal-team.net/ds)-ből és a [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)-ról tölthetsz le. A kereskedelmi játékaid dumpolásához:
- DS-en használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a GBA játékaid dumpolásához, illetve ha van Slot-2 flashcard-od, DS játékokra
- DSi-n használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a DS játékaid és a DSiWare dumpolásához
- 3DS-n használhatod a [GodMode9](https://github.com/d0k3/GodMode9/releases)-t a DS játékaid, DSiWare és Virtual Console címek dumpolásához

#### A cardridge-ekből a mentéseimet ki tudom rakni az SD kártyámra és visszafelé?
Igen, használhatod erre a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t DSi-n és 3DS-en vagy a [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)-ot 3DS-en.

#### Hogyan állítom be a TWiLight Menu++-ban a nyelvet?
1. Nyisd meg a TWiLight Menu++ beállításokat, ezt a <kbd>SELECT</kbd> gomb nyomvatartásával tudod megtenni, a TWiLight Menu++ betöltésekor
1. Nyomj <kbd class="l">L</kbd> vagy <kbd class="face">Y</kbd> gombot egyszer (flashcard-on/3DS-en) vagy kétszer (DSi-n)
1. Módosítsd az első opciót, amíg nem látod a nyelvet, amit szeretnél, majd lépj ki a beállításokból
   - Elképzelhető, hogy módosítanád a következő két opciót, ami a DS játékok és címeik nyelvét befolyásolja a a TWiLight Menu++-ben

#### Ez egy DS(i) emulátor?
Nem, ez nem egy emulátor. A menü és a DS játékok (nds-bootstrap-en keresztül betöltve) natívan futnak a konzol DS/DSi módjában. Csak a korábbi idők konzoljai kerülnek emulálásra, illetve részben a GBA (mivel egy része vagy az összes, mint például a grafika natívan fut).

#### Milyen rendszereket támogat a TWiLight Menu++?

| Formátum                  | Betöltő                                         | Kiterjesztések                         | Mentés fájl                                    |
| ------------------------- | ----------------------------------------------- | -------------------------------------- | ---------------------------------------------- |
| ARGV[^1]                  | Native                                          | `.argv`                                |                                                |
| Atari 2600                | [StellaDS][stellads]                            | `.a26`                                 |                                                |
| Atari 5200                | [A5200DS][a5200ds]                              | `.a52`                                 |                                                |
| Atari 7800                | [A7800DS][a7800ds]                              | `.a78`                                 |                                                |
| Atari XEGS                | [XEGS-DS][xegs-ds]                              | `.xex`, `.atr`                         |                                                |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, natív | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom neve].sav`[^2]                     |
| DSiWare                   | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]    | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom neve].pub`, `saves/[rom neve].prv` |
| DSTWO bővítmény           | [DSTWO][dstwo][^3]                              | `.plg`                                 |                                                |
| Game Boy (Color)          | [GameYob][gameyob]                              | `.gb`, `.sgb`, `.gbc`                  | `[rom neve].sav`                               |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], natív[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom neve].sav`                               |
| Game Gear                 | [S8DS][s8ds]                                    | `.gg`                                  | `[rom neve].gg.sav`                            |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]     | `.gen`                                 | `[rom neve].srm`[^6]                           |
| Master System             | [S8DS][s8ds]                                    | `.sms`                                 | `[rom neve].sms.sav`                           |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                     | `.mp4`                                 |                                                |
| NES / Famicom             | [nesDS][nesds]                                  | `.nes`, `.fds`                         | `[rom neve].sav`                               |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                        | `.pce`                                 |                                                |
| RVID Videó                | [Rocket Video Player][rvidplayer]               | `.rvid`                                |                                                |
| SNES[^7]                  | [SNEmulDS][snemulds]                            | `.smc`, `.sfc`                         | `[rom neve].srm`[^8]                           |
{:.table}

- Footnotes -
{:footnotes}

#### Miért nem működik az érintő képernyő a sudokuhax-szal?
A sudokuhax mentés fájljától függően az érintő képernyő bevitel előfordulhat, hogy nem működik.

#### Tud-e a The Biggest Loser bebootolni TWiLight Menu++-vel?
Nem. A The Biggest Loser egy Slot-1 játék és nem egy DSiWare játék; az SD hozzáférés tiltott, ha Slot-1 kártyát futtatunk.

[^1]: Szöveg fájlokról, amik egy DS homebrew app útvonalát és argumentumait tartalmazzák az indításhoz, lásd az [nds-hb-menu README-jét](https://github.com/devkitPro/nds-hb-menu#passing-arguments) a további információkért
[^2]: Csak kereskedelmi ROM-okhoz, a homebrew-ok nem rendelkeznek kifejezett mentés fájlokkal
[^3]: Csak egy SuperCard DSTWO flashcard-ról indítva működik, mert az rendelkezik a szükséges további feldolgozási kapacitással és RAM-mal a cartridge-en belül
[^4]: Ha DSi módban fut, használni tudja a DSP-t a jobb hanghoz
[^5]: Egy Slot-2 flashcard-ot igényel, így csak DS Phat-on és DS Lite-on működik
[^6]: A jEnesis csak akkor tud menteni, ha flashcard-ról fut, de a PicoDriveTWL tud menteni SD kártyáról és flashcard-ról futtatás esetén is
[^7]: Csak flashcard használatakor, 3DS belső SD használatakor, vagy DSi esetében telepített Unlaunch esetén jelenik meg
[^8]: Csak akkor tud menteni, ha flashcard-ról fut

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
