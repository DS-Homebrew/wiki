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
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scale test (health hazard!)`
   - The "health hazard!" is because it gave the developer a headache due to its blurriness
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
   - If widescreen still doesn't work, wait for RTCom-activated widescreen to be released
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++ settings, switch to the `Misc settings` page, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

Mindennel elkészültél! Élvezd a DS játékokat széles képernyőn!

**MEGJEGYZÉS1**: Minden játék/app a DS(i) módban széles képernyővel fog futni, még azok is amelyek nem kompatibilisek a széles képernyővel. Ennek a javítására, hogy csak a széles képernyő kompatibilis játékok fussanak széles képernyőn, várj az RTCom-aktivált széles képernyő kiadásáig.

**MEGJEGYZÉS2:** Ne tartsd nyomva a <kbd>START</kbd> vagy <kbd>SELECT</kbd> gombokat, amikor indítod a TWLMenu++-t, ha nem szeretnéd, hogy a széles képernyő hibásan nézzen ki. Ha nem látod a képernyő arány beállítást, várj az RTCom-aktivált széles képernyő kiadásáig.

Nem minden játék széles képernyő kompatibilis. [Készítettünk egy listát a széles képernyőt támogató játékokról](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
