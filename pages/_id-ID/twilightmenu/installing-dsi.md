---
lang: id-ID
layout: wiki
section: twilightmenu
category: installing
title: Pemasangan (DSi)
long_title: Pemasangan TWiLight Menu++ (DSi)
description: Cara memasang TWiLight Menu++ pada Nintendo DSi
---

Jika belum punya cara menjalankan homebrew di DSi, ikuti [dsi.cfw.guide](https://dsi.cfw.guide) untuk memasang TWiLight Menu++
{:.alert .alert-info}

### Pemasangan
1. Unduh [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) yang terkini
1. Ekstrak `TWiLightMenu-DSi.7z`
1. Salin folder `_nds` ke root kartu SD
1. Salin berkas `BOOT.NDS` ke root kartu SD
1. Salin folder `roms` ke root kartu SD
1. **Pengguna hiyaCFW:** Salin folder `title` ke root kartu SD

### Pemuatan langsung dengan Unlaunch
1. Nyalakan Nintendo DSi sambil menahan tombol <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
1. Di menu Unlaunch, masuk ke `OPTIONS`
1. Ubah `NO BUTTON` atau tombol pilihan Anda ke `TWiLight Menu++` yang bertuliskan `BOOT.NDS` di layar bawah

### Mengakses isi flashcard

Flashcard adalah kaset yang disisipkan ke slot kartu permainan, dan terdapat slot kartu microSD. Jika tidak punya flashcard, berarti panduan ini sudah selesai.
{:.alert .alert-warning}

#### Jika punya R4(i) Ultra

1. Ikuti [panduan ini](installing-flashcard) mulai dari `Menjalankan permainan dengan firmware dari flashcard`
     - Peringatan yang ada boleh diabaikan
1. Buka Pengaturan TWLMenu++
1. Pindah ke halaman `Pengaturan lain`
1. Nyalakan `Akses microSD Slot-1`
1. Keluar dari Pengaturan TWLMenu++ dengan tombol `B`
     - Jika masuk ke Menu DS Klasik, tekan `B` lagi

#### Jika tidak punya R4(i) Ultra

1. Buat berkas bernama `primary` di `sd:/_nds/` (bukan yang flashcard), agar TWiLight Menu++ membaca pengaturan dari kartu SD konsol setelah flashcard dijalankan
1. Ikuti [panduan ini](installing-flashcard) mulai dari `Memuat langsung TWiLight Menu++`
1. Salin berkas `BOOT.NDS` dari `TWiLightMenu-Flashcard.7z` ke root kartu microSD flashcard
1. Buka Pengaturan TWLMenu++
1. Pindah ke halaman `Pengaturan lain`
1. Nyalakan `Akses SCFG di Slot-1` (Mohon diingat opsi ini mengesampingkan `Akses SD di Slot-1`)
1. Ubah `Slot-1: Mode Sentuh` ke `Mode DSi`
1. Nyalakan `Langsung mulai Slot-1`
1. Keluar dari Pengaturan TWLMenu++ dengan tombol `B`
     - Jika masuk ke Menu DS Klasik, luncurkan flashcard
     - Jika tidak, mulai ulang TWiLight Menu++

#### Beralih antara isi kartu SD dan flashcard
- Tekan `SELECT`+`Atas` atau `SELECT`+`Bawah` untuk beralih antara isi kartu SD dan flashcard
     - Jika menu SELECT diaktifkan, dapat juga dilakukan dari situ
     - Jika menggunakan tema 3DS, sentuh ikon Kaset/Kartu SD
     - Jika menggunakan tema R4/GBC, tekan tombol `L`
