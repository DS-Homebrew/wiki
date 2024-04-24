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

- **Pustaka kartu SD:** Umumnya dianjurkan [libfat](https://github.com/devkitPro/libfat) yang ada dalam libnds, atau [libslim](https://github.com/DS-Homebrew/libslim/) malah lebih baik tapi terkadang tidak stabil
- **Pustaka grafis:** Dianjurkan [easyGL2D](http://rel.phatcode.net/junk.php?id=117) yang ada dalam libnds, tapi [NightFox Lib](https://github.com/knightfox75/nds_nflib) juga bisa digunakan
- **Seluruh rantai alat:** Dianjurkan [devkitARM](https://devkitpro.org/wiki/Getting_Started) dan [libnds](https://libnds.devkitpro.org/), karena berkompatibilitas DSi dan berekosistem lebih besar, sedangkan [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) untuk pengembangan khusus *flashcard*

Bagi pemula, baca [utas GBAtemp ini](https://gbatemp.net/threads/useful-resources-to-help-you-out-with-starting-to-make-nds-homebrew.580507/#post-9322674) yang berisi banyak sumber daya bagus. Untuk informasi DS(i) lebih teknis, lihat [GBATEK](https://problemkaputt.de/gbatek-contents.htm).

### *Flashcard*
*Flashcard* mode DS adalah cara menjalankan aplikasi Nintendo DS lewat Slot-1. *Flashcard* mampu menyimpan berkas konsol dan berkas portabel tetap terpisah, bisa digunakan tanpa perlu memodif konsol, dan bisa digunakan di konsol DS Phat/Lite. Tapi, tidak seperti memodif konsol langsung, harus pintar memilih *flashcard* di pasaran dengan kernel berbeda-beda. Ketahui juga *kernel* yang digunakan dan cadangkan.

### DLDI
Slot kartu SD berbeda (sering kali) punya papan fisik berbeda, dan kode untuk suatu *flashcard* belum tentu bisa di *flashcard* lain. DLDI (singkatan dari *Dynamically Linked Device Interface*) akan mengatasinya dengan menambal kode *handling* kartu SD dari cara luar. *Loader* (pemuat) seperti YSMenu, Wood R4, dan TWiLight Menu++ bisa otomatis menambal DLDI ke *homebrew*, tapi jika ingin menambal sendiri, gunakan [DLDI Patcher](https://www.chishm.com/DLDI#tools) di komputer.

### *Time bomb*
Di *kernel flashcard* tertentu, ada beragam tenggat kedaluwarsa (disebutnya *time bomb*) oleh para pengembang *kernel* agar konsumen membeli produk baru mereka. Berikut cara kerjanya:

1. *Flashcard* diluncurkan lalu berkas *kernel* di kartu SD akan dimuat tanpa memeriksa itu *kernel* dari pengembang apa bukan
1. Setiap kali berkas *kernel* dimuat dari kartu SD, tanggal sistem akan diperiksa apakah lewat tenggat

Jika yang kedua hasilnya positif, *kernel* akan menolak dimuat. Ini bisa diuji dengan memajukan tanggal sistem ke paling ujung. Namun, keamanannya lemah dan hasilnya tidak di-*cache*, berarti ada cara lain menyiasatinya:

Jika ingin menggunakan *kernel* bawaan yang dibuat produsen *flashcard*, jam sistem harus dimundurkan di aplikasi System Settings konsol. Perlu diingat, ini bisa mengacau permainan apa pun yang terikat jam sistem (seperti Animal Crossing: Wild World).

Namun, *kernel* yang disertakan dengan *flashcard* ini memang kurang bagus dan lebih baik langsung diganti. Untungnya, pengembang pihak ke-3 telah membuat alternatif berikut:

- [YSmenu - menu + pemuat permainan](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) - Walaupun tidak ada keunggulan menu semua-satu ubah suai, kompatibilitas pemuat permainan ini lebih bagus dan mendukung *cheat* action-replay
- [TWiLight Menu++ dengan nds-bootstrap](../twilightmenu/installing-flashcard) - Menu semua-satu ubah suai ini mendukung *cheat*, tapi mode B4DS (mode saat tidak ada akses ke fitur DSi) berkompatibilitas lemah, beberapa permainan bahkan perlu Memory Expansion Pak
- [TWiLight Menu++ dengan YSmenu](../twilightmenu/installing-flashcard) - Menu semua-satu ubah suai ini berkompatibilitas tinggi, tapi tidak mendukung *cheat*

### Dukungan ARGV
ARGV adalah pemancar informasi antara dua aplikasi *homebrew* Nintendo DS. Bisa digunakan sebagai *forwarder* atau menu alternatif.

- *Homebrew* perlu ditata olah atau diprogram untuk memanfaatkannya. Contohnya: GBARunner2, NesDS, dan GameYob sudah ada dukungan ARGV
- Diperlukan juga kemampuan mengatur peubah ARGV. TWiLight Menu++ dan HBMenu mampu mengatur *argument* ARGV
