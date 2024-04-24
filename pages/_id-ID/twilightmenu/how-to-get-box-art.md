---
lang: id-ID
layout: wiki
section: twilightmenu
category: other
title: Cara Menaruh Box Art
description: Cara menaruh <i>box art</i>/gambar sampul di TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Urus sendiri
---

{% capture tab-windows %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. Pastikan pengaturan *box art* diatur ke muncul di TWiLight Menu++
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
1. Pastikan pengaturan *box art* diatur ke muncul di TWiLight Menu++
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Unduh satuan *box art* png dari [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), di kategori **S Covers (png)**
1. Ekstrak berkas .png ke `sd:/_nds/TWiLightMenu/boxart`
1. Pastikan pengaturan *box art* diatur ke muncul di TWiLight Menu++
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Cara menambah *box art*:** Taruh berkasnya di `sd:/_nds/TWiLightMenu/boxart`.
- Boleh sesuai TID permainan (contoh: `ASME.png`), atau nama berkas (contoh: `SM64DS.nds.png`)
- Harus berformat `.png`, disarankan berukuran 128x115 dan maksimum 208x143
- Jika setelan *Box art* di **TW**i**L**ight Menu++ diatur ke `di-cache`, ukuran gambar harus kurang dari 44 KiB. Pampat gambar ke ukuran yang pas dengan alat seperti [tinypng](https://tinypng.com/)

*Box art* juga bisa diunduh satu-satu dari GameTDB, di bawah kategori **S Covers (png)**.
