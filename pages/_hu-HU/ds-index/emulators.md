---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Emulátorok a DS-en
description: DS emulátorok referenciája
---

Számos emulátor létezik DS-re és DSi-re. Ez az oldal összefoglaló bemutatását tartalmazza az emulátoroknak és betöltőknek amik a TWiLight Menu++-szal csomagoltak.

### A TWiLight Menu++ által támogatott emulátorok listája

| Formátum                | Betöltő                                         | Kiterjesztések                         | Mentés fájl                                    |
| ----------------------- | ----------------------------------------------- | -------------------------------------- | ---------------------------------------------- |
| ARGV[^1]                | Natív                                           | `.argv`                                |                                                |
| Atari 2600              | [StellaDS][stellads]                            | `.a26`                                 |                                                |
| Atari 5200              | [A5200DS][a5200ds]                              | `.a52`                                 |                                                |
| Atari 7800              | [A7800DS][a7800ds]                              | `.a78`                                 |                                                |
| Atari XEGS              | [XEGS-DS][xegs-ds]                              | `.xex`, `.atr`                         |                                                |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, natív | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom neve].sav`[^2]                     |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]    | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom neve].pub`, `saves/[rom neve].prv` |
| DSTWO bővítmény         | [DSTWO][dstwo][^3]                              | `.plg`                                 |                                                |
| Game Boy (Color)        | [GameYob][gameyob]                              | `.gb`, `.sgb`, `.gbc`                  | `[rom neve].sav`                               |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], natív[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom neve].sav`                               |
| Game Gear               | [S8DS][s8ds]                                    | `.gg`                                  | `[rom neve].gg.sav`                            |
| Genesis / Mega Drive    | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]     | `.gen`                                 | `[rom neve].srm`[^6]                           |
| Master System           | [S8DS][s8ds]                                    | `.sms`                                 | `[rom neve].sms.sav`                           |
| Fast Video              | Hamarosan                                       | `.fv`                                  |                                                |
| NES/Famicom             | [nesDS][nesds]                                  | `.nes`, `.fds`                         | `[rom neve].sav`                               |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                        | `.pce`                                 |                                                |
| Rocket Video            | [Rocket Video Player][rvidplayer]               | `.rvid`                                |                                                |
| SNES[^7]                | [SNEmulDS][snemulds]                            | `.smc`, `.sfc`                         | `[rom neve].srm`[^8]                           |
{:.table}

- Footnotes -
{:footnotes}

Ezek csak az ajánlott emulátorok és betöltők, amik megtalálhatók a TWiLight Menu++-ban. Léteznek még más emulátorok ezekhez a konzolokhoz (mint például lolSnes, Gbaemu4ds, stb.)

### Más emulátorok DS-re

| Formátum | Betöltő        | Kiterjesztések | Mentés fájl  |
| -------- | -------------- | -------------- | ------------ |
| Neo Geo  | [neoDS][neods] | `.neo`         | (ismeretlen) |

## Megjegyzések bizonyos emulátorokhoz
### RAM Disk-ek
- A **jEnesisDS**, **neoDS** és az **SNEmulDS** működéséhez DSi SD kártyáról RAM disket kell használni az nds-bootstrap-hez
   - RAM disk készítők léteznek a jEnesisDS & SNEmulDS emulátorokhoz és beépítettek a TWiLight Menu++-ba. Saját RAM disket kell létrehoznod a neoDS-hez. Tekintsd meg a [RAM Disk-ek létrehozását](../twilightmenu/creating-ram-disks) ennek a módjáról
   - Az ok, amiért a RAM disk-ek használtak, az, hogy ezen emulátorok ARM7 hook-jai nem működnek megfelelően

### A PicoDriveTWL és a jEnesisDS összehasonlítása
- **PicoDriveTWL**
   - DSi-hez készült
   - Nincs szüksége nds-bootstrap RAM Disk-ekre
      - A mentés támogatott a DSi SD kártyákra
      - Gyorsabb betöltési idő a TWiLight Menu++ és az emulátor között DSi SD kártyán
   - Argumentumok támogatása
   - A korlát 2.5 MB egy **Flashcard-on**
      - Felhasználja a DSi extra RAM-ot vagy a DS Memory Pak-ot, hogy kiterjessze ezt a korlátot
   - Nincs hang emuláció
   - A framerate extrém változó

- **jEnesisDS**
   - DS mód
      - Nds-bootstrap RAM disk-re van szüksége, hogy használható legyen DSi SD kártyákkal
      - A mentés nem lehetséges DSi SD kártyákra
   - Eltart egy ideig a betöltése
   - Nincs argumentum támogatás
   - A korlát 3 MB minden platformon (mert a ROM-ok betöltődnek a RAM-ba)
      - Nincs DS Memory Pak vagy DSi Extended Memory támogatás
      - Létezik egy patch a Sonic 3 & Knuckles-hez, ami eltávolítja a többjátékos üzemmódot, hogy csökkentse a méretet
   - Hang emuláció
   - A framerate állandó


<!-- Links for tables -->
[^1]: Szöveg fájlokról, amik egy DS homebrew app útvonalát és argumentumait tartalmazzák az indításhoz, lásd az [nds-hb-menu README-jét](https://github.com/devkitPro/nds-hb-menu#passing-arguments) a további információkért
[^2]: Csak kereskedelmi ROM-okhoz, a homebrew-ok nem rendelkeznek kifejezett mentés fájlokkal
[^3]: Csak egy SuperCard DSTWO flashcard-ról indítva működik, mert az rendelkezik a szükséges további feldolgozási kapacitással és RAM-mal a flashcardon belül
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
[neods]: https://www.gamebrew.org/wiki/NeoDS
