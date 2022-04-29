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
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terbaru
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke root kartu microSD flashcard
1. Salin berkas `BOOT.NDS` ke root kartu microSD flashcard
1. Salin folder `roms` ke root kartu microSD flashcard
1. Jika sudah ada data simpanan (save), sebelumnya pindahkan dulu berkas `.sav`, yang tadinya bersama ROM DS, ke folder baru bernama `saves`, yang letaknya juga sama dengan ROM DS
1. ...
   - **Pengguna DS Phat(kodok) / Lite:** Jika menyalaawalkan `BOOT.NDS` malah tersangkut di layar putih, sisipkan DS Memory Expansion Pak, lalu coba lagi
   - **Pengguna DSi/3DS:** Jalankan TWLMenu++ di kartu SD konsol, dan nyalakan `Akses SCFG di Slot-1` lalu ubah `Slot-1: Mode Sentuh` ke `Mode DSi`
      - Ini agar laju jam (clock speed) TWL dan/atau kebut VRAM dapat digunakan permainan di flashcard, sekaligus mengakses kartu memori SD konsol, dan menjalankan ROM DSi-Enhanced/DSi-Exclusive/DSiWare dalam mode DSi di flashcard
      - Jika ini dinyalakan, tombol <kbd>SELECT</kbd> + <kbd>Atas</kbd>/<kbd>Bawah</kbd> dapat ditekan untuk beralih antara kartu SD konsol dan kartu SD flashcard

### Memulai sendiri (Autobooting) TWiLight Menu++
1. Ekstrak isi dari `Autoboot/(flashcard-mu)` ke root dari kartu microSD flashcard
   - Lewati jika tidak ada untuk flashcard-mu
1. ...
   - **Pengguna DS Phat(kodok) / Lite:** Masuk ke pengaturan di menu DS resmi, dan nyalakan `auto-start` agar flashcard langsung mulai sendiri
   - **Pengguna DSi/3DS:** Jalankan TWLMenu++ di kartu SD konsol, dan nyalakan `Langsung mulai Slot-1`

### Menjalankan permainan dengan firmware flashcard

Mohon diingat ini hanya bisa jika flashcart sudah diatur langsung memulai TWiLight Menu++. Lihat bagian di atas untuk caranya.
{:.alert .alert-warning}

Mohon diingat tidak semua flashcard dapat memainkan permainan dengan cara ini. Jika langkah di bawah tidak berlaku untuk flashcard-mu, lewati bagian ini.
{:.alert .alert-warning}

1. Ekstrak apa yang ada di `Flashcart Loader/(flashcard-mu)` ke root dari kartu microSD flashcard
   - Jika sudah, lanjut ke langkah ke-3. Jika belum, ikuti langkah yang ada di bawah daftar flashcard

1. Untuk flashcard berikut:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com tahun 2014-2020
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
   - iTouchDS dan iTouch2 (gunakan berkas YSMenu M3Real_M3iZero)
   - R4(i)RTS (r4rts.com) (gunakan berkas YSMenu M3Real_M3iZero)
   - R4 SDHC RTS (kartrid hitam) (r4isdhc.com) (gunakan berkas YSMenu M3Real_M3iZero)

   Pasang [YSMenu dari RetroGameFan](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Pastikan kamu sudah ada `YSMenu.nds` (diubah nama dari `TTMenu.dat` jika belum ada) dan folder `TTMenu` pada root kartu microSD flashcard
1. Ubah `Gunakan nds-bootstrap` ke `Tak`, agar yang digunakan bukan nds-bootstrap tetapi firmware flashcard
