---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Font Kustom
description: Cara menggunakan <i>font</i> kustom di TWiLight Menu++
---

TWiLight Menu++ membaca *font* kustom berformat NFTR (*Nitro FonT Resource*). Ini digunakan di Pengaturan, judul Manual, dan di tema Nintendo DSi, Nintendo 3DS, SEGA Saturn, dan Homebrew Launcher.

### Struktur direktori
*Font* kustom dimuat dari `sd:/_nds/TWiLightMenu/extras/fonts/[nama font]/[berkas font].nftr`, berkas `[nama font]` bisa nama apa saja, dan `[berkas font].nftr` bisa salah satu dari berikut ini:
- `large.nftr`: *Font* lebih besar untuk judul
- `small.nftr`: *Font* lebih kecil untuk teks keseluruhan

### *Font* di skin
*Font* boleh ditambah di [skin tema DSi/3DS kustom](custom-dsi-3ds-skins), ini akan menimpakan apa pun yang diatur di pengaturan TWiLight Menu++. *Font* ini ditaruh di folder `font`, di akar tempat skin.

Skin kustom bisa ditambah *font* timpaan untuk tanggal & waktu menggunakan `date_time.nftr`, dan nama pengguna dengan `username.nftr`.

### Menghasilkan *font* kustom
*Font* bisa dibuat sendiri dengan utilitas seperti [nftr-editor](https://pk11.us/nftr-editor/). Untuk menghasilkan *font* seperti yang di TWiLight Menu++, caranya:
1. Buka berkas NFTR di nftr-editor
1. Ketik nama *font* yang ingin digunakan dari urutan yang atas sampai bawah di kotak teks `Input font`, dipisah huruf koma
    - Pratayang masukan *font* bisa dilihat di kotak atas sebelah kiri dan NFTR saat ini di kotak bawah
1. Pencet `Generate from font`, dan pencet `OK` untuk membentuk ulang huruf yang ada lalu `Cancel` untuk membentuk ulang huruf khusus (contoh: &#xE000;)
1. Pencet `Save`, lalu ulangi jika untuk ukuran lain
