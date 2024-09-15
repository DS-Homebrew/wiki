---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Emulátorok a DS-en
description: DS emulátorok referenciája
---

Számos emulátor létezik DS-re és DSi-re. Ez az oldal összefoglaló bemutatását tartalmazza az emulátoroknak és betöltőknek amik a **TW**i**L**ight Menu++-szal csomagoltak.<0>

### A TWiLight Menu++ által támogatott emulátorok listája

| Formátum                | Betöltő                                         | Kiterjesztések                         | Mentés fájl                                                                |
| ----------------------- | ----------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| ARGV[^1]                | Natív                                           | `.argv`                                |                                                                            |
| Atari 2600              | [StellaDS][stellads]                            | `.a26`                                 |                                                                            |
| Atari 5200              | [A5200DS][a5200ds]                              | `.a52`                                 |                                                                            |
| Atari 7800              | [A7800DS][a7800ds]                              | `.a78`                                 |                                                                            |
| Atari XEGS              | [A8DS][a8ds]                                    | `.xex`, `.atr`                         |                                                                            |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]              | `.col`                                 |                                                                            |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, natív | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom neve].sav`[^2]                                                 |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]    | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom neve].pub`, `saves/[rom neve].prv`, `saves/[rom neve].sav`[^7] |
| DSTWO bővítmény         | [DSTWO][dstwo][^3]                              | `.plg`                                 |                                                                            |
| Game Boy (Color)        | [GameYob][gameyob]                              | `.gb`, `.sgb`, `.gbc`                  | `[rom neve].sav`                                                           |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], natív[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom neve].sav`                                                           |
| Game Gear               | [S8DS][s8ds]                                    | `.gg`                                  | `[rom neve].gg.sav`                                                        |
| Genesis / Mega Drive    | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]     | `.gen`, `.md`                          | `[rom neve].srm`[^6]                                                       |
| Intellivision           | [Nintellivision][nintellivision]                | `.int`                                 |                                                                            |
| Master System           | [S8DS][s8ds]                                    | `.sms`                                 | `[rom neve].sms.sav`                                                       |
| MSX                     | [ColecoDS][colecods]                            | `.msx`                                 | ???                                                                        |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                  | `.ngp`, `.ngc`                         | `/data/ngpds/[rom neve].ngp.fla`                                           |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]          | `.fv`                                  |                                                                            |
| NES/Famicom             | [nesDS][nesds]                                  | `.nes`, `.fds`                         | `[rom neve].sav`                                                           |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                        | `.pce`                                 |                                                                            |
| Rocket Video            | [Rocket Video Player][rvidplayer]               | `.rvid`                                |                                                                            |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]              | `.sg`                                  |                                                                            |
| Sord M5                 | [ColecoDS][colecods]                            | `.m5`                                  |                                                                            |
| SNES                    | [SNEmulDS][snemulds]                            | `.smc`, `.sfc`                         | `[rom neve].srm`                                                           |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                          | `.ws`, `.wsc`                          | ???                                                                        |
| Xvid                    | [tuna-viDS][tunavids]                           | `.avi`                                 |                                                                            |

- Lábjegyzetek -
{:footnotes}

Ezek csak az ajánlott emulátorok és betöltők, amik megtalálhatók a TWiLight Menu++-ban. Léteznek még más emulátorok ezekhez a konzolokhoz (mint például lolSnes, Gbaemu4ds, stb.)

### Más emulátorok DS-re

| Formátum | Betöltő        | Kiterjesztések | Mentés fájl  |
| -------- | -------------- | -------------- | ------------ |
| Neo Geo  | [neoDS][neods] | `.neo`         | (ismeretlen) |

## Megjegyzések bizonyos emulátorokhoz
### RAM Disk-ek
- A **jEnesisDS** vagy **neoDS** működéséhez DSi SD kártyáról RAM disket kell használnod az nds-bootstrap-pel
    - RAM disk készítő a jEnesisDS beépített a TWiLight Menu++-ba. Saját RAM disket kell létrehoznod a neoDS-hez. Tekintsd meg a [RAM Disk-ek létrehozását](../twilightmenu/creating-ram-disks) ennek a módjáról
    - Az ok, amiért a RAM disk-ek használtak, az, hogy ezen emulátorok ARM7 hook-jai nem működnek megfelelően

### A PicoDriveTWL és a jEnesisDS összehasonlítása
- **PicoDriveTWL**
    - DSi-hez készült
    - Nincs szüksége nds-bootstrap RAM Disk-ekre
        - A mentés támogatott a DSi SD kártyákra
        - Gyorsabb betöltési idő a TWiLight Menu++ és az emulátor között DSi SD kártyán
    - Argumentumok támogatása
    - A korlát 3 MB egy **Flashcard-on**
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
[^7]: Csak B4DS üzemmódban történő futtatás esetén
[^3]: Csak egy SuperCard DSTWO flashcard-ról indítva működik, mert az rendelkezik a szükséges további feldolgozási kapacitással és RAM-mal a flashcardon belül
[^4]: Ha DSi módban fut, használni tudja a DSP-t a jobb hanghoz
[^5]: Egy Slot-2 flashcard-ot igényel, így csak DS Phat-on és DS Lite-on működik
[^6]: A jEnesis csak akkor tud menteni, ha flashcard-ról fut, de a PicoDriveTWL tud menteni SD kártyáról és flashcard-ról futtatás esetén is

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
[snemulds]: https://www.gamebrew.org/wiki/SnemulDS_-_Revival
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
