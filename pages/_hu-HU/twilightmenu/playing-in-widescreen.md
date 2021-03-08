---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: Játék széles képenyőn
description: A TWiLight Menu++ széles képernyős használata Nintendo 3DS-en
---

Old / New Nintendo 3DS vagy 2DS konzolt igényel.
{:.alert .alert-info}

### Előkészítés
- Ellenőrizd, hogy a Luma `boot.firm` -je megtalálható-e az SD kártya gyökerében, ahhoz, hogy ez működjön

### Telepítés
1. Töltsd le a [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia)-et és másold a `TWPatch.cia`-t az SD kártyádra ([GBATemp beszélgetés szál](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Telepítsd a `TWPatch.cia`-t az FBI-jal
   - Használhatod az Universal-Updater-t is a TWPatch telepítéséhez a korábbi két lépés helyett
1. Térj vissza a home menübe és indítsd el a TWPatch-ot
1. Tarts nyomva az <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> gombokat és engedélyezd a `Widescreen patch (384x240 16:10)` opciót
1. (Opcionális!) A kevésbé pixeles széles képernyőhöz engedélyezd a `GPU átméretezés tesztet (egészségügyi veszély!)`
   - Azért van "egészségügyi veszély!", mert a fejlesztőnek fejfájást okozott a homályossága miatt
1. Nyomj <kbd>START</kbd> gombot a `TwlBg.cxi` fájl széles képernyővel történő generálásához
   - Ha felső képernyő nem mutatja, hogy a széles képernyő patch engedélyezett, próbáld újra a 3-es lépéstől
   - Ha a széles képernyő nem működik, várj az RTCom-activált széles képernyő kiadásáig
1. Indítsd újra 3DS-ed, miközben nyomva tartod a <kbd>SELECT</kbd> gombot, hogy megnyíljon a Luma3DS konfiguráció
1. Engedélyezd az `external FIRMs and modules`, opciót, majd nyomd meg a<kbd>START</kbd> gombot a mentéshez és kilépéshez
1. Nyisd meg a TWiLight Menu++ beállításokat, majd válts az `Egyéb beállítások` oldalra és állítsd be a `Képernyő arány`-t `16:10`-re
   - Ez játékonként is beállítható egyébként

Mindennel elkészültél! Élvezd a DS játékokat széles képernyőn!

**MEGJEGYZÉS1**: Minden játék/app a DS(i) módban széles képernyővel fog futni, még azok is amelyek nem kompatibilisek a széles képernyővel. Ennek a javítására, hogy csak a széles képernyő kompatibilis játékok fussanak széles képernyőn, várj az RTCom-aktivált széles képernyő kiadásáig.

**MEGJEGYZÉS2:** Ne tartsd nyomva a <kbd>START</kbd> vagy <kbd>SELECT</kbd> gombokat, amikor indítod a TWLMenu++-t, ha nem szeretnéd, hogy a széles képernyő hibásan nézzen ki. Ha nem látod a képernyő arány beállítást, várj az RTCom-aktivált széles képernyő kiadásáig.

Nem minden játék széles képernyő kompatibilis. [Készítettünk egy listát a széles képernyőt támogató játékokról](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
