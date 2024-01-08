---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: <i>Forwarder</i> Permainan DS
description: Cara menggunakan <i>forwarder</i> ROM DS di hiyaCFW atau HOME Menu 3DS
tabs:
  - 
    3ds-sd-card: Kartu SD 3DS
    dsi-sd-card: Kartu SD DSi
    flashcard: <i>Flashcard</i>
---

*Forwarder* adalah pintasan permainan yang dipasang di HOME Menu atau menu hiyaCFW. Permainan DS akan dibaca dari kartu SD (dengan nds-bootstrap) atau dari *flashcard* yang sesuai (lewat *kernel* masing-masing) dengan memasang *forwarder* di menu. <!--- I feel like this still needs a bit of work. Still better than what was there before. -->

Permainan DS perlu di-*dump* dulu ke format `.nds`. Kaset DS bisa di-*dump* dengan [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge) di 3DS, atau [GodMode9i](https://dsi.cfw.guide/dumping-game-cards) di DSi.
{:.alert .alert-info}

Jika mengalami isu, lihat Pertanyaan Umum atau FAQ di [utas GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

Pilih salah satu dari berikut untuk memasang ke HOME Menu:

{% capture tab-3ds-sd-card %}

Laman ini beranggapan konsol Anda sudah ada CFW modern sesuai [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-warning}

### Bagian 1: Menyiapkan berkas yang perlu

Jika di konsol sudah ada Universal Updater, langsung ke langkah ke-3.
{:.alert .alert-info}

1. Buka FBI dan pilih `Remote Install`, lalu `Scan QR Code`
1. Pindai kode QR berikut untuk memasang [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) versi terkini<br> ![Kode QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Buka Universal Updater dari layar HOME Menu
1. Pasang kemasan NDSForwarder
1. NDSForwarder dan berkasnya sekarang sudah disiapkan sesuai letaknya

### Bagian 2: NDSForwarder
1. Masuk ke Homebrew Launcher
1. Di Homebrew Launcher, buka `NDS Forwarder Generator`
1. Navigasi ke letak permainan dan tekan <kbd class="face">A</kbd>
1. Mulai pasang dengan memilih `Yes`
1. Setelah dipasang, permainan akan muncul sebagai judul di HOME Menu
{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}

{% capture tab-dsi-sd-card %}

### Persyaratan

- Nintendo DSi yang terpasang [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) dan [hiyaCFW](../hiyacfw/installing)
- Versi terkini [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.dsi)

### Bagian 1: Memulai
1. Salin `NDSForwarder.dsi` ke akar kartu SD
   - Ini bisa langsung dipasang secara opsional ke hiyaCFW dengan [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest/download/TMFH.0.7.1.zip)
1. Unduh [Kemasan *forwarder* untuk kartu SD DSi](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.DSi.3DS.SD.Card.7z)
1. Ekstrak isi dari folder `for SD card root` ke akar kartu SD dari DSi<br>*Akar atau *root* adalah bagian paling awal direktori folder

### Bagian 2: Mendapatkan AP fix dari TWiLight Menu++

Jika sudah ada TWiLight Menu++, lewati bagian ini.
{:.alert .alert-info}

1. Unduh [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) yang terkini
1. Di dalam berkas `.7z`, masuk ke folder `_nds/TWiLightMenu/extras`
1. Seret berkas `apfix.pck` ke `sd:/_nds/ntr-forwarder/`

### Bagian 3: NDSForwarder-DSi
1. Sisip kembali kartu SD ke konsol
1. Tahan <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, lalu nyalakan konsol untuk memuat Unlaunch
1. Luncurkan `NDSForwarder.dsi`
   - Jika muncul pesan `nitroFSInit() fail`, coba luncurkan dengan TWiLight Menu++, atau taruh `NDSForwarder.dsi` di akar kartu SD
1. Tekan <kbd class="face">A</kbd> pada `Install`
1. Navigasi ke letak permainan dan tekan <kbd class="face">A</kbd>
1. Setelah dipasang, permainan akan muncul sebagai judul di DSi Menu hiyaCFW

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Persyaratan

- **Pengguna DSi:**
   - Nintendo DSi yang terpasang [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) dan [hiyaCFW](installing)
   - Versi terkini [Title Manager for Hiya](https://github.com/JeffRuLz/TMFH/releases)
- **Pengguna 3DS:**
   - Keluarga konsol Nintendo 3DS yang sudah ada CFW modern sesuai [3ds.hacks.guide](https://3ds.hacks.guide)

{% capture flashcards %}
Jenis *flashcard* yang dianjurkan yaitu DSTT dan Acekard2i. Jika ingin kompatibilitas sempurna, gunakan SuperCard DSTWO/DSTWO PLUS. Sayangnya lebih cepat menguras baterai konsol.

Jika punya *flashcard* lain yang bisa dibaca NTR Launcher Apache Thunder, beri tahu dan minta [di utas GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Jangan lupa sebutkan versi mana yang digunakan (Normal atau Alt), dan beri tahu `RESETSLOT1` diatur ke `0` atau `1` di `sd:/nds/ntr_launcher.ini`.

Kompatibel:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (Tidak bisa baca permainan *DSi-Enhanced* dan juga permainan NTR terbaru)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (Perlu kartu microSD < 2 GB)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (Versi asli tanpa SDHC, perlu kartu microSD < 2 GB)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (Versi Normal dan RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (Kaset ungu mungkin tidak kompatibel)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (Versi Normal dan Plus)

Belum diuji:
- R4i3D NEW (Perlu templat dan berkas R4iDSN)

Sebagian kompatibel:
- Ace 3DS+ (Berkompatibilitas buruk, menyimpan/memuat simpanan akan mogok)
- Gateway *Blue Card* (Berkompatibilitas buruk, menyimpan/memuat simpanan akan mogok)
- EX4DS (Berkompatibilitas buruk, menyimpan/memuat simpanan akan mogok)
- R4iLS (Berkompatibilitas buruk, menyimpan/memuat simpanan akan mogok)
- Kaset bertuliskan [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (Berkompatibilitas buruk, menyimpan/memuat simpanan akan mogok)

Tidak kompatibel:
- CycloDS (i)Evolution (Bisa memuat langsung ROM, tapi caranya beda dari *flashcard* lain)
- (i)Edge (Tidak bisa memuat langsung .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu akan merusak parah kaset, bukan karena proses *forwarder*)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)/www.r4isdhc.hk) (YSMenu akan merusak parah kaset, bukan karena proses *forwarder*)
{% endcapture %}

<details>
    <summary>Daftar <i>flashcard</i> yang didukung</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

- Sistem Opersi 64 bit
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- [Java 8](https://www.java.com/en/download/)
- **Pengguna Linux:** JavaFX
   - Berdasar Debian: Jalankan [naskah ini](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
   - Arch: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### Bagian 1: Memulai
1. Unduh salah satu kemasan berikut:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)
1. Ekstrak isi dari folder `for Slot-1 microSD` ke akar kartu microSD *flashcard*, dan (jika foldernya ada) isi dari folder `for 3DS SD card` taruh juga ke akar kartu SD 3DS
   - Isi masing-masing kemasan untuk memuat ROM:
      - Original R4/M3 Simply - WoodR4 & YSMenu
      - DSTT/R4i Gold/R4i-SDHC/R4 SDHC Dual-Core/R4 SDHC Upgrade/SC DSONE, Acekard 2(i)/M3DS Real/R4i-SDHC 1.4.x - YSMenu
      - Acekard RPG, Ace 3DS+/Gateway Blue Card/R4iLS/R4iTT, R4iDSN/R4i Gold RTS - WoodR4

Setelah mengekstrak kemasan sesuai *flashcard*, pengaturan di `sd:/_nds/ntr_forwarder.ini` bisa diubah. Tapi tidak bisa untuk Acekard RPG, R4 DS, dan R4i Gold RTS.
   - `NTRCLOCK`: Jika diubah ke `0` atau jika menahan <kbd class="face">A</kbd>, *splash* DS biasa tidak muncul tapi jadi layar awal nyala DSi; dan laju jam TWL akan aktif agar tidak sendat
   - `DISABLEANIMATION`: Jika diubah ke `1` atau jika menahan <kbd class="face">B</kbd>, layar awal nyala DS/DSi dilewati
   - `HEALTHSAFETYMSG`: Jika diubah ke `1`, pesan kesehatan dan keselamatan akan muncul di layar bawah; jika tidak, layar bawah akan putih tanpa pesan kesehatan dan keselamatan

### Bagian 2: Mendapatkan AP fix dari TWiLight Menu++

Jika sudah ada TWiLight Menu++, lewati bagian ini.
{:.alert .alert-info}

1. Unduh [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) yang terkini
1. Di dalam berkas 7z, masuk ke folder `_nds/TWiLightMenu/extras`
1. Seret berkas `apfix.pck` ke `fat:/_nds/ntr-forwarder/`

### Bagian 3: Forwarder3-DS
1. Buka `Forwarder3DS.jar`
   - **Pengguna Windows:** Jika tidak bisa buka, unduh [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), lalu taruh di folder yang sama dengan Forwarder3DS.jar, dan jalankan
1. Pilih jenis kartu sebagai `Target` di kiri
   - **CATATAN:** Jika tidak muncul daftar kartu, unduh [zip ini](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), dan taruh folder `forwarders` di folder yang sama dengan Forwarder3DS.jar, lalu ubah namanya jadi `.forwarders`
1. Aktifkan `Automatically set ROM path`
   - **Pengguna Linux:** Jalur otomatis dianggap salah karena ada nama lengkap jalurnya (misalnya `/media/$USER/anu-anu/`), mohon hapus bagian itu
   - **Pengguna MacOS:** Jalur otomatis dianggap salah karena ada nama `/Volumes/(nama kartu)/` di awalan, mohon hapus bagian itu
1. Pencet folder yang di kanan atas dan pilih ROM yang ingin dibuat *forwarder*, atau seret dan lepas ke jendela aplikasi
   - **CATATAN:** ROM harus sudah ada di kartu SD saat dipilih, dan tidak bisa dipindahkan lagi kecuali jika *forwarder* dibuat lagi
1. Untuk retasan/terjemahan permainan *DSi-Enhanced* yang judulnya diubah, cari dulu *banner* permainannya di [sini](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), dan pencet kanan pada permainan di Forwarder3-DS, pencet `Import banner`, lalu pilih *banner* yang ingin digunakan
1. Untuk ROM *homebrew*, dipencet dulu, lalu kosongkan `Game title` dan ketik judulnya
1. Pencet tombol cakram liuk untuk membuat *forwarder*

### Bagian 4: Memasang *forwarder*

- Untuk keluarga konsol 3DS:
   1. Salin berkas CIA tadi ke kartu SD 3DS, lalu pasang dengan FBI
      - Jika punya EmuNAND, pasang di SysNAND dan juga EmuNAND
- Untuk konsol DSi:
   1. Salin `tmfh.nds` dari berkas `.zip` TMFH ke akar kartu SD
   1. Sisip kembali kartu SD ke konsol DSi
   1. Luncurkan `tmfh.nds` dari Unlaunch atau TWiLight Menu++
   1. Pasang berkas NDS *forwarder* dengan TMFH
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
