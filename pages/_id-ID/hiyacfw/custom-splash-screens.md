---
lang: id-ID
layout: wiki
section: hiyacfw
title: Layar <i>Splash</i> Kustom
description: Cara menggunakan layar <i>splash</i> kustom untuk hiyaCFW
---

*Splash* kustom yang digunakan hiyaCFW berformat `.bmp` atau `.gif`. Berkas perlu ditaruh di folder `sd:/hiya` dan dinamakan `splashtop` untuk layar atas dan `splashbottom` untuk yang bawah, ekstensi berkas juga harus benar; lalu pastikan setelan layar *splash* dinyalakan. Format gambar tidak perlu sama, jadi yang satu boleh BMP sisanya GIF, tapi GIF lebih diutamakan daripada BMP. Berikut ini beberapa persyaratan agar gambar berfungsi:

### BMP
- 16-bit (RGBA 1555, RGB 1555, atau RGB 565)
- 256 x 192 atau lebih kecil

### GIF
- Mudahnya: Perlu GIF berukuran 256 x 192 atau lebih kecil
- Bisa dibuat bergerak, tapi harus di bawah 1 MiB agar lancar dan harus di bawah 10 MiB antara dua maksimum mutlak ini
- Jika keduanya berulang terus maka akan muncul selama 3 detik, jika tidak nanti akan ditampilkan sampai keduanya selesai
- Jika bingkai diatur ada panji masukan pengguna maka akan diam sampai tundanya habis atau tombol ditekan, boleh duluan mana saja
- Bingkai selang-seling dan teks biasa ***tidak*** didukung
- Mendukung *local color tables*, tapi akan mengganti seluruh palet, termasuk sisa gambar bingkai sebelumnya yang jika digunakan mungkin paletnya akan bermasalah
