---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Cara Membuat Tema DSi/3DS
description: Cara membuat tema kustom DSi dan 3DS untuk TWiLight Menu++
---

Untuk membuat tema TWiLight Menu++, perlu penyunting gambar yang mampu mengekspor `.png`, `.bmp` atau `.png` 16 <abbr title="Bits Per Pixel">BPP</abbr>, dan `.bmp` 4 BPP. Diharuskan juga mampu menyusun ulang palet gambar secara manual. Panduan ini menganjurkan [GIMP](https://www.gimp.org) karena mampu melakukan semua yang diperlukan.

## Bagian 1: Mengunduh contoh

Pertama-tama unduh dulu [tema contoh ini](/assets/files/theme-examples.zip). Gunanya sebagai dasar bagaimana tema yang berformat benar, jadi jika nanti ada masalah bisa dibandingkan dengan berkas contoh ini.

## Bagian 2: Menyunting gambar

Unduh dan pasang [GIMP](https://www.gimp.org)

- Penyunting lain seperti Photoshop juga boleh, tapi panduan ini akan menggunakan GIMP

Sesudah terpasang, buka GIMP, dan pilih `Windows` -> `Dockable Dialogs` -> `Colormap`. Ini akan membuka dialog <i>colormap</i> untuk memudahkan menyunting palet pada gambar.

Sekarang gambar sudah boleh dibuka dan disunting di GIMP, lanjut ke bagian di bawah ini berdasarkan letak foldernya. Mohon diingat TWiLight Menu++ pilih-pilih soal ketepatan format gambar dan bisa berbeda tergantung letak foldernya, jadi ikuti cara ekspor sesuai bagiannya.

### Tekstur latar belakang (folder `background`)

Berkas di sini boleh PNG biasa / BMP 16-bit (`A1 R5 G5 B5` atau `X1 R5 G5 B5`).

- Jika berkasnya BMP, bisa diatur ke 16-bit di <i>Advance Options</i> ketika mengekspor. Ini mungkin harus dilakukan setiap kali mengekspor BMP

| Tekstur                                                       | Keterangan                                                                                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| top                                                           | Tekstur latar belakang layar atas                                                                           |
| top_photo                                | Tekstur latar belakang layar atas saat ada foto                                                             |
| bottom                                                        | Tekstur latar belakang layar bawah saat tidak menunjuk ikon                                                 |
| bottom_ds                                | Untuk tema 3DS di DS Phat/Lite. Tekstur latar belakang layar bawah saat tidak menunjuk ikon |
| bottom_macro                             | Untuk tema DSi di Mode Macro. Tekstur latar belakang saat tidak menunjuk ikon               |
| bottom_bubble                            | Tekstur latar belakang layar bawah saat menunjuk ikon                                                       |
| bottom_bubble_ds    | Untuk tema 3DS di DS Phat/Lite. Tekstur latar belakang layar bawah saat menunjuk ikon       |
| bottom_bubble_macro | Untuk tema DSi di Mode Macro. Tekstur latar belakang saat menunjuk ikon                     |
| bottom_moving                            | Untuk tema DSi. Latar belakang layar bawah saat memindah ikon                               |
| bottom_moving_macro | Untuk tema DSi di Mode Macro. Latar belakang saat memindah ikon                             |

### Tekstur baterai (folder `battery`)

Berkas di sini harus PNG. Boleh ada warna transparan (lejas), tapi tingkat alfanya harus 100%.

| Tekstur            | Keterangan/Catatan                                                       |
| ------------------ | ------------------------------------------------------------------------ |
| battery0           | Berkelipkan gambar `battery1` jika baterai lemah                         |
| battery1           | 0-4 digunakan di mode DSi                                                |
| battery1purple     | Ikon ungu digunakan jika `Warna LED Daya` diatur ke `Ungu` di pengaturan |
| battery2           |                                                                          |
| battery2purple     |                                                                          |
| battery3           |                                                                          |
| battery3purple     |                                                                          |
| battery4           |                                                                          |
| battery4purple     |                                                                          |
| batterycharge      |                                                                          |
| batterychargeblink | Berkelipkan gambar `batterycharge` saat isi daya                         |
| batteryfull        | Digunakan DSi/3DS di mode DS                                             |
| batteryfullDS      | Digunakan DS Phat/Lite                                                   |
| batterylow         | Digunakan di mode DS                                                     |

### Tekstur berpalet (folder `grf`)

Berkas di sini harus BMP 4 BPP (16 warna).

Untuk menyunting palet warna di GIMP, pilih `Image` -> `Mode` -> `RGB`; seusai mengubah warna, pilih `Image` -> `Mode` -> `Indexed...` untuk dipaletkan kembali. Saat beralih ke <i>indexed</i>, pastikan `Generate optimum palette` dicentang dan `Maximum number of colors` diatur ke `16`.

**Catatan**: Beberapa palet warna gambar di tema DSi ditimpa sesuai warna DS Profile. Jika ingin menyunting palet warna tersebut, pastikan opsi `UserPalette` di `theme.ini` diatur ke `0`.

Setelah dikonversi ke <i>indexed</i>, buka dialog <i>colormap</i> dan pastikan warna lejas (#FF00FF) berada di warna #0 pada <i>colormap</i>. Jika belum, pencet kanan pada <i>colormap</i> dan pilih `Rearrange Colormap...` lalu pindahkan warna lejas ke warna pertama di <i>colormap</i> lalu tekan `OK`.

Jika jumlah warna di <i>colormap</i> kurang dari 16, tekan tombol `+` di bawah dialog <i>colormap</i> sampai ada 16 warna.

Saat mengekspor, sebaiknya centang `Do not write color space information` pada tarik-turun `Compatibility Options`.

| Tekstur                            | Keterangan                                                                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| bips                               | Gambar titik urutan di bilah gulir (Tema DSi)                                                           |
| box                                | Tekstur kotak terisi dan kosong (Tema DSi)                                                              |
| box_empty     | Tekstur kotak kosong (Tema 3DS)                                                                         |
| box_full      | Tekstur kotak untuk latar ikon (Tema 3DS)                                                               |
| brace                              | Gambar kurawal sebelah ikon pertama dan terakhir (Tema DSi)                                             |
| bubble                             | Bagian bawah gelembung judul di atas `start_border` atau kotak ikon                                                        |
| button_arrow  | Tekstur arah panah di kedua sisi bilah gulir layar bawah (Tema DSi)                                     |
| cornerbutton                       | Tombol-tombol yang ada di menu SELECT (Tema DSi) (Dinamai sesuai penggunaan lamanya) |
| cursor                             | <i>Sprite</i> animasi dari tepian kursor penunjuk ikon (Tema 3DS)                                       |
| dialogbox                          | Sembulan kotak dialog yang meluncur ke bawah                                                                               |
| folder                             | Ikon untuk folder                                                                                                          |
| icon_a26      | Ikon permainan Atari 2600                                                                                                  |
| icon_col      | Ikon permainan Colecovision                                                                                                |
| icon_gb       | Ikon permainan Game Boy                                                                                                    |
| icon_gba      | Ikon permainan GBA                                                                                                         |
| icon_gbamode  | Ikon untuk Mode GBA lokal                                                                                                  |
| icon_gg       | Ikon permainan Game Gear                                                                                                   |
| icon_img      | Ikon untuk gambar BMP, GIF, dan PNG                                                                                        |
| icon_int      | Ikon permainan Intellivision                                                                                               |
| icon_m5       | Ikon permainan Sord M5                                                                                                     |
| icon_manual   | Ikon untuk manual                                                                                                          |
| icon_md       | Ikon permainan Mega Drive                                                                                                  |
| icon_nes      | Ikon permainan NES                                                                                                         |
| icon_ngp      | Ikon permainan Neo Geo Pocket                                                                                              |
| icon_pce      | Ikon permainan PC Engine/TurboGrafx-16                                                                                     |
| icon_plg      | Ikon colok-masuk DSTWO                                                                                                     |
| icon_settings | Ikon untuk Nintendo DSi Settings                                                                                           |
| icon_sg       | Ikon permainan Sega SG-1000                                                                                                |
| icon_sms      | Ikon permainan Sega Master System                                                                                          |
| icon_snes     | Ikon permainan SNES                                                                                                        |
| icon_unk      | Ikon untuk permainan yang tidak ada ikon                                                                                   |
| icon_ws       | Ikon permainan WonderSwan                                                                                                  |
| launch_dot    | Efek titik saat memulai permainan (Tema DSi)                                                            |
| moving_arrow  | Arah panah saat memindah permainan (Tema DSi)                                                           |
| progress                           | Animasi pemuatan dengan 8 <i>sprite</i>                                                                                    |
| scroll_window | Bagian bilah gulir penanda letak ikon yang disorot                                                                         |
| small_cart    | Ikon yang ada di deretan atas (Tema 3DS) dan di menu SELECT (Tema DSi)               |
| start_border  | <i>Sprite</i> animasi dari tepian kursor penunjuk ikon (Tema DSi)                                       |
| start_text    | Teks yang muncul di `start_border` (Tema DSi)                                                           |
| wirelessicons                      | Ikon untuk permainan yang bisa bermain nirkabel                                                                            |

### Tekstur Menu DS Klasik (folder `quickmenu`)

Berkas di sini harus PNG.

| Tekstur                         | Keterangan                                          |
| ------------------------------- | --------------------------------------------------- |
| bottombg                        | Latar belakang untuk layar bawah                    |
| phat_topbg | Latar belakang untuk layar atas DS Phat             |
| topbg                           | Latar belakang untuk layar atas di model DS apa pun |

### Tekstur antarmuka (folder `ui`)

Berkas di sini harus PNG. Boleh ada warna transparan (lejas), tapi tingkat alfanya harus 100%. Piksel apa pun yang lejas di salah satu tekstur harus lejas di semuanya, agar warnanya ditimpa dengan benar saat diubah.

| Tekstur                                                          | Keterangan                                               |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| Lshoulder                                                        | Gambar tombol L                                          |
| Lshoulder_greyed                            | Gambar tombol L saat tidak ada halaman lagi di kiri      |
| Lshoulder_photo                             | Gambar tombol L saat sedang ada foto                     |
| Lshoulder_photo_greyed | Gambar tombol L saat di pojok kiri halaman dan ada foto  |
| Rshoulder                                                        | Gambar tombol R                                          |
| Rshoulder_greyed                            | Gambar tombol R saat tidak ada halaman lagi di kanan     |
| Rshoulder_photo                             | Gambar tombol R saat sedang ada foto                     |
| Rshoulder_photo_greyed | Gambar tombol L saat di pojok kanan halaman dan ada foto |

### Tekstur video (folder `video`)

Hanya digunakan tema 3DS, `3dsRotatingCubes.rvid` adalah berkas Rocket Video. Untuk informasi cara mengonversi video ke rvid, baca [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) di wiki Vid2RVID. Jika tidak ingin dipermuncul, hapus saja berkasnya.

### Tekstur volume (folder `volume`)

Tekstur volume hanya ditampilkan di Mode DSi.

Berkas di sini harus PNG. Boleh ada warna transparan (lejas), tapi tingkat alfanya harus 100%.

| Tekstur | Keterangan/Catatan          |
| ------- | --------------------------- |
| volume0 | 0 = senyap, 4 = suara penuh |
| volume1 |                             |
| volume2 |                             |
| volume3 |                             |
| volume4 |                             |

## Penyetelan tema (berkas `theme.ini`)

Opsi bagaimana tema dipermuncul bisa disetel di `theme.ini` untuk mengubah tata letak atau mewadahi grafik besar. Untuk opsi benar/salah, `0` = salah, dan `1` = benar. Opsi dengan nilai kosong berarti tidak digunakan di tema tersebut.

| Nilai (Value) | Keterangan/Catatan                                                                                                                                         | Bawaan (3DS) | Bawaan (DSi) |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------- |
| `StartBorderRenderY`             | Posisi Y awal dari start_border (bingkai START)                                                                    | 92                              | 81                              |
| `StartBorderSpriteW`             | Lebar dari <i>sprite</i> start_border. Mohon diingat tekstur start_border aslinya hanya setengah | 32                              | 32                              |
| `StartBorderSpriteH`             | Tinggi dari <i>sprite</i> start_border                                                                                                | 64                              | 80                              |
| `StartTextRenderY`               | Posisi Y awal dari start_text (terjemahan START)                                                                   | 143                             | 143                             |
| `BubbleTipRenderX`               | Posisi X dari pucuk gelembung yang dipermuncul di atas start_border                                                                   | 125                             | 122                             |
| `BubbleTipRenderY`               | Posisi Y dari pucuk gelembung yang dipermuncul di atas start_border                                                                   | 98                              | 80                              |
| `BubbleTipSpriteW`               | Lebar dari <i>sprite</i> pucuk gelembung                                                                                                                   | 7                               | 11                              |
| `BubbleTipSpriteH`               | Tinggi dari <i>sprite</i> pucuk gelembung                                                                                                                  | 7                               | 8                               |
| `TitleboxRenderY`                | Posisi Y awal dari kotak teks judul                                                                                                                        | 96                              | 85                              |
| `TitleboxTextY`                  | Posisi Y awal dari teks judul                                                                                                                              | 55                              | 30                              |
| `TitleboxTextW`                  | Lebar maksimum dari teks judul                                                                                                                             | 200                             | 240                             |
| `TitleboxTextLarge`              | Dengan <i>font</i> besar atau kecil untuk teks judul                                                                                                       | 0                               | 1                               |
| `TitleboxMaxLines`               | Baris maksimum dari tampilan teks judul                                                                                                                    | 3                               | 4                               |
| `VolumeRenderX`                  | Posisi X permunculan ikon volume di layar atas                                                                                                             | 4                               | 4                               |
| `VolumeRenderY`                  | Posisi Y permunculan ikon volume di layar atas                                                                                                             | 5                               | 5                               |
| `ShoulderLRenderX`               | Posisi X gambar tombol L di layar atas                                                                                                                     | 0                               | 0                               |
| `ShoulderLRenderY`               | Posisi Y gambar tombol L di layar atas                                                                                                                     | 172                             | 172                             |
| `ShoulderRRenderX`               | Posisi X gambar tombol R di layar atas                                                                                                                     | 178                             | 178                             |
| `ShoulderRRenderY`               | Posisi Y gambar tombol R di layar atas                                                                                                                     | 172                             | 172                             |
| `BatteryRenderX`                 | Posisi X permunculan ikon baterai di layar atas                                                                                                            | 235                             | 235                             |
| `BatteryRenderY`                 | Posisi Y permunculan ikon baterai di layar atas                                                                                                            | 5                               | 5                               |
| `UsernameRenderX`                | Posisi X permunculan teks nama pengguna di layar atas                                                                                                      | 28                              | 28                              |
| `UsernameRenderY`                | Posisi Y permunculan teks nama pengguna di layar atas                                                                                                      | 15                              | 15                              |
| `UsernameRenderXDS`              | Posisi X permunculan teks nama pengguna di layar atas, saat di DS Phat/Lite                                                                                | 4                               | 4                               |
| `DateRenderX`                    | Posisi X permunculan teks tanggal di layar atas                                                                                                            | 162                             | 162                             |
| `DateRenderY`                    | Posisi Y permunculan teks tanggal di layar atas                                                                                                            | 7                               | 7                               |
| `TimeRenderX`                    | Posisi X permunculan teks waktu di layar atas                                                                                                              | 200                             | 200                             |
| `TimeRenderY`                    | Posisi Y permunculan teks waktu di layar atas                                                                                                              | 7                               | 7                               |
| `PurpleBatteryAvailable`         | Dengan ikon baterai ungu atau tidak saat `Warna LED Daya` diatur ke `Ungu` di pengaturan                                                                   | 1                               | 1                               |
| `FontPalette1`                   | Warna lejas dari <i>font</i>, ini tidak digunakan <i>font</i> bawaan                                                                                       | 0x0000                          | 0x0000                          |
| `FontPalette2`                   | Warna dari <i>font</i>, konversi dengan [situs ini](http://www.conradshome.com/html2bgr15/)                                                                | 0xDEF7                          | 0xDEF7                          |
| `FontPalette3`                   |                                                                                                                                                            | 0xC631                          | 0xC631                          |
| `FontPalette4`                   |                                                                                                                                                            | 0xA108                          | 0xA108                          |
| `FontPaletteDateTime1`           | Warna lejas yang ditimpa ke <i>font</i> tanggal dan waktu                                                                                                  | 0x0000                          | 0x0000                          |
| `FontPaletteDateTime2`           | Warna yang ditimpa ke <i>font</i> tanggal dan waktu                                                                                                        | 0xDEF7                          | 0xA529                          |
| `FontPaletteDateTime3`           |                                                                                                                                                            | 0xC631                          | 0xBDEF                          |
| `FontPaletteDateTime4`           |                                                                                                                                                            | 0xA108                          | 0xD6B5                          |
| `FontPaletteTitlebox1`           | Warna lejas yang ditimpa ke <i>font</i> dari judul ROM                                                                                                     | 0x0000                          | 0x0000                          |
| `FontPaletteTitlebox2`           | Warna yang ditimpa ke <i>font</i> dari judul ROM                                                                                                           | 0xDEF7                          | 0xDEF7                          |
| `FontPaletteTitlebox3`           |                                                                                                                                                            | 0xC631                          | 0xC631                          |
| `FontPaletteTitlebox4`           |                                                                                                                                                            | 0xA108                          | 0xA108                          |
| `FontPaletteDialog1`             | Warna lejas yang ditimpa ke <i>font</i> dialog                                                                                                             | 0x0000                          | 0x0000                          |
| `FontPaletteDialog2`             | Warna yang ditimpa ke <i>font</i> dialog                                                                                                                   | 0xDEF7                          | 0xDEF7                          |
| `FontPaletteDialog3`             |                                                                                                                                                            | 0xC631                          | 0xC631                          |
| `FontPaletteDialog4`             |                                                                                                                                                            | 0xA108                          | 0xA108                          |
| `FontPaletteOverlay1`            | Warna lejas yang ditimpa ke <i>font</i> teks hamparan                                                                                                      | 0x0000                          | 0x0000                          |
| `FontPaletteOverlay2`            | Warna yang ditimpa ke <i>font</i> teks hamparan                                                                                                            | 0xDEF7                          | 0xDEF7                          |
| `FontPaletteOverlay3`            |                                                                                                                                                            | 0xC631                          | 0xC631                          |
| `FontPaletteOverlay4`            |                                                                                                                                                            | 0xA108                          | 0xA108                          |
| `FontPaletteUsername1`           | Warna lejas yang ditimpa ke <i>font</i> nama pengguna                                                                                                      | 0x0000                          | 0x0000                          |
| `FontPaletteUsername2`           | Warna yang ditimpa ke <i>font</i> nama pengguna                                                                                                            | 0xDEF7                          | 0xDEF7                          |
| `FontPaletteUsername3`           |                                                                                                                                                            | 0xC631                          | 0xC631                          |
| `FontPaletteUsername4`           |                                                                                                                                                            | 0xA108                          | 0xA108                          |
| `BipsUserPalette`                | Dengan palet warna DS Profile atau tidak pada `bips`, titik di bilah gulir                                                                                 |                                 | 0                               |
| `BoxUserPalette`                 | Dengan palet warna DS Profile atau tidak pada `box`, kotak ikon di Tema DSi                                                                                |                                 | 0                               |
| `BoxEmptyUserPalette`            | Dengan palet warna DS Profile atau tidak pada `box_empty`, kotak kosong di Tema 3DS                                                                        | 0                               |                                 |
| `BoxFullUserPalette`             | Dengan palet warna DS Profile atau tidak pada `box_full`, kotak ikon di Tema 3DS                                                                           | 0                               |                                 |
| `BraceUserPalette`               | Dengan palet warna DS Profile atau tidak pada `brace`, kurawal di kedua ujung daftar ROM                                                                   |                                 | 0                               |
| `BubbleUserPalette`              | Dengan palet warna DS Profile atau tidak pada `bubble`, pucuk gelembung judul                                                                              | 0                               | 0                               |
| `ButtonArrowUserPalette`         | Dengan palet warna DS Profile atau tidak pada `button_arrow`, tombol panah di layar bawah                                                                  |                                 | 1                               |
| `CornerButtonUserPalette`        | Dengan palet warna DS Profile atau tidak pada ikon Pengaturan dan Menu DSi di menu SELECT                                                                  |                                 | 0                               |
| `CursorUserPalette`              | Dengan palet warna DS Profile atau tidak pada kursor                                                                                                       | 0                               |                                 |
| `DialogBoxUserPalette`           | Dengan palet warna DS Profile atau tidak pada kotak dialog                                                                                                 | 0                               | 1                               |
| `FolderUserPalette`              | Dengan palet warna DS Profile atau tidak pada folder                                                                                                       | 0                               | 0                               |
| `LaunchDotsUserPalette`          | Dengan palet warna DS Profile atau tidak pada `launch_dot`                                                                                                 |                                 | 1                               |
| `MovingArrowUserPalette`         | Dengan palet warna DS Profile atau tidak pada `moving_arrow`, panah saat memindah ikon                                                                     |                                 | 1                               |
| `ProgressUserPalette`            | Dengan palet warna DS Profile atau tidak pada `progress`, ikon kotak memuat                                                                                | 1                               | 1                               |
| `ScrollWindowUserPalette`        | Dengan palet warna DS Profile atau tidak pada `scroll_windows`, batang di bilah gulir                                                                      |                                 | 0                               |
| `SmallCartUserPalette`           | Dengan palet warna DS Profile atau tidak pada `small_cart`, ikon kartrid                                                                                   | 0                               | 0                               |
| `StartBorderUserPalette`         | Dengan palet warna DS Profile atau tidak pada `start_border`                                                                                               |                                 | 1                               |
| `StartTextUserPalette`           | Dengan palet warna DS Profile atau tidak pada `start_text`                                                                                                 |                                 | 1                               |
| `WirelessIconsUserPalette`       | Dengan palet warna DS Profile atau tidak pada `wirelessicons`, ikon nirkabel                                                                               | 0                               | 0                               |
| `IconA26UserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon Atari 2600                                                                                              | 0                               | 0                               |
| `IconCOLUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon ColecoVision                                                                                            | 0                               | 0                               |
| `IconGBUserPalette`              | Dengan palet warna DS Profile atau tidak pada ikon Game Boy (Colour)                                                                    | 0                               | 0                               |
| `IconGBAUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon Game Boy Advance                                                                                        | 0                               | 0                               |
| `IconGBAModeUserPalette`         | Dengan palet warna DS Profile atau tidak pada ikon Mode GBA lokal                                                                                          | 0                               | 0                               |
| `IconGGUserPalette`              | Dengan palet warna DS Profile atau tidak pada ikon Game Gear                                                                                               | 0                               | 0                               |
| `IconIMGUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon berkas gambar                                                                                           | 0                               | 0                               |
| `IconINTUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon Intellivision                                                                                           | 0                               | 0                               |
| `IconM5UserPalette`              | Dengan palet warna DS Profile atau tidak pada ikon Sord M5                                                                                                 | 0                               | 0                               |
| `IconManualUserPalette`          | Dengan palet warna DS Profile atau tidak pada `icon_manual`                                                                                                | 0                               | 0                               |
| `IconMDUserPalette`              | Dengan palet warna DS Profile atau tidak pada ikon Genesis/Mega Drive                                                                                      | 0                               | 0                               |
| `IconNESUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon NES/Famicom                                                                                             | 0                               | 0                               |
| `IconNGPUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon Neo Geo Pocket                                                                                          | 0                               | 0                               |
| `IconPCEUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon PC Engine/TurboGrafx-16                                                                                 | 0                               | 0                               |
| `IconPLGUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon colok-masuk DSTWO                                                                                       | 0                               | 0                               |
| `IconSettingsUserPalette`        | Dengan palet warna DS Profile atau tidak pada ikon DSi Settings                                                                                            | 0                               | 0                               |
| `IconSGUserPalette`              | Dengan palet warna DS Profile atau tidak pada ikon SG-1000                                                                                                 | 0                               | 0                               |
| `IconSMSUserPalette`             | Dengan palet warna DS Profile atau tidak pada ikon Master System                                                                                           | 0                               | 0                               |
| `IconSNESUserPalette`            | Dengan palet warna DS Profile atau tidak pada ikon SNES                                                                                                    | 0                               | 0                               |
| `IconUnknownUserPalette`         | Dengan palet warna DS Profile atau tidak pada ikon berkas tak diketahui (hilang)                                                        | 0                               | 0                               |
| `IconWSUserPalette`              | Dengan palet warna DS Profile atau tidak pada ikon WonderSwan                                                                                              | 0                               | 0                               |
| `UsernameUserPalette`            | Dengan palet warna DS Profile atau tidak pada <i>font</i> nama pengguna                                                                                    | 1                               | 1                               |
| `ProgressBarUserPalette`         | Dengan palet warna DS Profile atau tidak pada bilah pemuatan                                                                                               | 1                               | 1                               |
| `ProgressBarColor`               | Ini warna bilah pemuatan jika `ProgressBarUserPalette` dinonaktifkan                                                                                       | 0x7C00                          | 0x7C00                          |
| `UseAlphaBlend`                  | Memadukan warna teks layar atas (nama pengguna dan tanggal/waktu) dengan warna latar belakang atau tidak                                | 1                               | 1                               |
| `DarkLoading`                    | Warna memudar ke hitam atau tetap ke putih di layar pemuatan                                                                                               | 0                               | 0                               |
| `RenderPhoto`                    | Mempermuncul foto di layar atas atau tidak                                                                                                                 | 0                               | 1                               |
| `RotatingCubesRenderY`           | Posisi Y permunculan rotatingcubes di layar atas                                                                                                           | 78                              |                                 |
| `PlayStartupJingle`              | Dengan suara awal buka atau tidak sebelum BGM utama. Lihat laman [SFX kustom](custom-dsi-3ds-sfx) untuk informasi lanjut                   | 1                               | 0                               |
| `StartupJingleDelayAdjust`       | Jumlah sampel di awalan suara awal buka untuk kapan BGM diputar                                                                                            | 0                               | 0                               |

### Opsi Mode Macro

Opsi kustom spesifik boleh ditambah di berkas `theme.ini` untuk Mode Macro. Caranya, tulis `[MACRO]` di bawah barisan konfigurasi yang ada, lalu tambahkan setelan tertentu di bawahnya.

## Musik latar belakang dan efek suara kustom

Tema DSi dan 3DS bisa ditaruh musik kustom. Lihat [Tema DSi/3DS - Efek Suara Kustom](custom-dsi-3ds-sfx) untuk jelasnya.

## <i>Font</i> kustom

[<i>Font</i> kustom](custom-fonts) boleh ditaruh di folder `font` untuk tema. <i>Font</i> kustom juga bisa untuk tanggal & waktu dengan menimpa `date_time.nftr`, dan nama pengguna dengan `username.nftr`.

## Warna palet kustom

Untuk tekstur berpalet (folder `grf`), bisa ditambah seperangkat palet kustom yang digunakan jika pengaturan `UserPalette` diaktifkan. Berkas palet bisa dibuat dengan [penyunting ini](https://skinpaltool.dvdo.dev/). Saat di penyunting, impor dulu gambar yang ingin dikerjakan, lalu buat palet untuk masing-masing 16 warna DS Profile. Gunakan [berkas palet contoh ini](/assets/files/example-palette.bin) sebagai awal pembuatan.

Kumpulan 16 baris palet itu warna pilihan masing-masing profil dan harus dalam urutan berikut:

1. Kelabu-Biru
2. Cokelat
3. Merah
4. Merah muda
5. Jingga
6. Kuning
7. Hijau Muda
8. Hijau
9. Hijau Tua
10. Pirus
11. Biru Muda/Sian
12. Biru
13. Biru Tua/Nila
14. Lembayung/Ungu Tua
15. Ungu
16. Magenta

Sesudah membuat berkas palet, taruh berkasnya di folder `palettes`. Nama berkas palet harus sama dengan nama gambarnya tapi dengan ekstensi `.bin` (contoh: `start_border.bin` akan mengubah `start_border.bmp`).

Boleh juga menaruh berkas palet `username.bin` untuk mengubah warna <i>font</i> nama pengguna. Pastikan penyunting palet sudah di `Font Mode` saat membuat berkas ini.

## Bagian 3: Menambahkan ke TWiLight Menu++

Sesudah menyunting beberapa grafik dan ingin mencoba tema yang dibuat, cukup salin folder tema (folder yang berisi `background`, `battery`, dll) ke `sd:/_nds/TWiLightMenu/3dsmenu/themes/` untuk tema 3DS, atau `sd:/_nds/TWiLightMenu/dsimenu/themes/` untuk tema DSi.

## Bagian 4: Membagikan tema

Sesudah membuat tema, hasilnya bisa dibagikan ke komunitas dengan membuat <i>Pull Request</i> ke repositori GitHub [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) berisi lampiran `.7z`. Jika tidak terbiasa menggunakan Git, buat saja <i>issue</i> di repositori tersebut dengan melampirkan .zip tema yang ingin ditambahkan.
