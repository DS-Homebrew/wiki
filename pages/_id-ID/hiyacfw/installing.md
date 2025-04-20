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
- Cadangan NAND konsol Anda [dengan dumpTool](https://dsi.cfw.guide/dumping-nand)
- Perangkat Windows, macOS, atau Linux

### Bagian 1: Persiapan di komputer untuk memasang hiyaCFW
{% capture tab-windows %}
1. Unduh versi terkini dari [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases) untuk Windows
1. Jalankan berkas MSI TWLMagician dan ekstrak di mana saja di komputer
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Unduh versi terkini dari [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases) untuk macOS
1. Ekstrak arsip TWLMagician di mana saja di komputer
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Pasang Python 3 dengan *package manager* jika belum dipasang
1. Unduh versi terkini dari [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases) untuk Python
1. Ekstrak arsip TWLMagician di mana saja di komputer
1. Pasang tkinter dengan perintah berikut untuk di distro jika belum ada:
    - Berdasar Debian: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Pasang berkas keperluan dengan perintah berikut:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Bagian 2: Menambahkan berkas hiyaCFW ke kartu SD
![Tangkapan layar TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Luncurkan TWLMagician
    - **Windows:** Luncurkan berkas `TWLMagician.exe` yang diekstrak dari arsip TWLMagician (mungkin antivirus perlu dinonaktifkan dulu)
    - **macOS:** Pencet kanan berkas `TWLMagician` yang diekstrak dari arsip TWLMagician dan pilih `Buka`
    - **Linux:** Luncurkan `TWLMagician.py` yang diekstrak dari arsip TWLMagician
1. Pencet tombol `...` di kotak "NAND file with No$GBA footer"
1. Navigasi ke cadangan NAND Anda, dan pencet `Open`
1. Tekan `Start`
1. Di sembulan baru, navigasi ke akar kartu SD, lalu tekan `OK`.
    - Proses ini perlu beberapa menit
1. Jika sudah muncul `Done!`, tutup aplikasi TWLMagician
1. Tutup jendela terminal (opsional)

### Bagian 3: Menyetel Unlaunch dan hiyaCFW
1. Nyalakan Nintendo DSi sambil menahan tombol <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
    - Seharusnya ini masuk ke "filemenu" Unlaunch
1. Navigasi ke `OPTIONS`, lalu `NO BUTTON`
1. Pilih `hiyaCFW` dan tekan <kbd class="face">A</kbd>
    - Ini membuat konsol otomatis masuk ke hiyaCFW
1. Simpan pengaturan ini dan nyalakan ulang konsol
1. Tahan <kbd>SELECT</kbd> sambil menyalakan daya konsol Nintendo DSi untuk ke pengaturan hiyaCFW
1. Ubah pengaturan sesuai keinginan, lalu tekan <kbd>START</kbd> untuk lanjut

Jika muncul `An error has occurred`, mohon rujuk ke laman [pertanyaan umum](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw).
{: .alert .alert-warning}
