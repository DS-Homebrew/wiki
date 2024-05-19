---
lang: id-ID
layout: wiki
section: gbarunner2
title: Membuat Dump BIOS GBA
description: Cara mengekstrak BIOS Nintendo GBA dari konsol
tabs:
  - 
    3ds-sd-card: 3DS dengan open_agb_firm
    gba-flashcart: GBA/DS/DS Lite dengan <i>flashcart</i> mode GBA
---

Walaupun hampir semua emulator GBA bisa langsung membaca ROM GBA, ada emulator dan *hypervisor*, seperti GBARunner2, yang mungkin perlu BIOS agar ROM dibaca benar.

Ada dua cara melakukannya, yaitu menggunakan:
- Konsol 3DS yang ada CFW, atau
- GBA/DS/DS Lite dengan *flashcart* mode GBA

{% capture tab-3ds-sd-card %}
### Bagian 1: Menyiapkan berkas yang perlu
1. Unduh [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (yang `.7z`)
1. Unduh [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Buat folder bernama `payloads` dalam folder `/luma` jika belum ada
1. Salin `open_agb_firm.firm` dari berkas `.7z` open_agb_firm ke folder `/luma/payloads`
1. Salin `3ds` dari berkas `.7z` open_agb_firm ke akar kartu SD
1. Salin `Bios_Dumper.gba` ke akar kartu SD
1. Sisip kembali kartu SD ke konsol

### Bagian 2: Bios_Dumper
1. Tekan dan tahan <kbd>START</kbd>, selagi <kbd>START</kbd> ditahan, nyalakan daya konsol
    - Ini akan masuk ke open_agb_firm
    - Jika masuk ke `Luma3DS Chainloader`, pilih `open_agb_firm` dari menu ini
    - Jika masuk ke yang lain, berarti `open_agb_firm.firm` belum disalin ke folder yang benar di kartu SD
1. Dari open_agb_firm, jalankan `Bios_Dumper.gba`
1. Layar akan berkelip merah, lalu berkelip hijau
1. Tunggu sekitar lima detik
1. Matikan daya konsol

{% capture upload-bios-text %}
Dari kartu SD, unggah `/3ds/open_agb_firm/saves/Bios_Dumper.sav` ke sini:
{% endcapture %}

### Bagian 3: Memetik BIOS dari hasil berkas simpanan
1. Sisipkan kartu SD ke komputer Anda
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Bagian 1: Menyiapkan berkas yang perlu
1. Unduh [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Salin `Bios_Dumper.gba` ke akar kartu SD *flashcart*
1. Sisip kembali kartu SD ke *flashcart*
1. Sisip kembali *flashcart* GBA ke Slot-2

### Bagian 2: Bios_Dumper
1. Luncurkan *flashcart*, lalu jalankan `Bios_Dumper.gba`
1. Layar akan berkelip merah, lalu berkelip hijau
1. Tunggu sekitar lima detik
1. Matikan daya konsol

{% capture upload-bios-text %}
Dari kartu SD, unggah `Bios_Dumper.sav` ke sini:
{% endcapture %}

### Bagian 3: Memetik BIOS dari hasil berkas simpanan
1. Sisipkan kartu SD ke komputer Anda
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Berkas `bios.bin` akan otomatis diunduh. Ini berkas BIOS GBA hasil akhir.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
