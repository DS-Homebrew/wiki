---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: Att spela i bredbild
description: Hur du använder TWiLight Meny++ i bredbild på Nintendo 3DS
---

Kräver en gammal/ny Nintendo 3DS eller 2DS konsol.
{:.alert .alert-info}

### Förberedelse
- Se till att Lumas `boot.firm` är på SD-roten för att detta ska fungera

### Installation
1. Ladda ner [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) och kopiera `TWPatch.cia` till ditt SD-kort ([GBATemp tråd](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installera `TWPatch.cia` med FBI
   - Du kan också använda Universal-Updater för att installera TWPatch annars
1. Återgå till hemmenyn och starta TWPatch
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

Du är klar! Njut av dina DS spel i bredbild!

**ANTECKNING 1**: Varje spel/app i DS(i) läge körs i bredbild, även de spel som inte är kompatibla med bredbild. För att detta ska rättas så att bara bredbild-kompatibla spel kan köras i bredbild, vänta på att RTCom-aktiverad bredbild ska släppas.

**ANTECKNING 2:** Håll inte nere <kbd>START</kbd> eller <kbd>SELECT</kbd> när du startar upp TWLMenu++ om du inte vill att bredbild ska se buggad ut. Om du inte ser inställningen för skärmens bildformat så väntar du på att RTCom-aktiverad bredbild ska släppas.

Inte alla spel är kompatibla i bredbild. [Vi har skapat en lista över spel med bredbild](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
