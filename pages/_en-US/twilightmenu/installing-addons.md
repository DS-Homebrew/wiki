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
    manual-chromebook: Manual, Chromebook (DS/DSi/3DS)
---

Additional features can be added on to **TW**i**L**ight Menu++. The following can be installed.

- **Better DSi Menu Music:** Increases the quality of the music from 16khz to 32khz, along with extending the length from 49 seconds to 8 minutes and 39 seconds to ensure no parts have been left out.
- **Extra UI Music:** Adds more music to the DSi, 3DS, and HBL UIs (3DS HOME Menu music, DSi Shop music, and HBL music).
  - After installation, the new music options will appear in TWLMenu++ Settings.
- **Multimedia:** View image/photo files and play videos (the latter which uses tuna-viDS, FastVideoDSPlayer, and/or Rocket Video Player).
  - After installation, the multimedia files placed on the SD card will appear as icons in **TW**i**L**ight Menu++.
- **Virtual Console:** Play games from some well-known retro consoles prior to the DS(i) and/or GBA.
  - [View list of supported consoles/systems](../ds-index/emulators) (Return to this page once you're done viewing the list.)
  - If you're using a 3DS or 2DS console, there are two versions of the add-on. We recommend installing the *Minimal* version, as it leaves out emulators/runners which already have better 3DS-mode versions/alternatives (such as NES/GEN/SNES/GBA).
  - When installing manually, copy the `snemul.cfg` file to the SD card root.
  - After installation, the retro games placed on the SD card will appear as icons in **TW**i**L**ight Menu++. After launching, their respective emulators will run.

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

{% capture tab-manual-chromebook %}
1. Open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Scroll down to the `Assets` section
1. Download whichever add-on you want to install
1. Extract `AddOn-???.7z`
1. Open `_nds` -> `TWiLightMenu`
1. Copy the listed files/folders into `sd:/_nds/TWiLightMenu/`
    - If there's already an `addons` folder in `sd:/_nds/TWiLightMenu/`, open the `addons` folder from the `.7z` file, then copy the listed files/folders to `sd:/_nds/TWiLightMenu/addons/`
{% endcapture %}
{% assign tab-manual-chromebook = tab-manual-chromebook | split: "////////" %}

### Installing

{% assign tabs = tab-universal-updater | concat: tab-manual | concat: tab-manual-chromebook %}
{% include tabs.html index=0 tabs=tabs %}
