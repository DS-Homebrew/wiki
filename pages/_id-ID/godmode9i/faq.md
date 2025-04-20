---
lang: id-ID
layout: faq
section: godmode9i
title: Pertanyaan Umum & Sidik Gangguan
long_title: Pertanyaan Umum & Sidik Gangguan GodMode9i
description: Pertanyaan umum dan sidik gangguan terkait GodMode9i
---

#### Bagaimana agar tidak "mounting drive(s)" saat baru buka?
Ini terjadi jika membuka GodMode9i dari [hiyaCFW](../hiyacfw). Tahan tombol <kbd class="face">X</kbd> saat memuat GodMode9i agar tidak jadi me-*mount* NAND. Cara lainnya, buka GodMode9i langsung dari Unlaunch agar NAND bisa di-*mount*.

#### Kenapa berkas di NAND tidak bisa ditambah, hapus, atau ubah?
Mengubah berkas NAND DSi itu tidak aman dan mudah *brick* (matot), makanya GodMode9i sengaja tidak bisa.

#### Kenapa ada info NDS DSiWare yang tak bisa dibuka?
Beberapa DSiWare, terlebih yang di folder `0003000f`, berisi data sistem dan memang tidak punya nama judul absah.

#### Lebih baik gunakan versi NDS atau versi DSi? Apa bedanya?
Fungsi keduanya sama saja, tapi ditujukan berbeda.
- Jika menggunakan GodMode9i di *flashcart*, gunakan versi NDS
- Jika memasang GodMode9i ke hiyaCFW SDNAND, gunakan versi DSi
- Jika membuka GodMode9i lewat TWiLight Menu++, kedua versi tersebut berfungsi mirip
- Jika memasang GodMode9i ke HOME Menu 3DS, gunakan versi CIA

#### Bagaimana mengubah bahasa?
Bahasa di GodMode9i bisa diubah dengan menekan <kbd>START</kbd>, lalu pilih opsi paling bawah dari menu, dan pilih bahasa yang ingin digunakan.

Mohon diingat ini hanya berfungsi jika GodMode9i dijalankan dari TWiLight Menu++ atau ada berkas `GodMode9i.nds`/`GodMode9i.dsi` di akar kartu SD.

Bisa juga ketik sendiri jalur ke berkas terjemahan lain di kartu SD dengan mengubah entri `LANGUAGE_INI_PATH` di berkas setelan `sd:/gm9i/config.ini`.

#### Bagaimana mengubah font?
*Font* GodMode9i bisa diubah dengan memilih *font* berformat `.frf` lalu pilih `Muat font`. Untuk mengatur *font* lain sebagai *font* bawaan, taruh di `sd:/gm9i/font.frf`, atau pada berkas setelan (`sd:/gm9i/config.ini`) ubah entri `FONT_PATH` ke letak berkas *font* lain.

Beberapa *font* hasil konversi bisa dicari di [folder *resources*](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) repositori GitHub atau bisa dibuat sendiri dengan mengonversi gambar PBM dan berkas TXT berisi pemetaan Unicode menggunakan naskah [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) GodMode9.

#### Bagaimana men-dump data simpanan DS dengan GBA?
GodMode9i mampu menggunakan simpanan di kartrid GBA untuk men-*dump* simpanan sebagian besar kartrid DS. Berkas ROM dan simpanan di atas 1 MiB tidak bisa di-*dump* dengan cara ini karena tidak muat. Ini juga bisa dengan Haxxstation dan bukan *flashcart* DS jika punya cara lain men-*dump* simpanan GBA, nanti bisa digabung ulang dan diekstrak di komputer.

1. Buka GodMode9i di *flashcart*
1. Cadangkan dulu simpanan GBA!!
    - Semua data simpanan yang belum dicadang akan hilang
    - Periksa berkasnya dan cari yang besar, tak perlu kartrid bersimpanan 512 bita karena simpanan 64 atau 128 KiB saja bisa muat 1 atau 2 simpanan kartrid DS
1. Di menu kandar, tekan <kbd class="r">R</kbd> + <kbd class="face">B</kbd> untuk lepas baca *flashcart*
1. Keluarkan *flashcart*, sisipkan kaset DS dan kartrid GBA
1. Pilih `KARTRID NDS` lalu `Simpanan`
1. Saat diminta, tekan <kbd class="face">A</kbd> untuk menaruh data ke kartrid GBA
    - Ganti ke kartrid GBA lain dan ulangi sampai seluruh simpanan tersalin
1. Nyalakan ulang DS dengan *flashcart* Slot-1 dan buka lagi GodMode9i
1. Sisipkan kartrid GBA pertama yang tadi digunakan dan pilih `KARTRID GBA`
1. Pilih `Simpanan DS`
1. Ganti terus ke semua kartrid yang tadi ditaruh *dump*
1. Simpanan DS akan disimpan di `fat:/gm9i/out`, dan sekarang simpanan GBA yang tadi dicadang bisa dipulihkan ke kartridnya

Jika ingin menaruh simpanan ke kartrid DS, cukup pilih berkas `.sav` dan pilih `Pulihkan simpanan (Slot-1)`, lalu ganti *flashcart* Slot-1 ke kartrid DS saat diminta.
