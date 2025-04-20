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
    manual: Urus sendiri
---

Jika memperbarui dari versi di bawah v6.8.3, mohon pindahkan dulu berkas `.sav` permainan DS ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DS.
{:.alert .alert-info}

Jika memperbarui dari versi di bawah v21.0.0, mohon pindahkan dulu berkas `.pub` dan/atau `.prv` dari DSiWare ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DSiWare.
{:.alert .alert-info}

Jika memperbarui dari versi di bawah v25.7.0, dianjurkan menghapus `TWiLight Menu++ Game Booter` lewat aplikasi FBI di tab "Titles".
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Buka Universal-Updater
    - Jika belum punya, ikuti arahan [pemasangan](installing-3ds) ini
1. Cari TWiLight Menu++ di kisi layar aplikasi, gunakan tab ketiga pada bilah sisi jika kesusahan mencari
1. Tekan <kbd class="face">A</kbd> atau ketuk ikon unduh di bilah sisi dan pilih `TWiLight Menu++` untuk memasangnya
    - Ini akan lumayan lama
    - Jika gagal memasang, pastikan konsol sudah tersambung internet. Jika tidak, pencet tab `Urus sendiri`
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Unduh [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) yang terkini
    - Jika tidak terunduh, buka [laman *release*](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Ekstrak `TWiLightMenu-3DS.7z`
1. Salin folder `_nds` ke akar kartu SD, timpa berkas yang ada
    - Untuk macOS, harus **copy** (salin) dan `merge` (gabung), jangan `replace` (timpa)
1. Salin berkas `BOOT.NDS` ke akar kartu SD, timpa berkas yang ada
1. Salin berkas `.cia` ke akar kartu SD, timpa berkas yang ada
1. Di konsol 3DS, pasang CIA tadi dengan FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Pembaruan

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
