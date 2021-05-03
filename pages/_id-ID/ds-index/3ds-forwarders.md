---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Forwarder Permainan DS (3DS)
description: Cara membuat penjalur (forwarder) CIA agar ada permainan DS di menu beranda 3DS milikmu
tabs:
  - 
    tab-sd-card: Kartu SD
    tab-flashcard: Flashcard
---

Jika kamu ada beberapa persoalan, periksa Soal Sering Ditanya (FAQ) di [Utas GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### Persyaratan

3DS:
- [Luma3DS](https://github.com/lumateam/luma3ds/releases), atau CFW (Custom FirmWare) lainnya yang menambal TWL_NAND
- [FBI](https://github.com/Steveice10/FBI/releases) untuk memasang berkas (file) CIA
- (Opsional) Ada flashcard DS yang didukung

{% capture flashcards %}
Flashcard yang disarankan adalah DSTT dan Acekard2i. Jika kamu ingin kesesuaian (compatibility) permainan yang sempurna, gunakan SuperCard DSTWO / DSTWO PLUS. Hanya saja sisi buruknya lebih cepat menguras baterai sistem.

Jika kamu punya flashcard yang dapat menjalankan NTR Launcher Apache Thunder, silakan memintanya [di utas (thread) GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Jangan lupa disebutkan bentukan (build) apa yang kamu pakai (Normal atau Alt), dan beri tahu `RESETSLOT1` diatur ke `0` atau `1` di `sd:/nds/ntr_launcher.ini`.

Sesuai (Compatible):
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (permainan DSi-Enhanced, termasuk permainan NTR terbaru, belum bisa.)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (memakai kartu microSD < 2 GB)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (versi Original Non-SDHC, memakai kartu microSD < 2 GB)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (versi Normal dan RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (kartu yang ungu mungkin tidak kompatibel)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (versi Normal dan Plus)

Belum dicoba:
- R4i3D NEW (Memakai templat dan kemasan R4iDSN)

Sebagian sesuai:
- Ace 3DS+ (Kesesuaian permainannya buruk, jadi menyimpan / memuat berkas save nanti akan mogok/crash.)
- Gateway Blue Card (Kesesuaian permainannya buruk, jadi menyimpan / memuat berkas save nanti akan mogok/crash.)
- EX4DS (Kesesuaian permainannya buruk, jadi menyimpan / memuat berkas save nanti akan mogok/crash.)
- R4iLS (Kesesuaian permainannya buruk, jadi menyimpan / memuat berkas save nanti akan mogok/crash.)
- Kartu dengan [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (Kesesuaian permainannya buruk, jadi menyimpan / memuat berkas save nanti akan mogok/crash.)

Tidak sesuai (Incompatible):
- CycloDS (i)Evolution (Bisa autoboot ROM, tapi cara kerjanya beda dari flashcard lain.)
- (i)Edge (Tak bisa autoboot ROM .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu jika dipasang (bukan yang proses forwarder) membuat hancur kartu)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/) / www.r4isdhc.hk) (YSMenu jika dipasang (bukan yang proses forwarder) membuat hancur kartu)
{% endcapture %}

<details>
    <summary>Flashcard yang didukung</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

Komputer PC:
- Sistem Pelaksanaan (OS) 64 bit
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Java 8 Update 251
- **Pengguna Linux:** JavaFX. Di sistem berdasar Debian jalankan [yang ini](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh), atau kalau di Arch jalankan: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`.

### Bagian 1: Memulai
{% capture tab-sd-card %}
1. Unduh (Download) [kemasan forwarder kartu SD](https://www.dropbox.com/s/k5uaa4jzbtkgm0z/DS%20Game%20Forwarder%20pack%20%283DS%20SD%20Card%29.7z?dl=0)
1. Ekstrak isi dari folder `for SD card root` di root kartu SD 3DS-mu

Setelah selesai mengekstrak kemasannya, kamu dapat menyunting (edit) `sd:/_nds/nds-bootstrap.ini` dan ubah pengaturannya:
- `BOOST_CPU`: Jika diubah ke 1, clock speed yang TWL dipakai, jadi sendatnya (lag) hilang
- `SOUND_FREQ`: Jika diubah ke 1, suaranya menjadi 48kHz, bukan 32kHz
{% endcapture%}
{% assign tab-sd-card = tab-sd-card | split: "////////" %}

{% capture tab-flashcard %}
1. Unduh salah satu kemasan (pack) berikut:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. Ekstrak isi dari folder `for Slot-1 microSD` di root kartu microSD flashcard-mu, dan (jika foldernya ada) isi dari folder `for 3DS SD card` taruh juga di root kartu SD 3DS-mu.<br>*Root atau Akar adalah bagian pangkal awal folder

Setelah selesai mengekstrak kemasan untuk kartunya, kamu dapat menyunting `sd:/_nds/ntr_forwarder.ini` untuk mengubah pengaturan. Ini tidak bisa kalau di Acekard RPG, R4 DS, dan R4i Gold RTS.
- `NTRCLOCK`: Jika diubah ke `0` atau tombol <kbd class="face">A</kbd> ditahan, layar awal nyala (boot) DSi akan muncul daripada splash DS yang biasa, dan laju jam (clock speed) TWL akan dipakai, jadi sendatnya hilang
- `DISABLEANIMATION`: Jika diubah ke `1` atau tombol <kbd class="face">B</kbd> ditahan, layar awal nyala (boot) DS / DSi dilewati
- `HEALTHSAFETYMSG`: Jika diubah ke `1`, layar pesan kesehatan dan keselamatan akan muncul di layar bawah, jika tidak nanti layar bawah hanya putih tanpa pesan kesehatan dan keselamatan
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}

### Bagian 2: Mendapatkan berkas AP fix dari TWiLight Menu++
Jika kamu sudah ada TWiLight Menu++, lewati saja bagian ini.
1. Unduh `TWiLightMenu-3DS.7z` yang terbaru (latest) dari [laman keluaran](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Di dalam berkas 7z, masuk ke folder `_nds/TWiLightMenu/`
1. Salin folder `apfix` ke `sd:/_nds/ntr-forwarder/` di kartu SD 3DS-mu

### Bagian 3: Forwarder3-DS
1. Buka berkas `Forwarder3DS.jar`
   - **Pengguna Windows:** Jika tidak mau buka, unduh ini [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), lalu letakkan di folder yang sama dengan Forwarder3DS.jar, dan jalankan
1. Atur kartunya sebagai `Target` di sebelah kiri
   - **CATATAN:** Jika kamu tidak melihat daftar target flashcard, unduh [zip ini](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), dan taruh folder `forwarders` di folder yang sama dengan Forwarder3DS.jar, lalu ubah namanya jadi `.forwarders`
1. Nyalakan `Automatically set ROM path`
   - **Pengguna Linux:** Jalur otomatis-nya tidak benar karena ada nama lengkap jalurnya (seperti `/media/$USER/something/`), mohon dihapus yang bagian itu
   - **Pengguna MacOS:** Jalur otomatis-nya tidak benar karena ada nama `/Volumes/(nama kartu)/` di awalnya, mohon dihapus yang bagian itu
1. Pencet (klik) folder yang ada di kanan atas dan pilih ROM yang ingin dibuat forwarder atau tinggal seret dan lepas saja ke jendela (window)
   - **CATATAN:** berkas ROM harus sudah ada di kartu SD-mu ketika dipilih, dan tidak dapat dipindah lagi tanpa membuat ulang forwarder-nya
   - **Pengguna kartu SD:** Jika berkas simpanan (save) ada di folder yang sama dengan ROM, pindahkan ke dalam folder `saves`, yang mana folder `saves` di tempat yang sama juga dengan ROM
1. Jika kamu memainkan retasan (hack) / terjemahan (translation) dari permainan DSi-Enhanced yang banner / judulnya disunting (edited), cari banner untuk permainannya dari [sini](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), lalu pencet kanan permainan yang di Forwarder3-DS, pencet `Import banner`, dan pencet banner yang ingin dipakai
1. Jika memakai ROM homebrew, coba dipencet, lalu kosongkan (clear) `Game title` dan ketik judul permainannya
1. Pencet tombol cakram liuk (floppy disk) untuk menghasilkan berkas CIA forwarder
1. Salin berkas-berkas CIA ke kartu SD 3DS-mu, lalu pasang (install) menggunakan FBI
   - Jika memakai EmuNAND, pasangnya di SysNAND dan EmuNAND juga
