---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (Flashcard)
long_title: Pemasangan TWiLight Menu++ (Flashcard)
description: Cara memasang TWiLight Menu++ pada flashcard Nintendo DS
---

### Pemasangan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke root kartu microSD flashcard
1. Salin berkas `BOOT.NDS` ke root kartu microSD flashcard
1. Salin folder `roms` ke root kartu microSD flashcard
1. Jika sudah ada data simpanan (save), sebelumnya pindahkan dulu berkas `.sav`, yang tadinya bersama ROM DS, ke folder baru bernama `saves`, yang letaknya juga sama dengan ROM DS
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and/or insert a DS Memory Expansion Pak, and try again

### Memulai sendiri (Autobooting) TWiLight Menu++
1. Ekstrak isi dari `Autoboot/(flashcard-mu)` ke root dari kartu microSD flashcard
   - Lewati jika tidak ada untuk flashcard-mu
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### Menjalankan permainan dengan firmware flashcard

Mohon diingat ini hanya bekerja jika flashcard sudah diatur langsung-memulai TWiLight Menu++. Lihat bagian di atas untuk caranya.
{:.alert .alert-warning}

Mohon diingat tidak semua flashcard dapat memainkan permainan dengan cara ini. Jika langkah di bawah tidak berlaku untuk flashcard-mu, lewati bagian ini.
{:.alert .alert-warning}

1. Ekstrak apa yang ada di `Flashcart Loader/(flashcard-mu)` ke root dari kartu microSD flashcard
   - A README.txt file is present in the `Flashcart Loader` folder, to help find which flashcart loader is appropriate for your flashcard.
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

1. Untuk flashcard berikut:
   - R4i-SDHC (r4i-sdhc.com)
   - Kartu r4isdhc.com 2014-2022 (**bukan** .hk atau .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (model tanpa SDHC sudah ***tidak*** didukung)
   - M3 DS Real
   - M3i Zero (model tanpa GMP-Z003)
   - iTouchDS dan iTouch2 (menggunakan berkas YSMenu M3Real_M3iZero)
   - R4(i)RTS (r4rts.com) (menggunakan berkas YSMenu M3Real_M3iZero)
   - R4 SDHC RTS (kartrid hitam) (r4isdhc.com) (menggunakan berkas YSMenu M3Real_M3iZero)

   Pasang [YSMenu dari RetroGameFan](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Pastikan kamu sudah ada `YSMenu.nds` (diubah nama dari `TTMenu.dat` jika belum ada) dan folder `TTMenu` pada root kartu microSD flashcard
1. Buka Pengaturan TWLMenu++, pindah ke halaman `pengaturan nds-bootstrap`, dan ubah `Gunakan nds-bootstrap` ke `Tak`, agar perangkat tegar (firmware) flashcard digunakan dan bukan nds-boostrap
