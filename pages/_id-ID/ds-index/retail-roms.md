---
lang: id-ID
layout: wiki
section: ds-index
category: reference
title: ROM Retail
description: Informasi terkait permainan DS eceran atau retail
---

### Anti-pembajakan
AP (Anti-Pembajakan) adalah salah satu cara pengembang agar pembeli tidak membajak dan mencegah pembajakan. Ini bisa disiasati dari pemuat atau ROM itu sendiri.

- Untuk nds-bootstrap, akan dimuatkan tambalan `.ips` (dari Anda dan internal) untuk mengatasinya. Berkas `.ips` ini akan diterapkan oleh nds-bootstrap dalam RAM sehingga ROM tetap utuh.
- Untuk Wood R4, tambalan ini sudah ada dalam peranti lunaknya, sehingga ROM tidak perlu dimodif lagi

Jika tidak ada berkas `.ips` untuk ROM tertentu atau peranti lunak tidak mau menambal ROM, coba modif langsung ROM itu sendiri dengan [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/).

### *Cloneboot*
*Cloneboot* adalah tindakan mengirim biner ARM7 dan ARM9 permainan ke konsol lain. Ini digunakan DS Download Play untuk main rangkap satu-kartrid. Namun tidak semua permainan ada *cloneboot* untuk main bersama di satu-kartrid.

### Berkas simpanan
Kartrid Nintendo DS diketahui ada 4 jenis simpanan:

- EEPROM - Memori Hanya-Baca Tertataolahkan Terhapuskan Berlistrik
- FLASH
- FRAM - Memori Akses Acak Feroelektrik
- NAND - Gerbang NOT-AND

Format yang dibaca oleh pemuat ada beragam, di sini nds-bootstrap menggunakan format `.sav` mentah. Jika simpanannya berbeda format, gunakan situs berikut untuk konversi: http://www.shunyweb.info/convert.php.

### *Assembly*
Bahasa *assembly* (ASM) adalah bahasa penataolahan tingkat rendah yang berurusan erat antara instruksi bahasa dan prosesor. Untuk di DS, kode *assembly* ini berbentuk instruksi ARM atau pun THUMB, instruksi THUMB merupakan subhimpunan ARM. THUMB ini lebih hemat lebar pita memori karena menjalankan instruksi 16-bit dan bukan instruksi 32-bit seperti ARM.

