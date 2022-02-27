---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (Flashcard)
long_title: Pemasangan TWiLight Menu++ (Flashcard)
description: Cara memasang TWiLight Menu++ pada flashcard Nintendo DS
---

### Pemasangan (Installing)
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) versi terbaru
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke root kartu microSD flashcard
1. Salin berkas `BOOT.NDS` ke root kartu microSD flashcard
1. Salin folder `roms` ke root kartu microSD flashcard
1. Jika sudah ada data simpanan (save), sebelumnya pindahkan dulu berkas `.sav`, yang tadinya bersama ROM DS, ke folder baru bernama `saves`, yang letaknya juga sama dengan ROM DS
1. ...
   - **Pengguna DS Phat(kodok) / Lite:** Jika mengawal nyala `BOOT.NDS` malah tersangkut di layar putih, sisipkan DS Memory Expansion Pak, lalu coba lagi
   - **Pengguna DSi/3DS:** Jalankan TWLMenu++ di kartu SD konsol, dan nyalakan `Akses SCFG di Slot-1` lalu ubah `Slot-1: Mode Sentuh` ke `Mode DSi`
      - Ini agar laju jam (clock speed) TWL dan/atau kebut VRAM dapat digunakan permainan di flashcard, sekaligus mengakses kartu memori SD konsol, dan menjalankan ROM DSi-Enhanced/DSi-Exclusive/DSiWare dalam mode DSi di flashcard

### Menjalankan permainan dengan firmware flashcard

Mohon diingat tidak semua flashcard dapat memainkan permainan dengan cara ini. Jika langkah di bawah tidak berlaku pada flashcard Anda, langkaui bagian ini.
{:.alert .alert-warning}

1. Ekstrak isi dari `Autoboot/(flashcard Anda)` ke root kartu microSD flashcard
   - Jika sudah, lanjut ke langkah ke-3. Jika belum, ikuti langkah yang di bawah daftar flashcard ini

1. Untuk flashcard berikut:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2020 cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (model tanpa SDHC sudah ***not*** didukung)
   - M3 DS Real
   - M3i Zero (model tanpa GMP-Z003)
   - iTouchDS and iTouch2 (gunakan berkas YSMenu M3Real_M3iZero)
   - R4(i)RTS (r4rts.com) (gunakan berkas YSMenu M3Real_M3iZero)
   - R4 SDHC RTS (kartrid hitam) (r4isdhc.com) (gunakan berkas YSMenu M3Real_M3iZero)

   Pasang [YSMenu punya RetroGameFan](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Pastikan kamu sudah ada `YSMenu.nds` (diubah nama dari `TTMenu.dat` jika belum ada) dan folder `TTMenu` pada root kartu microSD flashcard
1. Ubah `Gunakan nds-bootstrap` ke `Tak`, agar yang digunakan bukan nds-bootstrap tetapi firmware flashcard

### Memulai sendiri (Autobooting) TWiLight Menu++
1. Ekstrak isi dari `Autoboot/(flashcard Anda)` ke root kartu microSD flashcard
   - Lewati, jika tidak ada untuk flashcard Anda
1. ...
   - **Pengguna DS Phat(kodok) / Lite:** Masuk ke pengaturan di menu DS resmi, dan nyalakan auto-start agar flashcard langsung mulai sendiri
   - **Pengguna DSi/3DS:** Jalankan TWLMenu++ di kartu SD konsol, dan nyalakan `Langsung mulai Slot-1`
