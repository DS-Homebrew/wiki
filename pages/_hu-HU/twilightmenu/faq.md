---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: GYIK & hibaelhárítás
---

További GYIK-ért látogassa meg a [GBAtemp üzenetszálat](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### K: Miért történik, hogy a 3DS / 2DS eszközöm, fekete képernyőn ragad, összeomlik, kikapcsol, stb. amikor elindítom a TWiLight Menu++-t?
V: A TWL_FIRM elképzelhető, hogy valahogy megsérült. Kövesd ezt az útmutatót a hiba javításához: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### K: Hogyan javítom, ha fehér képernyőt kapok a TWiLight Menu++ bootolásakor?
V:
- Először próbáld meg a konzolodat alvó üzemmódba rakni (pl. lecsukva a konzol tetejét vagy a sleep gomb megnyomásával az O2DS-en), majd felkelteni a konzolt belőle
- Ha ez nem működik, formázd az SD kártyádat FAT32-re 32KB cluster/foglalási mérettel
- Ha ez sem működik, próbálj egy másik SD kártyát

#### K: Miért kapok fehér képernyőt, ha megpróbálok betölteni egy játékot az SD kártyáról?
V:
- Először ellenőrizd [az nds-bootstrap kompatibilitás listát ](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) legyél biztos benne, hogy a játékod kompatiblis
- Próbáld meg az összes csalás kikapcsolásával annál a játéknál, mert néhány csalás nem kompatibilis az nds-bootstrap-pel jelenleg; az <kbd class="l">L</kbd> gombot tudod használni egy játék összes csalásának kikapcsolásához
- Ha a betölteni kívánt játék egy DSi kibővített játék, akkor ellenőrizd, hogy a TWiLight Menu++ `DS mód`-ra van-e állítva
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból

#### K: Hogyan használhatom a csalásokat?
V: Szükséged van egy csalás adatbázisra a `usrcheat.dat` fájl formájában, az `sd:/_nds/TWiLightMenu/extras/` mappában. A leginkább frissített csalás adatbázis [DeadSkullzJr ](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/) adatbázisa. Alternatívaként használhatod az [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)-t, hogy létrehozd a saját csalás adatbázisod.

#### K: Hogyan jelenítek meg egy egyedi képet a felső képernyőn a DSi témában?
V: Egy véletlen `.png` kép az `sd:/_nds/TWiLightMenu/dsimenu/photos/` mappából kerül megjelenítésre minden alkalommal, amikor a menü betöltésre kerül.

- A kép(ek) felbontása nem lehet nagyobb, mint 208x156
- Ha hibát tapasztalsz, az leginkább a képméret hiba. Használd a [tinypng](https://tinypng.com)-t a méret csökkentéséhez

#### K: Hogyan szerezhetek játékokat?
V: Homebrew játékokat az [Universal-DB](https://db.universal-team.net/ds)-ből és a [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications)-ról tölthetsz le. A kereskedelmi játékaid dumpolásához:
- DS-en használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a GBA játékaid dumpolásához, illetve ha van Slot-2 flashcard-od, DS játékokra
- DSi-n használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a DS játékaid és a DSiWare dumpolásához
- 3DS-n használhatod a [GodMode9](https://github.com/d0k3/GodMode9/releases)-t a DS játékaid, DSiWare és Virtual Console címek dumpolásához

#### K: A cardridge-ekből a mentéseimet ki tudom rakni az SD kártyámra és visszafelé?
V: Igen, használhatod erre a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t DSi-n és 3DS-en vagy a [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)-ot 3DS-en.

#### K: Hogyan állítom be a TWiLight Menu++-ban a nyelvet?
V:
1. Nyisd meg a TWiLight Menu++ beállításokat, ezt a <kbd>SELECT</kbd> gomb nyomvatartásával tudod megtenni, a TWiLight Menu++ betöltésekor
1. Nyomj <kbd class="l">L</kbd> vagy <kbd class="face">Y</kbd> gombot egyszer (flashcard-on / 3DS-en) vagy kétszer (DSi-n)
1. Módosítsd az első opciót, amíg nem látod a nyelvet, amit szeretnél, majd lépj ki a beállításokból
   - Elképzelhető, hogy módosítanád a következő két opciót, ami a DS játékok és címeik nyelvét befolyásolja a a TWiLight Menu++-ben

#### K: Miért nem működik az érintő képernyő a sudokuhax-szal?
V: A sudokuhax mentés fájljától függően az érintő képernyő bevitel előfordulhat, hogy nem működik.

#### K: Tud a The Biggest Loser bebootolni TWiLight Menu++-vel?
V: Nem. A The Biggest Loser egy Slot-1 játék és nem egy DSiWare játék; az SD hozzáférés tiltott, ha Slot-1 kártyát futtatunk.
