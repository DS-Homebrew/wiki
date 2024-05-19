---
lang: id-ID
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / TWL_FIRM Nintendo 3DS
description: Informasi tentang Nintendo DSi dan TWL_FIRM Nintendo 3DS
---

### Menyiapkan CFW
Manfaat utama memodif jenis konsol DSi dan 3DS adalah membuka kemampuan lebih pada konsol tersebut. Memasang *custom firmware* itu cukup mudah, biasanya hanya perlu kartu (micro)SD. Berikut panduan pilihan yang tersedia, dengan arahan langkah demi langkah:

- [Panduan Meretas 3DS](https://3ds.hacks.guide)
   - Perintah "Lightning": `mod 3ds`
   - Perintah "TWLHelper": `guide 3ds`
   - Perintah "Kurisu": `guide 3ds`
- [Panduan Meretas DSi](https://dsi.cfw.guide)
   - Perintah "Lightning": `mod dsi`
   - Perintah "TWLHelper": `guide dsi`
   - Perintah "Kurisu": `guide dsi`

### Cepat CPU
Nintendo DS dirakit dengan prosesor 67 MHz pada 2004, dan Nintendo DSi dengan prosesor 133 MHz lima tahun kemudian. Hampir semua pustaka Nintendo DS dibuat sebelum Nintendo DSi dirilis, sehingga banyak permainan hanya membaca prosesor 67 MHz. Beberapa aplikasi dibuat dengan laju jam tersebut sehingga tidak akan berfungsi benar jika di laju jam lebih tinggi. Tapi hampir semua permainan lebih lancar daripada aslinya di laju jam tinggi.

Terdapat opsi *TWL Clock Speed* di nds-bootstrap, tapi ROM tidak akan dipaksa lancar di laju jam lebih tinggi. Jadi ROM yang kacau di laju jam lebih tinggi itu *bukan* gara-gara kutu nds-bootstrap, tapi dari ROM itu sendiri.

### Menu Nintendo DSi
Di versi 1.4.0, tanda tangan RSA di daftar putih Kaset DS tidak diverifikasi. Ini kerentanan yang bisa dieksploitasi agar mampu mengambil alih akses prosesor ARM9. Perlu versi 1.4.0 (karena di versi baru sudah ditambal dan di versi lama tidak ada) dan *flashcard* dengan ROM dimodif.

Tapi ada juga *glitch* dari cara Nintendo DSi Menu menghitung ruang kosong yang mana bisa galat jika menu tidak dibaca dari NAND asli; untuk informasi lanjut, lihat [Pertanyaan Umum & Sidik Gangguan hiyaCFW](../hiyacfw/faq#the-free-space-bug).

### Akses & pemblokiran Slot-1 Nintendo DSi
Akses Slot-1 diblokir jika menjalankan aplikasi dari menu sistem, kecuali jika aplikasi tersebut peluncur Slot-1 itu sendiri atau System Settings. Untuk menjalankan kaset Slot-1 yang biasanya tak terbacakan, perlu eksploit System Settings atau pasang Unlaunch. Tanpa salah satu kedua ini, maka tidak akan bisa membaca *flashcard* tak terbacakan dan men-*dump* ROM ke kartu SD.

Sebelum v1.4.0, daftar putih hanya berisi dua bagian. Di v1.4.0, mulai ada bagian ketiga untuk memblokir *flashcard* yang bisa molos dua bagian tadi. Bagian ketiga ini membaca delapan bagian berbeda dari ROM yang diperiksa dengan *hash* agar tahu ROM diutak-atik atau tidak. Namun, karena kurangnya kendali, ini bisa diluapkan ke vektor pengecualian/alamat interupsi menggunakan nilai cukup besar. Hebatnya, ternyata ini berjalan di ARM7 (prosesor keamanan) menjadikan ini eksploit pertama ke prosesor ARM7. Karena ini berjalan sebelum tutup izin register SCFG, *homebrew* tingkat lanjut (seperti Slot-1 dumpers) bisa dijalankan.

Sayangnya, persyaratannya susah. Perlu versi 1.4.0 dan *flashcard* dengan ROM dimodif. Eksploit ini tidak pernah diumumkan resmi, karena Unlaunch lebih mudah dipasang dan tidak banyak persyaratan (cuma untuk ke *homebrew*) dan manfaatnya juga sama.

### Nintendo DSi Camera
Aplikasi Nintendo DSi Camera mampu mengambil gambar format JPEG dan menyimpannya ke *System Memory* atau kartu SD. Tapi dibatasi hanya bisa membaca gambar yang dibuat di DSi, karena tidak ada HMAC yang benar dalam tag EXIF kustom. Gambar bersumber lain tidak bisa dibaca di DSi, baik dari komputer atau suntingan komputer, kecuali jika disimpan benar.

Pemuatan gambar diurus dari berkas `pit.bin`. Tapi, ukuran *header* di *offset* 0x16 malah tidak diperiksa; jadi jika nilai ukuran *header* cukup besar, ini akan meluwah dan penyangganya akan menimpa dan membaca kode tak bertanda. Begitu cara kerja Memory Pit.

### *Bootstage 2* Nintendo DSi
Tahap nyala kedua atau *bootstage 2* Nintendo DSi memuat "title.tmd" peluncur ke memori. Tapi, karena batas ukuran berkas tidak diperiksa, berarti 80ribu bita pertama akan dimuat ke RAM dan sisanya bisa diisi *payload* kustom. Ini dasar dari eksploit Unlaunch.

### RTCom
RTCom adalah penggunaan RTC 3DS untuk membantu CPU ARM7 dan ARM11 berkomunikasi satu sama lain, bahkan saat di TWL_FIRM. Ini membuat fitur 3DS bisa dibaca di mode DS(i). Ini meliputi masukan analog *circle pad*, pengaktifan layar lebar, dan membaca *gyro*. Saat ini, satu-satunya *homebrew* DS publik yang menggunakan RTCom adalah GBARunner2 **versi tertentu** yang mendukung fitur *gyro* 3DS. Untuk mengaktifkan RTCom, gunakan [TWPatch](https://gbatemp.net/threads/542694/).
