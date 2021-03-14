---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: Att spela i bredbild
description: Hur du använder TWiLight Meny++ i bredbild på Nintendo 3DS
---

Requires a Nintendo 3DS or 2DS console.
{:.alert .alert-info}

### Förberedelse
- Se till att Lumas `boot.firm` är på SD-roten för att detta ska fungera

### Installation
1. Ladda ner [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) och kopiera `TWPatch.cia` till ditt SD-kort ([GBATemp tråd](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installera `TWPatch.cia` med FBI
   - Du kan också använda Universal-Updater för att installera TWPatch annars
1. Återgå till hemmenyn och starta TWPatch
1. Håll ner <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> och aktivera `Widescreen patch (384x240 16:10)`
1. (Valfritt!) För en mindre pixelerad bredbild, aktivera också `GPU scale test (hälsorisk!)`
   - Hälsorisken beror på att det gav utvecklaren en huvudvärk på grund av dess suddighet
1. Tryck <kbd>X</kbd> + <kbd>START</kbd> för att generera en `TwlBg.cxi` fil med bredbild
   - Om den översta skärmen inte indikerar att bred patchen är aktiverad, starta om från steg 3 igen
   - Om bredbild fortfarande inte fungerar, vänta tills RTCom-aktiverad bredbild släpps
1. Starta om din 3DS medan du håller <kbd>SELECT</kbd> för att öppna inställningarna för Luma3DS
1. Aktivera `external FIRMs and modules`, tryck <kbd>START</kbd> för att spara och avsluta
1. Öppna TWiLight Menu++ inställningar, växla till `Övriga inställningar` och ställ in `Skärmens bildformat` till `16:10`
   - Detta kan också göras i spelens spelspecifika inställningar

Du är klar! Njut av dina DS spel i bredbild!

**NOTE1:** Every game/app in DS(i) mode will run in widescreen, even the games that aren't compatible with widescreen. För att detta ska rättas så att bara bredbild-kompatibla spel kan köras i bredbild, vänta på att RTCom-aktiverad bredbild ska släppas.

**ANTECKNING 2:** Håll inte nere <kbd>START</kbd> eller <kbd>SELECT</kbd> när du startar upp TWLMenu++ om du inte vill att bredbild ska se buggad ut. Om du inte ser inställningen för skärmens bildformat så väntar du på att RTCom-aktiverad bredbild ska släppas.

Inte alla spel är kompatibla i bredbild. [Vi har skapat en lista över spel med bredbild](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
