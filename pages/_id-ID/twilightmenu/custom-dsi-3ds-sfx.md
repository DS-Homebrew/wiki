---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Tema DSi/3DS - Efek Suara Kustom
description: Cara membuat suara latar belakang dan efek suara kustom di tema DSi dan 3DS untuk TWiLight Menu++
---

TWiLight Menu++ mendukung suara kustom untuk tema. Taruh berkas suaranya di subdirektori `sound` dalam folder tema; contoh, jika di tema `white`, masing-masing berkas harus ditaruh di `themes/white/sound/sfx.bin` dan `themes/white/sound/bgm.pcm.raw`. Keduanya opsional, jadi jika `bmg.pcm.raw` hilang, musik yang bawaan akan diputar. Begitu juga dengan efek suara jika berkas `sfx.bin` hilang.

Arahan ini beranggapan Anda sudah memasang devkitPro dengan mmutil. Unduh berkas devkitPro di [situs devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Bank Efek Suara (SFX)
Berkas bank efek suara (`sfx.bin`) terdapat efek suara seperti suara memilih ikon, dll.

| Berkas      | Keterangan                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| startup.wav | Diputar di awal buka atau *startup*. Lihat bagian [Suara awal buka](#suara-awal-buka) untuk jelasnya |
| back.wav    | Kembali                                                                                              |
| launch.wav  | Diputar saat permainan dimuat                                                                        |
| select.wav  | Diputar saat kursor digerakkan di setelan tiap-permainan dan menu SELECT                             |
| wrong.wav   | Diputar saat mentok di ujung halaman                                                                 |
| switch.wav  | Diputar saat mengganti halaman                                                                       |
| stop.wav    | Diputar di Tema DSi saat kursor pemilih berhenti bergerak                                            |

Berkas yang tertera di atas diperlukan untuk membuat bank efek suara kustom. Jika ingin suaranya senyap, gunakan berkas audio hening. Diwajibkan berformat `.wav` dan *harus* ber-*encode* PCM.

[Berkas ini](/assets/files/sfx-example.zip) berisi suara yang digunakan di tema DSi dan 3DS bawaan, sekaligus makefile untuk membuat suara menjadi berkas sfx.bin absah. Silakan saja mengutak-atik berkas suaranya untuk membuat bank efek suara kustom.

Untuk membuat bank efek suara kustom, buka terminal (atau *command line* jika di Windows), ubah direktori saat ini (`cd`) ke folder yang ada `Makefile`, lalu jalankan perintah `make`. Nanti akan ada berkas `sfx.bin` yang bisa disalin ke subfolder `sound` di folder tema. **Ukuran berkas harus di bawah 512000B = 512 kB**. Jika lebih dari itu, suara akan *crash* (mogok) atau tidak diputar penuh.

### Suara awal buka
Walaupun efek suara lain bisa dengan berkas WAV apa pun ber-*encode* PCM, tapi suara awal buka atau *startup* harus berformat spesifik agar berjalan, karena akan ada celah saat suara awal buka berhenti dan musik latar belakang dimulai.

Berkas startup.wav harus **16-bit 16 kHz**. [Audacity](https://github.com/audacity/audacity/releases/latest) boleh digunakan untuk konversi ke format tersebut. Sesudah berkas dibuka di Audacity, ubah **Project Rate (Hz)** ke **16000**, lalu tekan **Shift+M**, dan ubah bentuk **Format** ke **16-bit PCM**.

Jika berkasnya Stereo, harus diubah ke Mono di **Tracks > Mix > Mix Stereo down to Mono**.

Untuk ada *jingle* di awal buka, tulis `PlayStartupJingle=1` di berkas `theme.ini`.


## Musik Latar Menu (BGM)
BGM menu harus berupa `.wav` **16-bit Mono**. Di bawah ini ada dua cara mengonversi audio ke format tersebut.

Beda dengan `sfx.bin`, ukuran `bgm.wav` suka tiba-tiba besar.

Mohon diingat jika berkas audio Anda sudah berformat `.wav`, maka ikuti metode di bawah ini, sebab TWLMenu++ terdapat syarat khusus.

### Audacity
Mula-mula, unduh dulu [versi terkini Audacity](https://github.com/audacity/audacity/releases/latest).

Untuk konversi audio:
1. Buka berkasnya di Audacity
1. Jika berkasnya stereo, pencet lagunya lalu pilih `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Masuk ke `Audio Setup` > `Audio Settings...`dan pastikan `Project Sample Rate` tidak diatur melebihi `48000 Hz` (ini batas besarnya)

Mengekspor ke format yang benar:
1. Pilih `File` > `Export` > `Export Audio...`
1. Atur `Save as type` ke `WAV (Microsoft)`
1. Atur `Encoding` ke `Signed 16-bit PCM`
1. Atur nama keluaran ke `bgm.wav` dan pencet `Save`
1. Di penyuntingan metadata, pencet `Clear` lalu pencet `OK`

Hasilnya akan ada berkas `bgm.wav` yang bisa disalin ke subfolder `sound` di folder tema.

Jangan lupa atur opsi `Musik Tema DSi/3DS` ke "Tema" di pengaturan TWiLight Menu++ agar diputarkan BGM kustom di menu.
