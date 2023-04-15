---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Forwarder Permainan DS
description: Cara menggunakan forwarder permainan DS di hiyaCFW atau menu HOME 3DS
tabs:
  - 
    3ds-sd-card: Kartu SD 3DS
    dsi-sd-card: Kartu SD DSi
    flashcard: Flashcard
---

Forwarder adalah pintasan untuk permainan yang dapat kamu pasang di menu HOME atau menu hiyaFCW. Kamu dapat memuat permainan DS dari kartu SD (dengan nds-bootstrap) atau dari flashcard yang sesuai (lewat kernel masing-masing) menggunakan forwarder yang terpasang pada menu. <!--- I feel like this still needs a bit of work. Still better than what was there before. -->

Permainan DS harus di-dump ke format `.nds` digital. Kartrid DS dapat kamu timbun menggunakan [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge) di 3DS, atau [GodMode9i](https://dsi.cfw.guide/dumping-game-cards) di DSi.
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
1. NDSForwarder dan berkas yang diperlukan sudah disiapkan di letaknya masing-masing

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

### Bagian 2: Mendapatkan AP fix dari TWiLight Menu++

If you already have TWiLight Menu++, skip to the next section.
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

- **DSi users:**
   - A Nintendo DSi with [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) and [hiyaCFW](installing) installed
   - The latest release of [Title Manager for Hiya](https://github.com/JeffRuLz/TMFH/releases)
- **3DS users:**
   - A Nintendo 3DS family console with modern CFW environment from [3ds.hacks.guide](https://3ds.hacks.guide)

{% capture flashcards %}
The recommended flashcards are the DSTT and Acekard 2i. If you want perfect game compatibility, get the SuperCard DSTWO/DSTWO PLUS. The only downside is that it drains your system battery faster.

If you have a flashcard that works with Apache Thunder's NTR Launcher, you can request it [on the GBAtemp thread](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Be sure to specify which build you're using (Normal or Alt), and if `RESETSLOT1` is set to `0` or `1` in `sd:/nds/ntr_launcher.ini`.

Compatible:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (DSi-Enhanced games, including newer NTR games, don't work)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (uses < 2 GB microSD card)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (Original Non-SDHC version, uses < 2 GB microSD card)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (Normal and RTS versions)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (Purple card may be incompatible)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (Normal and Plus versions)

Untested:
- R4i3D NEW (Use R4iDSN template and pack)

Partially compatible:
- Ace 3DS+ (Game compatibility is bad, so saving/loading save file results in crashing)
- Gateway Blue Card (Game compatibility is bad, so saving/loading save file results in crashing)
- EX4DS (Game compatibility is bad, so saving/loading save file results in crashing)
- R4iLS (Game compatibility is bad, so saving/loading save file results in crashing)
- Cards with [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (Game compatibility is bad, so saving/loading save file results in crashing)

Incompatible:
- CycloDS (i)Evolution (Dapat memuat langsung ROM, tapi caranya beda dari flashcard lain)
- (i)Edge (Tak dapat memuat langsung ROM .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (not the forwarder process) bricks the card)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (not the forwarder process) bricks the card)
{% endcapture %}

<details>
    <summary>A supported flashcard from this list</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

- A 64 bit OS
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- [Java 8](https://www.java.com/en/download/)
- **Linux users:** JavaFX
   - Debian-based: Run [this script](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
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

After you extract the pack for your card, you can edit `sd:/_nds/ntr_forwarder.ini` to change the following settings. This isn't possible for Acekard RPG, R4 DS, and R4i Gold RTS.
   - `NTRCLOCK`: If set to `0` or <kbd class="face">A</kbd> is held, the DSi boot screen will appear instead of the normal DS splash, and TWL clock speed is used, so lags begone
   - `DISABLEANIMATION`: If set to `1` or <kbd class="face">B</kbd> is held, the DS/DSi boot screen is skipped
   - `HEALTHSAFETYMSG`: If set to `1`, the boot screen's health and safety message will appear on the bottom screen, otherwise the bottom screen stays white with no health and safety message

### Bagian 2: Mendapatkan AP fix dari TWiLight Menu++

If you already have TWiLight Menu++, skip to the next section.
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

- If using a 3DS family console:
   1. Copy the CIA(s) to your 3DS's SD card, then install them using FBI
      - If using EmuNAND, install to both SysNAND and EmuNAND
- If using a DSi:
   1. Copy `tmfh.nds` from the TMFH `.zip` file to the root of your SD card
   1. Reinsert your SD card into your DSi
   1. Launch `tmfh.nds` from Unlaunch or TWiLight Menu++
   1. Install the forwarder NDS file using TMFH
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
