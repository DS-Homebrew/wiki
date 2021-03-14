---
lang: pl-PL
layout: wiki
section: twilightmenu
category: installing
title: Instalacja (3DS)
description: Jak zainstalować TWiLight Menu++ na Nintendo 3DS
tabs:
  - 
    working-camera: Working camera
    non-working-camera: Non-working camera
    manual: Manual
---

Upewnij się, że masz zainstalowane Custom Firmware, jeśli nie, to zainstaluj je przy pomocy [3ds.hacks.guide](https://3ds.hacks.guide/pl_PL)
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Otwórz FBI i wybierz `Remote Install`, a następnie `Scan QR Code`
1. Zeskanuj ten kod QR, by zainstalować najnowszą wersję [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Kod QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Zamknij FBI i uruchom Universal-Updater
   - Jeśli nie pokaże się na twoim ekranie głównym, zrestartuj konsolę
1. Znajdź menu TWiLight ++ w siatce aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
   - Ma tę ikonę: ![Ikona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - This will take a while
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Download the `Universal-Updater.cia` file from the [Universal-Updater release page](https://github.com/Universal-Team/Universal-Updater/releases)
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
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Instalacja

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
