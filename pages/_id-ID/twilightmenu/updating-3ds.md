---
lang: id-ID
layout: wiki
section: twilightmenu
category: updating
title: Pembaruan (3DS)
long_title: Memperbarui TWiLight Menu++ (3DS)
description: Cara memperbarui TWiLight Menu++ pada Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manual
---

Jika memperbarui dari versi yang lebih lawas dari v6.8.3, mohon pindahkan dulu berkas `.sav` permainan DS ke folder baru bernama `saves`, folder `saves` harus di tempat yang sama dengan ROM DS.
{:.alert .alert-info}

Jika memperbarui dari versi yang lebih lawas dari v21.0.0, mohon pindahkan dulu berkas `.pub` dan/atau `.prv` untuk ROM DSiWare ke folder baru bernama `saves`, tempat folder `saves` harus sama dengan ROM DSiWare.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Buka Universal-Updater
   - Jika belum punya, ikuti arahan [pemasangannya](installing-3ds)
1. Cari TWiLight Menu++ di kisi (grid) aplikasi, gunakan tab ketiga pada papan sisi (sidebar) jika kesusahan mencari
1. Tekan <kbd class="face">A</kbd> atau ketuk ikon unduh di papan sisi (sidebar) dan pilih `TWiLight Menu++` untuk memasangnya
   - Ini akan lumayan lama
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Unduh [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) yang terkini
1. Ekstrak `TWiLightMenu-3DS.7z`
1. Salin folder `_nds` ke root kartu SD, timpa berkas yang ada
   - Untuk macOS, pastikan harus **copy (salin)** dan `merge (gabung)`, jangan `replace (timpa)`
1. Salin berkas `BOOT.NDS` ke root kartu SD, timpa berkas yang ada
1. Salin kedua berkas `.cia` ke root kartu SD, timpa berkas yang ada
1. Di konsol 3DS, pasang dua .cia tadi dengan FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Pembaruan

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Langkah tambahan untuk di flashcard

Jika kamu dapat beralih antara isi kartu SD ke flashcard lewat TWLMenu++, dan jika TWLMenu++ di flashcard sudah v16.3.0 ke atas, ikuti langkah-langkah berikut.

1. Masuk ke pengaturan TWLMenu++
1. Pilih `Perbarui TWiLight Menu++`
1. Pilih `Kartu (micro)SD Konsol > microSD Slot-1`
