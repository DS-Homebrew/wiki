---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: Játék széles képenyőn
description: A TWiLight Menu++ széles képernyős használata Nintendo 3DS-en
---

Ehhez a fejezethez egy a [3ds.hacks.guide](https://3ds.hacks.guide) oldalról származó modern CFW környezettel rendelkező 3DS családhoz tartozó konzolra van szükség.
{:.alert .alert-info}

Ha jelenleg a Luma v13-at használod, kérjük, frissíts a v13.0.1 verzióra, mielőtt követnéd ezt az útmutatót.
{:.alert .alert-info}

### Telepítés
1. Nyisd meg az FBI-t és válaszd a `Remote Install`, majd a `Scan QR Code` opciót
1. Olvasd be ezt a QR kódot a [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) legfrissebb verziójának telepítéséhez<br> ![Universal-Updater QR kód](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Nyisd meg az Universal Updater-t a HOME Menüből
1. Telepítsd a TWPatch csomagot
   - Ha a konzolod nem tud hozzáférni az internethez, akkor közvetlenül letöltheted a [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) fájlt, majd telepítheted az FBI segítségével
1. Return to the HOME menu and launch TWPatch
   - If you get a message which says `Can't open /luma/exeTWL.bin`, then use [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/) to fix broken TWL mode
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
1. Ha a széles képernyős módban ragadtál minden TWL_FIRM-ben (beleértve TWLMenu++ GUI-t) ezen útmutató követése után és egy széles képernyő kompatibilis játékot futtatva, töröld a `TwlBg.cxi`-t a `sd:/luma/sysmodules/` mappából.
   - Ha a probléma továbbra is fennáll, [távolítsa el a](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) majd [telepítse újra a](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++-t, és kövesse újra a fenti útmutatót, valamint használja a Luma eredeti verzióját
1. A legtöbb széles képernyős játék csak a 3D elemeket igazítja széles képernyőre, a 2D elemek (mint például a menük) csak nyújtásra kerülnek
1. Luma3DS-nek az SD kártyáról **kell** betöltve lennie, Ha a széles képernyő nem működik, biztosítsd, hogy a `boot.firm` megtalálható legyen az SD kártyád gyökerében
