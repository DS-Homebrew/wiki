---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: Játék széles képenyőn
description: A TWiLight Menu++ széles képernyős használata Nintendo 3DS-en
---

Nintendo 2DS vagy 3DS konzolt igényel.
{:.alert .alert-info}

### Előkészítés
- Ellenőrizd, hogy a Luma `boot.firm` -je megtalálható-e az SD kártya gyökerében, ahhoz, hogy ez működjön

### Telepítés
1. Töltsd le a [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia)-et és másold a `TWPatch.cia`-t az SD kártyádra ([GBAtemp beszélgetés szál](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Telepítsd a `TWPatch.cia`-t az FBI-jal
   - Használhatod az Universal-Updater-t is a TWPatch telepítéséhez a korábbi két lépés helyett
1. Térj vissza a home menübe és indítsd el a TWPatch-ot
1. Tarts nyomva az <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> gombokat, hogy megnyisd a patch menüt és engedélyezd a `Widescreen patch (384x240 16:10)` opciót
1. (Opcionális!) A kevésbé pixeles széles képernyőhöz engedélyezd a `GPU átméretezés (homályos, nincs szűrő)` opciót is
1. Nyomj <kbd class="face">B</kbd> gombot a patch menüből kilépéshez
1. Nyomj <kbd>START</kbd> gombot a `TwlBg.cxi` fájl széles képernyővel történő generálásához
   - Ha felső képernyő nem mutatja, hogy a széles képernyő patch engedélyezett, próbáld újra a 3-es lépéstől
1. Mozgasd a `TwlBg.cxi` fájlt az `sd:/luma/sysmodules/` mappából a `sd:/_nds/TWiLightMenu/TwlBg/` mappába (hozd létre a `TwlBg` mappát, ha nem létezik) és nevezd át `Widescreen.cxi` névre
1. Indítsd újra 3DS-ed, miközben nyomva tartod a <kbd>SELECT</kbd> gombot, hogy megnyíljon a Luma3DS konfiguráció
1. Engedélyezd az `external FIRMs and modules`, opciót, majd nyomd meg a<kbd>START</kbd> gombot a mentéshez és kilépéshez
1. Nyisd meg a TWiLight Menu++-t, nyomd meg a <kbd class="face">Y</kbd> gombot a kívánt játékon, hogy megjelenjenek a játékonkénti beállítások, és állítsd be a `Képernyő képarány`-t `16:10` értékre

Mindennel elkészültél! Élvezd a DS játékokat széles képernyőn!

**MEGJEGYZÉSEK:**
1. Ne tartsd nyomva a <kbd>START</kbd> vagy <kbd>SELECT</kbd> gombokat, amikor indítod a TWLMenu++-t, ha nem szeretnéd, hogy a széles képernyő hibásan nézzen ki
1. Nem minden játék széles képernyő kompatibilis. [Itt található a széles képernyőt támogató játékok listája](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Ha a széles képernyős módban ragadtál minden TWL_FIRM-ben (beleértve TWLMenu++ GUI-t) ezen útmutató követése után és egy széles képernyő kompatibilis játékot futtatva, töröld a `TwlBg.cxi`-t a `sd:/luma/sysmodules/` mappából és [távolítsd el](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) majd [telepítsd újra](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) a TWiLight Menu++-t, és kövesd újra a fenti lépéseket
1. A legtöbb széles képernyős játék csak a 3D elemeket igazítja széles képernyőre, a 2D elemek (mint például a menük) csak nyújtásra kerülnek
