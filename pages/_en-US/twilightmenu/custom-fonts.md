---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: Custom Fonts
description: How to use custom fonts with TWiLight Menu++
---

TWiLight Menu++ can use custom fonts in NFTR (Nitro FonT Resource) format. They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher themes.

### Directory structure
Custom fonts are loaded from `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` where `[font name]` is whatever name you want and `[font file].nftr` is one of the following:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Skin fonts
You may add fonts to [custom DSi/3DS theme skins](custom-dsi-3ds-skins), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the skin's root folder.

Custom skins can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. Load an NFTR file in nftr-editor
1. Type the names of the fonts you want to use from highest to lowest priority in the `Input font` text box, comma separated
    - You can see a preview of the input fonts in the top box on the left and the current NFTR in the bottom box
1. Click `Generate from font`, then say `OK` to regenerating existing characters and `Cancel` to regenerating the special button characters (ex. &#xE000;)
1. Click `Save`, then repeat for the other sizes
