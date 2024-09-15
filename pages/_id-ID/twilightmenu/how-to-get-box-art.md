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
1. Unduh [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Ekstrak `TwilightBoxart-Windows-GUI.zip` dan jalankan `TwilightBoxart.exe`
1. Pencet `Detect SD`
    - Jika kartu SD yang dipilih salah, pencet `Browse...` lalu pilih yang benar
1. **Tidak Wajib:** Ubah opsi ukuran, tepian, dll sesuai keinginan
1. Pencet `Start`
1. Pastikan pengaturan *box art* diatur ke muncul di TWiLight Menu++
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Unduh [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Ekstrak `.zip` yang MacOS atau Linux
1. Buka `TwilightBoxart.ini` dari folder terekstrak di penyunting teks
1. Ketik jalur ke kartu SD sebelah tulisan `SdRoot=`, lalu simpan berkasnya
    - Pada macOS, jalurnya `/Volumes/` lalu nama kartu SD
1. Buka terminal
1. Di terminal, ketik `cd ` lalu seret folder dengan `TwilightBoxart.CLI` ke jendela terminal
1. Jalankan `chmod +x TwilightBoxart.CLI`
1. Jalakan `./TwilightBoxart.CLI`
1. Jika jalur kartu SD sudah benar, gunakan tombol arah dan enter pada `Yes`
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

*Box art* juga bisa diunduh satu-satu dari GameTDB, di kategori **S Covers (png)**.
