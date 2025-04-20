---
lang: id-ID
layout: faq
section: nds-bootstrap
title: Pertanyaan Umum & Sidik Gangguan
long_title: Pertanyaan Umum & Sidik Gangguan nds-bootstrap
description: Pertanyaan umum dan sidik gangguan terkait nds-bootstrap
---

#### ROM saya bermasalah, bagaimana ini?
- Pastikan [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) dan [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) sudah di versi terkini (cara memperbarui ada di setiap laman *release*)
- Lihat [daftar kompatibilitas nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) untuk mencari tahu jika ada isu yang sama pada versi terkini nds-bootstrap
- Coba lepas semua *cheat* permainan tersebut karena mungkin ada *cheat* yang tidak kompatibel nds-bootstrap, lepas semua *cheat* dengan tombol <kbd class="l">L</kbd> di menu *cheat* permainan saat di **TW**i**L**ight Menu++
- Jika tadi bisa, hapus folder `fatTable` dan `patchOffsetCache` di `sd:/_nds/nds-bootstrap/`
- Coba ubah setelan tiap-permainan sebelum main, seperti Cepat CPU ARM9, Bacaan Kartu Tak Selaras, Mode DS/DSi, mutu suara, DMA Bacaan Kartu, dll
    - Di setelan tiap-permainan **TW**i**L**ight Menu++, ubah semua ke `Bawaan`
    - Jika ada bentuk setelan tertentu yang ternyata bermasalah, mohon laporkan ke [repositori GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- Jika ada pangkalan data *cheat* (`usrcheat.dat`), hapus di `sd:/_nds/TWiLightMenu/extras`
- [*Dump* lagi kartrid](https://wiki.ds-homebrew.com/id-ID/twilightmenu/faq?faq=how-do-i-get-games) agar yakin ROM tidak rusak
- Jika langkah-langkah di atas sudah diikuti, tanyakan di [server Discord](https://discord.gg/fCzqcWteC4)
- Jika orang server berkata ini isu nds-bootstrap, lihat dulu permainannya sudah dilaporkan atau belum di GitHub
    - Lihat juga label *issue* yang tutup, bisa saja *issue* tersebut ditutup karena mirip *issue* lain
    - Jika belum dicantum label *issue* Github, buat *issue* baru
- Jika sampai sini tidak menemukan solusi, mohon tuliskan di [daftar kompatibilitas](https://wiki.ds-homebrew.com/id-ID/nds-bootstrap/testing)

#### Kenapa ROM susah dibaca, padahal sudah dijalankan lokal?
Karena nds-bootstrap menambal fungsi ROM yang aslinya dibaca dari Slot-1 dialihkan ke kartu SD. Masalahnya ada di pewaktuan dan tindakan AP (sebagian besar sudah dihilangkan) yang keduanya membuat ROM tidak berfungsi benar.

#### Kenapa perlu nds-bootstrap daripada flashcart biasa?
- ROM tertentu bisa dimuat ke RAM, agar bisa dibaca lebih cepat daripada kartrid permainan biasa
- Bisa memperluas bus memori VRAM sampai 32-bit
- Memanfaatkan cepat CPU tambahan DSi, agar kinerja beberapa permainan meningkat
- Memperbagus audio ke 48 kHz
- Mampu ke mode DSi, untuk akses fitur DSi
- Lebih sedikit menguras baterai
- Jika disisip kartrid tertentu, fitur IR bisa digunakan pada aplikasi
- nds-bootstrap bersumber terbuka, sehingga bisa terus pengembang perbarui untuk mengatasi kutu atau hal lainnya, bahkan setelah tidak diurus
- Memory Expansion Pak DS bisa diemulasi untuk permainan yang perlu pengaya ini
    - Saat ini, baru diemulasi di *Nintendo DS Browser*
- Bisa menukar layar atas dan bawah di permainan tertentu untuk bermain lebih nyaman, atau untuk layar yang rusak atau dilepas
- Menangkap layar dan mengubah nilai dalam RAM dengan menu *in-game*

#### DS/DS Lite: Kenapa perlu nds-bootstrap di flashcart DS?
- ROM tertentu bisa dimuat ke Memory Expansion Pak (atau *flashcart* Slot-2 yang berisi RAM), agar terbaca lebih cepat daripada kartrid biasa
- 400+ DSiWare bisa dijalankan dengan tambalan sekemas dan ROM Donor DS SDK5
    - Mohon diingat nds-bootstrap akan selalu digunakan untuk DSiWare, terlepas dari pengaturan `Pemuat Permainan` di TWLMenu++
    - Tidak semua DSiWare bisa menyimpan, karena susahnya menambah fitur simpan, dan/atau struktur simpanan bisa lebih dari satu berkas
    - DSiWare tertentu perlu *Lufia: Curse of the Sinistrals* diatur sebagai ROM Donor
- Jika *kernel flashcart* tidak bisa membaca ROM tertentu, bisa diganti ke nds-bootstrap di setelan tiap-permainan
- Bisa menukar layar atas dan bawah di permainan tertentu untuk bermain lebih nyaman, atau untuk layar yang rusak atau dilepas
- Menangkap layar dan mengubah nilai dalam RAM dengan menu *in-game*

#### Apa itu ROM Donor?
Jika permainan tidak bisa jalan, nds-bootstrap akan "menyumbangkan" ARM7 (dan ARM7i, jika ada) dari ROM lain untuk mengganti biner permainan tersebut sebagai donor.     
ROM Donor bisa diatur di **TW**i**L**ight Menu++.
- ***Flashcart* di mode DS:** ROM DSiWare/*DSi-Exclusive* yang didukung perlu ROM DS SDK5 sebagai ROM Donor
- **DSiWarehax:** Karena permainan *DSi-Enhanced* dan (hampir semua) DSiWare/*DSi-Exclusive* saling punya pengaturan MBK berbeda, maka yang *DSi-Enhanced* perlu ROM Donor agar bisa jalan di mode DSi. Jika DSiWare/*DSi-Exclusive* dijadikan ROM Donor, permainan *DSi-Enhanced* akan bisa dijalankan dengan pengaturan MBK dari eksploit DSiWare
    - Di DSi, jika **TW**i**L**ight Menu++ mendeteksi belum ada yang dijadikan ROM Donor, *Nintendo DSi Sound* dan/atau eksploit aplikasi akan otomatis menjadi ROM Donor
- **CycloDS iEvolution:** Sama halnya seperti DSiWarehax, tapi ROM DSiWare/*DSi-Exclusive* perlu permainan *DSi-Enhanced* sebagai ROM Donor, bukan sebaliknya

#### ROM Donor mana yang terbaik?
Tidak ada yang *terbaik* digunakan. Hampir semua ROM TWL bisa dijadikan ROM Donor.     
Untuk *flashcart* DS, ROM DS SDK5 apa pun bisa dijadikan ROM Donor DSiWare.

Contoh:
- **DSiWarehax di DSi:** Membuka *Nintendo DSi Sound* dan/atau eksploit aplikasi absah akan otomatis dijadikan ROM Donor, jika belum ada yang diatur.
- **DSiWarehax di 3DS:** *Dump* dulu ROM DS WiFi Settings (SDK5.5) dengan GodMode9, lalu jadikan ROM Donor.

#### Kenapa ada ROM Donor yang tidak bisa?
Jika ada judul yang perlu ROM Donor, dan ROM yang dianjur TWLMenu++ malah tidak ada opsi dijadikan ROM Donor (jika sudah gulir ke bawah), maka cari ROM lain sebagai donor.

#### Apa itu nightly dan di mana dapatnya?
Versi *nightly* adalah *commit* paling baru. Versi *nightly* mungkin tidak stabil, tapi *bug* (kutu) sudah diperbaiki duluan di sini. Unduh nds-bootstrap versi *nightly* [di repositori GitHub TWLBot/Builds](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Kenapa cheat tidak berfungsi?
- Beberapa *cheat* mungkin perlu kombinasi tombol atau syarat lain agar aktif. Coba periksa dulu keterangan di tiap *cheat*
    - Di **TW**i**L**ight Menu++, tekan Y untuk melihat keterangan *cheat* tertentu, jika ada
- Hampir semua *cheat* dibuat untuk di mode DS dan mungkin tidak berfungsi di mode DSi. Jika permainan berjenis *DSi-Enhanced*, coba atur ke mode DS
- Implementasi *cheat* E-type di nds-bootstrap masih kacau, kadang berfungsi kadang tidak. Mungkin *cheat* Anda sejenis itu, dan ini masih belum pasti kapan akan diperbaiki

Untuk info lanjut terkait *cheat*, lihat [bagian *Cheat* Action Replay dari laman ROM Retail](https://wiki.ds-homebrew.com/id-ID/ds-index/retail-roms#cheat-action-replay).

#### Bagaimana cara menangkap layar?
Menangkap layar utama bisa dilakukan dari menu *in-game*. Buka menu *in-game* secara bawaan dengan tombol <kbd class="l">L</kbd> + <kbd>Bawah</kbd> + <kbd>SELECT</kbd>, dan pilih `Tangkap Layar...`, ubah bank VRAM jika perlu, lalu tekan <kbd class="face">A</kbd> untuk menangkap layar.

Untuk melihat tangkapan layarnya di komputer, ekstrak `sd:/_nds/nds-bootstrap/screenshots.tar`; berkas ini berisi semua tangkapan layar berformat BMP. Tersedia 50 slot berkas BMP kosong yang bisa diisi tangkapan layar, yang masih kosong boleh diabaikan atau dihapus.

nds-bootstrap hanya bisa muat 50 tangkapan layar di `screenshots.tar`. Jika hampir penuh, ekstrak dulu berkas TAR lalu boleh hapus, nds-bootstrap akan buatkan TAR baru saat memuat permainan.

#### Apa itu "layar utama" dan kenapa menangkap layar hanya di situ?
Layar "utama" adalah layar fisik atas atau bawah yang dipermuncul gambar oleh mesin utama. Biasanya layar yang menampilkan jalan permainan atau berunsur 3D itu yang selalu layar utama. Di menu *in-game*, ini selalu layar atas.

Alasan kenapa hanya bisa menangkap layar utama karena keterbatasan peranti keras Nintendo DS, tidak ada *framebuffer* (dapar bingkai) tapi ada fitur tangkap tampilan yang menangkap hasil keluaran mesin utama. Ini sering digunakan permainan untuk merender 3D ke kedua layar tapi juga bisa untuk menangkap layar.

#### Apa itu "Bank VRAM" yang perlu dipilih saat menangkap layar?
Saat menangkap layar dengan nds-bootstrap maka fitur tangkap tampilan DS digunakan untuk menangkap gambar dari mesin utama, namun tangkapan ini hanya bisa ditulis ke VRAM dan memerlukan salah satu dari empat bank pertama. nds-bootstrap akan langsung memilih bank yang tidak sedang digunakan mesin utama, jadi biasanya ini boleh diabaikan; namun kadang semua keempat bank VRAM digunakan mesin utama, berarti tangkapan layar akan jelek dan harus memilih bank yang terlihat bagus.

#### Apakah bisa bermain daring dengan nds-bootstrap?
Bermain daring dengan nds-bootstrap akan berfungsi persis seperti di kartrid sungguhan. Lihat laman [Wi-Fi](../ds-index/wifi) ini untuk informasi cara menyambung ke layanan daring alternatif.
- Jika permainan *DSi-Enhanced* dijalankan di mode DS, keamanan jejaringnya hanya bisa WEP atau tidak ada

#### Apakah mengatur CPU permainan ke 133 MHz (TWL) akan merusak konsol?
Tidak. Walaupun tidak semua permainan berfungsi di pengaturan ini, DSi dan 3DS memang dirancang mampu di kecepatan CPU ini.
- Jika permainan bermasalah saat dijalankan pada cepat CPU 133 MHz (TWL), buat *issue* baru di [repositori GitHub **TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/issues) dan jelaskan efeknya, nanti cepat CPU ini akan didaftarhitamkan untuk permainan tersebut

#### Apakah nds-bootstrap bisa mempercepat permainan?
Walaupun cepat CPU TWL bisa meredakan sendat, nds-bootstrap tidak bisa mempercepat gerak permainan.

#### Apakah nds-boostrap bisa memetakan tombol?
Tidak. Karena nds-bootstrap menjalankan permainan secara lokal, fungsi tombol tidak bisa diubah. Satu-satunya cara ya dengan memodif permainan itu sendiri, atau dengan *cheat*.

#### Apakah ROM Pokémon randomized bisa dimuat di nds-bootstrap?
Pokémon HeartGold/SoulSilver, Black/White, dan Black 2 / White 2 terdapat kode anti-pembajakan yang harus ditambal sendiri *sebelum* mengacakadut ROM. Caranya dengan [DS-Scene ROM Tool](https://gbatemp.net/download/35735/).
- ROM *randomized* (teracakadut) tidak bisa ditambal AP sambil jalan seperti versi ori permainannya, karena mengacakadut ROM hasilnya akan terus berbeda untuk dibuat tambalannya juga di **TW**i**L**ight Menu++

#### Apa itu biner DSi? Bagaimana dapatnya?
Sebagian biner DSi adalah kode permainan yang digunakan di konsol DSi (dan juga 3DS) untuk mengakses fitur DSi, seperti kamera dan keamanan Wi-Fi lebih baik. Men-*dump* biner dengan cara lama mungkin akan berantakan.

- ROM tanpa biner DSi masih bisa dimainkan di konsol apa pun lewat mode DS, tapi akan dijalankan seolah-olah di spesifikasi Nintendo DS Phat/Lite

Untuk mendapat ROM dengan biner DSi, coba [*dump* ulang Kartrid Permainan](https://wiki.ds-homebrew.com/id-ID/twilightmenu/faq?faq=how-do-i-get-games).
