---
lang: id-ID
layout: wiki
section: twilightmenu
category: other
title: Membuat RAM Disk
description: Cara membuat RAM disk untuk menjalankan homebrew DS lawas di TWLMenu++
---

Beberapa homebrew DS tidak mampu mengakses berkas sistem kartu SD dengan benar. Oleh karena itu, mungkin perlu dimuat berkas sistem mandiri ke dalam RAM, isinya berkas yang diperlukan homebrew tersebut agar berfungsi.

Perangkat lunak untuk di sini memerlukan sistem operasi Windows.
{:.alert .alert-info}

Panduan ini tidak usah diikuti jika menggunakan flashcard.
{:.alert .alert-info}

Untuk membuat RAM disk, unduh [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (pencet `Download Software`), dan ikuti arahan di bawah ini.

Arahan dibuat oleh Dakkon7, diubah oleh Rocket Robz:

1. Jalankan RAMDisk
1. Pencet **View** -> **Advanced**
1. Untuk **Disk Size**, tulis `12` untuk DSi, atau `28` untuk 3DS, di atas **Max 1023 MB**
1. Hapus tanda **Create TEMP Directory**, jika telah ditandai
1. Pencet **Load/Save**
1. Pencet `Start RAMDisk`, dan akan muncul jendela baru untuk .img tadi
1. Taruh berkas dan folder yang homebrew perlukan di situ, dan/atau berkas lain yang ingin digunakan
1. Pada program RAMDisk, pencet `Save Disk Image Now`
1. Simpan `[nama rom].img` ke folder `ramdisks` di tempat .nds ditaruh. Jika folder tersebut belum ada, buat dulu
1. Pencet `Stop RAMDisk` jika sudah selesai
1. Di TWiLight Menu++, buka pengaturan tiap permainan pada homebrew dengan **Y**
1. Atur **RAM disk** ke 0
1. Luncurkan homebrew, dan RAM disk akan terbaca

Jika ingin menggunakan slot lain pada satu aplikasi homebrew, gunakan ekstensi `.img1` untuk RAM disk slot 1, dan seterusnya mengikuti angka.
{:.alert .alert-info}
