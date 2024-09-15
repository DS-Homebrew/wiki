---
lang: id-ID
layout: faq
section: twilightmenu
title: Pertanyaan Umum & Sidik Gangguan
long_title: Pertanyaan Umum & Sidik Gangguan TWiLight Menu++
description: Pertanyaan umum dan sidik gangguan terkait TWiLight Menu++
---

Untuk pertanyaan umum lainnya, silakan kunjungi [utas GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Kenapa 3DS saya selalu layar hitam, mogok, daya mati, dll. saat memuat TWiLight Menu++?
TWL_FIRM mungkin saja rusak. Ikuti panduan ini untuk memperbaiki isu: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Bagaimana memperbaiki layar putih saat memuat TWiLight Menu++?
- Nyalakan ulang konsol
- Jika tidak berhasil, formatkan kartu SD ke FAT32 di ukuran *32 KB cluster/allocation*
    - Lihat laman [dsi.cfw.guide](https://dsi.cfw.guide/sd-card-setup.html) untuk aplikasi anjuran
- Jika tidak berhasil juga, coba kartu SD lain

#### Layar sentuh tidak tanggap setelah memuat permainan, bagaimana ini?
- Jika memuat kartrid, pastikan pengaturan `Mode Sentuh Slot-1` diatur ke `Mode DS`
- Jika masih muncul isu, atau jika menggunakan ROM, ikuti panduan ini: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### Bagaimana memperbaiki TWiLight Menu++ mengulang atau galat Guru Meditation saat memuat permainan?
Masuk ke Pengaturan TWLMenu++, dan nonaktifkan `Perbarui daftar Terbaru Main`.

#### Kenapa selalu layar putih saat memuat permainan DS dari kartu SD?
Buka laman [ROM saya bermasalah, bagaimana ini?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) di Pertanyaan Umum nds-bootstrap.

#### Bagaimana menggunakan cheat?
Harus ada *cheat DB* berupa berkas `usrcheat.dat` di folder `sd:/_nds/TWiLightMenu/extras/`. Pangkalan data *cheat* termutakhir ada di [DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/).
- Untuk 3DS, pangkalan data ini ada di aplikasi Universal-Updater sebagai "NDS(i) Cheat Databases". Ini akan otomatis memasangnya ke lokasi yang benar.

Cara lainnya, gunakan [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) untuk membuat *cheat DB* sendiri.

Sesudah ada *cheat DB* maka *cheat* bisa diaktifkan dengan tombol <kbd class="face">Y</kbd> di TWiLight Menu++ saat diarahkan di permainan untuk membuka setelan tiap-permainan, lalu <kbd class="face">X</kbd> untuk ke menu *cheat*.

#### Bagaimana menampilkan gambar kustom di layar atas tema DSi? Bisa disembunyikan, tidak?
Gambar `.png` acak dari `sd:/_nds/TWiLightMenu/dsimenu/photos/` akan muncul setiap kali menu dimuat. Jika tidak ada gambar terbaca, tangkapan layar oleh nds-bootstrap akan digunakan.

- Ukuran gambar tidak boleh lebih dari 208x156
- Jika galat, kemungkinan galat terjadi karena ukuran gambar. Gunakan [tinypng](https://tinypng.com) untuk mengurangi ukurannya

Untuk menyembunyikan gambar, berkas `theme.ini` harus disunting dari `sd:/_nds/TWiLightMenu/dsimenu/themes/[folder skin]/`. Buka berkas di penyunting teks, ubah baris `RenderPhoto` dari `1` ke `0`, lalu simpan berkas.

#### Di mana mendapat permainan?
Permainan swayasa atau *homebrew* bisa diunduh dari [Universal-DB](https://db.universal-team.net/ds) dan [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Untuk permainan resmi, harus dilakukan *dump*, baik dari kartrid fisik, atau dari konsol yang ada:
- Di konsol DS, gunakan [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) untuk men-*dump* kartrid GBA dan, jika punya *flashcart* Slot-2, kartrid DS juga. Jika hanya punya *flashcard* Slot-1 dan ingin men-*dump* kartrid DS, gunakan [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), tapi perlu sambungan Wi-Fi yang bisa dibaca DS, serta klien FTP pada perangkat lain untuk menerima ROM
- Di konsol DSi, gunakan [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) untuk men-*dump* kartrid DS dan DSiWare
- Di konsol 3DS, gunakan [GodMode9](https://github.com/d0k3/GodMode9/releases) untuk men-*dump* kartrid DS, DSiWare, dan Virtual Console

#### Apakah simpanan dari Kartrid bisa disimpan ke kartu SD atau sebaliknya?
Bisa. Gunakan [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) untuk di 3DS, atau [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) di DSi / 3DS.

#### Bagaimana mengubah bahasa di TWiLight Menu++?
1. Buka pengaturan TWiLight Menu++, atau sambil menahan <kbd>SELECT</kbd> saat membuka TWiLight Menu++
1. Ubah opsi pertama sampai muncul bahasa yang diinginkan, lalu keluar dari pengaturan
    - Mungkin ubah juga tiga opsi pertama pada halaman pengaturan nds-bootstrap untuk mengatur bahasa, daerah, dan judul ROM DS di TWiLight Menu++

#### Apakah ini emulator DS(i)?
Bukan, ini bukan emulator. Untuk menu dan permainan DS (dimuat nds-bootstrap) dijalankan lokal atau *native* di mode DS/DSi konsol. Konsol yang diemulasi hanya konsol lama, tapi untuk GBA ada sebagian (beberapa atau semua bagian seperti grafik dibaca lokal).

#### Sistem apa saja yang didukung TWiLight Menu++?
Lihat [Daftar Sistem yang Didukung TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Apakah eksploit Slot-1 bisa memuat ke TWiLight Menu++?
Tidak. Akses kartu SD hanya dikhususkan aplikasi DSiWare, jadi kartrid Slot-1 tidak bisa memuat (atau mengakses) TWiLight Menu++.

#### Kenapa permainan saya tidak ketemu?
Ada beberapa alasan kenapa permainan tidak ketemu.
- Folder `_nds` yang di akar kartu SD bukan untuk menaruh aplikasi yang nanti diakses lewat TWiLight Menu++, karena folder ini khusus untuk berkas fungsi (skin, konfigurasi, gambar, emulator, dan lainnya). Jika permainan ditaruh di sini, pindahkan ke letak lain.
- Jika dalam satu folder ada 39+ permainan dan slot di menu terisi semua, mungkin sisanya ada di halaman lain. Gunakan <kbd class="l">L</kbd>/<kbd class="r">R</kbd> atau <kbd>SELECT</kbd> + <kbd>Kiri</kbd>/<kbd>Kanan</kbd> untuk pindah halaman
- Jika permainan atau folder disembunyikan, munculkan berkasnya lewat pengaturan GUI TWiLight Menu++
- Jika berkas berbentuk arsip (`zip`, `rar`, `7z`, dll), maka tidak bisa dibaca TWiLight Menu++. Ekstrak dulu isi arsip untuk digunakan
- Jika permainan tidak menggunakan [ekstensi yang didukung](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), mungkin ekstensi harus diubah nama dulu

#### Bagaimana mengakses pengaturan TWiLight Menu++?
Mengakses pengaturan TWiLight Menu++ bisa berbeda tergantung setelan.
- **Menu DS Klasik:** Ketuk ikon DS di bagian bawah layar bawah
- **Tema Nintendo DSi/SEGA Saturn/Homebrew Launcher: dengan Menu SELECT:** Tekan <kbd>SELECT</kbd>, lalu buka *Applet* Pengaturan (gunakan tombol arah untuk memilih)
- **Tema Nintendo DSi/SEGA Saturn/Homebrew Launcher yang tidak ada Menu SELECT:** Menekan <kbd>SELECT</kbd> akan masuk ke Menu DS Klasik
- **Tema Nintendo 3DS:** Ketuk ikon kunci bengkel di layar bawah
- **Tema R4 Original:** Tekan <kbd>START</kbd> (jika di peramban berkas), lalu tekan <kbd>SELECT</kbd>
- **Tema Wood UI:** Menekan <kbd>START</kbd> akan masuk ke menu DS Klasik

Menahan <kbd>SELECT</kbd> saat memuat TWiLight Menu++ juga akan langsung ke pengaturan.

#### Bagaimana menggunakan gambar ikon kustom?
Gambar ikon kustom berformat PNG atau banner.bin bisa digunakan dengan ditaruh di folder `sd:/_nds/TWiLightMenu/icons` sesuai nama ROM (ekstensinya juga), atau folder + `.png` atau `.bin`.

Untuk gambar ikon PNG, hanya perlu berkas PNG dengan 15 warna atau kurang dan maksimum resolusi 32x32. Kelejasan atau transparansi penuh juga bisa dan tidak terhitung dalam 15 warna, tapi semitransparansi tidak berfungsi.

Untuk gambar ikon jenis banner.bin bisa dianimasikan dan mengganti nama judul di TWiLight Menu++. Bisa dibuat dengan [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

Gambar ikon prajadi bisa dicari di [laman ikon situs skin TWiLight Menu++](https://skins.ds-homebrew.com/icon/) dan bisa dibagikan ke situ jika sudah membuat.

#### Bagaimana memasang tema kustom ke TWiLight Menu++?
Skin kustom tema bisa didapatkan dari [laman skin resmi](https://skins.ds-homebrew.com/), yang menampung berbagai skin buatan komunitas yang siap digunakan. Skin kustom bisa dibuat sendiri untuk tema Nintendo 3DS dan Nintendo DSi dengan mengikuti [panduan ini](https://wiki.ds-homebrew.com/id-ID/twilightmenu/custom-dsi-3ds-skins). Tema **Homebrew Launcher**, **Sega Saturn** dan **Game Boy Color** _**tidak bisa**_ diubah suai.

Sesudah mendapatkan skin kustom, cara memasangnya tinggal taruh folder skin sesuai tempatnya, yang mana berbeda tergantung jenis tema skin.
- Skin untuk tema Nintendo DSi ditaruh di `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skin untuk tema Nintendo 3DS ditaruh di `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skin untuk tema R4 Original ditaruh di `sd:\_nds\TWiLightMenu\r4menu\themes\`
- Skin untuk tema Wood UI ditaruh di `sd:\_nds\TWiLightMenu\akmenu\themes\`

Jika menggunakan sejenis konsol 3DS, lebih mudah memasang skin dengan [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Masuk ke pengaturan Universal-Updater, pilih `Select Unistore`, `+`, `TWiLight Menu++ Skins`.

Untuk menerapkan tema kustom harus ke Pengaturan TWiLight Menu++.
1. Di halaman `Pengaturan GUI`, sorot opsi `Tema` dan pilih tema dengan tombol kanan dan kiri.
1. Sesudah memilih tema, tekan tombol A untuk memilih ragam skin yang sudah dipasang.
1. Dengan tombol atas dan bawah, sorot skin yang diinginkan, lalu tekan A untuk memilih.
1. Terapkan dengan menekan B untuk kembali ke TWiLight Menu++.

TWiLight Menu++ seharusnya berubah tampilan (musiknya juga, jika ada di skin yang dipilih dan diaktifkan di pengaturan).

#### Apakah ada emulator 3DS untuk DS(i)?
Tidak ada. Mengemulasi 3DS pada DS(i) jelas tidak mungkin karena peranti keras 3DS lebih baru.
