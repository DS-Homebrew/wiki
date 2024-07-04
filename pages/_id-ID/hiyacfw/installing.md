---
lang: id-ID
layout: wiki
section: hiyacfw
title: Pemasangan
long_title: Memasang hiyaCFW
description: Cara memasang hiyaCFW pada Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Jangan perbarui sistem setelah memasang hiyaCFW. Tambalan kartu SD hiyaCFW akan lepas.
{: .alert .alert-danger}

### Persyaratan
- Nintendo DSi yang [terpasang Unlaunch](https://dsi.cfw.guide/installing-unlaunch)
- Cadangan NAND dari konsol [menggunakan dumpTool](https://dsi.cfw.guide/dumping-nand)
- Perangkat Windows, macOS, atau Linux

### Bagian 1: Persiapan di komputer untuk memasang hiyaCFW
{% capture tab-windows %}
Program hiyaCFW Helper sering kena positif palsu pada Windows Defender dan antivirus lain, mohon nonaktifkan dulu antivirus tersebut agar bisa mengunduh atau membuka program.
{: .alert .alert-info}

1. Unduh & pasang [7-Zip](https://www.7-zip.org/download.html) versi terkini
   - Tidak akan berfungsi dengan pengekstrak arsip lain seperti WinRAR, karena hiyaCFW helper bergantung 7-Zip, bukan pengekstrak arsip yang umum
1. Unduh versi Windows terkini dari [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Ekstrak arsip hiyaCFW Helper di mana saja di komputer
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Unduh versi macOS terkini dari [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Ekstrak arsip hiyaCFW Helper di mana saja di komputer
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Pasang Python 3 dengan *package manager* jika belum dipasang
1. Unduh versi Python terkini dari [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Ekstrak arsip hiyaCFW Helper di mana saja di komputer
1. Pasang tkinter dengan perintah berikut untuk di distro jika belum ada:
   - Berdasar Debian: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Bagian 2: Menambahkan berkas hiyaCFW ke kartu SD
![Tangkapan Layar hiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Luncurkan hiyaCFW Helper
  - **Windows:** Luncurkan berkas `HiyaCFW_Helper.exe` yang diekstrak dari arsip hiyaCFW Helper (mungkin antivirus perlu dinonaktifkan dulu)
  - **macOS:** Pencet kanan berkas `HiyaCFW_Helper` yang diekstrak dari arsip hiyaCFW Helper dan pilih `Buka`
  - **Linux:** Luncurkan `HiyaCFW_Helper.py` yang diekstrak dari arsip hiyaCFW Helper
1. Pencet tombol `...` di kotak "NAND file with No$GBA footer"
1. Navigasi ke cadangan NAND Anda, dan pencet `Open`
1. Tekan `Start`
1. Di sembulan baru, navigasi ke akar kartu SD, lalu tekan `OK`.
   - Proses ini mungkin beberapa menit
1. Jika sudah muncul `Done!`, tutup program hiyaCFW Helper
1. Tutup jendela terminal

### Bagian 3: Menyetel Unlaunch dan hiyaCFW
1. Nyalakan Nintendo DSi sambil menahan tombol <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
   - Seharusnya ini masuk ke menu berkas Unlaunch
1. Navigasi ke `OPTIONS`, lalu `NO BUTTON`
1. Pilih `hiyaCFW` dan tekan <kbd class="face">A</kbd>
   - Ini membuat konsol otomatis masuk ke hiyaCFW
1. Simpan pengaturan ini dan nyalakan ulang konsol
1. Tahan <kbd>SELECT</kbd> sambil menyalakan daya konsol Nintendo DSi untuk ke pengaturan hiyaCFW
1. Ubah pengaturan sesuai keinginan, lalu tekan <kbd>START</kbd> untuk lanjut

Jika muncul tulisan `An error has occurred`, mohon rujuk ke laman [pertanyaan umum](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw).
{: .alert .alert-warning}
