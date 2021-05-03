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
1. Unduh `TWiLightMenu-Flashcard.7z` versi terbaru dari [laman keluaran](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke root kartu microSD flashcard-mu
1. Salin berkas `BOOT.NDS` ke root kartu microSD flashcard-mu
1. Salin folder `roms` ke root kartu microSD flashcard-mu
1. Jika kamu sudah ada data simpanan, pindahkan dulu berkas `.sav`, yang tadinya bersamaan dengan ROM DS, ke folder baru bernama `saves`, yang letaknya juga sama dengan ROM DS
1. ...
   - **Pengguna DS Phat (Kodok) / DS Lite:** Jika pemulaian `BOOT.NDS` malah tersangkut di layar putih, pasang DS Memory Expansion Pak, dan coba lagi
   - **Pengguna DSi / 3DS:** Jalankan TWLMenu++ di kartu SD konsol, dan nyalakan `akses SCFG di Slot-1`
      - Ini agar dapat memakai laju jam (clock speed) yang TWL dan/atau kebut (boost) VRAM pada permainan di flashcard, sekaligus mengakses isi kartu SD konsol

### Untuk menjalankan permainan dengan firmware flashcard
1. Ekstrak isi dari `Flashcart Loader/(flashcard yang dipakai)` ke root kartu microSD flashcard
   - Jika sudah, lanjut ke langkah ke-3. Jika belum, ikuti langkah yang di bawah daftar flashcard ini

1. Untuk flashcard berikut:
   - R4i-SDHC
   - Kartu r4isdhc.com
   - Kartu r4isdhc.hk
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   Pasang YSMenu dari [sini](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Pastikan kamu sudah ada `YSMenu.nds` (diubah nama dari `TTMenu.dat` jika belum ada) dan folder `TTMenu` pada root kartu microSD
1. Atur `Gunakan nds-bootstrap` ke `Tak`, agar yang dipakai firmware flashcard bukannya nds-bootstrap

### Memulai sendiri (Autobooting) TWiLight Menu++
1. Ekstrak isi dari `Autoboot/(flashcard yang dipakai)` ke root dari kartu microSD flashcard
   - Lewati saja jika untuk flashcard-mu tidak ada
1. ...
   - **Pengguna DS Phat / DS Lite:** Masuk ke pengaturan di menu DS, dan nyalakan auto-start, agar flashcard-mu mulai saat awal nyala (boot)
   - **Pengguna DSi / 3DS:** Jalankan TWLMenu++ di kartu SD konsol, dan nyalakan `Langsung mulai Slot-1`
