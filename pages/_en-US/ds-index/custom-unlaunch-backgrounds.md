---
lang: en-US
layout: wiki
section: ds-index
category: guides
title: Custom Unlaunch Backgrounds
description: How to make and use custom Unlaunch backgrounds
---

You can find premade Unlaunch backgrounds on the [TWiLight Menu++ themes site](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

Unlaunch can be patched to have a custom background image and text color palette. This needs to be a 256 x 192 GIF, with a few restrictions:
- Only the first frame will be shown, no animated backgrounds
- The file must be less than or equal to 15,472 bytes
- GIFs with more than 31 colors require specially made palettes to prevent breaking the text

### Installing
1. Copy the GIF file to `sd:/backgrounds/`
1. Download the latest version of [Safe Unlaunch installer](https://github.com/edo9300/unlaunch-installer/releases/latest/download/unlaunch-installer.dsi) to your SD card
1. Open the installer using whichever menu you're using (ex. TWLMenu++, akmenu-next, etc.)
1. Select `[Custom background]`
1. Select one of the custom backgrounds listed, and select `Yes` to confirm
1. Select the `Uninstall unlaunch` or `Restore launcher tmd` option, and press <kbd class="face">A</kbd> once it's done
1. Select the `Install unlaunch` option
1. Press the <kbd class="face">A</kbd> button once installation is done

### Using GIFs with more than 31 colors
As the GIF's palette is loaded to the same area of VRAM as the text palettes it will overwrite them if the palette gets too large, however this can be worked around by including the text palettes in the GIF's palettes. Using this with different colors would also let you have different text colors, should you want that. These instructions will be for [GIMP](https://gimp.org), but any image editor capable of rearranging the palette of an image will work.
1. Open your image in GIMP and make sure it's 256 x 192 pixels
1. In the menu bar at the top, select `Image` -> `Mode` -> `Indexed...`
1. Select `Generate optimum palette` and set the maximum colors to anything up to 226 colors
1. Select a dithering pattern from the `Color dithering` dropdown
    - Images without dithering generally compress best, but with it will generally look better, try and see which looks best for the size
1. Click `Convert`
1. In the menu bar at the top, select `File` -> `Export As...`, give it a name with the extension `.gif`, and click `Export`
    - If it gives any warnings, click the accept button
1. In the next popup, disable the `GIF comment` and click `Export`
1. Check the size of the exported file, if it's 15,472 bytes or less, then skip to step 13
1. If your GIF is too large, then using either [gifsicle](http://www.lcdf.org/gifsicle/) or [ezgif.com](https://ezgif.com/optimize) you can try optimizing it
    - These instructions will use ezgif as its simpler, being a website
1. Open https://ezgif.com/optimize, and upload your GIF
1. Try different compression levels until you find the best one under 15,472 bytes (15.11 KiB), ideally a bit under as GIMP may increase the size a bit
1. Save the optimized GIF and open it in GIMP
1. In the menu bar at the top, select `Windows` -> `Dockable Dialogs` -> `Colormap`
1. Change your current `Foreground color` to #080808 and add 14 new colors with the `+` button
    - If your image doesn't have at least 133 colors you will need to keep adding colors until the last is index 146
1. Right click a color in the Colormap and select `Rearrange Colormap...`
1. Arrange your new colors so they match the ones outlined in red: (The 2nd and 3rd columns starting on the 4th row)<br>
    ![Palette with correct text colors](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Use the color picker to make your new colors match those in the above image
1. In the menu bar at the top, select `File` -> `Export As...`, give it a name with the extension `.gif`, and click `Export`
1. In the next popup, make sure `GIF comment` is off and click `Export`
1. Ensure the image is still under 15,472 bytes, if it's gotten too big then repeat from step 10 using a higher compression level
1. You're done! Follow the [installing](#installing) section above to use your image!
