---
lang: id-ID
layout: wiki
section: gbarunner2
title: Versi GBARunner2
description: Informasi tentang beragam versi GBARunner2 dan kegunaannya
---


Ada sejumlah versi atau *build* berbeda dari GBARunner2 yang bisa digunakan. Versi tersebut berasal dari cabang dan *fork* GBARunner2 dengan fitur berbeda yang ditujukan untuk beberapa permainan GBA atau kegunaan lain. **Untuk banyak orang**, versi yang disertakan di **TW**i**L**ight Menu++ sudah cukup.

## Versi DS, DSi, dan 3DS

GBARunner2 terdapat versi yang memanfaatkan spesifikasi tambahan konsol DSi dan 3DS. Tentu saja, versi khusus DSi dan 3DS tidak akan berfungsi di DS. GBARunner2 versi tersebut juga tidak berfungsi jika dijalankan dari *flashcard* di sistem apa pun, termasuk DSi dan 3DS. Untuk perinciannya tidak akan dibahas di sini.

Berarti, versi untuk DS bisa digunakan di konsol DSi dan 3DS, tapi tidak sebaliknya.

## Versi Sebagi Antara DS, DSi, dan 3DS

Berikut adalah versi yang terdapat pada ketiga deret sistem.

### [*Master*](https://github.com/Gericom/GBARunner2/releases)

Versi *Master* atau binaan "utama" adalah versi GBARunner2 yang teratur. Seharusnya versi ini yang paling stabil. Semua cabang lain selain ini dianggap coba-coba dan kurang stabil untuk disertakan ke versi *Master*. Versi *Master* dibagi menjadi beberapa versi untuk DS, DSi dan 3DS. Masing-masing ditandai nama sistem yang dibubuhkan di ujung nama berkas.

### [*Wi-Fi-Link*](https://github.com/Gericom/GBARunner2/releases/tag/v20200217-194452_0b8bbe3)

