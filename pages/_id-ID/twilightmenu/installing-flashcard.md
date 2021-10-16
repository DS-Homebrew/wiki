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
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke root kartu microSD flashcard-mu
1. Salin berkas `BOOT.NDS` ke root kartu microSD flashcard-mu
1. Salin folder `roms` ke root kartu microSD flashcard-mu
1. Jika kamu sudah ada data simpanan, pindahkan dulu berkas `.sav`, yang tadinya bersamaan dengan ROM DS, ke folder baru bernama `saves`, yang letaknya juga sama dengan ROM DS
1. ...
   - **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1` and set `Slot-1: Touch Mode` to `DSi Mode`
      - This will let you use TWL clock speed and/or VRAM boost on your flashcard games, as well as both accessing the console's SD card, and running DSi-Enhanced/DSi-Exclusive/DSiWare games in DSi mode from your flashcard

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
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - DSONE SDHC & DSONEi

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Atur `Gunakan nds-bootstrap` ke `Tak`, agar yang dipakai firmware flashcard bukannya nds-bootstrap

### Memulai sendiri (Autobooting) TWiLight Menu++
1. Ekstrak isi dari `Autoboot/(flashcard yang dipakai)` ke root dari kartu microSD flashcard
   - Lewati saja jika untuk flashcard-mu tidak ada
1. ...
   - **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
