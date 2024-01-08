---
lang: id-ID
layout: faq
section: godmode9i
title: Pertanyaan Umum & Sidik Gangguan
long_title: Pertanyaan Umum & Sidik Gangguan GodMode9i
description: Pertanyaan umum dan sidik gangguan terkait GodMode9i
---

#### Bagaimana agar tidak "mounting drive(s)" saat baru buka?
Ini terjadi jika membuka GodMode9i dari [hiyaCFW](../hiyacfw). Tahan tombol X saat membuka GodMode9i agar tidak jadi me-*mount* NAND. Cara lainnya, buka GodMode9i langsung dari Unlaunch agar NAND bisa di-*mount*.

#### Kenapa berkas di NAND tidak bisa ditambah, hapus, atau ubah?
Mengubah berkas dari NAND DSi itu tidak aman dan akan mudah rusak parah (*brick*), makanya GodMode9i sengaja tidak bisa.

#### Kenapa ada info berkas NDS DSiWare tidak bisa dibuka?
Beberapa DSiWare, terlebih yang di folder `0003000f`, berisi data sistem dan memang tidak punya nama judul absah.

#### Lebih baik gunakan versi NDS atau versi DSi? Apa bedanya?
Fungsi keduanya sama saja, tapi ditujukan berbeda.
- Jika menggunakan GodMode9i di *flashcard*, gunakan versi NDS
- Jika memasang GodMode9i ke hiyaCFW SDNAND, gunakan versi DSi
- Jika membuka GodMode9i lewat TWiLight Menu++, kedua versi tersebut berfungsi mirip
- Jika memasang GodMode9i ke HOME Menu 3DS, gunakan versi CIA

#### Bagaimana mengubah bahasa?
Bahasa di GodMode9i bisa diubah dengan menekan <kbd>START</kbd>, lalu pilih opsi paling bawah dari menu, dan pilih bahasa yang ingin digunakan.

Mohon diingat ini hanya berfungsi jika GodMode9i dijalankan dari TWiLight Menu++ atau ada berkas `GodMode9i.nds`/`GodMode9i.dsi` di akar kartu SD.

Bisa juga menulis jalur sendiri ke berkas terjemahan apa pun di kartu SD pada berkas setelan `sd:/gm9i/config.ini`, di entri `LANGUAGE_INI_PATH`.

#### Bagaimana mengubah *font*?
*Font* GodMode9i bisa diubah dengan memilih *font* `.frf` dan pilih opsi `Muat <i>font</i>`. Untuk memilih *font* lain sebagai *font* bawaan, bisa taruh di `sd:/gm9i/font.frf`, atau pada berkas (`sd:/gm9i/config.ini`) bisa ubah entri `FONT_PATH` ke letak berkas *font* lain.

Beberapa *font* yang sudah dikonversi bisa dicari di [folder *resources*](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) repositori GitHub atau bisa dibuat sendiri dengan mengonversi gambar PBM dan berkas TXT berisi pemetaan Unicode dengan naskah [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) GodMode9.

#### Bagaimana men-*dump* simpanan DS dengan data simpanan GBA?
GodMode9i mampu menggunakan data simpanan kartrid GBA untuk men-*dump* simpanan sebagian besar kaset DS. Berkas ROM dan simpanan di atas 1 MiB tidak bisa di-*dump* dengan cara ini karena tidak muat. Ini juga bisa dilakukan Haxxstation selain dengan *flashcard* DS jika simpanan GBA bisa di-*dump* cara lain, nanti bisa digabung ulang dan diekstrak di komputer.

1. Buka GodMode9i di *flashcard*
1. Cadangkan dulu simpanan GBA!!
   - Semua data simpanan yang belum dicadang akan hilang
   - Periksa berkasnya dan cari yang besar, tidak usah kartrid bersimpanan 512 bita karena simpanan 64 atau 128 KiB saja bisa muat simpanan DS untuk 1 atau 2 kaset
1. Di menu kandar, tekan <kbd class="r">R</kbd> + <kbd class="face">B</kbd> untuk lepas baca *flashcard*
1. Keluarkan *flashcard*, sisipkan kaset DS dan kartrid GBA
1. Pilih `KASET NDS` lalu `Simpan`
1. Saat diminta, tekan <kbd class="face">A</kbd> untuk menaruh data ke kartrid GBA
   - Ganti ke kartrid GBA lain dan ulangi sampai seluruh simpanan disalin
1. Nyalakan ulang DS dengan *flashcard* Slot-1 dan buka lagi GodMode9i
1. Sisipkan kartrid GBA pertama yang tadi digunakan dan pilih `KARTRID GBA`
1. Pilih `Simpanan DS`
1. Ganti terus ke semua kartrid yang tadi ditaruh *dump*
1. Simpanan DS akan disimpan di `fat:/gm9i/out`, dan sekarang simpanan GBA yang tadi dicadang bisa dipulihkan ke kartridnya

Jika ingin menaruh simpanan lagi ke kaset DS, cukup pilih berkas `.sav` dan pilih `Pulihkan simpanan (Slot-1)`, lalu ganti *flashcard* Slot-1 ke kaset DS saat diminta.
