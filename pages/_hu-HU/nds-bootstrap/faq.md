---
lang: hu-HU
layout: faq
section: nds-bootstrap
title: GYIK & hibaelhárítás
long_title: nds-bootstrap GYIK & helyreállítás
description: GYIK & hibaelhárítás az nds-bootstrap-hez
---

#### Problémáim vannak a ROM(ok)-mal, mit tegyek?
- Győződj meg róla, hogy a [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) és [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) legújabb verzióját használod (a frissítési utasításokat az egyes kiadási oldalakon találod)
- Ellenőrizd az [nds-bootstrap kompatibilitási listában](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0), hogy megtudd, ez egy ismert probléma-e a legújabb nds-bootstrap verzió esetén
- Próbáld meg az összes csalás kikapcsolásával annál a játéknál, mert néhány csalás nem kompatibilis az nds-bootstrap-pel jelenleg; az <kbd class="l">L</kbd> gombot nyomva a játék csalás menüjében a **TW**i**L**ight Menu++-ban tudod egy játék összes csalását kikapcsolni
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból
- Futtasd a játékokat más beállításokkal beleértve az ARM9 CPU sebességet, DS/DSi módot, hang minőséget, aszink kártya olvasást, kártya DMA-t, stb.
    - A **TW**i**L**ight Menu++ használatával módosítsd az összes játékonkénti beállítást `Alapértelmezett` értékre
    - Ha van egy konkrét játékonkénti beállítás, ami a problémát okozza, kérjük, jelentsd a [GitHub repository](https://github.com/DS-Homebrew/nds-bootstrap/issues)-ba
- Ha van, töröld a cheat adatbázist (`usrcheat.dat`) a `sd:/_nds/TWiLightMenu/extras` mappában
- [Re-dumpold a ROM-ot](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) hogy biztos lehess abban, nem sérült
- Ha a fenti lépéseket követted, kérdezd meg a [Discord szerveren](https://discord.gg/yD3spjv)
- Ha a szerver azt mondja, hogy ez egy nds-bootstrap hiba, ellenőrizd, hogy a játék jelentésre került-e már a GitHub-ra
    - Ellenőrizd a lezárt jegyeket is, arra az esetre, ha valamelyik hiba lezárásra került egy másik preferálása miatt
    - Ha nem tartozik hozzá GitHub hiba, akkor csinálj neki egy újat
- Ha eddig nem sikerült megoldást találni, kérjük frissítsd a [kompatibilitási listában](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Miért vannak problémák a ROM betöltéssel, ha natívan futnak?
Az nds-bootstrap a ROM funkciókat patcheli, hogy fussanak SD kártyáról, és a ROM hardkódolt a Slot-1 olvasásra. Van néhány időzítési és AP intézkedés (amik nagy része már eltávolított), mind a kettő okozhatja, hogy a ROM-ok nem megfelelően működnek.

#### Miért használjak nds-bootstrap-et a hagyományos flashcard helyett?
- Bizonyos kompatibilis ROM-ok betöltésre kerülnek a RAM-ba, gyorsabb betöltési időket lehetővé téve, mint a normál játék kártyák
- Kibővítheted a VRAM memória buszt 32 bitesre
- Használd a DSi további CPU sebességét, lehetővé téve a jobb teljesítményt néhány játéknál
- Az audiód minőségét javíthatod 48 kHz-re
- Használható a DSi mód, amivel elérhetők a DSi funkciók
- Kisebb akkumulátor fogyasztás
- Bizonyos játék kártyák használatakor lehetőséged van az IR használatára az alkalmazásodból
- Az nds-bootstrap nyílt forrású, így a fejlesztől mindig tudják frissíteni a hibák és egyéb dolgok javítása érdekében, még akkor is, ha a projekt megszűnik
- A DS Memory Expansion Pak emulált, így azok a játékok amiknek szüksége van rá működni fognak
     - Jelenleg csak a *Nintendo DS Browser* emulálja ezt
- Az alsó és felső képernyő cserélhető a kompatibilis játékoknál a még kényelmesebb játékmenetért, vagy olyan rendszerekhez, ahol törött vagy eltávolított a képernyő
- Képernyőképek készítése és értékek szerkesztése a RAM-ban a játékbani menü használatával

#### DS/DS Lite: Miért használjak nds-bootstrap-et egy DS flashcard-on?
- Bizonyos kompatibilis ROM-ok betöltésre kerülnek a Memory Expansion Pak-ba (vagy RAM-ot tartalmazó Slot-2 flashcard-o memóriájába), gyorsabb betöltési időket lehetővé téve, mint a normál játék kártyák
- 400+ számú DSiWare cím futtatható a beépített patchek és egy DSi-Enhanced cím Donor ROM-ja segítségével
     - Ne feledd, hogy az nds-bootstrap lesz mindig a DSiWare-hez használva, függetlenül az `Játék betöltő` beállítástól a TWLMenu++ beállításokban
     - Nem minden DSiWare cím tud menteni, mivel nehéz hozzáadni a mentés támogatását, és/vagy egynél több fájlt tárolnak a mentési fájlrendszerben.
- Ha a flashcard kernel-ed nem tud futtatni egy bizonyos ROM-ot, akkor az nds-bootstrap használható helyette, és ez játékonként beállítható
- Az alsó és felső képernyő cserélhető a kompatibilis játékoknál a még kényelmesebb játékmenetért, vagy olyan rendszerekhez, ahol törött vagy eltávolított a képernyő
- Képernyőképek készítése és értékek szerkesztése a RAM-ban a játékbani menü használatával

#### Mi az a Donor ROM?
Az nds-bootstrap-ben, amikor egy játék nem bootol, egy másik ROM-ot használunk, hogy "odaadományozza" az ARM7 (és ARM7i, ha van) binárisát a futtatandó játéknak, a játék saját binárisa helyett.     
A Donor ROM beállítható a **TW**i**L**ight Menu++-szal.
- **Flashcard-ok DS módban:** A támogatott DSi-Exklúzív/DSiWare címek DSi-Enhanced ROM készletet igényelnek, mint Donor ROM
- **DSiWarehax:** Mivel a DSi-Enhanced játékok és a (legtöbb) DSi-Exkluzív/DSiWare játék eltérő MBK-beállításokat tartalmaznak, a DSi-Enhanced játékok nem fognak elindulni DSi módban Donor ROM nélkül. Egy DSi-Exkluzív/DSiWare cím Donor ROM-ként való beállításával a DSi-Enhanced játékok képesek lesznek futni a DSiWare cím által beállított MBK-beállításokon belül, amelyen az exploitot használják
     - DSi-n, ha **TW**i**L**ight Menu++ észleli, hogy nincs Donor ROM beállítva, *Nintendo DSi Sound* és/vagy egy érvényes, már elindított exploitolt cím automatikusan Donor ROM(ok)-ként lesz beállítva
- **CycloDS iEvolution:** Ugyanez a helyzet, mint a DSiWarehax-szal, de a DSi-Exkluzív/DSiWare címekhez DSi-Enhanced játékra lesz szükség, amely Donor ROM-ként van beállítva, nem pedig fordítva

#### Mi a legjobb Donor ROM?
Nincs *legjobb*, amit használni lehet. A TWL címek legtöbb ROM-ját be lehet állítani Donor ROM-nak.

Példák:
- **DSiWarehax a DSi-n:** *Nintendo DSi Sound* és/vagy egy általad indított érvényes exploitolt cím automatikusan Donor ROM(ok)-ként lesz beállítva, ha még nem volt beállítva.
- **DSiWarehax a 3DS-en:** Dumpold a DS WiFi Settings ROM-ot (SDK5.5) a GodMode9 segítségével, és állítsd be Donor ROM-nak.

#### Miért nem tudok beállítani Donor ROM-ot?
Ha van egy cím, amelyhez donor ROM-ra van szükség, és a TWLMenu által keresett ROM nem mutatja meg a lehetőséget, hogy donor ROM-nak állítsd be (feltéve, hogy lefelé görgetsz), akkor keress egy másik ROM-ot, amelyet donornak állíthatsz be.

#### Mi az esti fordítás (nightly) és hol szerezhetem be?
Az esti fordítás egy fordítás a legutolsó változtatásokkal. Az esti fordítások instabilak lehetnek, de tartalmazzák a legutolsó hibajavításokat. Az nds-bootstrap esti fordításokat beszerezheted a [TWLBot/Builds GitHub repository](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z)-ból.

#### Miért nem működnek a csalásaim?
- Egyes csalások lehet, hogy gombbal aktiválhatók vagy vannak egyéb feltételek, amelyeket teljesíteni kell. További információkért nézd meg a csalás leírását
  - A **TW**i**L**ight Menu++-ban Y-t nyomva megtekintheted a csalás információit, ha elérhető
- A legtöbb csalást DS módban való használatra fejlesztették ki, és előfordulhat, hogy DSi módban nem működik megfelelően. Ha a játék DSi-Enhanced, próbáld meg beállítani, hogy DS módban fusson
- A mód, ahogy az E csalás típusok implementálva vannak az nds-bootstrap-ben jelenleg hibás, ami azt jelenti, hogy vagy működnek vagy nem. A csalás, amit használsz valószínűleg ilyen típusú és nem tudni ez mikor lesz javítva

További információkért a csalásokról látogass el [Action Replay csalás fejezethez a Kereskedelmi ROM-ok oldalon](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Hogyan készíthetek képernyőképeket?
Képernyőképeket készíthetsz a fő képernyőről a játékbani menün keresztül. Alapértelmezés szerint a jáékon belüli menü a az <kbd class="l">L</kbd> + <kbd>Le</kbd> + <kbd>SELECT</kbd> gombokra nyílik, ezután válasz a then select `Képernyőkép...` menüpontot, majd módosítsd a VRAM bank-ot, ha szükséges és nyomj <kbd class="face">A</kbd> gombot a képernyőkép mentéséhez.

A PC-den megtekintéséhez a képernyőképeknek ki kell csomagolnod az `sd:/_nds/nds-bootstrap/screenshots.tar` fájlt, amiben találhatók a képernyőképek, BMP formátumban. További üres BMP fájlok is lesznek, hogy a TAR fájl 50-re feltöltéséhez fel, ezeket egyszerűen figyelmen kívül lehet hagyni vagy törölni.

Az nds-bootstrap csak 50 képernyőképet tud rakni a `screenshots.tar` fájlba, így ha már közel jársz hozzá, akkor érdemes kinyerni azokat és törölni a TAR fájlt. Az nds-bootstrap ezután egy új TAR fájlt fog generálni, amikor legközelebb betöltesz egy játékot.

#### Mi az a fő képernyő és miért csak arról készíthető képernyőkép?
A "fő" képernyő az a képernyő, amelyet a fő motorral rajzolnak, ami lehet bármelyik fizikai képernyő. Általában ez az a képernyő, ahol a fő játékmenet zajlik, és ha egy képernyő 3D-s, akkor az mindig a fő képernyő. Ez mindig a felső képernyő, ha a játékbani menüben vagy.

Az ok, amiért csak a fő képernyőről lehet képernyőképeket készíteni, a Nintendo DS hardveres korlátozása: nincs framebuffer, de van egy kép rögzítő funkciója, amely lehetővé teszi a fő engine kimeneteinek rögzítését. Ezt leggyakrabban a játékok használják a 3D megjelenítésére mindkét képernyőn, de képernyőképek készítésére is használható.

#### Mi az a "VRAM bank" amit megkérdez, amikor képernyőképet készítek?
Amikor képernyőképet készítünk az nds-bootstrap segítségével, annak a DS képernyő rögzítő funkcióját kell használnia a fő enginge-ből, hogy rögzítsen egy képet, azonban ez a képernyő rögzítő csak VRAM-ba tud írni és az első négy bank egyikét igényli. Az nds-bootstrap megpróbál kiválasztani egy olyan bankot, amelyet nem használ a fő engine, így általában egyszerűen figyelmen kívül hagyhatod ezt, azonban bizonyos esetekben mind a négy lehetséges VRAM bankot használja a fő engine, így nem lehet tökéletes képernyőképet készíteni, és ki kell választanod azt a bankot, amelyik a legjobban néz ki.

#### Tudok online játszani játékokat az nds-bootstrap használatával?
Az nds-bootstrappal való online játék ugyanúgy fog működni, mint a valódi játékkártyákkal. Az alternatív online szolgáltatáshoz való csatlakozással kapcsolatos információkat a [Wi-Fi](../ds-index/wifi) oldalon találsz.
- Ha DSi-Enhanced játékkal játszol DS módban, akkor csak nem biztonságos vagy WEP hálózati kapcsolatra van lehetőséged

#### Károsíthatja a konzolomat, ha egy játékot úgy állítok be, hogy 133 MHz-es (TWL) CPU-sebességet használjon?
Nem. Bár nem minden játék működik megfelelően ebben a beállításban, a DSi és a 3DS úgy lett tervezve, hogy képes legyen elérni ezt a CPU-sebességet.
- Ha hibát észlelsz egy játék 133 MHz (TWL) CPU sebességgel futtatásakor, hozz létre egy hibajegyet a [**TW**i**L**ight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues)-ban, leírva a jelenséget, így feketelistázásra kerülhet az ezen a CPU sebességen indításra

#### Fel tudom gyorsítani a játékokat az nds-bootstrap használatával?
Bár a TWL CPU sebesség csökkentheti a lagot, az nds-bootstrap nem képes a tervezettnél nagyobb sebességgel futtatni a játékokat.

#### Át tudom konfigurálni a gombokat nds-bootstrap-pel?
Nem. Mivel az nds-bootstrap natívan futtatja a játékokat, a legtöbb gomb funkcióját nem tudja megváltoztatni. Ennek egyetlen módja ennek a játék módosítása vagy csalókódok használata.

#### Hogyan játszhatok randomizált Pokémon ROM-okat az nds-bootstrap segítségével?
A Pokémon HeartGold/SoulSilver, Black/White és Black 2 / White 2 rendelkezik kalózkodás elleni védelemmel, amelyeket ki kell patchelnii *mielőtt* randomizáljuk a ROM-ot. Ezt a [DS-Scene ROM Tool](https://gbatemp.net/download/35735/)segítségével tudod megtenni.
- A randomizált ROM-okat nem lehet röptében AP-patchelni, mint a játékok vanilla verzióit, mert a ROM-ok randomizálása túl sok egyedi lehetséges kimenettel jár ahhoz, hogy a **TW**i**L**ight Menu++-ba ésszerűen be lehessen tenni

#### Mik azok a DSi binárisok? Hogyan szerezhetem meg őket?
A DSi binárisok a játék kódjának azon részei, amelyeket a DSi (és a 3DS) rendszereken kell használni a DSi funkcióinak, például a kameráknak és a továbbfejlesztett Wi-Fi képességeknek a kihasználására. A régebbi dumpolási módszerek nem biztos, hogy megfelelően dumpolták ezeket.

- A DSi binárisok nélküli ROM-ok továbbra is játszhatók bármely konzolon DS módban, amelyben a játék úgy fut, mintha Nintendo DS Phat/Lite konzolon játszanák

A DSi bináris programokat tartalmazó ROM-hoz a [a játékkártya újradumpolásával](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) juthatsz hozzá.
