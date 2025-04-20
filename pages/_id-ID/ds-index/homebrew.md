---
lang: id-ID
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Informasi tentang <i>homebrew</i> di Nintendo DS
---

### Pengembangan
*Homebrew* Nintendo DS biasanya dikembangkan dengan alat devkitPro; seperti devkitARM, libnds, dan libfat. Namun, boleh juga merambah ke peranti lunak lain sebagai alternatif:

- **Pustaka kartu SD:** [libfat](https://github.com/devkitPro/libfat) dari libnds umumnya dianjurkan, [libslim](https://github.com/DS-Homebrew/libslim/) terkadang bisa berfungsi lebih baik tapi tidak stabil
- **Pustaka grafis:** [easyGL2D](http://rel.phatcode.net/junk.php?id=117) yang ada di libnds dianjurkan, tapi [NightFox Lib](https://github.com/knightfox75/nds_nflib) juga bisa digunakan
- **Seluruh rantai alat:** [devkitARM](https://devkitpro.org/wiki/Getting_Started) dan [libnds](https://libnds.devkitpro.org/) dianjurkan karena berkompatibilitas DSi dan berekosistem lebih besar, sedangkan [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) untuk pengembangan ke *flashcart*

Bagi pemula, baca [utas GBAtemp ini](https://gbatemp.net/threads/useful-resources-to-help-you-out-with-starting-to-make-nds-homebrew.580507/#post-9322674) yang berisi banyak sumber daya bagus. Untuk informasi DS(i) lebih teknis, lihat [GBATEK](https://problemkaputt.de/gbatek-contents.htm).

### *Flashcart*
*Flashcart* mode DS adalah cara menjalankan aplikasi Nintendo DS dari Slot-1. *Flashcart* bisa menyimpan berkas konsol dan berkas *flashcart* tetap terpisah, bisa digunakan tanpa perlu memodif konsol, dan bisa digunakan di konsol DS Phat/Lite. Tapi, tidak seperti memodif sistem konsol, harus pintar memilih *flashcart* di pasaran dengan kernel berbeda-beda. Ketahui dan cadangkan juga *kernel* yang digunakan.

### DLDI
Slot kartu SD lain (sering kali) punya fisik berbeda, dan kode untuk suatu *flashcart* belum tentu berfungsi di *flashcart* lain. DLDI (singkatan dari *Dynamically Linked Device Interface*) akan mengatasinya dengan menambal kode *handling* kartu SD dari cara luar. *Loader* (pemuat) seperti YSMenu, Wood R4, dan TWiLight Menu++ bisa otomatis menambal DLDI ke *homebrew*, tapi jika ingin menambal sendiri, gunakan [DLDI Patcher](https://www.chishm.com/DLDI#tools) di komputer.

### *Time bomb*
Di *kernel flashcart* tertentu, ada tenggat kedaluwarsa manasuka (dikenal sebagai *time bomb*) oleh para pengembang *kernel* agar konsumen membeli produk baru mereka. Berikut cara kerjanya:

1. *Flashcart* dijalankan lalu berkas *kernel* di kartu SD akan dimuat tanpa diperiksa itu *kernel* dari pengembang apa bukan
1. Setiap kali berkas *kernel* dimuat dari kartu SD, tanggal sistem akan diperiksa apakah lewat tenggat

Jika cara kedua hasilnya positif, *kernel* tidak akan dimuat. Ini bisa diuji dengan memajukan tanggal sistem ke paling ujung. Namun, keamanannya lemah dan hasilnya tidak di-*cache*, berarti ada cara untuk menyiasatinya:

Jika ingin menggunakan *kernel* bawaan yang dibuat produsen *flashcart*, jam sistem harus dimundurkan di aplikasi System Settings konsol. Perlu diingat, ini bisa mengacau permainan apa pun yang bergantung jam sistem (seperti Animal Crossing: Wild World).

Namun, *kernel* yang disertakan dengan *flashcart* ini memang kurang bagus dan lebih baik langsung diganti. Untungnya, pengembang pihak ke-3 telah membuat alternatif berikut:

- [YSmenu - menu + pemuat permainan](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) - Walaupun tidak ada kelebihan seperti menu kustom semua-satu, kompatibilitas pemuat ini lebih bagus dan bisa *cheat* Action Replay
- [TWiLight Menu++ dengan nds-bootstrap](../twilightmenu/installing-flashcard) - Punya menu kustom semua-satu dan bisa *cheat*, tapi mode B4DS (mode saat tidak ada akses ke fitur DSi) berkompatibilitas lemah, beberapa permainan bahkan perlu Memory Expansion Pak
- [TWiLight Menu++ dengan YSmenu](../twilightmenu/installing-flashcard) - Menu kustom semua-satu ini berkompatibilitas tinggi, tapi tidak bisa *cheat*

### Dukungan ARGV
ARGV adalah pemancar informasi antara dua aplikasi *homebrew* Nintendo DS. Bisa digunakan sebagai *forwarder* (penjalur) atau menu alternatif.

- *Homebrew* perlu diprogram agar bisa memanfaatkannya. Contoh: GBARunner2, NesDS, dan GameYob sudah ada dukungan ARGV
- Perlu juga cara untuk bisa mengatur peubah ARGV. TWiLight Menu++ dan HBMenu mampu mengatur *argument* ARGV
