---
lang: en-US
layout: wiki
section: twilightmenu
category: updating
title: Updating (3DS)
long_title: Updating TWiLight Menu++ (3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
tabs:
  - universal-updater: Universal-Updater
    manual: Manual
---

If updating from a version older than v6.8.3, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

If updating from a version older than v25.7.0, it is recommended to delete the `TWiLight Menu++ Game Booter` title from the title list, using FBI.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Open Universal-Updater
    - If you don't have it, follow the [installing](installing-3ds) instructions
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select `TWiLight Menu++` to install it
    - This will take a while
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Download the latest [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root, replacing any existing files
    - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your SD card root, replacing any existing files
1. Copy the `.cia` file to your SD card root, replacing any existing files
1. On your 3DS, install the CIA with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Updating

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

If you have installed any add-ons, see [Updating Add-ons](updating-addons).
{:.alert .alert-info}

If you've used a version older than v27.15.0, then after you've updated, [install both the Multimedia and Virtual Console add-ons](installing-addons) to ensure the applications that are now part of those add-ons are up-to-date.
{:.alert .alert-info}