Cabang *Wi-Fi-Link* ini mampu menghubungkan dua sistem secara nirkabel. Tapi bukan berarti lewat Internet, dan pastinya tidak akan bisa karena latensi. Saat ini jarak tempuhnya akan beragam, dan satu-satunya permainan yang sambungannya tetap bisa stabil yaitu Advance Guardian Heroes, itu pun jika sudah mengikuti arahan yang sangat spesifik. Dengan kata lain, anggap saja cabang ini masih berbentuk bukti konsep, dan masih belum bagus digunakan. Beberapa permainan lain bisa tersambung, tapi sangat dipengaruhi faktor luar seperti gangguan dari sinyal Wi-Fi lain, dan hal lainnya. Untuk mengatur penautan Wi-Fi, lihat laman [WikiTemp](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

## Versi Khusus DS

### ARM7DLDI vs ARM9DLDI

**ARM9DLDI biasanya digunakan**, dan jika tidak berfungsi, coba yang ARM7DLDI. Beberapa *flashcard* ada yang hanya bisa ARM7DLDI atau ARM9DLDI, atau ada yang bisa keduanya. Tidak ada daftar pasti *flashcard* berfungsi di versi mana, tapi jika bermasalah menjalankan GBARunner2 mungkin coba versi satunya lagi.

Jika menggunakan **TW**i**L**ight Menu++ di *flashcard*, bisa dipilih versi ARM7DLDI atau ARM9DLDI di pengaturan **TW**i**L**ight Menu++.

Keduanya tidak ada perbedaan dari segi fitur atau kinerja, sehingga keduanya tidak usah diuji yang mana yang lebih lancar atau lebih sedikit masalah.

Lihat lagi ke bawah untuk memeriksa sekarang di versi apa.

### [rom3M](https://github.com/Gericom/GBARunner2/releases/tag/v20190911-201047_371815e)

Cabang ini mungkin mampu menjalankan ROM yang agak besar di DS, tapi ada batasannya karena jumlah RAM DS terbatas. Bisa dibilang ini cabang khusus Pokémon Emerald untuk DS.

Void Star membuat [ *fork* dari GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) yang menggabungkan cabang rom3M ke versi *Master* terkini dengan fitur bagus lainnya, dan versi ini disertakan di **TW**i**L**ight Menu++ jika menggunakan DS.

## Versi Khusus DSi dan 3DS

Konsol DSi dan 3DS umumnya bisa membaca versi yang sama, tapi karena perbedaan jumlah RAM antara DSi dan 3DS, kompatibilitas permainan bisa berbeda. Ini berarti ROM yang lebih besar akan susah dibaca di DSi tapi tetap lancar di 3DS.

Konsol 3DS punya cip akselerometer tertanam untuk kendali *gyro*, dan ini bisa digunakan di versi khusus 3DS.

### [DSP](https://github.com/Gericom/GBARunner2/releases/tag/v20200809-113646_551ae99_dsp-audio)

Jika menggunakan **TW**i**L**ight Menu++, fitur ini sudah digunakan pada GBARunner2 yang ada.

Versi DSP memanfaatkan pengolah suara digital yang ada di DSi dan 3DS. Ini membantu menghasilkan suara dan kinerja yang lebih baik. Tapi ada kemunduran, seperti beberapa ROM masih tidak berfungsi di cabang ini.

### [*Hybrid Hicode*](https://github.com/Gericom/GBARunner2/releases/tag/v20200812-130512_d5dc8d8)

Jika menggunakan **TW**i**L**ight Menu++, fitur ini sudah digunakan pada GBARunner2 yang ada.

Cabang *Hybrid Hicode* menangani ROM berukuran besar dan yang bermasalah dijalankan di cabang *Master*. Versi ini sangat berguna di konsol DSi karena mengatasi masalah RAM lebih kecil dibanding 3DS.

### [Gabungan Hicode/DSP](https://github.com/therealteamplayer/GBARunner2/releases/tag/v20210911-merges-and-tweaks)

*Fork* dari therealteamplayer menggabungkan cabang Hicode dan DSP menjadi satu versi, serta utak-atik lainnya yang tertera di catatan rilis. Versi ini yang digunakan **TW**i**L**ight Menu++ untuk di kartu SD DSi/3DS.

### Khusus 3DS: [*Gyro*](https://github.com/Gericom/GBARunner2/releases/tag/v20191228-021638_ee7f6a0)

Cabang ini memanfaatkan akselerometer dalam konsol 3DS agar permainan GBA dengan fungsi ini bisa dimainkan dengan benar. Ada beberapa langkah yang harus dilakukan agar berfungsi. Tapi karena cip akselerometer juga berbeda-beda di antara konsol 3DS, ini mungkin tidak berfungsi di semua 3DS karena cip berbeda perlu dibuat kode khusus.

Belum ada kejelasan pasti jenis 3DS apa terdapat cip apa, sejauh yang diketahui.

## Memeriksa Info Versi

Menu di GBARunner2 bisa dibuka dengan menyentuh layar bawah dan menekan tombol R. Di dalamnya terdapat menu *About* yang menjelaskan sekarang di versi berapa. Namun, versi yang disertakan di **TW**i**L**ight Menu++ tidak ada nomor versi karena didasarkan *fork* orang lain. Ini berarti jika versi di halaman *About* kosong saja, versi bawaan sedang digunakan.

Halaman *About* juga menjelaskan sekarang di versi ARM7DLDI atau ARM9DLDI.

Mengetahui versi yang digunakan akan memudahkan memeriksa daftar kompatibilitas resmi, Ini jika permainan ada yang bermasalah.

Nomor *release ID* bisa dilihat di laman *release* dari repositori github GBARunner2, versinya terdiri dari tujuh alfanumerik. Contohnya, versi *Master* terkini bernama "v20200812-131430_6e4ce45", bagian "6e4ce45" mewakili nomor versi.
