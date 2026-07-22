---
lang: en-US
layout: wiki
section: twilightmenu
category: other
title: How to Get Box Art
description: How to get box art/game covers in TWiLight Menu++
tabs:
  - browser: Browser
    desktop: Windows/macOS/Linux
    dsi: DSi
    manual: Manual
---

{% capture tab-browser %}
1. Open [TwilightBoxart](https://boxart.kirovair.com) in a Chromium-based browser (Chrome, Edge, Brave, Opera, or Vivaldi)
    - Firefox and Safari work too, but instead of writing to the SD card directly they give a `.zip` to extract to `sd:/_nds/TWiLightMenu/boxart` yourself
1. Click `Choose SD card folder…` and select your SD card
1. **Optional:** Change the size, border, etc options to your liking
1. Click `Scan and download`
1. Make sure box art is set to be shown in [TWiLight Menu++ Settings](faq?faq=how-do-i-access-twilight-menu-settings)
{% endcapture %}
{% assign tab-browser = tab-browser | split: "////////" %}

{% capture tab-desktop %}
1. Download the desktop app for your OS from [the TwilightBoxart releases page](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extract the `.zip` and run the app
    - On macOS, first run `xattr -rd com.apple.quarantine TwilightBoxart.app` in a terminal, as the app is not notarized with Apple
1. Click `Detect SD`
    - If it doesn't find the correct SD card click `Browse…` and select the right one
1. **Optional:** Change the size, border, etc options to your liking
1. Click `Start`
1. Make sure box art is set to be shown in [TWiLight Menu++ Settings](faq?faq=how-do-i-access-twilight-menu-settings)
{% endcapture %}
{% assign tab-desktop = tab-desktop | split: "////////" %}

{% capture tab-dsi %}
1. Download `TwilightBoxart-DSi.nds` from [the TwilightBoxart releases page](https://github.com/KirovAir/TwilightBoxart/releases)
1. Copy it to your SD card and launch it from TWiLight Menu++
1. Pick your cover size and border with the D-Pad or the touch screen, then press A to start
    - The console connects to your WiFi network and downloads its box art by itself
1. Make sure box art is set to be shown in [TWiLight Menu++ Settings](faq?faq=how-do-i-access-twilight-menu-settings)
{% endcapture %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-manual %}
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), under the **S Covers (png)** category
1. Extract the .png files to `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in [TWiLight Menu++ Settings](faq?faq=how-do-i-access-twilight-menu-settings)
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-browser | concat: tab-desktop | concat: tab-dsi | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**To add your own box art:**
Place them in `sd:/_nds/TWiLightMenu/boxart`.
- Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`)
- Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143
- If your **TW**i**L**ight Menu++ configuration has Box Art viewing set to `Cached`, the image size must be 44 KiB or below. You can use a tool like [tinypng](https://tinypng.com/) to compress the images to an acceptable size

Individual box art can also be downloaded from GameTDB, under the **S Covers (png)** category.
