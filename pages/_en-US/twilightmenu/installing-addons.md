---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: Installing Add-ons
long_title: Installing TWiLight Menu++ Add-ons
description: How to install TWiLight Menu++ Add-ons
tabs:
  - universal-updater: Universal-Updater (3DS)
    manual: Manual (DS/DSi/3DS)
---

Additional features can be added on to **TW**i**L**ight Menu++. The following can be installed.

- Better DSi Menu Music: Increases the quality of the music from 16khz to 32khz, along with extending the length from 49 seconds to 8 minutes and 39 seconds to ensure no parts have been left out.
- Extra UI Music: Adds more music to the DSi, 3DS, and HBL UIs (3DS HOME Menu music, DSi Shop music, and HBL music).
- Multimedia: View image/photo files and play videos (the latter which uses tuna-viDS, FastVideoDSPlayer, and/or Rocket Video Player).
- Virtual Console: Play games from some well-known retro consoles prior to the GBA.
  - [View list of supported consoles/systems](../ds-index/emulators)
  - If you're using a 3DS or 2DS console, it is recommended to run the emulators made specifically for 3DS mode instead of installing this add-on.

{% capture tab-universal-updater %}
1. Launch Universal-Updater
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
    - It has this icon: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select an option starting with `(Add-on)` to install it
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Scroll down to the `Assets` section
1. Download whichever add-on you want to install
1. Extract `AddOn-???.7z`
1. Copy the `_nds` folder to your SD card root, replacing any existing files
    - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installing

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