Untuk informasi lebih lanjut terkait instruksi *assembly*, serta informasi teknis lainnya untuk DS dan DSi ada di [GBATEK](https://problemkaputt.de/gbatek.htm).

### DMA bacaan kartu
DMA (Akses Memori Langsung) adalah cara lebih sangkil membaca data daripada CPU. Saat mentransfer data, kode masih bisa jalan, sehingga cara ini lebih disukai untuk membaca data.

Untuk permainan dengan DMA bisa dilacak di no$gba dengan mengaktifkan *DMA log* di ARM9. Akses DMA ke kartu menggunakan AF000001 sebagai parameter ketiga.
- Contoh: `DMA2: 04100010 023C18C0 AF000001`

### *Cheat* Action Replay
Kode *cheat* Action Replay adalah kode tata olah tingkat rendah yang mengubah daerah memori dari permainan kesukaan Anda. Ubahan ini mulai dari utak-atik nilai yang sederhana sampai utak-atik ASM amat canggih, keduanya bisa mengubah pengalaman main permainan.

*Flashcart* bisa memanfaatkan kode *cheat* jika ada pangkalan data *cheat*. Untungnya, fungsi *cheat* sudah sepadu dalam *kernel flashcart*. *Kernel* berikut ini mampu membaca *cheat*:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Cara lainnya secara *homebrew*/digital juga bisa membaca pangkalan data *cheat*, peranti lunak yang menggunakan *cheat* di antaranya:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
    - NitroHax mampu menerapkan *cheat* dari *flashcart* ke kartrid asli. Mesinnya akan memuat seluruh pangkalan data cheats.xml ke RAM Nintendo DS yang terbatas lalu dikelola dari situ. Hal ini membuat jumlah *cheat* yang ditaruh sangat terbatas, karena NitroHax tidak akan membaca cheats.xml yang melebihi 2,4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([*fork* usrcheat.dat](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` atau `usrcheat.dat`)
    - NitroHax3DS adalah versi NitroHax yang berjalan di kartu SD konsol DSi atau 3DS. Versi aslinya menggunakan cheats.xml dengan batas 2,4 MB seperti NitroHax asli, tapi ada *fork* yang membaca *cheat* dari usrcheat.dat bahkan tanpa batas ukuran
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
    - TWiLight Menu++ membaca `usrcheat.dat` dan menyalurkan nilai *cheat* yang aktif ke berkas lain, lalu dibaca oleh nds-bootstrap
    - Mesin *cheat* yang digunakan di nds-bootstrap didasarkan dari NitroHax. Namun, karena berkas *cheat* hanya berisi *cheat* untuk judul tertentu, maka yang dibatasi hanya jumlah *cheat* yang bisa diaktifkan, bukan ukuran pangkalan datanya

Untuk pangkalan data *cheat* terlengkap, kami anjurkan [DeadSkullzJr's NDS Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Kode *cheat* umumnya berjenis 0 sampai F, berikut ini uraiannya (belum selesai):

- Jenis kode 0xE adalah kode 32-bit yang mampu menulis bersamaan di banyak alamat beruntun sekaligus. Pada intinya, ini seperti jenis kode tulis RAM 32-bit dasar (0x0), bedanya ini tidak disenaraikan alamat di sebelah nilai yang ingin Anda tulis. Melainkan, jenis kode 0xE diprogram untuk langsung bercabang dari alamat awal, lalu akan ditentukan ditulis ke alamat mana. Dari situ, tentukan saja jumlah tulisnya untuk dijalankan
    - Kode *cheat* jenis ini diketahui susah berfungsi dengan nds-bootstrap saat ini
- DeadSkullzJr sedang mengerjakan daftar uraian kode *cheat* yang lebih menyeluruh, tautan akan ditaruh di sini sesudah siap

### Judul Demonstrasi dan Distribusi:
Judul demonstrasi (demo) berbeda dengan judul retail dari banyak hal. Penanda jelas di sini seperti kartrid hanya lah versi peragaan dari bentuk retailnya nanti, intinya demo itu bentuk icip dari apa yang akan dirilis penuh ke depannya. Untuk kartrid Nintendo DS sering ditandai "*Not for Resale*" (Tidak Dijualbelikan) di label judul, setiap demo juga tertulis ID judul berbeda dibanding versi retailnya, dan di belakang kartrid juga ada stiker "*Not for Resale*". Kartrid ini biasanya hanya *kiosk demo* di toko atau tempat promosi lainnya.

Untuk judul distribusi agak berbeda penggunaannya, namun demo juga bisa ditandai label distribusi pada beberapa judul permainan. Kebanyakan judul distribusi hanya permainan versi retail untuk dipajang saja atau disertakan dalam suatu kemasan promosi. Kartrid jenis ini juga berlabel "*Not for Resale*" seperti judul permainan demonstrasi. Terkadang juga digunakan di kios agar pemain atau pengunjung bisa mencoba permainan. Namun, hampir semua kartrid ini pada dasarnya sama dengan versi retailnya, jadi biasanya kartrid diberi pengenal tambahan di ID judul label.

Contoh ID: `DIS-NTR-NTRJ-JPN`

`DIS` - Distribusi


### Label Judul
Melihat bagian bawah label kartrid akan ada ID judul dan informasi kecil lainnya, berikut contoh dengan ID:

- NTR-NTRJ-**XXX**

**XXX** mewakili daerah berikut:

- AUS - Australia
- CHN - Tiongkok
- DEN - Denmark
- EUR - Eropa (Bermacam Bahasa)
- EUU - Eropa (Hanya Belanda atau Italia)
- FRA - Prancis
- GER - Jerman
- HOL - Belanda
- ITA - Italia
- JPN - Jepang
- KOR - Korea
- NOE - Eropa (Hanya Jerman)
- NOR - Norwegia
- RUS - Rusia
- SPA - Spanyol
- UKV - Inggris Raya
- USA - Amerika Serikat

Huruf terakhir pada ID judul itu sendiri mewakili bahasa judul. Berikut contoh dengan ID tadi:

- NTR-NTR**X**-JPN

**X** mewakili berikut:

- A - Sedunia (tak penting, hanya digunakan satu hal)
- C - Bahasa Cina (Han Sederhana)
- D - Bahasa Jerman
- E - Bahasa Inggris Amerika
- F - Bahasa Prancis
- G - Bahasa Yunani
- H - Bahasa Belanda
- I - Bahasa Italia
- J - Bahasa Jepang
- K - Bahasa Korea
- M - Bahasa Swedia
- N - Bahasa Norwegia
- O - Bahasa Inggris (*DSi Enhanced*)
- P - Bermacam Bahasa Eropa
- Q - Bahasa Denmark
- R - Bahasa Rusia
- S - Bahasa Spanyol
- T - Bahasa Inggris (*DSi Enhanced*)
- U - Bahasa Inggris Australia
- V - Bahasa Inggris Britania
- W - Bahasa lain (Bermacam)
- X - Bahasa lain (Bermacam)
- Y - Bahasa lain (Bermacam)
- Z - Bahasa lain (Bermacam)

Untuk mengidentifikasi sistem:

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### *DSi Enhanced*:

Permainan "*DSi Enhanced*" adalah permainan DS Phat/Lite yang bisa memanfaatkan beberapa fitur pada konsol DSi jika dimainkan di DSi. Permainan jenis ini ditandai `TWL` tapi tetap berlabel "Nintendo DS", bukan "Nintendo DSi".

### DSiWare:

DSiWare adalah permainan dan aplikasi digital yang bisa diunduh dari DSi Shop dan dijalankan dari System Menu DSi.
    - Contohnya:
        - Serial Art Style
        - Flipnote Studio
        - Serial G.G
        - The Legend of Zelda: Four Swords: Anniversary Edition
        - Nintendo DSi Browser
        - Shantae: Risky's Revenge
        - Sudoku terbitan EA
    - Sebagian besar DSiWare juga bisa diunduh lewat 3DS eShop.
    - DSiWare sudah tidak bisa diunduh lagi karena tutupnya toko DSi dan 3DS.

DSiWare hanya bisa dijalankan dari memori internal konsol, kecuali jika dijalankan **TW**i**L**ight Menu++ dari kartu SD DSi/3DS atau *flashcart*.
    - Dengan *flashcart*, beberapa DSiWare bisa dijalankan di konsol DS atau DS Lite.

Setiap aplikasi sistem DSiWare/DSi (kecuali System Menu) menonaktifkan akses Slot-1 (alias slot kartrid DS), sehingga tidak bisa membaca isi dari kartrid DS atau bahkan *flashcart*.
    - Ini berarti pengembang tidak bisa menambahkan kartrid DS sebagai alat akses fitur tersembunyi di DSiWare.
    - Ini juga berarti *homebrew* (yang dijalankan lewat eksploit apli DSiWare) seperti GodMode9**i** tidak bisa men-*dump*/ekstrak ROM kartrid DS, kecuali jika lewat Unlaunch.