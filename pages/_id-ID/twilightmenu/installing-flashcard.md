---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (Flashcard)
long_title: Pemasangan TWiLight Menu++ (Flashcard)
description: Cara memasang TWiLight Menu++ pada <i>flashcard</i> Nintendo DS
---

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

### Pemasangan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Jika sudah ada simpanan atau *save*, pindahkan dulu berkas `.sav` yang tadi bersama ROM DS ke folder baru bernama `saves`, ini letaknya juga sama dengan ROM DS
1. **Pengguna DS Phat/Lite:** Jika memulai `BOOT.NDS` tersangkut di layar putih, ikuti panduan memuat langsung di bawah, dan/atau sisipkan DS Memory Expansion Pak, lalu coba lagi

### Memuat langsung TWiLight Menu++
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Lewati jika tidak ada jenis *flashcard* Anda
1. **Pengguna DS Phat/Lite:** Masuk ke pengaturan menu DS resmi, dan nyalakan *auto-start* agar *flashcard* langsung dimuat

### Menjalankan permainan dengan *firmware flashcard*

Mohon diingat ini hanya berfungsi jika *flashcard* telah diatur memuat langsung TWiLight Menu++. Lihat bagian di atas untuk caranya.
{:.alert .alert-warning}

Mohon diingat tidak semua *flashcard* bisa memainkan permainan dengan cara ini. Jika langkah berikut tidak berlaku di *flashcard* yang ada, lewati bagian ini.
{:.alert .alert-warning}

Mohon diingat fitur *cheat* akan hilang jika permainan dijalankan dengan cara ini. Jika tetap ingin menggunakan *cheat*, lewati bagian ini.
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
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
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
