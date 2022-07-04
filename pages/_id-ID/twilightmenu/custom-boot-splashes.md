---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Splash Awal Nyala Kustom
description: Cara menggunakan layar splash kustom untuk TWiLight Menu++
---

Berkas GIF ubah suai (custom) dapat kamu gunakan sebagai layar splash saat awal nyala (boot) TWiLight Menu++. Berkasnya harus dinamakan `splashtop.gif` dan `splashbottom.gif` serta berada di `sd:/_nds/TWiLightMenu/extras`, lalu ubah `Layar Splash DSi` ke `Ubah suai` di pengaturan TWiLight Menu++.

Berkas GIF sampai ukuran 256x192 dapat berfungsi, dengan beberapa pengecualian:
- GIF yang lebih dari 1 MiB (Mode DSi) atau 256 KiB (Mode DS) mungkin akan berjalan lambat karena sekaligus didekompresi
- Di antara keduanya, GIF harus kurang dari 10 MB (Mode DSi) atau sekitar 2 MB (Mode DS)
- Jika kedua GIF diatur ke "loop forever" keduanya akan muncul selama 3 detik, perlu ada satu yang diatur ke "loop count" untuk mengatur waktunya
- Ada panji (flag) masukan pengguna, jadi lama pemutaran perlu digunakan pada bingkai jika ingin gambarnya muncul dan menunggu secara bawaan
   - Hanya GIF yang menunggu masukan yang akan dijeda, supaya animasi yang lain tetap berjalan
- Jika menggunakan "Local Color Tables", seluruh bingkai harus ditimpa karena seluruh palet layar akan diganti; bukan cuma di bingkai saat ini
- Interlace dan bingkai teks tidak akan berfungsi
