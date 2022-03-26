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
1. Cari TWiLight Menu++ di kisi (grid) aplikasi, gunakan tab ketiga pada papan sisi (sidebar) jika kesusahan mencari
   - Ikon seperti ini: ![Ikon TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Tekan <kbd class="face">A</kbd> atau ketuk ikon unduh di papan sisi (sidebar) dan pilih `TWiLight Menu++` untuk memasangnya
   - Ini akan lumayan lama
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Unduh [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia) yang terbaru
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
1. Unduh [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) yang terbaru
1. Ekstrak `TWiLightMenu-3DS.7z`
1. Salin folder `_nds` ke root kartu SD
1. Salin berkas `BOOT.NDS` ke root kartu SD
1. Salin folder `roms` ke root kartu SD
1. Salin kedua berkas `.cia` ke root kartu SD
1. Di konsol 3DS, pasang dua .cia tadi dengan FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Pemasangan

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
