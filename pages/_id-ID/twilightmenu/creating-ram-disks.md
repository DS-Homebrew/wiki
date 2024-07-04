---
lang: id-ID
layout: wiki
section: twilightmenu
category: other
title: Membuat RAM Disk
description: Cara membuat <i>RAM disk</i> untuk <i>homebrew</i> DS lawas di TWiLight Menu++
---

Beberapa *homebrew* DS tidak tahu cara mengakses sistem berkas kartu SD. Makanya, mungkin perlu dimuat berkas sistem tersendiri ke dalam RAM, isinya berkas yang diperlukan *homebrew* tersebut agar berfungsi.

Peranti lunak di sini memerlukan sistem operasi Windows.
{:.alert .alert-info}

Panduan ini tidak usah diikuti jika menggunakan *flashcard*.
{:.alert .alert-info}

Untuk membuat *RAM disk*, unduh [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (pencet `Download Software`), dan ikuti arahan di bawah ini.

Arahan dibuat oleh Dakkon7, diubah oleh Rocket Robz:

1. Jalankan RAMDisk
1. Pencet **View** -> **Advanced**
1. Untuk **Disk Size**, tulis `12` untuk DSi, atau `28` untuk 3DS, di atasnya **Max 1023 MB**
1. Hapus tanda **Create TEMP Directory**, jika telah ditandai
1. Pencet **Load/Save**
1. Pencet `Start RAMDisk`, dan akan muncul jendela baru untuk .img
1. Taruh berkas dan/atau folder yang *homebrew* perlukan di situ, dan/atau berkas lainnya
1. Pada program RAMDisk, pencet `Save Disk Image Now`
1. Simpan `[nama rom].img` ke folder `ramdisks` di letak .nds tersebut. Jika foldernya belum ada, buat dulu
1. Pencet `Stop RAMDisk` jika sudah selesai
1. Di TWiLight Menu++, buka setelan tiap-permainan pada *homebrew* dengan **Y**
1. Atur **RAM disk** ke 0
1. Luncurkan *homebrew*, dan *RAM disk* akan terbaca

Jika ingin menggunakan slot lain pada satu aplikasi *homebrew*, gunakan ekstensi `.img1` untuk *RAM disk* slot 1, dan seterusnya mengikuti angka.
{:.alert .alert-info}
