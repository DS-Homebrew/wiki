---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (DSi)
long_title: Pemasangan TWiLight Menu++ (DSi)
description: Cara memasang TWiLight Menu++ pada Nintendo DSi
---

Jika belum mampu menjalankan *homebrew* di DSi, ikuti [dsi.cfw.guide](https://dsi.cfw.guide) untuk memasang TWiLight Menu++
{:.alert .alert-info}

### Pemasangan
1. Unduh [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) yang terkini
   - Jika tidak terunduh, lihat [laman *release*](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Ekstrak `TWiLightMenu-DSi.7z`
1. Salin folder `_nds` ke akar kartu SD
1. Salin berkas `BOOT.NDS` ke akar kartu SD
1. Salin folder `roms` ke akar kartu SD
1. **Pengguna hiyaCFW:** Salin folder `title` ke akar kartu SD

### Memuat langsung dengan Unlaunch
1. Nyalakan Nintendo DSi sambil menahan tombol <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
1. Di menu Unlaunch, masuk ke `OPTIONS`
1. Atur `NO BUTTON` atau tombol pilihan Anda ke `TWiLight Menu++` yang bertuliskan `BOOT.NDS` di layar bawah

### Mengakses isi *flashcard*

*Flashcard* adalah kartrid yang disisipkan ke slot permainan, dan terdapat slot kartu microSD. Jika tidak punya *flashcard*, panduan ini selesai di sini.
{:.alert .alert-warning}

#### Jika punya R4(i) Ultra

1. Ikuti [panduan ini](installing-flashcard) mulai dari `Menjalankan permainan dengan firmware flashcard`
     - Peringatan yang ada boleh diabaikan
1. Buka Pengaturan TWLMenu++
1. Pindah ke halaman `Pengaturan lain`
1. Nyalakan `Akses microSD Slot-1`
1. Keluar dari Pengaturan TWLMenu++ dengan tombol `B`
     - Jika masuk ke Menu DS Klasik, tekan `B` lagi

#### Jika tidak punya R4(i) Ultra

1. Buat berkas atau folder bernama `primary` di `sd:/_nds/` (bukan di *flashcard*), agar TWiLight Menu++ membaca pengaturan dari kartu SD konsol setelah *flashcard* dijalankan
1. Ikuti [panduan ini](installing-flashcard) mulai dari `Memuat langsung TWiLight Menu++`
1. Salin berkas `BOOT.NDS` dari `TWiLightMenu-Flashcard.7z` ke akar kartu microSD *flashcard*
1. Buka Pengaturan TWLMenu++
1. Pindah ke halaman `Pengaturan lain`
1. Nyalakan `Akses SCFG di Slot-1` (Mohon diingat opsi ini mengesampingkan `Akses SD di Slot-1`)
1. Atur `Slot-1: Mode Sentuh` ke `Mode DSi`
1. Nyalakan `Langsung mulai Slot-1`
1. Keluar dari Pengaturan TWLMenu++ dengan tombol `B`
     - Jika masuk ke Menu DS Klasik, luncurkan *flashcard*
     - Jika tidak, mulai ulang TWiLight Menu++

#### Beralih antara isi kartu SD dan *flashcard*
- Tekan `SELECT`+`Atas` atau `SELECT`+`Bawah` untuk beralih antara isi kartu SD dan *flashcard*
     - Jika menu SELECT diaktifkan, boleh dilakukan dari situ
     - Jika menggunakan tema 3DS, sentuh ikon Kartrid/Kartu SD
     - Jika menggunakan tema Wood, R4, atau GBC; tekan tombol `L`
