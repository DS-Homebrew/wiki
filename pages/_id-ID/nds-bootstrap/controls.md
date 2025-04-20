---
lang: id-ID
layout: wiki
section: nds-bootstrap
title: Kendali
long_title: Kendali nds-bootstrap
description: Tombol kendali untuk nds-bootstrap
---

Ini tidak berlaku untuk *homebrew*.
- <kbd>SELECT</kbd> + <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Kendali volume presisi
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Bawah</kbd> + <kbd class="face">A</kbd> selama 2 detik: Men-*dump* RAM berupa `ramDump.bin` ke `sd:/_nds/nds-bootstrap`
    - Tidak berfungsi di mode B4DS *flashcart*
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Bawah</kbd> + <kbd class="face">B</kbd> selama 2 detik: Kembali ke pemuat
    - Tidak berfungsi di mode B4DS *flashcart*
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> selama 2 detik: Memulai ulang permainan
    - Banyak permainan yang secara bawaan ada kombinasi tombol ini, tapi yang ini akan memulai ulang paksa
    - Tidak berfungsi di mode B4DS *flashcart*
- <kbd class="l">L</kbd> + <kbd>Bawah</kbd> + <kbd>SELECT</kbd>: Membuka menu *in-game*
    - Tangkap Layar
        - <kbd>Atas</kbd>/<kbd>Bawah</kbd>/<kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Ubah bank VRAM
        - <kbd class="face">A</kbd>: Simpan tangkapan layar
        - <kbd class="face">B</kbd>: Kembali ke menu *in-game*
    - Penampil RAM
        - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Gulir (*scroll*)
        - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Gulir cepat
        - <kbd class="r">R</kbd> + <kbd>Bawah</kbd>/<kbd>Atas</kbd>: Gulir lebih cepat
        - <kbd class="r">R</kbd> + <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Gulir paling cepat
        - <kbd class="face">A</kbd>: Masuk Penyunting RAM
        - <kbd class="face">B</kbd>: Kembali ke menu in-game
        - <kbd class="face">Y</kbd>: Lompat ke alamat mana
        - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Menambah/Kurangi nilai terpilih
        - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Pilih nilai (*value*)
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Melompat ke alamat yang ditentukan
        - <kbd>SELECT</kbd>: Beralih ke [peta memori ARM7 atau ARM9](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
    - Penyunting RAM
        - <kbd>Atas</kbd>/<kbd>Bawah</kbd>/<kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Pilih nilai (*value*)
        - <kbd class="face">A</kbd>: Mengubah nilai terpilih
            - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Menambah/Kurangi nilai sebesar 1 heksadesimal
            - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Menambah/Kurangi nilai sebesar 10 heksadesimal
            - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Selesai mengubah nilai
        - <kbd class="face">B</kbd>: Kembali ke Penampil RAM
        - <kbd class="face">Y</kbd>: Lompat ke alamat mana
        - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Menambah/Kurangi nilai terpilih
        - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Pilih nilai (*value*)
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Melompat ke alamat yang ditentukan
- Kembali ke *loader* (pemuat) mungkin tidak bisa pada old3DS tertentu dan pada DSiWare di mode B4DS
- Kombinasi tombol untuk ke menu *in-game* bisa diubah di pengaturan TWiLight Menu++
- Tombol volume presisi bisa dinyalakan/dimatikan di pengaturan TWiLight Menu++
- Tangkapan layar disimpan di `sd:/_nds/nds-bootstrap/screenshots.tar`. Berkas ini bisa dibuka dengan penampil arsip seperti [7-Zip](https://www.7-zip.org/)
