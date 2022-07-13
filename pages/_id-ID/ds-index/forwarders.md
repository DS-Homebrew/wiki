---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Forwarder Permainan DS
description: Cara menggunakan forwarder permainan DS di hiyaCFW atau menu HOME 3DS
tabs:
  - 
    tab-3ds-sd-card: Kartu SD 3DS
    tab-dsi-sd-card: Kartu SD DSi
    tab-flashcard: Flashcard
---

Forwarder adalah pintasan untuk permainan yang dapat kamu pasang di menu HOME atau menu hiyaFCW. Kamu dapat memuat permainan DS dari kartu SD (dengan nds-bootstrap) atau dari flashcard yang sesuai (lewat kernel masing-masing) menggunakan forwarder yang terpasang pada menu. <!--- I feel like this still needs a bit of work. Still better than what was there before. -->

Permainan DS perlu ditimbun (dump) ke format `.nds` digital. Kartrid DS dapat kamu timbun menggunakan [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge) di 3DS, atau [GodMode9i](https://dsi.cfw.guide/dumping-game-cards) di DSi.
{:.alert .alert-info}

Jika mengalami persoalan / isu, periksa Soal Sering Ditanya (FAQ) di [Utas GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

Pilih salah satu dari berikut untuk menambahkan ke menu HOME:

{% capture tab-3ds-sd-card %}

Halaman ini beranggapan kamu sudah ada CFW yang modern dari [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-warning}

### Bagian 1: Menyiapkan berkas yang perlu

Jika di konsol-mu sudah terpasang Universal Updater, langsung saja ke langkah ke-3.
{:.alert .alert-info}

1. Buka FBI dan pilih `Remote Install`, kemudian `Scan QR Code`
1. Pindai kode QR berikut untuk memasang [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) versi terkini<br> ![Kode QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Buka Universal Updater dari layar HOME Menu
1. Pasang kemasan NDSForwarder
1. NDSForwarder dan berkas yang perlunya sekarang sudah disiapkan di tempatnya masing-masing

### Bagian 2: NDSForwarder
1. Masuk ke Homebrew Launcher
1. Di Homebrew Launcher, buka `NDS Forwarder Generator`
1. Cari letak permainanmu dan tekan tombol <kbd class="face">A</kbd>
1. Konfirmasikan pemasangan dengan memilih `Yes`
1. Setelah terpasang, permainanmu akan muncul sebagai judul di layar menu HOME
{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}

{% capture tab-dsi-sd-card %}

### Persyaratan

- Nintendo DSi yang sudah terpasang [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) dan [hiyaCFW](../hiyacfw/installing)
- Lepasan (release) terkini dari [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.dsi)

### Bagian 1: Memulai
1. Salin `NDSForwarder.dsi` ke root kartu SD
   - Ini boleh langsung dipasang ke hiyaCFW dengan [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest/download/TMFH.0.7.1.zip) tapi opsional
1. Unduh [Kemasan forwarder untuk di kartu SD DSi](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.DSi.3DS.SD.Card.7z)
1. Ekstrak isi dari folder `for SD card root` ke root kartu SD dari DSi<br>*Root atau Akar adalah bagian awal sekali dari folder

Setelah kemasan untuk kartunya selesai diekstrak, kamu dapat menyunting `sd:/_nds/ntr_forwarder.ini` ke pengaturan berikut.
- BOOST_CPU: Jika diubah ke 1, clock speed TWL akan digunakan, jadi sendatnya (lag) hilang
- SOUND_FREQ: Jika diubah ke 1, suaranya akan 48kHz, bukan 32kHz
- LANGUAGE: Jika diubah ke -1, bahasa bawaan sistem akan digunakan
- REGION: Jika diubah ke -2, daerahnya permainan DSiWare akan digunakan, bukan yang sistem

### Bagian 2: Mendapatkan AP fix dari TWiLight Menu++

Jika kamu sudah ada TWiLight Menu++, lewati saja bagian ini.
{:.alert .alert-info}

1. Unduh [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) yang terkini
1. Di dalam berkas `.7z`, masuk ke folder `_nds/TWiLightMenu/extras`
1. Seret berkas `apfix.pck` ke `sd:/_nds/ntr-forwarder/`

### Bagian 3: NDSForwarder-DSi
1. Sisip kembali kartu SD ke konsolmu
1. Tahan <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, lalu nyalakan konsolmu untuk memulai Unlaunch
1. Luncurkan `NDSForwarder.dsi`
   - Jika mendapat pesan `nitroFSInit() fail`, coba luncurkan menggunakan TWiLight Menu++, atau taruh `NDSForwarder.dsi` di root kartu SD
1. Tekan <kbd class="face">A</kbd> di `Install`
1. Cari letak permainanmu dan tekan tombol <kbd class="face">A</kbd>
1. Setelah terpasang, permainanmu akan muncul sebagai judul di layar menu DSi hiyaCFW

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Persyaratan

- **Pengguna DSi:**
   - Nintendo DSi yang sudah terpasang [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) dan [hiyaCFW](installing)
   - Lepasan (release) terkini dari [Title Manager for Hiya](https://github.com/JeffRuLz/TMFH/releases)
- **Pengguna 3DS:**
   - Konsol keluarga 3DS yang menjalankan CFW modern dari [3ds.hacks.guide](https://3ds.hacks.guide)

{% capture flashcards %}
Flashcard yang dianjurkan adalah DSTT dan Acekard2i. Jika ingin kesesuaian (compatibility) permainan yang sempurna, gunakan SuperCard DSTWO/DSTWO PLUS. Hanya saja sisi buruknya lebih cepat menguras baterai sistem.

Jika kamu punya flashcard yang dapat menjalankan NTR Launcher Apache Thunder, silakan memintanya [di utas GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Jangan lupa sebutkan binaan (build) apa yang kamu gunakan (Normal atau Alt), dan beri tahu `RESETSLOT1` diatur ke `0` atau `1` di `sd:/nds/ntr_launcher.ini`.

Sesuai (compatible):
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (permainan DSi-Enhanced, termasuk permainan NTR terbaru, tidak berfungsi)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (menggunakan kartu microSD < 2 GB)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (versi Original Non-SDHC, menggunakan kartu microSD < 2 GB)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (versi Normal dan RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (kartu ungu mungkin tidak kompatibel)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (versi Normal dan Plus)

Belum diuji:
- R4i3D NEW (menggunakan templat dan kemasan R4iDSN)

Kompatibel separuh:
- Ace 3DS+ (Kesesuaian permainannya buruk, menyimpan/memuat berkas save nanti akan mogok)
- Gateway Blue Card (Kesesuaian permainannya buruk, menyimpan/memuat berkas save nanti akan mogok)
- EX4DS (Kesesuaian permainannya buruk, menyimpan/memuat berkas save nanti akan mogok)
- R4iLS (Kesesuaian permainannya buruk, menyimpan/memuat berkas save nanti akan mogok)
- Kartu yang ada [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (Kesesuaian permainannya buruk, menyimpan/memuat berkas save nanti akan mogok)

Tidak kompatibel:
- CycloDS (i)Evolution (Dapat memulai langsung ROM, tapi cara kerjanya beda dari flashcard lain)
- (i)Edge (Tak dapat memulai langsung ROM .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (bukan yang proses forwarder) akan membuat hancur kartu)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/) / www.r4isdhc.hk) (YSMenu (bukan yang proses forwarder) akan membuat hancur kartu)
{% endcapture %}

<details>
    <summary>Flashcard yang didukung dari daftar ini</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

- OS yang 64 bit
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- [Java 8](https://www.java.com/en/download/)
- **Pengguna Linux:** JavaFX
   - Yang berasas Debian: Jalankan [naskah ini](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
   - Arch: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### Bagian 1: Memulai
1. Unduh salah satu kemasan (pack) berikut:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)
1. Ekstrak isi dari folder `for Slot-1 microSD` di root kartu microSD flashcard, dan (jika foldernya ada) isi dari folder `for 3DS SD card` taruh juga di root kartu SD 3DS-mu
   - Yang ada di masing-masing kemasan untuk memuat ROM:
      - Original R4/M3 Simply - WoodR4 & YSMenu
      - DSTT/R4i Gold/R4i-SDHC/R4 SDHC Dual-Core/R4 SDHC Upgrade/SC DSONE, Acekard 2(i)/M3DS Real/R4i-SDHC 1.4.x - YSMenu
      - Acekard RPG, Ace 3DS+/Gateway Blue Card/R4iLS/R4iTT, R4iDSN/R4i Gold RTS - WoodR4

Setelah kemasan untuk kartunya selesai diekstrak, kamu dapat menyunting `sd:/_nds/ntr_forwarder.ini` ke pengaturan berikut. Ini tidak berungsi jika di Acekard RPG, R4 DS, dan R4i Gold RTS.
   - `NTRCLOCK`: Jika diubah ke `0` atau tombol <kbd class="face">A</kbd> ditahan, layar awal nyala (boot) DSi akan muncul; bukan splash DS yang biasa, dan laju jam (clock speed) TWL akan digunakan, jadi sendatnya hilang
   - `DISABLEANIMATION`: Jika diubah ke `1` atau tombol <kbd class="face">B</kbd> ditahan, layar awal nyala DS / DSi dilewati
   - `HEALTHSAFETYMSG`: Jika diubah ke `1`, layar pesan kesehatan dan keselamatan akan muncul di layar bawah, jika tidak nanti layar bawah hanya putih tanpa pesan kesehatan dan keselamatan

### Bagian 2: Mendapatkan AP fix dari TWiLight Menu++

Jika kamu sudah ada TWiLight Menu++, lewati saja bagian ini.
{:.alert .alert-info}

1. Unduh [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) yang terkini
1. Di dalam berkas 7z, masuk ke folder `_nds/TWiLightMenu/extras`
1. Seret berkas `apfix.pck` ke `fat:/_nds/ntr-forwarder/`

### Bagian 3: Forwarder3-DS
1. Buka `Forwarder3DS.jar`
   - **Pengguna Windows:** Jika tidak mau buka, unduh ini [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), lalu taruh di folder yang sama dengan Forwarder3DS.jar, dan jalankan
1. Atur kartunya sebagai `Target` di sebelah kiri
   - **CATATAN:** Jika tidak melihat daftar kartunya, unduh [zip ini](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), dan taruh folder `forwarders` di folder yang sama dengan Forwarder3DS.jar, lalu ubah namanya jadi `.forwarders`
1. Nyalakan `Automatically set ROM path`
   - **Pengguna Linux:** Jalur otomatisnya tidak benar karena ada nama lengkap jalurnya (seperti `/media/$USER/something/`), mohon hapus yang bagian itu
   - **Pengguna MacOS:** Jalur otomatisnya tidak benar karena ada nama `/Volumes/(nama kartu)/` di awalnya, mohon hapus yang bagian itu
1. Pencet folder yang ada di kanan atas dan pilih ROM yang ingin dibuat forwarder, atau seret dan lepas saja ke jendela (window)
   - **CATATAN:** berkas ROM harus sudah ada di kartu SD-mu ketika dipilih, dan tidak dapat dipindah lagi tanpa membuat ulang forwarder-nya
1. Jika kamu memainkan retasan (hack)/terjemahan (translation) permainan DSi-Enhanced yang banner/judulnya disunting, cari banner untuk permainannya dari [sini](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), lalu pencet kanan permainan yang di Forwarder3-DS, pencet `Import banner`, dan pencet banner yang ingin digunakan
1. Jika menggunakan ROM homebrew, coba dipencet, lalu kosongkan (clear) `Game title` dan ketik judul permainannya
1. Pencet tombol cakram liuk untuk menghasilkan forwarder

### Bagian 4: Memasang forwarder

- Jika dengan konsol keluarga 3DS:
   1. Salin berkas-berkas CIA ke kartu SD 3DS, lalu pasang (install) menggunakan FBI
      - Jika dengan EmuNAND, pasangnya di SysNAND dan EmuNAND
- Jika dengan DSi:
   1. Salin `tmfh.nds` dari berkas `.zip` TMFH ke root kartu SD
   1. Sisip kembali kartu SD ke konsol DSi
   1. Luncurkan `tmfh.nds` dari Unlaunch atau TWiLight Menu++
   1. Pasang berkas NDS forwarder menggunakan TMFH
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
