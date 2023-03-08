---
lang: id-ID
layout: wiki
section: nds-bootstrap
title: Glosarium
description: Daftar istilah untuk nds-bootstrap
---

## Pengaturan
Ini semua dapat ditemukan di pengaturan tiap-permainan TWiLight Menu++. Beberapa opsi ini juga dapat diubah di menu in-game nds-bootstrap

### Versi SDK
Versi dari Software Development Kit (SDK) yang digunakan untuk mengompilasi ROM.

### Nomor simpanan
Berkas simpanan (save) untuk permainan akan berekstensi `.savX`, tanda X menandakan angka simpanan ke berapa jika bukan 0. Dapat menyimpan sampai 10 berkas simpanan di ROM yang sama.

### Jalankan di
Membuat ROM dijalankan di mode terpilih. Ini juga memengaruhi Cepat CPU ARM9 dan opsi Mode VRAM. Diatur ke Mode DSi untuk ROM yang tidak didukung tidak akan ada efeknya.

### Cepat CPU ARM9
Mengubah kecepatan yang dijalankan CPU ARM9. ROM yang di Mode DS akan berjalan 67 Mhz (NTR) secara bawaan. Ini dapat diubah ke 133 Mhz (TWL) untuk mengurangi lambat, tapi juga memunculkan isu. ROM yang di Mode DSi hanya dapat diatur ke 133 Mhz (TWL).

### Mode VRAM
Mengubah mode Video Random Access Memory (VRAM) dari sistem. ROM yang di Mode DS akan menggunakan Mode VRAM DS secara bawaan. Ini dapat diubah ke Mode VRAM DSi tapi tidak akan ada perubahan dan dapat bermasalah visual. ROM yang di Mode DSi hanya dapat diatur ke Mode VRAM DSi.

### DMA Bacaan Kartu
Menyalakan penggunaan Direct Memory Access (DMA) untuk bacaan kartu. Jika pengaturan ini dinyalakan dapat mempercepat ROM, tapi akan ada isu. Untuk info lebih teknis dapat ditemukan di [Indeks DS](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### Perl. ruang ROM di RAM
Jika permainannya cukup kecil, nanti dapat dimuat ke RAM sistem untuk mempercepat pemuatan. Menyalakan opsi ini akan memperluas batas ukuran ROM, tapi kemungkinan membuat kacau.

### Mulai Langsung
Hanya muncul untuk ROM homebrew. Jika diatur ke Nyala, maka ROM tidak akan diluncurkan dengan nds-bootstrap. Ini berguna untuk ROM homebrew yang tidak butuh/berfungsi dengan nds-bootstrap.

### Bootstrap
Mengubah cara jalan ROM apakah dengan build nds-boostrap Release atau Nightly. Informasi untuk build Nightly dapat ditemukan di [FAQ nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Nisbah Aspek Layar
Jika di 3DS, ukuran rasio atau Nisbah Aspek Layar dapat diubah dari 4:3 (Bawaan di DS/DSi) ke 16:10. [Layar lebar harus dinyalakan](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen) dahulu.
