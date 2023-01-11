---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (3DS)
long_title: Pemasangan TWiLight Menu++ (3DS)
description: Cara memasang TWiLight Menu++ pada Nintendo 3DS
tabs:
  - 
    working-camera: Dengan kamera
    non-working-camera: Tanpa kamera
    manual: Manual
---

Sebelumnya harus punya custom firmware di konsol 3DS, ikuti [3ds.hacks.guide](https://3ds.hacks.guide) untuk memasangnya
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Buka FBI dan pilih `Remote Install`, kemudian `Scan QR Code`
1. Pindai kode QR berikut untuk memasang [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) versi terkini<br> ![Kode QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Tutup FBI dan luncurkan Universal-Updater
   - Jika tidak muncul di menu beranda, nyalakan ulang 3DS
1. Cari TWiLight Menu++ di grid aplikasi, kamu bisa menggunakan tab ketiga pada sidebar jika kesulitan mencarinya
   - Ikon seperti ini: ![Ikon TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Tekan <kbd class="face">A</kbd> atau ketuk ikon unduh di sidebar dan pilih `TWiLight Menu++` untuk memasangnya
   - Ini akan lumayan lama
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Unduh [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia) yang terkini
1. Taruh berkas `Universal-Updater.cia` di mana pun di kartu SD
1. Luncurkan FBI di Nintendo 3DS
1. Saat di FBI, masuk ke tempat ditaruhnya berkas `Universal-Updater.cia`
1. Pilih berkas `Universal-Updater.cia` dan tekan "Install & Delete"
1. Tutup FBI dan luncurkan Universal-Updater
   - Jika tidak muncul di menu beranda, nyalakan ulang 3DS
1. Cari TWiLight Menu++ di kisi (grid) aplikasi, gunakan tab ketiga pada papan sisi (sidebar) jika kesusahan mencari
   - Ikon seperti ini: ![Ikon TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Tekan <kbd class="face">A</kbd> atau ketuk ikon unduh di papan sisi (sidebar) dan pilih `TWiLight Menu++` untuk memasangnya
   - Ini akan lumayan lama
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Unduh [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) yang terkini
1. Ekstrak `TWiLightMenu-3DS.7z`
1. Salin folder `_nds` ke root kartu SD
1. Salin berkas `BOOT.NDS` ke root kartu SD
1. Salin folder `roms` ke root kartu SD
1. Copy the `.cia` file to your SD card root
1. On your 3DS, install the CIA with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Pemasangan

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
     - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, launch your flashcard
     - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
     - If the SELECT menu is enabled, you can do so there as well
     - If you use the 3DS theme, touch the Game Card/SD Card icon
     - If you use the R4/GBC theme, press `L` button
