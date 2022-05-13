---
lang: id-ID
layout: wiki
section: twilightmenu
category: lainnya
title: Cara mendapatkan Ikon dan Banner ubah suai
description: How to set custom icons and banners for folders and games in TWiLight Menu++
---

1. Download the icon or banner you want to set from [the Skins site](https://skins.ds-homebrew.com/icon/)
   - Banners have a `.bin` file extension, they include custom game titles and its icons can be still or animated. When used with folders, the custom titles won't be shown, and the folder name will be displayed instead.
   - Icons have a `.png` file exension and will only be shown as still images.
   - Any `.png` file that's 4 bits in color depth and 32x32 pixels or less in resolution can also be used, not only the ones present in the the Skins site.
1. Put the icon/banner file in `sd:\_nds\TWiLightMenu\icons`
   - If it's a custom icon or banner for a folder, rename the file so that its name is the same as the name of the folder in which you want the icon to be displayed. Keep in mind this will not replace the folder icon (unless the custom icon is bigger than the default skin icon), it will just be shown over it.
   - If it's a custom icon or banner for a rom, rename the file so that its name is the same as the rom whose icon you want to replace. Note the the name has to include the file extension, e.g. `ASME.nds.png` or `ASME.nds.bin` if you want the icon/banner to show for the rom `ASME.nds`. This works not only for `.nds` roms, but for all roms that can be ran from TWiLight Menu++.
