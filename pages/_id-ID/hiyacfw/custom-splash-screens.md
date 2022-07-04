---
lang: en-US
layout: wiki
section: hiyacfw
title: Layar Splash Kustom
description: Cara menggunakan layar splash kustom dengan hiyaCFW
---

Dengan hiyaCFW, splash ubah suai (custom) dapat menggunakan format `.bmp` atau `.gif`. Berkasnya ditaruh di folder `sd:/hiya` dan harus dinamakan `splashtop` untuk yang layar atas dan `splashbottom` untuk yang bawah, dengan ekstensi berkas yang benar, lalu pastikan layar splash sudah dinyalakan di penyetelan. Gambarnya tidak perlu berformat sama, jadi yang satu boleh BMP dan lainnya GIF, yang GIF lebih diutamakan daripada BMP. Berikut beberapa persyaratan gambarnya:

### BMP
- 16-bit (RGBA 1555, RGB 1555, atau RGB 565)
- 256 x 192 atau lebih kecil

### GIF
- Mudahnya: GIF berukuran 256 x 192 atau lebih kecil akan berfungsi
- Dapat dibuat bergerak, tapi harus di bawah 1 MiB agar bergerak lancar dan harus di bawah 10 MiB antara kedua maksimum mutlak
- Jika keduanya berulang terus maka akan muncul selama 3 detik, jika tidak nanti akan ditampilkan sampai keduanya selesai
- If a frame has the user input flag set it will wait until the delay runs out or any button is pressed, whichever comes first
- Interlaced and plain text frames are ***not*** supported
- Local color tables are supported, but will replace the whole palette, including residual image from previous frames, so images using them will likely have palette problems
