---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Membuat Dump BIOS/Firmware
description: Cara mengekstrak BIOS/<i>Firmware</i> Nintendo DS atau DSi dari konsol
tabs:
  - 
    dsi-sd-card: DSi dengan Unlaunch
    flashcard: <i>Flashcard</i>
---

Beberapa emulator, seperti melonDS, perlu BIOS dan *firmware* mode DS atau mode DSi, yang mana bisa diekstrak dari konsol. Ada dua cara melakukannya, yaitu menggunakan:
- DSi yang ada Unlaunch, atau
- DS/DS Lite/3DS atau DSi tanpa ada Unlaunch, beserta *flashcard* yang bisa dibaca konsol

Cara dengan DSi bisa mengekstrak BIOS dan *firmware* mode DS dan DSi. Cara dengan *flashcard* hanya bisa mengekstrak mode DS.

{% capture tab-dsi-sd-card %}

Laman ini beranggapan konsol Anda sudah ada CFW modern sesuai [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Bagian 1: Menyiapkan berkas yang perlu

1. Unduh [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Salin `dsibiosdumper.nds` dari berkas `.7z` dsibiosdumper ke akar kartu SD
1. Sisip kembali kartu SD ke konsol

### Bagian 2: dsibiosdumper
1. Dalam keadaan konsol belum nyala, tahan tombol berikut: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, selagi tombol ini ditahan, nyalakan daya konsol
1. Konsol seharusnya menyala ke menu Unlaunch
1. Luncurkan dsibiosdumper dari daftar aplikasi
1. Tekan <kbd class="face">A</kbd> untuk men-*dump* semua
1. Tunggu proses ini selesai
    - Ini bisa lumayan lama
1. Setelah proses selesai, tekan <kbd>SELECT</kbd> untuk keluar dsibiosdumper
1. Matikan daya konsol
1. Sisipkan kartu SD ke komputer Anda

Semua berkas yang perlu akan ada dalam folder `dsidump` di akar kartu SD.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Bagian 1: Menyiapkan berkas yang perlu

1. Unduh [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (yang `.nds`)
1. Salin `dsbf_dump.nds` ke akar kartu SD
1. Sisip kembali kartu SD ke *flashcard*

### Bagian 2: dsbf_dump
1. Nyalakan daya konsol
1. Luncurkan *flashcard*
1. Navigasi ke akar kartu SD, dan luncurkan dsbf_dump
1. Tunggu proses ini selesai
1. Setelah proses selesai, tekan <kbd>START</kbd> untuk mematikan daya konsol
  - Di seri konsol 3DS, nanti akan muncul "Software closed". Matikan daya konsol saat di layar ini
1. Sisipkan kartu SD ke komputer Anda

Semua berkas yang perlu ada dalam folder sesuai penjelasan di layar atas konsol.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
