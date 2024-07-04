---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Splash Awal Nyala Kustom
description: Cara menggunakan layar <i>splash</i> kustom untuk TWiLight Menu++
---

Berkas GIF kustom bisa digunakan sebagai layar *splash* ketika awal nyala TWiLight Menu++. Berkas harus bernama `splashtop.gif` dan `splashbottom.gif` ditaruh di `sd:/_nds/TWiLightMenu/extras`, lalu atur `Layar Splash DSi` ke `Ubah suai` di pengaturan TWiLight Menu++.

GIF sampai ukuran 256x192 bisa berfungsi, tapi ada pengecualian:
- GIF yang lebih dari 1 MiB (Mode DSi) atau 256 KiB (Mode DS) mungkin akan berjalan lambat karena sekaligus didekompresi
- Antara kedua berkas, GIF harus kurang dari 10 MB (Mode DSi) atau sekitar 2 MB (Mode DS)
- Jika kedua GIF diatur ke "*loop forever*" keduanya akan muncul 3 detik, perlu ada satu yang diatur ke "*loop count*" untuk mengatur waktu
- Ada *flag* (panji) masukan pengguna, berarti Lama Pemutaran harus diatur pada bingkai agar ada *splash* dan diam seperti bawaan
   - Hanya GIF yang menunggu masukan yang dijeda, agar animasi lain tetap berjalan
- Jika menggunakan "*Local Color Tables*", seluruh bingkai harus ditimpa karena seluruh palet layar akan diganti; bingkai lain juga kena
- Bingkai selang-seling dan teks tidak akan berfungsi
