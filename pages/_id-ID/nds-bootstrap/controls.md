---
lang: id-ID
layout: wiki
section: nds-bootstrap
title: Kendali
long_title: Kendali nds-bootstrap
description: Tombol kendali untuk nds-bootstrap
---

Ini tidak berlaku untuk homebrew.
- <kbd>SELECT</kbd> + <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Untuk kendali volume presisi
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Up</kbd> + <kbd class="face">X</kbd> selama 1 detik: Menukar layar
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> selama 2 detik: Menimbun (dumping) RAM ke `sd:/_nds/nds-bootstrap`, sebagai `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">B</kbd> selama 2 detik: Kembali ke menu pemuat
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> selama 2 detik: Memulai ulang permainan
  - Banyak permainan yang juga mendukung kombinasi tombol ini secara bawaan, bedanya ini akan memulai ulang paksa
- <kbd class="l">L</kbd> + <kbd>Bawah</kbd> + <kbd>SELECT</kbd>: Membuka menu in-game
   - <kbd class="r">R</kbd>: Maju satu bingkai (frame)
   - Tangkap Layar
      - <kbd>Atas</kbd>/<kbd>Bawah</kbd>/<kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Ubah bank VRAM
      - <kbd class="face">A</kbd>: Simpan tangkapan layar
      - <kbd class="face">B</kbd>: Kembali ke menu in-game
   - Penampil RAM
      - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Gulir (Scroll)
      - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Gulir cepat
      - <kbd class="r">R</kbd> + <kbd>Bawah</kbd>/<kbd>Atas</kbd>: Gulir lebih cepat
      - <kbd class="r">R</kbd> + <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Gulir paling cepat
      - <kbd class="face">A</kbd>: Memasuki Penyunting RAM
      - <kbd class="face">B</kbd>: Kembali ke menu in-game
      - <kbd class="face">Y</kbd>: Menentukan pindah ke alamat mana
        - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Meningkatkan/Mengurangi nilai (value) yang dipilih
        - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Pilih nilai
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Kembali ke Penampil/Penyunting RAM di alamat yang ditentu
      - <kbd>SELECT</kbd>: Beralih antara [peta-peta memori ARM7 and ARM9](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
   - Penyunting (Editor) RAM
      - <kbd>Atas</kbd>/<kbd>Bawah</kbd>/<kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Pilih nilai (value)
      - <kbd class="face">A</kbd>: Mengubah nilai yang dipilih
         - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Meningkatkan/Mengurangi nilai sebesar 1h
         - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Meningkatkan/Mengurangi nilai sebesar 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Akhiri mengubah nilai
      - <kbd class="face">B</kbd>: Kembali ke Penampil RAM
      - <kbd class="face">Y</kbd>: Menentukan pindah ke alamat mana
        - <kbd>Atas</kbd>/<kbd>Bawah</kbd>: Meningkatkan/Mengurangi nilai (value) yang dipilih
        - <kbd>Kiri</kbd>/<kbd>Kanan</kbd>: Pilih nilai
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Kembali ke Penampil/Penyunting RAM di alamat yang ditentu
- Kembali ke pemuat (loader) kemungkinan tidak bekerja pada beberapa model O3DS, dan tidak bekerja di mode B4DS
- Kombinasi tombol untuk membuka menu in-game dapat diubah di pengaturan TWiLight Menu++
- Tombol kendali volume presisi dapat dinyalakan/dimatikan di pengaturan TWiLight Menu++
- Tangkapan layar disimpan di `sd:/_nds/nds-bootstrap/screenshots.tar`. Berkas ini dapat dibuka menggunakan penampil arsip seperti [7-Zip](https://www.7-zip.org/)
- Menangkap layar saat ini belum berfungsi di mode B4DS
