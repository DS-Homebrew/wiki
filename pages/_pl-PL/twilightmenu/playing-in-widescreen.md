---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: Granie na szerokim ekranie
description: Jak używać TWiLight Menu++ w trybie szerokiego (panoramicznego) ekranu na Nintendo 3DS
---

Requires a Nintendo 3DS or 2DS console.
{:.alert .alert-info}

### Preparation
- Upewnij się, że masz `boot.firm` Luma3DS w katalogu głównym karty SD

### Installing
1. Download [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) and copy `TWPatch.cia` to your SD card ([GBATemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Install `TWPatch.cia` using FBI
   - You can also use Universal-Updater to install TWPatch instead of the previous two steps
1. Return to the home menu and launch TWPatch
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

I to wszystko! Ciesz się swoimi szerokoekranowymi grami na DS!

**NOTE1:** Every game/app in DS(i) mode will run in widescreen, even the games that aren't compatible with widescreen. Żeby to naprawić, musisz poczekać aż wyjdzie tryb szerokoekranowy uruchamiany przez RTCom.

**NOTKA2:** Nie przytrzymuj <kbd>START</kbd> bądź <kbd>SELECT</kbd> podczas włączania TWLMenu++, jeśli nie chcesz, żeby szeroki ekran wyglądał dziwnie. Jeśli nie widzisz ustawień proporcji ekranu, poczekaj aż wyjdzie możliwość uruchomienia szerokiego ekranu przez RTCom.

Nie każda gra działa w szerokim ekranie. [Natomiast stworzyliśmy listę z działającymi grami](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
