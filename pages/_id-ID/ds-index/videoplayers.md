---
lang: id-ID
layout: wiki
section: ds-index
category: reference
title: Pemutar Video
description: <i>Homebrew</i> Pemutar Video untuk Nintendo DS(i)
---

# *Homebrew* Pemutar Video untuk Nintendo DS(i)
Laman ini berisi penjelasan cara kerja tiap-tiap pemutar video yang berfungsi atau masih dibuat untuk Nintendo DS dan DSi.

| Nama pemutar | Wadah/Codec yang didukung | Kekurangan                                     | Batas FPS                         |
| ------------ | ------------------------- | ---------------------------------------------- | --------------------------------- |
| FastVideoDS  | `.fv`, FastVideoDS        | Hamburan konfeti melambatkan video FPS tinggi. | 60fps (mode DSi), 30fps (mode DS) |
| Moonshell    | `.dpg`, MPEG1             | Hanya sampai laju bingkai/laju bit rendah.     | 24fps                             |
| Tuna-ViDS    | `.avi`, XVid              | Hanya sampai laju bingkai/laju bit rendah.     | 15fps                             |
| MPEG4Player  | `.mp4`, MPEG-4            | Hanya memutar video pendek.                    | 24fps                             |

Catatan:
- Batas tinggi FPS sebenarnya tergantung isi dan lamanya video.
- Moonshell v1.x dan v2.00 versi beta mungkin akan tersangkut jika laju bit video lebih dari `192`. Dianjurkan menggunakan v2.10.

## FastVideoDS

Catatan: Jika muncul pesan `This encoder requires a cpu with support for AVX2 instructions`, berarti perlu menggunakan komputer terkini, atau pasang CPU terbaru.
{: .alert .alert-warning}

### Windows

1. Unduh [.NET Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.12-windows-x64-installer?cid=getdotnetcore), lalu pasangkan
1. Unduh [FastVideoDS Encoder](https://mega.nz/file/mYwiBTZA#FX6k-9cclPig4_WutE9IueVR7NN0Kxl-mZvRXyhpQRg)
1. Unduh [FastVideoDS.bat](/assets/files/FastVideoDS.bat) ke tempat yang sama dengan berkas `.exe` *encoder*
1. Salin dan pindahkan video ke tempat berkas `.bat` tadi
1. Seret dan taruh video yang disalin atau pindah ke berkas `.bat`

Setelah proses selesai, seharusnya tinggal seret dan taruh hasilnya ke kartu SD. Sesudah menaruh videonya ke kartu SD, sekarang bisa diputar melalui **TW**i**L**ight Menu++.

## Konversi video Moonshell (DPG4x)

1. Unduh [DPG4x](https://www.gamebrew.org/wiki/DPG4X)
1. Buka `dpg4x.7z`
1. Buka `dpg4x-2.3.3.0.zip` (3.0-1 muncul galat saat dibuka, belum tahu karena apa)
1. Buka `dpg4x-2.3.3.0_setup.exe`, dan lanjutkan ke pemasangan
1. Setelah pemasangan, buka DPG4x
1. Pencet tab `VIDEO`
1. Centang opsi `Keep Aspect`
1. Atur `Video Bitrate` sesuka Anda (lebih tinggi = mutu meningkat)
1. Pencet tab `AUDIO`
1. Centang `Normalize Volume`, jika suara videonya kecil
1. Pencet tab `SUBTITLES`
1. Atur `Subtitles Source` ke `Disable Subtitles`, karena sulih teks tertentu terkadang ditampilkan salah
1. Pencet tab `MAIN`
1. Pencet `Add Media` untuk membuka berkas video
1. Atur `DPG Version` ke `4`, jika menggunakan Moonshell v2.x; jika tidak maka atur ke `3` ke bawah
1. Atur `Quality` sesuka Anda
1. Pencet `Start Encoding` untuk mengonversi video

Setelah proses selesai, seharusnya tinggal seret dan taruh hasilnya ke kartu SD. Sesudah menaruh videonya ke kartu SD, sekarang bisa diputar melalui Moonshell.

## Panduan TunaViDS

### Windows
Siapkan video yang ingin diubah. Dianjurkan videonya berukuran 4:3, tapi FFmpeg akan taruh tepi hitam di bagian kosong.

Peringatan: Jangan ubah pengaturan ROM Tuna-ViDS, nanti susah dijalankan. Panduan ini beranggapan Anda sudah di **TW**i**L**ight Menu++ versi terkini.
{: .alert .alert-warning}

Lalu, unduh FFmpeg dari [tautan langsung ini](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) dan ekstrak ke C:\ffmpeg atau tempat yang bisa diakses tanpa hak admin.

Usahakan tetap di zona aman pengaturan jika mengonversi video (10-15fps), nanti videonya akan mengacau konsol. Akan melambat pada adegan riuh (ada konfeti, hujan, dll).

Untuk menggunakan FFmpeg di mana pun, dianjurkan menambah direktori ke jalur peubah dari lingkungan sistem. Ini bisa mengacau program yang mengandalkan FFmpeg, jadi pastikan entrinya dihapus saat selesai.

Seret dan taruh videonya ke salah satu berkas tumpak untuk dikonversi:
- [xvid-ds.bat](/assets/files/xvid-ds.bat): Konversi ke video 12FPS yang optimal di konsol DS
- [xvid-dsi.bat](/assets/files/xvid-dsi.bat): Konversi ke video 12FPS yang optimal di konsol DSi
- [xvid-ds-vol4.bat](/assets/files/xvid-ds-vol4.bat): Konversi ke video 12FPS yang optimal di konsol DS dengan volume menaik 400%
- [xvid-dsi-vol4.bat](/assets/files/xvid-dsi-vol4.bat): Konversi ke video 12FPS yang optimal di konsol DSi dengan volume menaik 400%

Jika mau, pengaturan berikut bisa diubah dari salah satu .bat di atas:
- `12` di `-r 12` ke nomor yang lain antara `10` dan `15` untuk laju bingkai berbeda
- `-2` di `scale=256:-2` ke ukuran menegak yang diinginkan, jika video terlihat ada distorsi

Setelah proses selesai, seharusnya tinggal seret dan taruh hasilnya ke kartu SD. Sesudah menaruh videonya ke kartu SD, sekarang bisa diputar melalui **TW**i**L**ight Menu++.

Video akan ke menu setelah selesai. Jika ingin videonya berulang, harus tempel-dan-ulang videonya di penyunting video lalu konversikan menjadi xvid avi dengan metode ini.

## MPEG4Player

### Windows

Proses ini sama dengan Tuna-ViDS, tapi yang ini mampu sampai 24fps.
- [dsmp4-43.bat](/assets/files/dsmp4.bat): Untuk video 4:3
- [dsmp4.bat](/assets/files/dsmp4.bat): Untuk video 16:9
