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

#### Miért történik, hogy a 3DS eszközöm, fekete képernyőn ragad, összeomlik, kikapcsol, stb. amikor elindítom a TWiLight Menu++-t?
A TWL_FIRM elképzelhető, hogy valahogy megsérült. Kövesd ezt az útmutatót a hiba javításához: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Hogyan javítom, ha fehér képernyőt kapok a TWiLight Menu++ bootolásakor?
- Először próbáld meg a konzolodat alvó üzemmódba rakni (pl. lecsukva a konzol tetejét vagy a sleep gomb megnyomásával az O2DS-en), majd felkelteni a konzolt belőle
- Ha ez nem működik, formázd az SD kártyádat FAT32-re 32 KB cluster/foglalási mérettel
- Ha ez sem működik, próbálj egy másik SD kártyát

#### Hol van az Acekard/Wood UI téma?
Az Acekard (másként Wood UI) téma eltávolításra került a hibás működése miatt és mert SD kártya hibát eredményez. Kérjük várj a javítására. A téma visszatérésének menetrendje megtalálható ebben a [PR cikkben](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Hogyan javítom azt, ha a TWiLight Menu++ újraindul, vagy Guru Meditation Error hibát ad, amikor egy játékot indítok?
Menj a TWLMenu++ beállításaiba és kapcsold ki a `Utoljára játszott lista frissítés` opciót.

#### Miért kapok fehér képernyőt, ha megpróbálok betölteni egy DS játékot az SD kártyáról?
Tekintsd meg a [Miért kapok fehér képernyőt, ha megpróbálok betölteni egy játékot az SD kártyáról?](../nds-bootstrap/faq?faq=why-do-i-get-a-white-screen-when-trying-to-load-a-game-from-sd-card) problémát az nds-bootstrap GYIK oldalon.

#### Hogyan használhatom a csalásokat?
Szükséged van egy csalás adatbázisra a `usrcheat.dat` fájl formájában, az `sd:/_nds/TWiLightMenu/extras/` mappában. A leginkább frissített csalás adatbázis [DeadSkullzJr ](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/) adatbázisa.
- A 3DS-en az az adatbázis elérhető az Universal Updater appban, mint "NDS Cheat Databases." Ez automatikusan telepíti azt a szükséges helyre.

Alternatívaként használhatod az [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)-t, hogy létrehozd a saját csalás adatbázisod.

#### Hogyan jelenítek meg egy egyedi képet a felső képernyőn a DSi témában?
Egy véletlen `.png` kép az `sd:/_nds/TWiLightMenu/dsimenu/photos/` mappából kerül megjelenítésre minden alkalommal, amikor a menü betöltésre kerül. Ha nincsennek használható képek, akkor az nds-bootstrap által készített képernyőképek kerülnek felhasználásra.

- A kép(ek) felbontása nem lehet nagyobb, mint 208x156
- Ha hibát tapasztalsz, az leginkább a képméret hiba. Használd a [tinypng](https://tinypng.com)-t a méret csökkentéséhez

#### Hogyan szerezhetek játékokat?
Homebrew játékokat az [Universal-DB](https://db.universal-team.net/ds)-ből és a [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)-ról tölthetsz le. A kereskedelmi játékaid dumpolásához:
- DS-en használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a GBA játékaid dumpolásához, illetve ha van Slot-2 flashcart-od, DS játékokra. Ha csak Slot-1 flashcard-od van és szeretnél dumpolni egy DS játékot, használhatod a [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/)-t, amihez szükség van egy Wi-Fi kompatibilis DS-re és egy FTP kliensre egy független eszközön a ROM fogadásához
- DSi-n használhatod a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t a DS játékaid és a DSiWare dumpolásához
- 3DS-n használhatod a [GodMode9](https://github.com/d0k3/GodMode9/releases)-t a DS játékaid, DSiWare és Virtual Console címek dumpolásához

#### A játék kártyákból a mentéseimet ki tudom rakni az SD kártyámra és visszafelé?
Igen, használhatod erre a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)-t DSi-n és 3DS-en vagy a [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)-ot 3DS-en.

#### Hogyan állítom be a TWiLight Menu++-ban a nyelvet?
1. Nyisd meg a TWiLight Menu++ beállításokat, ezt a <kbd>SELECT</kbd> gomb nyomvatartásával tudod megtenni, a TWiLight Menu++ betöltésekor
1. Nyomj <kbd class="l">L</kbd> vagy <kbd class="face">Y</kbd> gombot egyszer (flashcard-on/3DS-en) vagy kétszer (DSi-n)
1. Módosítsd az első opciót, amíg nem látod a nyelvet, amit szeretnél, majd lépj ki a beállításokból
   - Elképzelhető, hogy módosítanád a következő két opciót, ami a DS játékok és címeik nyelvét befolyásolja a a TWiLight Menu++-ben

#### Ez egy DS(i) emulátor?
Nem, ez nem egy emulátor. A menü és a DS játékok (nds-bootstrap-en keresztül betöltve) natívan futnak a konzol DS/DSi módjában. Csak a korábbi idők konzoljai kerülnek emulálásra, illetve részben a GBA (mivel egy része vagy az összes, mint például a grafika natívan fut).

#### Milyen rendszereket támogat a TWiLight Menu++?
Tekintsd meg [TWiLight Menu++ által támogatott rendszerek listáját](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Hogyan tehetem az IR-t megfelelően működővé?
Mind a TWiLight Menu-t, mind az nds-bootstrap-t le kell downgrade-elned v12.2.1-re, illetve v0.30.1-re. Ezt követően győződj meg arról, hogy a `Slot-1 microSD hozzáférés` ki van kapcsolva és a `SELECT gomb` a TWLMenu++ beállításokban a `SELECT Menu` beállításra van állítva.
- Fontos megjegyezned, hogy ezzel elveszted a lehetőségét annak, hogy elindíts DSi-Enhanced játékokat DSi módban és DSi-Exklúzív és DSiWare játékokat.
- Ha nem akarsz downgrade-elni, akkor az IR-nek a legújabb TWLMenu++ és nds-bootstrap verziókon működnie kell, a *Pokemon Black & White Versions 1 & 2* játékokkal.

#### Tud-e a The Biggest Loser bebootolni TWiLight Menu++-vel?
Nem. A The Biggest Loser egy Slot-1 játék és nem egy DSiWare játék; az SD hozzáférés tiltott, ha Slot-1 kártyát futtatunk.

#### Miért nem találom/látom a játékaimat?
Több oka lehet, hogy nem találod őket.
- Ha az `_nds` mappába raktad a játékaid, nem fogod megtalálni őket, mert az a mappa láthatatlan a TWiLight Menu++ számára. Kérjük mozgasd őket bármilyen más helyre az SD kártyán
- Ha több mint 39 játékod van egy mappában és minden slot a menüben foglalt a játékod lehet, hogy a következő oldalon van. Használd az <kbd class="l">L</kbd>/<kbd class="r">R</kbd> vagy <kbd>SELECT</kbd> + <kbd>Bal</kbd> /<kbd>Jobb</kbd> gombokat az oldalak lapozásához
- Ha a játék mappád láthatatlan, be kell kapcsolnod a láthatatlan fájlok megjelenítését a TWiLight Menu++'s GUI beállításai között
- Ha a játék típus be lett állítva láthatatlanra az Emuláció/HB beállításokban, nem fog megjelenni a menükben. Módosítsd ezeket a beállításokat, hogy megjelenjenek
- Ha a játékod egy archív fájlban van (`zip`, `rar`, `7z`, stb.), nem használható a TWiLight Menu++ által. Csomagold ki a játékot az archívumból a használatához
- Ha a játékod nem a [támogatott kiterjesztést](../ds-index/emulators#list-of-systems-supported-by-twilight-menu) használja, szükséges lehet, hogy módosítsd a kiterjesztést a fájl átnevezésével
