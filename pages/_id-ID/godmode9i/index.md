---
lang: id-ID
layout: wiki
section: godmode9i
title: GodMode9i
description: Informasi tentang GodMode9i
---

[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/) adalah peramban berkas sumber terbuka untuk ekosistem Nintendo DS, terinspirasi dari GodMode9 untuk Nintendo 3DS. GodMode9i mampu men-*dump* permainan, mengelola kartu SD, menelusur NitroFS, memperhitung *hash* SHA1 berkas, mengubah berkas biner di penyunting hex, dan lainnya.

## Kemampuan *dump*

Untuk menyalin permainan, pilih *drive* (kandar) di daftar kandar dan ikuti perintah di layar.
- Untuk Nintendo DS dan Nintendo DS Lite, GodMode9i bisa men-*dump* kartrid Slot-2 jika dijalankan dari *flashcard* Slot-1, atau kartrid DS jika GodMode9i dijalankan dari *flashcart* Slot-2
   - Berkas simpanan atau *save* bisa di-*dump* dengan kartrid GBA, lihat [Pertanyaan Umum](faq?faq=how-do-i-dump-ds-saves-using-gba-save-data) untuk informasi lanjut
- Untuk di jenis konsol Nintendo DSi, Unlaunch diperlukan untuk men-*dump* permainan Slot-1 ke kartu SD
   - Ikuti [dsi.cfw.guide](https://dsi.cfw.guide/) untuk arahan cara memasang Unlaunch
- Untuk di jenis konsol Nintendo 3DS, perlu CFW termutakhir seperti Luma3DS untuk menjalankan GodMode9i
   - Ikuti [3ds.hacks.guide](https://3ds.hacks.guide/) untuk arahan cara memasang Luma3DS + boot9strap

### Memulihkan simpanan
GodMode9i juga mampu memulihkan simpanan ke kaset DS/kartrid GBA. Cari berkas `.sav` pada kartu SD selagi kaset/kartrid disisipkan, lalu pilih `Pulihkan simpanan`.
