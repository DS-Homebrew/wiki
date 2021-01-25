---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Information about the Nintendo DSi and the Nintendo 3DS's TWL_FIRM
---

### CFW telepítése
Habár a legtöbb előny az egyedi firmware a Nintendo DSi és Nintendo 3DS számára nyújtja, lehetővé teszi, hogy felold a konzolod lehetőségeit. Az egyedi firmware telepítése elég könnyű és a legtöbb esetben csak egy (micro)SD kártyára van szükséged hozzá. A legjobb útmutatókkal rendelkezünk, kövesd lépésről lépésre.

- [3DS Hacking Guide](https://3ds.hacks.guide)
  - Lightning parancs: `mod 3ds`
  - Kuriisu parancs: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
  - Lightning parancs: `mod dsi cfw`
  - Kuriisu parancs: `guide dsi`

### CPU sebességek
The Nintendo DS shipped with a 67MHz processor in 2004. The Nintendo DSi shipped with an 133MHz processor in 2009. Most games of the Nintendo DS library were made before the Nintendo DSi came out, and as such the only processor available to them was 67MHz. Néhány alkalmazás ehhez az órajelhez kötötte magát, és ennek eredményeként nem működik jól magasabb órajel sebességgel. A legtöbb játék azonban jobban teljesít az eredetinél magasabb órajellel.

Az nds-bootstrap rendelkezik a TWL Clock Speed opcióval, de nem próbálja meg igazítani a ROM-ot, hogy működjön magasabb órajellel. Ez az alkalmazáson múlik, és az alkalmazások amik nem működnek magasabb órajellel, NEM jelentik az nds-bootstrap hibáját.

### A Nintendo DSi System Menu
A Nintendo DSi System Menu 32-bit egészen dönti el, hogy mennyi a szabad tárhely az eszközön. Using a device source that goes above the 32-bit integer limit, this counter is overflowed into a negative number, which crashes into an "An error has occurred" black screen.

A tartományok, amik túlcsordultatják kettes csoportokban jelenkeznek. Például, 1-2 GB szabad tárhely engedélyezett, míg 3-4 nem. 5-6 GB szabad tárhely engedélyezett, míg 7-8 nem.

Ez a hiba soha nem fordul elől, ha a System Menu a NAND chipről bootolunk (mivel azok maximum 128 MB méretűek) de egy átirányító rendszer (mint például a hiyaCFW) ezt a hibát indukálhatja. Szerencsére ez hiba könnyen javítható egy dummy fájllal, hogy beállítsa a számlálót a pozitív számokra. A legutolsó hiyaCFW ezt automatikusan intézi számodra a legfrissebb verzióban.

-----

Az 1.4.0 verzióban az RSA aláírások a a DS Cart fehérlistában nem ellenőrzöttek. Létezik egy exploit a Nintendo DSi flashcard whitelist sérülékenységre, ami lehetővé teszi az ARM9 processzor feletti hozzáférés átvételét. Szüksége van az 1.4.0 verzióra (patchelésre került egy jövőbeni verzióban és nem létezett korábbi verziókban) és egy flashcard-ra módosított ROM-mal.

### Nintendo DSi Slot-1 hozzáférés & letiltás
A Slot-1 hozzáférés blokkol, amikor alkalmazásokat indít a System Menu-ből, kivéve ha az említett alkalmazás a Slot-1 launcher maga vagy a System Settings. Ahhoz, hogy egy normálisan indíthatatlan slot-1 cartridge-t indítsunk, szükség van egy System Settings exploitra vagy egy Unlainch telepítésre. Ezek bármelyike nélkül, nem tud indítani indíthatatlan flashcard-ot és nem tud dump-olni ROM-ot az SD kártyára.

A flashcard white list RSA aláírásokkal kerül ellenőrzésre kivéve az 1.4.0 firmware verziót. Ez azt jelenti, hogy az emberek white list-elhetik saját kártyájukat

Az 1.4.0 előtt a white list két szekciót tartalmazott. Az 1.4.0-nál bevezetésre került a harmadik szekció, amivel a blokkolhatók olyan flash kártyák, amik az első kettőn túljutottak. A harmadik szekció 8 különböző szekciót olvas fel a rom-ról és ellenőrzi egy hash-sel, hogy a rom módosításra került-e. Azon az ellenőrzés hiánya miatt túlcsordultathatjuk a kivétel vektort/megszakítás címet elég nagy értékkel. A legjobb az egészben, hogy ez ARM7-en fut (másik nevén a biztonsági processzor) így ez lehetővé teszik az első exploit-ot az ARM7 processzor-ra. Mivel ez az SCFG regiszterek kizárása előtt történik, fejlett homebrew alkalmazást is futtathatunk (mint például a Slot-1 dumper-ek & külső slot-1 dumper-ek)

Sajnos a követelmények elég szűkek. 1.4.0 verziót és módosított ROM-os flashcard-ot igényel. Továbbá, az exploit nem jött ki sosem hivatalosan, mert az Unlaunch-ot még egyszerűbb telepíteni, és kevesebb követelménnyel rendelkezik (csak egy út a homebrew felé) hasonló előnyökkel.

### Nintendo DSi Camera
A Nintendo DSi Camera alkalmazás képs fényképek készítésére JPEG-ben és azok mentésére a System Memory-ba vagy az SD kártyára. A mód, ahogy betöltésre kerül korlátozza az alkalmazást a DSi által készített képekre, a nem megfelelő HMAC tárolás miatt egy egyedi EXIF tag-ban. Bármilyen egyedi kép nem olvasható a DSi-n, függetlenül attól, hogy PC-n készült vagy szerkesztett.

A `pit.bin` fájl alapján kerül a képek betöltésének sorrendje meghatározásra. Azonban a fejléc méret az offset 0x16-nál nem ellenőrzött, így elég nagy fejléc méret túl tud lépni ezeken a határokon, a buffer felülírását eredményezve aláíratlan kódra ugorva. Ez az, ahogy a Memory Pit működik.

### Nintendo DSi 2. Bootstage
A Nintendo DSi második bootstage tölti be a launcher "title.tmd"-jét a memóriába. Azonban ez nem végez fájlméret ellenőrzést, ami azt jelenti, hogy az első 80k bájt betöltésre kerül a RAM-ba, miközben a többi az egyedi payload lehet. Ez az alapja az Unlaunch exploit-nak.
