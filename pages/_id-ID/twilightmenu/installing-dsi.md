---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (DSi)
long_title: Pemasangan TWiLight Menu++ (DSi)
description: Cara memasang TWiLight Menu++ pada Nintendo DSi
---

Jika belum bisa *homebrew* di konsol DSi, ikuti [dsi.cfw.guide](https://dsi.cfw.guide) untuk memasang TWiLight Menu++
{:.alert .alert-info}

### Pemasangan
1. Unduh [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) yang terkini
    - Jika tidak terunduh, buka [laman *release*](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Ekstrak `TWiLightMenu-DSi.7z`
1. Salin folder `_nds` ke akar kartu SD
1. Salin berkas `BOOT.NDS` ke akar kartu SD
1. Salin folder `roms` ke akar kartu SD
1. **Pengguna hiyaCFW:** Salin folder `title` ke akar kartu SD

### Memuat langsung dengan Unlaunch
1. Nyalakan Nintendo DSi sambil menahan tombol <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
1. Di menu Unlaunch, masuk ke `OPTIONS`
1. Atur `NO BUTTON` atau tombol pilihan Anda ke `TWiLight Menu++` yang bertuliskan `BOOT.NDS` di layar bawah

### Mengakses isi *flashcart*

*Flashcart* adalah perangkat dengan lubang microSD yang disisipkan ke slot kartrid. Jika tidak punya *flashcart*, panduan ini selesai di sini.
{:.alert .alert-warning}

#### Jika punya R4(i) Ultra

1. Ikuti [panduan ini](installing-flashcard) mulai dari `Memuat permainan lewat kernel flashcart`
    - Peringatan yang ada boleh diabaikan
1. Buka Pengaturan TWLMenu++
1. Pindah ke halaman `Pengaturan lain`
1. Nyalakan `Akses microSD Slot-1`
1. Keluar dari Pengaturan TWLMenu++ dengan tombol `B`
    - Jika masuk ke Menu DS Klasik, tekan `B` lagi

#### Jika tidak punya R4(i) Ultra

1. Buat berkas atau folder bernama `primary` di `sd:/_nds/` (bukan di *flashcart*), ini agar TWiLight Menu++ pada *flashcart* membaca pengaturan dari kartu SD konsol
1. Ikuti [panduan ini](installing-flashcard) mulai dari `Memuat langsung TWiLight Menu++`
1. Salin berkas `BOOT.NDS` dari `TWiLightMenu-Flashcard.7z` ke akar kartu microSD *flashcart*
1. Buka Pengaturan TWLMenu++
1. Pindah ke halaman `Pengaturan lain`
1. Nyalakan `Akses SD di Slot-1`
1. Nyalakan `Akses SCFG di Slot-1`
1. Nyalakan `Langsung mulai Slot-1`
1. Keluar dari Pengaturan TWLMenu++ dengan tombol `B`
    - Jika masuk ke Menu DS Klasik, luncurkan *flashcart*
    - Jika tidak, mulai ulang TWiLight Menu++

#### Beralih ke kartu SD konsol atau *flashcart*
- Tekan `SELECT`+`Atas` atau `SELECT`+`Bawah` untuk ke isi kartu SD konsol atau *flashcart*
    - Jika menu SELECT diaktifkan, boleh juga dari situ
    - Jika menggunakan tema 3DS, sentuh ikon Kartrid/Kartu SD
    - Jika menggunakan tema Wood, R4, atau GBC; tekan tombol `R`
