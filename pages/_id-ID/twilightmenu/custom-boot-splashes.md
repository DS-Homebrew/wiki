---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: Kustom Boot Splashes
description: Cara menggunakan splash screen kustom untuk TWL Menu++
---

Kamu dapat menggunakan file GIF kustom untuk digunakan sebagai splash screen saat booting TWiLight Menu++. GIF tersebut harus bernama `splashtop.gif` dan `splashbottom.gif` serta berada di `sd:/_nds/TWiLightMenu/extras`, lalu atur `DSi Splash Screen` ke `Custom` di pengaturan TWiLight Menu++.

Rata-rata file GIF di atas 256x192 akan berfungsi, dengan beberapa pengecualian:
- File GIF lebih dari1 MiB (DSi Mode) atau 256 KiB (DS Mode) mungkin tidak akan berjalan dengan kecepatan penuh karena proses dekompresi berlangsung cepat
- Di antara keduanya, GIF harus kurang dari 10 MB (DSi Mode) atau sekitar 2 MB (DS Mode)
- Jika kedua GIF di atur menjadi loop forever, mereka akan muncul sekitar 3 detik, jadi aturlah jumlah putar / loop count setidaknya satu untuk mengatur waktunya
- The user input flag is supported so set it and a long delay on a frame if you want to show a splash and wait like the defaults
   - Hanya GIF yang menunggu untuk masukan akan berhenti sejenak, jadi yang lain bisa melanjutkan proses animasinya
- Jika menggunakan tabel warna lokal seluruh frame harus ditimpa karena itu akan mengganti semua palet layar, bukan hanya frame saat ini
- Interlaced dan text frames tidak akan berfungsi
