---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: Splash awal nyala ubah suai (custom)
description: How to use custom splash screens for TWiLight Menu++
---

You can use custom GIF files to have custom splash screens while booting TWiLight Menu++. They need to be named `splashtop.gif` and `splashbottom.gif` and be in `sd:/_nds/TWiLightMenu/extras`, then set `DSi Splash Screen` to `Custom` in TWiLight Menu++ settings.

Most GIF files up to 256x192 should work, with a few exceptions:
- GIF files over 1 MiB (DSi Mode) or 256 KiB (DS Mode) may not play at full speed as they will be decompressed on the fly
- Between the two, the GIFs must be less than about 10 MB (DSi Mode) or about 2 MB (DS Mode)
- If both GIFs are set to loop forever then they will show for 3 seconds, so set a loop count on at least one to control the time
- The user input flag is supported so set it and a long delay on a frame if you want to show a splash and wait like the defaults
   - Only the GIF waiting for input will be paused, so the other can continue animating
- If using Local Color Tables the whole frame must be overwritten as it will replace the whole screen's palette, not just the current frame
- Interlaced and text frames will not work
