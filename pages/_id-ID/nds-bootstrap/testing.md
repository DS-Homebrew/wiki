---
lang: id-ID
layout: wiki
section: nds-bootstrap
title: Daftar Kompatibilitas & Saran Pengujian
description: Daftar kesesuaian dan saran cara menguji ROM
---

### Daftar Kompatibilitas
Untuk ROM yang sudah diuji, lihat [daftar kompatibilitas](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/). Jika ingin bersumbangsih, tekan `view only` lalu `request edit access`. Pastikan entri ditambahkan di lembar yang benar sesuai tab di bawah laman.

Untuk isu yang ada pada ROM, lihat [laman *issues*](https://github.com/DS-Homebrew/nds-bootstrap/issues) di Github. Jika ingin membuat [isu baru](https://github.com/DS-Homebrew/nds-bootstrap/issues/new), ikuti contoh templat isu dengan benar.

### Saran Cara Uji ROM
- Biasanya, lihat dulu [pertanyaan umum ](https://wiki.ds-homebrew.com/nds-bootstrap/faq) dan [glosarium nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/glossary) untuk memahami cara menyidik gangguan isu

#### Jika menguji kutu tertentu dari laporan
- Tiru langkah-langkahnya semirip mungkin
- Jika ada perbedaan (seperti versi nds-bootstrap, konsolnya, atau ubahan pengaturan), pastikan itu ditulis juga di dalam laporan
- Jangan ragu berbicara terkait perincian ke pelapor awal (seperti meminta berkas simpanan atau informasi belum lainnya) jika sempat
- Jika tidak ada solusi, jangan lupa perbarui daftar kompatibilitas

#### Jika ROM bermasalah setelah nds-bootstrap diperbarui
- Cari versi tertentu mana yang pertama mengalami isu ini
- Coba turunkan versi nds-bootstrap dengan mengunduh [*release* sebelumnya](https://github.com/DS-Homebrew/nds-bootstrap/releases) dan ikuti cara memperbaruinya
- Mungkin perlu juga turun versi ke *release* sebelumnya dari [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases)

#### Jika menguji ROM yang tidak ada masalah umum atau belum pernah diuji
- Uji ROM lebih teliti lagi, periksa apa pun yang mungkin juga dialami pengguna lain
- Pastikan informasi sesuai ditambahkan pada daftar kompatibilitas di lembar yang benar
- Pastikan juga permainan yang sudah diuji dihapus dari lembar *Testing Queue</ii></li> </ul>

#### Jika menguji untuk perbarui daftar hitam
- Ubah opsi yang terdaftar hitam saja, yaitu: Cepat CPU 133 MHz (TWL), DMA Bacaan Kartu, dan Bacaan Kartu Tak Selaras
- Untuk mengaktifkan opsi terdaftar hitam di setelan tiap-permainan, buka `sd:/_nds/TWiLightMenu/settings.ini` dan atur `IGNORE_BLACKLISTS` ke `1`
- Jika terjadi isu apa pun saat mengaktifkan pengaturan ini, mohon laporkan ke laman Github issues 
