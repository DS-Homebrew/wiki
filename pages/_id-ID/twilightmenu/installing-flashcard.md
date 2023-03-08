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
1. Jika sudah ada simpanan (save), sebelumnya pindahkan dulu berkas `.sav` yang tadi bersama ROM DS ke folder baru bernama `saves`, yang letaknya juga sama dengan ROM DS
1. **Pengguna DS Phat/Lite:** Jika memulai `BOOT.NDS` malah tersangkut di layar putih, ikuti panduan memuat langsung di bawah, dan/atau sisipkan DS Memory Expansion Pak, lalu coba lagi

### Memuat langsung TWiLight Menu++
1. Ekstrak isi dari `Autoboot/(jenis flashcard)` ke root kartu microSD flashcard
   - Lewati jika jenis flashcard Anda tidak ada
1. **Pengguna DS Phat/Lite:** Masuk ke pengaturan menu DS resmi, dan nyalakan auto-start agar flashcard langsung dimuat

### Menjalankan permainan dengan firmware flashcard

Mohon diingat ini hanya berfungsi jika flashcard telah diatur langsung memuat TWiLight Menu++. Lihat bagian di atas untuk caranya.
{:.alert .alert-warning}

Mohon diingat tidak semua flashcard dapat memainkan permainan dengan cara ini. Jika langkah berikut tidak berlaku di flashcard yang dipunya, lewati bagian ini.
{:.alert .alert-warning}

1. Ekstrak apa yang ada di `Flashcart Loader/(jenis flashcard)` ke root dari kartu microSD flashcard
   - Terdapat README.txt di folder `Flashcart Loader` untuk membantu mencari pemuat flashcart mana yang sesuai untuk flashcard Anda.
   - Jika sudah, lanjut ke langkah ke-3. Jika belum, ikuti langkah yang di bawah daftar flashcard

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
      - Pastikan sudah ada `YSMenu.nds` (diubah nama dari `TTMenu.dat` jika belum ada) dan folder `TTMenu` pada root kartu microSD flashcard
1. Buka Pengaturan TWLMenu++, pindah ke halaman `pengaturan nds-bootstrap`, dan ubah `Gunakan nds-bootstrap` ke `Tak`, agar ROM dijalankan dengan firmware flashcard
