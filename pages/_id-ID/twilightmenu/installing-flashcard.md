---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (Flashcard)
long_title: Pemasangan TWiLight Menu++ (Flashcard)
description: Cara memasang TWiLight Menu++ pada <i>flashcard</i> Nintendo DS
---

Jika menggunakan Windows yang mana terdapat Windows Defender, berkas `.7z` akan dikira Trojan karena positif palsu. Untuk mengatasi positif palsu, pastikan Windows Defender sudah mutakhir.
{:.alert .alert-warning}

### Pemasangan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
1. Buka atau ekstrak `TWiLightMenu-Flashcard.7z`
1. Seret dan taruh folder `_nds` ke akar kartu microSD *flashcard*
1. Seret dan taruh berkas `BOOT.NDS` ke akar kartu microSD *flashcard*
1. Seret dan taruh folder `roms` ke akar kartu microSD *flashcard*
1. Jika sudah ada simpanan atau *save*, pindahkan dulu berkas `.sav` yang tadi bersama ROM DS ke folder baru bernama `saves`, ini letaknya juga sama dengan ROM DS
1. **Pengguna DS Phat/Lite:** Jika memulai `BOOT.NDS` tersangkut di layar putih, ikuti panduan memuat langsung di bawah, dan/atau sisipkan DS Memory Expansion Pak, lalu coba lagi

### Memuat langsung TWiLight Menu++
1. Seret dan taruh semua isi dari `Autoboot/(jenis flashcard)` ke akar kartu microSD *flashcard*
   - Lewati jika tidak ada jenis *flashcard* Anda
1. **Pengguna DS Phat/Lite:** Masuk ke pengaturan menu DS resmi, dan nyalakan *auto-start* agar *flashcard* langsung dimuat

### Menjalankan permainan dengan *firmware flashcard*

Mohon diingat ini hanya berfungsi jika *flashcard* telah diatur memuat langsung TWiLight Menu++. Lihat bagian di atas untuk caranya.
{:.alert .alert-warning}

Mohon diingat tidak semua *flashcard* bisa memainkan permainan dengan cara ini. Jika langkah berikut tidak berlaku untuk *flashcard* Anda, lewati bagian ini.
{:.alert .alert-warning}

Fitur *cheat* akan hilang jika permainan dijalankan dengan cara ini. Jika tetap ingin menggunakan *cheat*, lewati bagian ini.
{:.alert .alert-warning}

1. Seret dan taruh semua isi dari `Flashcart Loader/(jenis flashcard)` ke akar kartu microSD *flashcard*
   - Terdapat README.txt di folder `Flashcart Loader` untuk membantu mencari pemuat *flashcart* mana yang sesuai untuk *flashcard* Anda.
   - Jika sudah, lanjut ke langkah ke-3. Jika belum, ikuti langkah yang di bawah daftar *flashcard*

1. Untuk *flashcard* berikut:
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
   - DSONE SDHC & DSONEi (model bukan SDHC sudah ***tidak*** didukung)
   - M3 DS Real
   - M3i Zero (model bukan GMP-Z003)
   - iTouchDS dan iTouch2 (perlu berkas YSMenu M3Real_M3iZero)
   - R4(i)RTS (r4rts.com) (perlu berkas YSMenu M3Real_M3iZero)
   - R4 SDHC RTS (kaset hitam) (r4isdhc.com) (perlu berkas YSMenu M3Real_M3iZero)

   Pasang [YSMenu dari RetroGameFan](https://gbatemp.net/download/35737/).
      - Pastikan sudah ada `YSMenu.nds` (dari `TTMenu.dat` diubah nama, jika belum ada) dan folder `TTMenu` pada akar kartu microSD *flashcard*
      - Jangan langsung salin `TTMenu.dat`; nanti mengacau muat langsung dan mulai ulang YSMenu
1. Buka Pengaturan TWLMenu++, pindah ke halaman `Pengaturan Permainan dan Apl.`, dan ubah `Pemuat Permainan` ke `Kernel`, agar ROM dijalankan dengan *firmware flashcard*
