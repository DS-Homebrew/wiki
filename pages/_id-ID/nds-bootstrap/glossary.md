---
lang: id-ID
layout: wiki
section: nds-bootstrap
title: Glosarium
description: Daftar istilah di nds-bootstrap
---

## Pengaturan
Pengaturan berikut ada di setelan tiap-permainan TWiLight Menu++. Beberapa opsi ini bisa diubah di menu *in-game* dari nds-bootstrap

### Versi SDK
Versi dari *Software Development Kit* (SDK) sebagai pengompilasi ROM.

### Title ID
The ID of which would be displayed on the bottom of the game card's sticker (ex. `NTR-ASME-USA`). It is retrieved from the ROM by reading it's header.

### Nomor simpanan
Berkas simpanan atau *save* permainan akan berekstensi `.savX`, tanda X menandakan angka simpanan selain 0. Mampu menyimpan sampai 10 simpanan di ROM yang sama.

### Jalankan di
Mengubah mode yang dijalankan ROM. Cepat CPU ARM9 dan opsi Mode VRAM juga terpengaruh. Jika ROM yang tidak didukung diubah ke mode DSi tidak akan ada efeknya.

### Cepat CPU ARM9
Mengubah kecepatan yang dijalankan CPU ARM9. Secara bawaan, ROM di Mode DS berjalan 67 Mhz (NTR). Ini bisa diubah ke 133 Mhz (TWL) untuk mengurangi lambat, tapi akan ada isu. ROM di Mode DSi hanya bisa diubah ke 133 Mhz (TWL).

### Mode VRAM
Mengubah mode *Video Random Access Memory* (VRAM) dari sistem. Secara bawaan, ROM di Mode DS menggunakan Mode VRAM DS. Ini bisa diubah ke Mode VRAM DSi tapi tidak berpengaruh dan akan bermasalah visual. ROM di Mode DSi hanya bisa diubah ke Mode VRAM DSi. If you're playing a TWL-type (DSi-Enhanced or DSiWare) ROM in DSi Mode, the VRAM Mode is set by the game itself.

### DMA Bacaan Kartu
Mengaktifkan *Direct Memory Access* (DMA) untuk bacaan kartu. Having this setting on can speed up ROMs slightly, but may cause issues. Info lebih teknis bisa dilihat di [Indeks DS](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### Mulai Langsung
Appears only for homebrew ROMs on flashcards. Setting this to `On` will not use nds-bootstrap when launching the ROM. Ini berguna untuk *homebrew* yang tidak perlu/berfungsi dengan nds-bootstrap.

### Bootstrap
Mengubah cara jalan ROM apakah dengan nds-boostrap versi *Release* atau *Nightly*. Informasi untuk versi *Nightly* bisa dilihat di [Pertanyaan Umum nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Nisbah Aspek Layar
Jika di 3DS, rasio atau Nisbah Aspek Layar bisa diubah dari 4:3 (Bawaan di DS/DSi) ke 16:10. [Layar lebar harus dinyalakan](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen) dulu.
