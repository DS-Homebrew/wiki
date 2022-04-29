---
lang: en-US
layout: wiki
section: twilightmenu
category: other
title: Creating RAM Disks
description: Cara membuat RAM disk untuk menjalankan homebrew DS lawas di TWL Menu++
---

Beberapa homebrew DS tidak mengakses file sistem kartu SD dengan benar. Oleh karena itu, mungkin cara ini dibutuhkan untuk memuat sebuah file sistem ke RAM yang berisi file yang dibutuhkan oleh homebrewmu agar dapat berfungsi.

Perangkat lunak yang digunakan di sini memerlukan sistem operasi Windows.
{:.alert .alert-info}

Kamu tidak perlu mengikuti cara ini jika kamu memakai flashcart.
{:.alert .alert-info}

Untuk membuat RAM disk, unduh [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (klik `Download Software`), dan ikuti intruksi di bawah ini.

Intruksi dibuat oleh Dakkon7, diubah oleh Rocket Robz:

1. Jalankan RAMDisk
1. Klik **View** -> **Advanced**
1. Untuk **Disk Size**, tulis `12` untuk DSi, atau `28` untuk 3DS, di atas **Max 1023 MB**
1. Hapus tanda **Create TEMP Directory**, jika telah ditandai
1. Klik **Load/Save**
1. Klik `Start RAMDisk`, dan sebuah jendela baru untuk .img mu akan muncul
1. Letakan file dan folder dari homebrew yang kamu inginkan di situ, dan/atau file(s) yang ingin kamu gunakan
1. Pada program RAMDisk, tekan `Save Disk Image Now`
1. Simpan `romname.img` ke `ramdisks` folder di lokasi file .nds berada. Jika folder tersebut tidak ada, buatlah folder tersebut
1. Klik `Stop RAMDisk` saat kamu selesai
1. Di TWiLight Menu++, buka pengaturan per-gim untuk homebrew mu
1. Atur RAM disk ke 0
1. Jalankan homebrew mu, dan itu akan membaca RAM disk mu

Jika kamu ingin menggunakan slot RAM disk untuk setiap aplikasi homebrew, gunakan `.img1` sebagai ekstensi untuk RAM disk slot 1, dan seterusnya.
{:.alert .alert-info}
