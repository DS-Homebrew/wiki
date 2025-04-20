---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Menghapus ntrboot
description: Cara menghapus ntrboot dan memulihkan flashcart
tabs:
  - dsi: DSi
    3ds: 3DS
---

<i>Flashcart</i> yang sudah di-<i>flash</i> dengan **ntrboot** biasanya fungsi <i>flashcart</i>-nya akan hilang. Tenang, memulihkan fungsinya bisa dengan mem-<i>flash</i> cadangan <i>flashrom</i> ke <i>flashcart</i> yang bisa ntrboot tersebut. Jika sudah mengikuti panduan ntrboot, seharusnya ada cadangan <i>flashrom</i>-nya.

### Peranti keras yang perlu

Untuk menghapus ntrboot dari <i>flashcart</i> diperlukan:

- <i>Flashcart</i> yang sudah di-<i>flash</i> ntrboot
- DSi/3DS termodif dengan ntrboot flasher untuk memulihkan cadangan <i>flashrom</i> ke <i>flashcart</i>
- <i>Flashrom</i> dari <i>flashcart</i> tersebut. Jika sudah mengikuti [Mem-<i>flash</i> ntrboot](https://wiki.ds-homebrew.com/id-ID/ds-index/ntrboot), seharusnya ini ada sebagai `.bin` di folder `ntrboot` dari microSD <i>flashcart</i> atau kartu SD DSi/3DS
- Jika **tidak** punya cadangannya, coba unduh cadangan <i>flashrom</i> yang cocok untuk <i>flashcart</i> tersebut dari [panduan ntrboot 3ds.hacks.guide](https://3ds.hacks.guide/installing-boot9strap-\(ntrboot\).html#section-v-removing-ntrboot). Ini berbentuk tautan magnet dan perlu klien torrent seperti [qBittorrent](https://www.qbittorrent.org/download.php) atau [Deluge](http://dev.deluge-torrent.org/wiki/Download) untuk mengunduhnya

{% capture tab-dsi %}

Konsol harus sudah bisa <i>homebrew</i> dan pernah mengikuti [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

1. Taruh cadangan <i>flashrom flashcart</i> ke folder `ntrboot` di kartu SD DSi. Buat folder tersebut jika belum ada
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) ke mana saja di kartu SD
3. Sisipkan kartu SD ke konsol DSi termodif, lalu jalankan ntrboot flasher
4. Ikuti arahan di layar. Pilih jenis <i>flashcart</i> dari daftar, lalu pilih opsi `Restore Flash`. Selesai memugar, <i>flashcart</i> sekarang akan berfungsi lagi sebagai <i>flashcart</i> DS

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Konsol harus sudah ada Luma dan pernah mengikuti [3ds.hacks.guide](https://3ds.hacks.guide)
{:.alert .alert-warning}

1. Taruh cadangan <i>flashrom flashcart</i> ke folder `ntrboot` di kartu SD 3DS. Buat folder tersebut jika belum ada.
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher.firm) ke kartu SD sebagai `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Sisipkan kartu SD ke 3DS termodif. Nyalakan 3DS sambil menahan `START` untuk masuk <i>chainloader</i> Luma, lalu pilih ntrboot flasher
4. Ikuti arahan di layar. Pilih jenis <i>flashcart</i> dari daftar, lalu pilih opsi `Restore Flash`. Selesai memugar, <i>flashcart</i> sekarang akan berfungsi lagi sebagai <i>flashcart</i> DS

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Menghapus ntrboot

{% assign tabs = tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Sidik Gangguan

Di kasus tertentu, pemulihan bisa gagal. Ini mungkin karena cadangan <i>flashrom</i> yang salah, atau jenis <i>flashcart</i> tidak kompatibel untuk pemulihan. ntrboot itu <i>hardcoded</i> (terkode tetap) pada <b>nama cadangan <i>flashrom</i></b> untuk pemulihan. Jika nama `.bin` diubah/lupa nama aslinya, lakukan <i>Flash Dump</i> untuk membuat `.bin` dengan nama yang benar, lalu salin tempel namanya sebagai nama baru cadangan <i>flashrom</i> tadi.

Jika tidak yakin dan perlu bantuan, bisa tanyakan di server Discord [DS(i) Mode Hacking](https://ds-homebrew.com/discord).
