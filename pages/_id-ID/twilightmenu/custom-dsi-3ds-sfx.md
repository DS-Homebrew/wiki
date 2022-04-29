---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: Skin DSi/3DS - Kustom Efek Suara / SFX
description: Cara menggunakan suara latar belakang kustom dan efek suara di skin DSi dan 3DS untuk TWiLight Menu++
---

TWiLight Menu++ mendukung file suara kustom pada setiap tema. Letakkan file suaramu di sub direktori `sound` pada folder temamu, sebagai contoh untuk `tema` white, kamu harus meletakkan filenya masing-masing di `themes/white/sound/sfx.bin` dan `themes/white/sound/bgm.pcm.raw`. Keduanya itu opsional, jika salah satu hilang maka musik bawaan akan digunakan. Kamu juga harus mengatur pengaturan musik di pengaturan tema.

Intruksi ini mengansumsikan kamu telah memasang devkitPro dengan mmutil. Kamu bisa mendapatkan devkitPro di [Website devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Sound Effect Bank
Sound effect bank berisi efek suara seperti ikon pilih suara, dsb.

| File        | Keterangan                                                                                |
| ----------- | ----------------------------------------------------------------------------------------- |
| startup.wav | Dimainkan saat startup. Lihat bagian [suara Startup](#startup-sound) untuk lebih jelasnya |
| back.wav    | Kembali                                                                                   |
| launch.wav  | Dimainkan saat menjalankan gim                                                            |
| select.wav  | Dimainkan saat menggerakkan kunsor pilih                                                  |
| wrong.wav   | Dimainkan ketika mencapai akhir dari satu halaman                                         |
| switch.wav  | Dimainkan saat mengganti halaman                                                          |
| stop.wav    | Dimainkan di tema DSi ketika kunsor pilih berhenti bergerak                               |
| bgm.pcm.raw | Bukan bagian dari soundbank. Lihat bagian [Menu BGM](#menu-bgm) untuk lebih jelasnya      |

Kamu bisa menjalakan kode `make` untuk membuat sound effect bank. Semua file yang ada pada daftar di atas, kecuali *bgm.pcm.raw* dibutuhkan, tetapi kamu bisa membuat mereka hening.

Hasil *sfx.bin* **harus di bawah 512000B = 512 kB**. Jika lebih akan mengakibatkan crash dan beberapa suara tidak bisa diputar penuh.

### Suara startup
Saat efek suara lain akan berfungsi dengan setiap file WAV, suara startup harus dengan format yang spesifik agar dapat berfungsi dengan baik, sebaliknya akan ada celah antara ketika suara startup berhenti dan musik latar belakang dimulai.

File startup.wav harus **16-bit 16 kHz**. Kamu bisa menggunakkan [Audacity](https://www.audacityteam.org/download/) untuk menkonversi ke format tersebut. Begitu file dimuat di Audacity, ubah **Project Rate (Hz)** ke **16000**, lalu tekan **Shift+M**, dan ubah **Format** ke **16-bit PCM**.

Jika filemu Stereo, kamu harus mengubahnya di **Tracks > Mix > Mix Stereo down to Mono**.

Kamu harus mengatur `PlayStartupJingle=1` di `theme.ini` milikmu agar jingle startup bisa diputar.


## Menu BGM
Menu BGM harus berupa **16-bit 16 kHz Mono** file raw PCM. Di bawah ini ada dua metode untuk menkonversi file audio menjadi format tersebut.

Tidak seperti sfx.bin, *bgm.pcm.raw* ukurannya bisa sangat besar.

### ffmpeg
Cara termudah untuk konversi muusik untuk digunakan di TWiLight Menu++ adalah dengan menggunakkan [perintah ffmpeg](https://ffmpeg.org) ini di terminal:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Ganti `[input file]` dengan nama file yang ingin kamu konversikan. Kamu juga bisa dengan mudah melakukan ini dengan drag filenya ke jendela terminal dengan kunsor pada lokasi yang tepat.

### Audacity
Jika kamu tidak ingin menggunakan command line kamu masih bisa menkonversi menggunakan [Audacity](https://www.audacityteam.org/download/).

Untuk menkonversi audio:
1. Muat filenya di Audacity
1. Jika filemu stereo, klik pada lagu tersebut lalu pilih `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Ubah `Project Rate (Hz)` di kiri bawah menjadi `16000`

Untuk export ke dalam format yang benar:
1. Pilih `File` > `Export` > `Export Audio...`
1. Atur `File Type` to `Other uncompressed files`
1. Atur `Header` to `RAW (header-less)`
1. Atur `Encoding` to `Signed 16-bit PCM`
1. Atur nama output menjadi `bgm.pcm.raw` dan klik `Save`
1. Klik `OK` untuk mengedit metadata

Kini kamu memiliki file `bgm.pcm.raw` yang bisa kamu salin ke subfolder `sound` di folder temamu.
