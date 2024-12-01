---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (Flashcard)
long_title: Pemasangan TWiLight Menu++ (Flashcard)
description: Cara memasang TWiLight Menu++ pada <i>flashcard</i> Nintendo DS
tabs:
  - 
    loader: Flashcart Loader
    ysmenu: YSMenu
---

### Pemasangan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
    - Jika tidak terunduh, lihat [laman *release*](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Buka atau ekstrak `TWiLightMenu-Flashcard.7z`
1. Seret dan taruh folder `_nds` ke akar kartu microSD *flashcard*
1. Seret dan taruh berkas `BOOT.NDS` ke akar kartu microSD *flashcard*
1. Seret dan taruh folder `roms` ke akar kartu microSD *flashcard*
1. Jika sudah ada simpanan atau *save*, pindahkan dulu berkas `.sav` yang tadi bersama ROM DS ke folder baru bernama `saves`, ini letaknya juga sama dengan ROM DS
1. **Pengguna DS Phat/Lite:** Jika memulai `BOOT.NDS` tersangkut di layar putih, ikuti panduan memuat langsung di bawah, lalu coba lagi

### Memuat langsung TWiLight Menu++
1. Buka atau ekstrak `TWiLightMenu-Flashcard.7z`
1. Buka folder `Autoboot` -> `(jenis flashcard)`
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
    - Lewati jika tidak ada jenis *flashcard* Anda
1. **Pengguna DS Phat/Lite:** Masuk ke pengaturan menu DS resmi, dan nyalakan *auto-start* agar *flashcard* langsung dimuat

### To run games using your flashcard firmware (optional)

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. Lihat bagian di atas untuk caranya.
- Not all flashcards support running games in this fashion. Jika langkah berikut tidak berlaku untuk *flashcard* Anda, lewati bagian ini.
- You'll lose the ability to use cheats when running games in this fashion. Jika tetap ingin menggunakan *cheat*, lewati bagian ini.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Buka atau ekstrak `TWiLightMenu-Flashcard.7z`
1. Buka folder `Flashcart Loader` -> `(jenis flashcard)`
    - Terdapat README.txt di folder `Flashcart Loader` untuk membantu mencari pemuat *flashcard* mana yang sesuai untuk *flashcard* Anda.
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
1. Buka Pengaturan TWLMenu++, pindah ke halaman `Pengaturan Permainan dan Apl.`, dan atur `Pemuat Permainan` ke `Kernel`, agar ROM dijalankan dengan *firmware flashcard*
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Please confirm that you have one of the below flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ cards (**not** .hk or .com.cn)
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
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Buka Pengaturan TWLMenu++, pindah ke halaman `Pengaturan Permainan dan Apl.`, dan atur `Pemuat Permainan` ke `Kernel`, agar ROM dijalankan dengan *firmware flashcard*
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with your flashcart firmware
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
