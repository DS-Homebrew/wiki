---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Skin DSi/3DS - Efek Suara Kustom
description: Cara menggunakan suara latar belakang dan efek suara kustom di skin DSi dan 3DS untuk TWiLight Menu++
---

TWiLight Menu++ mendukung berkas suara kustom untuk tema. Taruh berkas suaranya di subdirektori `sound` di folder temamu; contohnya, jika di tema `white`, kamu harus menaruh masing-masing berkasnya di `themes/white/sound/sfx.bin` dan `themes/white/sound/bgm.pcm.raw`. Kedua berkasnya opsional, jadi jika `bmg.pcm.raw` hilang, musik yang bawaan akan diputar. Hal yang sama juga berlaku pada efek suara jika berkas `sfx.bin` hilang.

Arahan ini beranggapan kamu sudah memasang devkitPro dengan mmutil. Kamu dapat mengunduh devkitPro di [situs devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Bank Efek Suara (SFX)
The sound effect bank (`sfx.bin`) contains sound effects such as the icon select sound, etc.

| Berkas      | Keterangan                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------- |
| startup.wav | Diputar saat awal buka (startup). Lihat bagian [Suara startup](#startup-sound) untuk lebih jelasnya |
| back.wav    | Kembali                                                                                             |
| launch.wav  | Diputar saat menjalankan permainan                                                                  |
| select.wav  | Diputar saat menggerakkan kursor di pengaturan tiap-permainan dan menu SELECT                       |
| wrong.wav   | Diputar saat mentok di ujung halaman                                                                |
| switch.wav  | Diputar saat mengganti halaman                                                                      |
| stop.wav    | Diputar di Tema DSi saat kursor pemilih berhenti bergerak                                           |

Semua berkas yang tertera di atas diperlukan untuk membuat bank efek suara kustom. Jika ingin suaranya senyap, gunakan berkas audio yang sunyi. Format harus wajib yang `.wav` dan encoding-nya *harus* PCM.

[This file](/assets/files/sfx-example.zip) includes the sounds used in the default DSi and 3DS themes, along with the makefile used to build them into a valid sfx.bin file. Feel free to edit and change the sound files to make a custom sound effect bank.

To build your custom sound effect bank, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command. You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### Suara startup
Di saat efek suara lain dapat berfungsi dengan berkas WAV apa pun ber-encode PCM, suara awal buka (startup) harus dengan format spesifik agar dapat berfungsi benar, jika tidak nanti ada celah saat suara awal buka berhenti dan musik latar belakang dimulai.

Berkas startup.wav harus **16-bit 16 kHz**. Kamu dapat menggunakan [Audacity](https://www.audacityteam.org/download/) untuk konversi ke format tersebut. Begitu berkasnya dimuat di Audacity, ubah **Project Rate (Hz)** ke **16000**, lalu tekan **Shift+M**, dan ubah bentuk **Format** ke **16-bit PCM**.

Jika berkasnya Stereo, harus diubah ke Mono di **Tracks > Mix > Mix Stereo down to Mono**.

Supaya ada jingle di awal buka, kamu harus ada `PlayStartupJingle=1` di `theme.ini` temamu.


## Musik Latar Menu (BGM)
BGM menu harus berkas raw PCM yang **16-bit 16 kHz Mono**. Di bawah ini ada dua cara mengonversi berkas audio ke format tersebut.

Beda dengan sfx.bin, ukuran *bgm.pcm.raw* suka tiba-tiba besar.

### ffmpeg
Cara termudah mengonversi musik untuk di TWiLight Menu++ adalah dengan menjalankan [perintah ffmpeg](https://ffmpeg.org) ini di terminal:

```bash
ffmpeg -i [berkas masukan] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Ganti `[berkas masukan]` dengan nama berkas yang ingin dikonversikan. Kamu juga dapat dengan mudah menyeret berkasnya ke jendela terminal dengan kursornya di baris `[berkas masukan]`.

### Audacity
Jika tidak ingin menggunakan command line, kamu masih dapat mengonversi dengan [Audacity](https://www.audacityteam.org/download/).

Untuk mengonversi audio:
1. Muat berkasnya di Audacity
1. Jika berkasnya stereo, pencet lagu tersebut lalu pilih `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Ubah `Project Rate (Hz)` di kiri bawah menjadi `16000`

Untuk mengekspor ke format yang benar:
1. Pilih `File` > `Export` > `Export Audio...`
1. Ubah `File Type` ke `Other uncompressed files`
1. Ubah `Header` ke `RAW (header-less)`
1. Ubah `Encoding` ke `Signed 16-bit PCM`
1. Ubah nama keluaran (output) ke `bgm.pcm.raw` dan pencet `Save`
1. Pencet `OK` untuk menyunting metadata

Sekarang kamu punya berkas `bgm.pcm.raw` yang dapat disalin ke subfolder `sound` di folder temamu.

 Kamu juga perlu mengubah opsi `Musik Tema DSi/3DS` di pengaturan TWiLight Menu++ ke "Tema" agar BGM kustomnya diputar di menu.
