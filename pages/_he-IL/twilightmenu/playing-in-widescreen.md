---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: משחק במסך רחב
description: איך להשתמש בTWiLight Menu++ במסך רחב על Nintendo 3DS
---

דורש Old/New Nintendo 3DS או 2DS.
{:.alert .alert-info}

### הכנה
- וודאו שהקובץ`boot.firm` של Luma נמצא בשורש הSD שלכם

### התקנה
1. Download [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) and copy `TWPatch.cia` to your SD card ([GBAtemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. התקינו את `TWPatch.cia` באמצעות FBI
   - ניתן גם להשתמש בUniversal-Updater על מנת להתקין את TWPatch במקום 2 הצעדים הקודמים
1. חזרו לתפריט הבית והפעילו את TWPatch
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> to open the patch menu and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scaling (blurry, no filters)`
1. Press <kbd class="face">B</kbd> to exit the patch menu
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
1. Move `TwlBg.cxi` from `sd:/luma/sysmodules/` to `sd:/_nds/TWiLightMenu/TwlBg/` (create `TwlBg` folder, if it doesn't exist), and rename the file to `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++ settings, switch to the `Games/Apps settings` page, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

סיימתם! תהנו ממשחקי הDS שלכם במסך רחב!

**הערות:**
1. אל תלחצו על <kbd>START</kbd> or <kbd>SELECT</kbd> בטעינת TWLMenu++,, אם אתם לא רוצים שהמשחק במסך רחב יראה תקול
1. לא כל המשחקים תואמים מסך רחב. [Here is a list of games with widescreen support](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide
1. Most widescreen patches will only adjust 3D elements for widescreen, 2D elements (such as menus) will only be stretched
