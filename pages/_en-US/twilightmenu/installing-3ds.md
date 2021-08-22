---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: Installing (3DS)
long_title: Installing TWiLight Menu++ (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
tabs:
  - working-camera: Working camera
    non-working-camera: Non-working camera
    manual: Manual
---

You will first need to have custom firmware on your 3DS, follow [3ds.hacks.guide](https://3ds.hacks.guide) to install it
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Open FBI and select `Remote Install`, then `Scan QR Code`
1. Scan this QR code to install the latest version of [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br>
   ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Close FBI and launch Universal-Updater
   - If it doesn't show up on your home menu, reboot your 3DS
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
   - It has this icon: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select `TWiLight Menu++` to install it
   - This will take a while
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Download the latest [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. Place the `Universal-Updater.cia` file anywhere on your SD card
1. Launch FBI on your Nintendo 3DS
1. In FBI, go to the place you pasted the `Universal-Updater.cia` file
1. Select the `Universal-Updater.cia` file and hit "Install & Delete"
1. Close FBI and launch Universal-Updater
   - If it doesn't show up on your home menu, reboot your 3DS
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
   - It has this icon: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select `TWiLight Menu++` to install it
   - This will take a while
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Download the latest [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installing

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
