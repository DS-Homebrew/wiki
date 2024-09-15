---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Információk a Nintendo DSi és a Nintendo 3DS TWL_FIRM-jéről
---

### CFW telepítése
A DSi és 3DS rendszer családok moddingjának legfőbb előnye, hogy több felold további lehetőségeket a konzolodban. Az egyedi firmware telepítése elég könnyű és a legtöbb esetben csak egy (micro)SD kártyára van szükséged hozzá. Alább a legjobb útmutatók, amit követhetsz, lépésről lépésre leírásokkal:

- [3DS Hacking Guide](https://3ds.hacks.guide)
    - Lightning parancs: `mod 3ds`
    - TWLHelper parancs: `guide 3ds`
    - Kurisu parancs: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
    - Lightning parancs: `mod dsi`
    - TWLHelper parancs: `guide dsi`
    - Kurisu parancs: `guide dsi`

### CPU sebességek
A Nintendo DS 67 MHz-es processzorral került szállításra 2004-ben, a Nintendo DSi pedig 133 MHz-es processzorral öt év múlva. A legtöbb játék a Nintendo DS könyvtárból azelőtt készült, mielőtt a Nintendo DSi kijött, így az elérhető processzor sebesség számukra csak 67 MHz volt. Néhány alkalmazás ehhez az órajelhez kötötte magát, és azok ennek eredményeként nem fognak jól működni magasabb órajel sebességgel. A legtöbb játék azonban jobban teljesít az eredetinél magasabb órajellel.

Az nds-bootstrap rendelkezik a TWL Clock Speed opcióval, de nem próbálja meg igazítani a ROM-ot, hogy működjön helyesen magasabb órajellel. Ez az alkalmazáson múlik, és az alkalmazások amik nem működnek magasabb órajellel, NEM jelentik az nds-bootstrap hibáját.

### Nintendo DSi Menu
Az 1.4.0 verzióban az RSA aláírások a a DS Game Card fehérlistában nem ellenőrzöttek. Ez a sérülékenység támadható, és lehetővé teszi a hozzáférés átvételét az ARM9 processzor felett. 1.4.0 verzióra van szüksége (a későbbi verziókban javításra került és nem létezett a korábbi verziókban) és egy flashcard-ra egy módosított ROM-mal.

Továbbá található egy ismert hiba a Nintendo DSi Menu-ben arról, hogyan számolja a szabad területet, ami hibát okozhat, ha a menüt nem az eredeti NAND-ról használják, további információért látogasd meg a [hiyaCFW GYIK & hibaelhárítás](../hiyacfw/faq#the-free-space-bug) oldalt.

### Nintendo DSi Slot-1 hozzáférés & letiltás
A Slot-1 hozzáférés blokkolt, amikor alkalmazásokat indítasz a System Menu-ből, kivéve ha az említett alkalmazás a Slot-1 launcher maga vagy a System Settings. Ahhoz, hogy egy normálisan indíthatatlan Slot-1 cartridge-t indíts, szükséged van egy System Settings exploitra vagy egy Unlainch telepítésre. Ezek bármelyike nélkül, nem tudsz indítani indíthatatlan flashcard-ot és nem tudsz dump-olni ROM-ot az SD kártyádra.

Az 1.4.0 előtt a white list két szekciót tartalmazott. Az 1.4.0-nál bevezetésre került a harmadik szekció, amivel a blokkolhatók olyan flash kártyák, amik az első kettőn túljutottak. A harmadik szekció 8 különböző szekciót olvas fel a ROM-ról és ellenőrzi egy hash-sel, hogy a ROM módosításra került-e. Azonban az ellenőrzés hiánya miatt túlcsordultathatjuk a kivétel vektort/megszakítás címet egy elég nagy értékkel. A legjobb az egészben, hogy ez ARM7-en fut (a biztonsági processzor) így ez lehetővé teszik az első exploit-ot az ARM7 processzor-ra. Mivel ez az SCFG regiszterek kizárása előtt történik, fejlett homebrew alkalmazást is futtathatunk (mint például a Slot-1 dumper-ek).

Sajnos a követelmények elég szűkek. 1.4.0 verziót és módosított ROM-os flashcard-ot igényel. Az exploit nem jött ki sosem hivatalosan, mert az Unlaunch-ot még egyszerűbb telepíteni, és kevesebb követelménnyel rendelkezik (csak egy út a homebrew felé) hasonló előnyökkel.

### Nintendo DSi Camera
A Nintendo DSi Camera alkalmazás képes fényképek készítésére JPEG formátumban és azok mentésére a System Memory-ba vagy az SD kártyára. A mód, ahogy betöltésre kerül korlátozza az alkalmazást a DSi által készített képekre, a nem megfelelő HMAC tárolás miatt egy egyedi EXIF tag-ban. Bármilyen egyedi kép nem olvasható a DSi-n, függetlenül attól, hogy PC-n készült vagy szerkesztett, ha csak nincs megfelelően mentve.

A `pit.bin` fájl alapján kerül a képek betöltésének sorrendje meghatározásra. Azonban a fejléc méret az offset 0x16-nál nem ellenőrzött, így elég nagy fejléc méret túl tud lépni ezeken a határokon, a buffer felülírását eredményezve aláíratlan kódra ugorva. Ez az ahogy a Memory Pit működik.

### Nintendo DSi 2. Bootstage
A Nintendo DSi második bootstage tölti be a launcher "title.tmd"-jét a memóriába. Azonban ez nem végez fájlméret ellenőrzést, ami azt jelenti, hogy az első 80k bájt betöltésre kerül a RAM-ba, miközben a többi az egyedi payload lehet. Ez az alapja az Unlaunch exploit-nak.

### RTCom
Az RTCom a használata a 3DS RTC-jének, hogy lehetővé tegye, hogy az ARM7 és ARM11 CPU kommunikáljon egymással, még a TWL_FIRM-ben is. Ez engedélyezi a 3DS szolgáltatások használatát a DS(i) módban. Ebbe bele tartozik a Circle Pad analóg bevitel, a széles képernyő engedélyezés és a gyro támogatás. Jelenleg az egyetlen publikus DS homebrew ami használja az RTCom-ot bizonyos GBARunner2 buildek, amik rendelkeznek a 3DS gyro funkció támogatásával. Az RTCom engedélyezéséhez használnod kell a [TWPatch](https://gbatemp.net/threads/542694/)-et.
