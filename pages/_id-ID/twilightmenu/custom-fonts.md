---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Font Kustom
description: Cara menggunakan <i>font</i> kustom di TWiLight Menu++
---

TWiLight Menu++ mendukung *font* kustom format NFTR (*Nitro FonT Resource*). Ini digunakan di Pengaturan, judul Manual, dan di antarmuka Nintendo DSi, Nintendo 3DS, SEGA Saturn, dan Homebrew Launcher.

### Struktur direktori
*Font* kustom dibaca dari `sd:/_nds/TWiLightMenu/extras/fonts/[nama font]/[berkas font].nftr`, berkas `[nama font]` bisa nama apa saja, dan `[berkas font].nftr` bisa salah satu dari berikut ini:
- `large.nftr`: *Font* lebih besar untuk judul
- `small.nftr`: *Font* lebih kecil untuk teks keseluruhan

### *Font* tema
*Font* boleh ditambah di [tema kustom DSi/3DS](custom-dsi-3ds-themes), ini akan menimpakan pengaturan *font* di TWiLight Menu++. Berkas *font* ditaruh di folder `font`, di akar tempat tema.

Tema kustom bisa ditaruh *font* kustom dengan menimpa *font* `date_time.nftr` untuk tanggal & waktu, dan `username.nftr` untuk nama pengguna.

### Menghasilkan *font* kustom
*Font* bisa dibuat sendiri dengan utilitas seperti [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). Untuk menghasilkan *font* seperti yang di TWiLight Menu++, caranya:
1. Buka berkas NFTR di nftr-editor
1. Ketik nama *font* yang ingin digunakan dari urutan yang atas sampai bawah di kotak teks `Input font`, dipisah huruf koma
    - Pratayang masukan *font* bisa dilihat di kotak atas sebelah kiri dan NFTR saat ini di kotak bawah
1. Pencet `Generate from font`, dan pencet `OK` untuk membentuk ulang huruf yang ada lalu `Cancel` untuk membentuk ulang huruf khusus (contoh: &#xE000;)
1. Pencet `Save`, lalu ulangi jika untuk ukuran lain
