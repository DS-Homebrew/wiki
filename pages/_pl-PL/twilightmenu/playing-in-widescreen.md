---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: Granie na szerokim ekranie
description: Jak używać TWiLight Menu++ w trybie szerokiego (panoramicznego) ekranu na Nintendo 3DS
---

Wymaga konsoli Nintendo 3DS lub 2DS.
{:.alert .alert-info}

### Przygotowanie
- Upewnij się, że masz `boot.firm` Luma3DS w katalogu głównym karty SD

### Instalowanie
1. Download [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) and copy `TWPatch.cia` to your SD card ([GBAtemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Zainstaluj `TWPatch.cia` przy użyciu FBI
   - Możesz również użyć programu Universal-Updater do zainstalowania TWPatch zamiast dwóch poprzednich kroków
1. Wróć do menu głównego i uruchom program TWPatch
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> to open the patch menu and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scaling (blurry, no filters)`
1. Press <kbd class="face">B</kbd> to exit the patch menu
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
1. Move `TwlBg.cxi` from `sd:/luma/sysmodules/` to `sd:/_nds/TWiLightMenu/TwlBg/` (create `TwlBg` folder, if it doesn't exist), and rename the file to `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++, press <kbd class="face">Y</kbd> on your desired game to bring up the per-game settings, and set `Screen Aspect Ratio` to `16:10`

I to wszystko! Ciesz się swoimi szerokoekranowymi grami na DS!

**NOTES:**
1. Do not hold <kbd>START</kbd> or <kbd>SELECT</kbd> when launching TWLMenu++, if you don't want widescreen to look glitched
1. Not every game is widescreen compatible. [Here is a list of games with widescreen support](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide
1. Most widescreen patches will only adjust 3D elements for widescreen, 2D elements (such as menus) will only be stretched
