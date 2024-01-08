---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Font Kustom
description: Cara menggunakan <i>font</i> kustom di TWiLight Menu++
---

TWiLight Menu++ membaca *font* kustom berformat NFTR (*Nitro FonT Resource*). Ini digunakan di Pengaturan, judul Manual, dan di tema Nintendo DSi, Nintendo 3DS, SEGA Saturn, dan Homebrew Launcher.

### Info *font* terserta
Terdapat tiga *font* yang disertakan di TWiLight Menu++. Saat menjalankan TWiLight Menu++ di Mode DSi, akan dimuat *font* yang mengandung semua huruf untuk bahasa yang tersedia di TWLMenu++, tapi jika dijalankan di Mode DS hurufnya terbatas karena keterbatasan RAM. Tersedia sebagai berikut:
- Bawaan: Menggunakan *font* DSi resmi sebagai *font* utama di Mode DS, dan mendukung semua huruf untuk digunakan bahasa yang ada di TWiLight Menu++
- Cina (Huruf Sederhana): Menggunakan Noto Sans CS sebagai *font* utama dan terdapat lebih banyak huruf hanzi sederhana di Mode DS, tapi mengorbankan huruf bahasa lain
- Korea: Hampir sama dengan Bawaan di Mode DSi, bedanya terdapat serangkaian hangeul lebih lengkap di Mode DS, tapi mengorbankan huruf bahasa lain

### Struktur direktori
*Font* kustom dimuat dari `sd:/_nds/TWiLightMenu/extras/fonts/[nama <i>font</i>]/[berkas <i>font</i>].nftr`, berkas `[nama <i>font</i>]` bisa nama apa saja, dan `[berkas <i>font</i>].nftr` bisa salah satu dari berikut ini:
- `large-ds.nftr`, `large-dsi.nftr`, atau `large.nftr`: *Font* ukuran besar ini untuk judul
- `small-ds.nftr`, `small-dsi.nftr`, atau `small.nftr`: *Font* ukuran kecil ini untuk teks lain

Berkas berujung `-ds` dan `-dsi` lebih diutamakan daripada yang biasa dan jika terbaca akan digunakan TWiLight Menu++ di Mode DS atau DSi secara urutan.

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
