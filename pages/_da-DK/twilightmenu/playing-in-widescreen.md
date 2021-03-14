---
lang: en-US
layout: wiki
section: twilightmenu
category: other
title: Playing in Widescreen
description: How to use TWiLight Menu++ in widescreen on the Nintendo 3DS
---

Requires a Nintendo 3DS or 2DS console.
{:.alert .alert-info}

### Preparation
- Make sure Luma's `boot.firm` is on the SD root for this to work

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

You're all done! Enjoy your DS games in widescreen!

**NOTE1:** Every game/app in DS(i) mode will run in widescreen, even the games that aren't compatible with widescreen. For this to be fixed so only the widescreen-compatible games run in widescreen, wait for RTCom-activated widescreen to be released.

**NOTE2:** Do not hold <kbd>START</kbd> or <kbd>SELECT</kbd> when launching TWLMenu++, if you don't want widescreen to look glitched. If you don't see the screen aspect ratio setting, wait for RTCom-activated widescreen to be released.

Not every game is widescreen compatible. [We have created a list of games with widescreen](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
