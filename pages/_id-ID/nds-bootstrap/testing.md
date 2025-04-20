---
lang: id-ID
layout: wiki
section: nds-bootstrap
title: Kompatibilitas & Saran Pengujian
description: Daftar kesesuaian dan saran cara menguji ROM
---

### Daftar Kompatibilitas
Untuk ROM yang sudah diuji, lihat [daftar kompatibilitas](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/). Jika ingin bersumbangsih, tekan `view only` lalu `request edit access`. Pastikan entri ditambahkan di lembar yang benar sesuai tab di bawah laman.

Untuk isu yang ada pada ROM, lihat [laman *issue*](https://github.com/DS-Homebrew/nds-bootstrap/issues) di Github. Jika ingin membuat [*issue* baru](https://github.com/DS-Homebrew/nds-bootstrap/issues/new), ikuti templat *issue* dengan benar.

### Saran Pengujian ROM
- Baiknya, baca dulu [pertanyaan umum ](https://wiki.ds-homebrew.com/id-ID/nds-bootstrap/faq) dan [glosarium nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/glossary) untuk memahami cara menyidik gangguan isu

#### Untuk menguji kutu sesuai laporan
- Tiru langkah-langkahnya semirip mungkin
- Jika ada perbedaan (seperti versi nds-bootstrap, konsolnya, atau ubahan pengaturan), pastikan itu ditulis juga di dalam laporan
- Jangan ragu bertanya terkait perincian ke pelapor awal (seperti meminta berkas simpanan atau informasi belum lainnya) jika sempat
- Jika tidak ada solusi, jangan lupa perbarui daftar kompatibilitas

#### Untuk ROM yang ada isu setelah perbarui nds-bootstrap
- Cari versi tertentu mana yang pertama muncul isu ini
- Coba turunkan versi nds-bootstrap dengan mengunduh [*release* sebelumnya](https://github.com/DS-Homebrew/nds-bootstrap/releases) dan ikuti cara memperbaruinya
- Mungkin perlu juga turunkan [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) ke versi *release* sebelumnya

#### Untuk menguji ROM yang tidak ada isu umum atau belum pernah diuji
- Uji ROM lebih teliti lagi, periksa apa pun yang mungkin juga dialami pengguna lain
- Pastikan jangan salah menambah informasi pada lembar di daftar kompatibilitas
- Pastikan juga permainan yang sudah diuji dihapus dari lembar *Testing Queue*

#### Untuk memperbarui daftar hitam
- Ubah opsi terdaftar hitam saja, yaitu: Cepat CPU 133 MHz (TWL), DMA Bacaan Kartu, dan Bacaan Kartu Tak Selaras
- Untuk mengaktifkan opsi terdaftar hitam di setelan tiap-permainan, buka `sd:/_nds/TWiLightMenu/settings.ini` dan atur `IGNORE_BLACKLISTS` ke `1`
- Jika terjadi isu apa pun saat mengaktifkan pengaturan ini, mohon laporkan ke laman *issue* Github 
