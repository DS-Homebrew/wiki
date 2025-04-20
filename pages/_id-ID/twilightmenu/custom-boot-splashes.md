---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Splash Awal Nyala Kustom
description: Cara menggunakan layar <i>splash</i> kustom untuk TWiLight Menu++
---

Berkas GIF kustom bisa digunakan sebagai layar *splash* ketika awal nyala TWiLight Menu++. Nama berkas harus `splashtop.gif` dan `splashbottom.gif` dan ditaruh di `sd:/_nds/TWiLightMenu/extras`, lalu atur `Layar Splash DSi` ke `Ubah suai` di pengaturan TWiLight Menu++.

GIF bisa berfungsi sampai ukuran 256x192, tapi ada pengecualian:
- GIF yang lebih dari 1 MiB (Mode DSi) atau 256 KiB (Mode DS) mungkin akan berjalan lambat karena sekaligus didekompresi
- Antara kedua berkas, GIF harus kurang dari 10 MB (Mode DSi) atau sekitar 2 MB (Mode DS)
- Jika kedua GIF diatur berputar selamanya, maka akan tampil 3 detik. Ubah jumlah berputar di salah satu GIF untuk atur waktu tampil
- GIF punya *flag* (panji) masukan pengguna, berarti bingkai bisa ditaruh tundaan lama agar *splash* menunggu masukan seperti bawaan
    - Hanya GIF yang menunggu masukan yang dijeda, jadi animasi lain tetap berjalan
- Bisa menggunakan *Local Color Tables*, tapi akan menimpa seluruh palet layar bingkai saat ini dan bingkai lain juga
- Bingkai teks dan selang-seling tidak akan bisa
