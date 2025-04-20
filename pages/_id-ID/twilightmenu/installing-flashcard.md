---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (Flashcart)
long_title: Pemasangan TWiLight Menu++ (Flashcart)
description: Cara memasang TWiLight Menu++ pada <i>flashcart</i> Nintendo DS
tabs:
  - 
    loader: Flashcart Loader
    ysmenu: YSMenu
---

### Pemasangan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
    - Jika tidak terunduh, buka [laman *release*](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Buka atau ekstrak `TWiLightMenu-Flashcard.7z`
1. Seret dan taruh folder `_nds` ke akar kartu microSD *flashcart*
1. Seret dan taruh berkas `BOOT.NDS` ke akar kartu microSD *flashcart*
1. Seret dan taruh folder `roms` ke akar kartu microSD *flashcart*
1. Jika sudah ada simpanan atau *save*, pindahkan dulu berkas `.sav` yang tadi bersama ROM DS ke folder baru bernama `saves`, ini letaknya juga sama dengan ROM DS
1. **Pengguna DS Phat/Lite:** Jika memulai `BOOT.NDS` tersangkut di layar putih, ikuti panduan memuat langsung di bawah, lalu coba lagi

### Memuat langsung TWiLight Menu++
1. Buka atau ekstrak `TWiLightMenu-Flashcard.7z`
1. Buka folder `Autoboot`
1. Buka `README.txt` untuk mencari berkas *autoboot* yang sesuai *flashcart* Anda
1. Buka folder `(jenis flashcart)`
1. Seret dan taruh isinya ke akar kartu microSD *flashcart*
    - Pastikan yang diseret itu **isi folder** `(jenis flashcart)`, bukan foldernya ke akar microSD
    - Lewati jika tidak ada jenis *flashcart* Anda
1. **Pengguna DS Phat/Lite:** Masuk ke pengaturan menu DS resmi, dan nyalakan *auto-start* agar *flashcart* langsung dimuat

### Memuat permainan lewat *kernel flashcart* (opsional)

**Mohon diingat:**
- Ini hanya berfungsi jika *flashcart* telah diatur **memuat langsung TWiLight Menu++**. Lihat bagian di atas untuk caranya.
- Tidak semua *flashcart* bisa memuat permainan dengan cara ini. Jika langkah berikut tidak berlaku untuk *flashcart* Anda, lewati bagian ini.
- Fitur *cheat* akan hilang jika permainan dijalankan dengan cara ini. Jika tetap ingin menggunakan *cheat*, lewati bagian ini.
{:.alert .alert-warning}

{% capture tab-loader %}

Jika di bagian ini tidak ada pemuat yang sesuai jenis *flashcart* Anda, pilih tab "YSMenu".
{:.alert .alert-info}

1. Buka atau ekstrak `TWiLightMenu-Flashcard.7z`
1. Buka folder `Flashcart Loader`
1. Buka `README.txt` untuk mencari pemuat *flashcart* mana yang sesuai *flashcart* Anda
1. Buka folder `(jenis flashcart)`
1. Seret dan taruh isinya ke akar kartu microSD *flashcart*
    - Pastikan yang diseret itu **isi folder** `(jenis flashcart)`, bukan foldernya ke akar microSD
1. Buka Pengaturan TWLMenu++, pindah ke halaman `Pengaturan Permainan dan Apl.`, dan atur `Pemuat Permainan` ke `Kernel`, agar ROM dijalankan dengan *kernel flashcart*
    - Cara lainnya bisa lewat setelan tiap-permainan: tekan `Y` pada permainan dan ubah opsi `Pemuat p'mainan` di situ

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Periksa dulu apakah punya *flashcart* seperti berikut:
    - R4i-SDHC (r4i-sdhc.com)
    - Kartrid r4isdhc.com 2014+ (**bukan** .hk atau .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC & DSONEi (model bukan SDHC sudah ***tidak*** didukung)
    - M3 DS Real
    - M3i Zero (model bukan GMP-Z003)
    - iTouchDS dan iTouch2 (perlu berkas YSMenu M3Real_M3iZero)
    - R4(i)RTS (r4rts.com) (perlu berkas YSMenu M3Real_M3iZero)
    - R4 SDHC RTS (kartrid hitam) (r4isdhc.com) (perlu berkas YSMenu M3Real_M3iZero)
1. Unduh [YSMenu RetroGameFan](https://gbatemp.net/download/35737/).
1. Ekstrak isinya ke folder di komputer. Navigasi ke folder sesuai jenis *flashcart*.
1. Di dalam folder, ubah nama `TTMenu.dat` ke `YSMenu.nds` **jika** berkas `YSMenu.nds` belum ada
1. Salin folder `TTMenu` dan berkas `YSMenu.nds` ke akar kartu microSD. **Jangan** langsung salin `TTMenu.dat`; nanti mengacau muat langsung dan mulai ulang YSMenu
1. Buka Pengaturan TWLMenu++, pindah ke halaman `Pengaturan Permainan dan Apl.`, dan atur `Pemuat Permainan` ke `Kernel`, agar ROM dijalankan dengan *kernel flashcart*
    - Cara lainnya bisa lewat setelan tiap-permainan: tekan `Y` pada permainan dan ubah opsi `Pemuat p'mainan` di situ

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Membaca permainan dengan *kernel flashcart*
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
