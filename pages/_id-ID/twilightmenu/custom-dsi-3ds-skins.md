---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Cara Membuat Skin DSi/3DS
description: Cara membuat skin DSi dan 3DS kustom untuk TWiLight Menu++
---

Untuk membuat skin TWiLight Menu++, diperlukan penyunting gambar yang mampu mengekspor `.png`, `.bmp`/`.png` 16 <abbr title="Bits Per Pixel">BPP</abbr>, dan `.bmp` 4 BPP. Diharuskan juga mampu menyusun ulang palet gambar secara manual. Panduan ini menganjurkan aplikasi [GIMP](https://www.gimp.org), karena mampu melakukan semua yang diperlukan.

## Bagian 1: Mengunduh contoh
Pertama-tama harus mengunduh [contoh skin](/assets/files/skin-examples.zip). Ini berguna sebagai dasar pembuatan skin yang berformat benar, jadi jika nanti terdapat isu, bisa dibandingkan dengan berkas contoh ini.

## Bagian 2: Menyunting gambar
Unduh dan pasang [GIMP](https://www.gimp.org)
- Penyunting lain seperti Photoshop juga boleh, tapi panduan ini akan menggunakan GIMP

Setelah terpasang, buka GIMP, dan pilih `Windows` -> `Dockable Dialogs` -> `Colormap`. Ini akan membuka dialog *colormap* untuk memudahkan menyunting palet pada gambar.

Sekarang gambar sudah boleh dibuka dan disunting di GIMP, lanjut ke bagian di bawah ini berdasarkan letak foldernya. Mohon diingat TWiLight Menu++ pilih-pilih soal ketepatan format gambar dan itu beragam tergantung letak foldernya, jadi ikuti cara ekspor sesuai bagiannya.

### Tekstur latar belakang (folder `background`)
Berkas boleh PNG atau BMP yang 16-bit (`A1 R5 G5 B5` atau `X1 R5 G5 B5`).
- Jika berkasnya BMP, bisa diatur ke 16-bit di bawah *Advance Options* ketika mengekspor. Ini mungkin harus dilakukan setiap kali mengekspor BMP

| Tekstur               | Keterangan                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------- |
| top                   | Tekstur latar belakang layar atas                                                           |
| top_photo             | Tekstur latar layar atas saat sedang ada foto                                               |
| bottom                | Tekstur latar layar bawah saat tidak diarahkan di atas ikon                                 |
| bottom_ds             | Untuk tema 3DS di DS Phat/Lite. Tekstur latar layar bawah saat tidak diarahkan di atas ikon |
| bottom_macro          | Untuk tema DSi di Mode Macro. Tekstur latar belakang saat tidak diarahkan di atas ikon      |
| bottom_bubble         | Tekstur latar layar bawah saat diarahkan di atas ikon                                       |
| bottom_bubble_ds    | Untuk tema 3DS di DS Phat/Lite. Tekstur latar layar bawah saat diarahkan di atas ikon       |
| bottom_bubble_macro | Untuk tema DSi di Mode Macro. Tekstur latar belakang saat diarahkan di atas ikon            |
| bottom_moving         | Untuk tema DSi. Tekstur latar layar bawah saat memindah ikon                                |
| bottom_moving_macro | Untuk tema DSi di Mode Macro. Tekstur latar belakang saat memindah ikon                     |

### Tekstur baterai (folder `battery`)
Untuk ini harus berkas PNG. Mendukung warna lejas atau transparan, namun harus di tingkat 100% agar berfungsi.

| Tekstur            | Keterangan/Catatan                                                       |
| ------------------ | ------------------------------------------------------------------------ |
| battery0           | Berkelipkan gambar `battery1` jika baterai lemah                         |
| battery1           | 0-4 digunakan di mode DSi                                                |
| battery1purple     | Ikon ungu digunakan jika `Warna LED Daya` diubah ke `Ungu` di pengaturan |
| battery2           |                                                                          |
| battery2purple     |                                                                          |
| battery3           |                                                                          |
| battery3purple     |                                                                          |
| battery4           |                                                                          |
| battery4purple     |                                                                          |
| batterycharge      |                                                                          |
| batterychargeblink | Berkelipkan gambar `batterycharge` jika mengisi daya                     |
| batteryfull        | Digunakan DSi/3DS di mode DS                                             |
| batteryfullDS      | Digunakan DS Phat/Lite                                                   |
| batterylow         | Digunakan di mode DS                                                     |

### Tekstur Berpalet (folder `grf`)
Untuk ini harus berkas BMP 4 BPP (16 warna).

Untuk disunting di GIMP, pilih `Image` -> `Mode` -> `RGB` agar boleh mengubah warna, setelah selesai mengubah warna, pilih `Image` -> `Mode` -> `Indexed...` untuk dipaletkan kembali. Saat berpindah ke *indexed*, pastikan `optimum palette` tercentang dan `Maximum number of colors` diatur ke `16`.

**Catatan:** Beberapa palet gambar di tema DSi ditimpakan sesuai warna profil pengguna. Jika ingin menyunting warna palet tersebut, pastikan opsi `UserPalette` di `theme.ini` diatur ke `0`.

Setelah dikonversi ke *indexed*, buka dialog *colormap* dan pastikan warna lejas (#FF00FF) sudah di warna #0 pada *colormap*. Jika belum, pencet kanan pada *colormap* dan pilih `Rearrange Colormap...` lalu pindahkan warna lejas menjadi warna pertama di *colormap* lalu tekan `OK`.

Jika jumlah warna di *colormap* kurang dari 16, tekan tombol `+` di bawah dialog *colormap* sampai ada 16 warna.

Ketika mengekspor, disarankan mencentang `Do not write color space information` pada kotak di bawah `Compatibility Options`.

| Tekstur       | Keterangan                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------- |
| bips          | Titik penanda urutan yang ada di dalam bilah gulir (Tema DSi)                                   |
| box           | Tekstur kotak, ada yang kotak terisi dan kosong (Tema DSi)                                      |
| box_empty     | Tekstur kotak kosong melompong (Tema 3DS)                                                       |
| box_full      | Tekstur kotak terisi untuk latar ikon (Tema 3DS)                                                |
| brace         | Tekstur kurawal sebelah ikon pertama dan terakhir (Tema DSi)                                    |
| bubble        | Bagian bawah gelembung judul yang di atas start_border atau kotak ikon                          |
| button_arrow  | Tekstur arah panah di kedua sisi bilah gulir layar bawah (Tema DSi)                             |
| cornerbutton  | Tombol-tombol yang ada di menu SELECT (Tema DSi) (Dinamakan demikian sesuai penggunaan lamanya) |
| cursor        | Tepian dengan bingkai animasi untuk menandakan ikon terpilih (Tema 3DS)                         |
| dialogbox     | Sembulan kotak dialog yang meluncur ke bawah                                                    |
| folder        | Ikon untuk folder                                                                               |
| icon_a26      | Ikon permainan Atari 2600                                                                       |
| icon_col      | Ikon permainan Colecovision                                                                     |
| icon_gb       | Ikon permainan Game Boy                                                                         |
| icon_gba      | Ikon permainan GBA                                                                              |
| icon_gbamode  | Ikon untuk Mode GBA lokal                                                                       |
| icon_gg       | Ikon permainan Game Gear                                                                        |
| icon_img      | Ikon untuk gambar BMP, GIF, dan PNG                                                             |
| icon_int      | Ikon permainan Intellivision                                                                    |
| icon_m5       | Ikon permainan Sord M5                                                                          |
| icon_manual   | Ikon untuk manual                                                                               |
| icon_md       | Ikon permainan Mega Drive                                                                       |
| icon_nes      | Ikon permainan NES                                                                              |
| icon_ngp      | Ikon permainan Neo Geo Pocket                                                                   |
| icon_pce      | Ikon permainan PC Engine/TurboGrafx-16                                                          |
| icon_plg      | Ikon colok-masuk DSTWO                                                                          |
| icon_settings | Ikon untuk Nintendo DSi Settings                                                                |
| icon_sg       | Ikon permainan Sega SG-1000                                                                     |
| icon_sms      | Ikon permainan Sega Master System                                                               |
| icon_snes     | Ikon permainan SNES                                                                             |
| icon_unk      | Ikon untuk permainan yang tidak ada ikon                                                        |
| icon_ws       | Ikon permainan WonderSwan                                                                       |
| launch_dot    | Efek titik yang muncul saat membuka permainan (Tema DSi)                                        |
| moving_arrow  | Arah panah yang muncul saat memindah permainan (Tema DSi)                                       |
| progress      | Animasi pemuatan dengan 8 gambar bingkai                                                        |
| scroll_window | Bagian bilah gulir yang menandakan ikon yang sedang dilihat                                     |
| small_cart    | Ikon yang ada di deretan atas (Tema 3DS) dan di menu SELECT (Tema DSi)                          |
| start_border  | Tepian dengan bingkai animasi untuk menandakan ikon terpilih (Tema DSi)                         |
| start_text    | Teks yang muncul di start_border (Tema DSi)                                                     |
| wirelessicons | Ikon yang muncul untuk permainan yang mendukung nirkabel                                        |

### Tekstur Menu DS Klasik (folder `quickmenu`)
Untuk ini harus berkas PNG.

| Tekstur    | Keterangan                                          |
| ---------- | --------------------------------------------------- |
| bottombg   | Latar belakang untuk layar bawah                    |
| phat_topbg | Latar belakang untuk layar atas DS Phat             |
| topbg      | Latar belakang untuk layar atas di model DS apa pun |

### Tekstur antarmuka (folder `ui`)
Untuk ini harus berkas PNG. Mendukung warna lejas atau transparan, namun harus di tingkat 100% agar berfungsi. Piksel apa pun yang lejas di salah satu tekstur harus lejas di semuanya, agar warnanya ditimpa dengan benar saat diubah.

| Tekstur                  | Keterangan                                                  |
| ------------------------ | ----------------------------------------------------------- |
| Lshoulder                | Gambar tombol L                                             |
| Lshoulder_greyed         | Gambar tombol L saat tidak ada halaman lagi di kiri         |
| Lshoulder_photo          | Gambar tombol L saat sedang ada foto                        |
| Lshoulder_photo_greyed | Gambar tombol L saat di halaman terakhir kiri dan ada foto  |
| Rshoulder                | Gambar tombol R                                             |
| Rshoulder_greyed         | Gambar tombol R saat tidak ada halaman lagi di kanan        |
| Rshoulder_photo          | Gambar tombol R saat sedang ada foto                        |
| Rshoulder_photo_greyed | Gambar tombol R saat di halaman terakhir kanan dan ada foto |

### Tekstur video (folder `video`)
Hanya digunakan tema 3DS, `3dsRotatingCubes.rvid` adalah berkas Rocket Video. Untuk informasi lanjut cara mengonversi video ke rvid, baca [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) di wiki Vid2RVID. Jika tidak ingin dipermuncul, hapus saja berkasnya.

### Tekstur volume (folder `volume`)
Tekstur volume hanya ditampilkan di Mode DSi.

Untuk ini harus berkas PNG. Mendukung warna lejas atau transparan, namun harus di tingkat 100% agar berfungsi.


| Tekstur | Keterangan/Catatan          |
| ------- | --------------------------- |
| volume0 | 0 = senyap, 4 = suara penuh |
| volume1 |                             |
| volume2 |                             |
| volume3 |                             |
| volume4 |                             |

## Penyetelan tema (berkas `theme.ini`)
Opsi bentuk permunculan tema bisa disetel di `theme.ini` untuk mewadahi grafik lebih besar atau tata letak berbeda. Untuk opsi benar/salah, `0` = salah, dan `1` = benar. Opsi dengan nilai kosong berarti tidak digunakan di tema tersebut.

| Nilai (Value)              | Keterangan/Catatan                                                                                                       | Bawaan (3DS) | Bawaan (DSi) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------ |
| `StartBorderRenderY`       | Posisi Y awal dari start_border (bingkai START)                                                                          | 92           | 81           |
| `StartBorderSpriteW`       | Lebar dari *sprite* start_border. Mohon diingat tekstur start_border aslinya hanya setengah                            | 32           | 32           |
| `StartBorderSpriteH`       | Tinggi dari *sprite* start_border                                                                                        | 64           | 80           |
| `StartTextRenderY`         | Posisi Y awal dari start_text (terjemahan START)                                                                         | 143          | 143          |
| `BubbleTipRenderX`         | Posisi X dari pucuk gelembung yang dipermuncul di atas start_border                                                      | 125          | 122          |
| `BubbleTipRenderY`         | Posisi Y dari pucuk gelembung yang dipermuncul di atas start_border                                                      | 98           | 80           |
| `BubbleTipSpriteW`         | Lebar dari *sprite* pucuk gelembung                                                                                      | 7            | 11           |
| `BubbleTipSpriteH`         | Tinggi dari *sprite* pucuk gelembung                                                                                     | 7            | 8            |
| `TitleboxRenderY`          | Posisi Y awal dari kotak teks judul                                                                                      | 96           | 85           |
| `TitleboxTextY`            | Posisi Y awal dari teks judul                                                                                            | 55           | 30           |
| `TitleboxTextW`            | Lebar maksimum dari teks judul                                                                                           | 200          | 240          |
| `TitleboxTextLarge`        | Dengan *font* besar atau kecil untuk teks judul                                                                          | 0            | 1            |
| `TitleboxMaxLines`         | Baris maksimum dari tampilan teks judul                                                                                  | 3            | 4            |
| `VolumeRenderX`            | Posisi X permunculan ikon volume di layar atas                                                                           | 4            | 4            |
| `VolumeRenderY`            | Posisi Y permunculan ikon volume di layar atas                                                                           | 5            | 5            |
| `ShoulderLRenderX`         | Posisi X gambar tombol L di layar atas                                                                                   | 0            | 0            |
| `ShoulderLRenderY`         | Posisi Y gambar tombol L di layar atas                                                                                   | 172          | 172          |
| `ShoulderRRenderX`         | Posisi X gambar tombol R di layar atas                                                                                   | 178          | 178          |
| `ShoulderRRenderY`         | Posisi Y gambar tombol R di layar atas                                                                                   | 172          | 172          |
| `BatteryRenderX`           | Posisi X permunculan ikon baterai di layar atas                                                                          | 235          | 235          |
| `BatteryRenderY`           | Posisi Y permunculan ikon baterai di layar atas                                                                          | 5            | 5            |
| `UsernameRenderX`          | Posisi X permunculan teks nama pengguna di layar atas                                                                    | 28           | 28           |
| `UsernameRenderY`          | Posisi Y permunculan teks nama pengguna di layar atas                                                                    | 15           | 15           |
| `UsernameRenderXDS`        | Posisi X permunculan teks nama pengguna di layar atas, saat di DS Phat/Lite                                              | 4            | 4            |
| `DateRenderX`              | Posisi X permunculan teks tanggal di layar atas                                                                          | 162          | 162          |
| `DateRenderY`              | Posisi Y permunculan teks tanggal di layar atas                                                                          | 7            | 7            |
| `TimeRenderX`              | Posisi X permunculan teks waktu di layar atas                                                                            | 200          | 200          |
| `TimeRenderY`              | Posisi Y permunculan teks waktu di layar atas                                                                            | 7            | 7            |
| `PurpleBatteryAvailable`   | Dengan ikon baterai ungu atau tidak saat `Warna LED Daya` diatur ke `Ungu` di pengaturan                                 | 1            | 1            |
| `FontPalette1`             | Warna lejas dari *font*, ini tidak digunakan *font* bawaan                                                               | 0x0000       | 0x0000       |
| `FontPalette2`             | Warna dari *font*, konversi dengan [situs ini](http://www.conradshome.com/html2bgr15/)                                   | 0xDEF7       | 0xDEF7       |
| `FontPalette3`             |                                                                                                                          | 0xC631       | 0xC631       |
| `FontPalette4`             |                                                                                                                          | 0xA108       | 0xA108       |
| `FontPaletteDateTime1`     | Warna lejas *font* yang ditimpakan untuk tanggal dan waktu                                                               | 0x0000       | 0x0000       |
| `FontPaletteDateTime2`     | Warna *font* yang ditimpakan untuk tanggal dan waktu                                                                     | 0xDEF7       | 0xA529       |
| `FontPaletteDateTime3`     |                                                                                                                          | 0xC631       | 0xBDEF       |
| `FontPaletteDateTime4`     |                                                                                                                          | 0xA108       | 0xD6B5       |
| `FontPaletteTitlebox1`     | Warna lejas *font* yang ditimpakan untuk kotak judul ROM                                                                 | 0x0000       | 0x0000       |
| `FontPaletteTitlebox2`     | Warna *font* yang ditimpakan untuk kotak judul ROM                                                                       | 0xDEF7       | 0xDEF7       |
| `FontPaletteTitlebox3`     |                                                                                                                          | 0xC631       | 0xC631       |
| `FontPaletteTitlebox4`     |                                                                                                                          | 0xA108       | 0xA108       |
| `FontPaletteDialog1`       | Warna lejas *font* yang ditimpakan untuk dialog                                                                          | 0x0000       | 0x0000       |
| `FontPaletteDialog2`       | Warna *font* yang ditimpakan untuk dialog                                                                                | 0xDEF7       | 0xDEF7       |
| `FontPaletteDialog3`       |                                                                                                                          | 0xC631       | 0xC631       |
| `FontPaletteDialog4`       |                                                                                                                          | 0xA108       | 0xA108       |
| `FontPaletteOverlay1`      | Warna lejas *font* yang ditimpakan untuk teks hamparan                                                                   | 0x0000       | 0x0000       |
| `FontPaletteOverlay2`      | Warna *font* yang ditimpakan untuk teks hamparan                                                                         | 0xDEF7       | 0xDEF7       |
| `FontPaletteOverlay3`      |                                                                                                                          | 0xC631       | 0xC631       |
| `FontPaletteOverlay4`      |                                                                                                                          | 0xA108       | 0xA108       |
| `FontPaletteUsername1`     | Warna lejas *font* yang ditimpakan untuk nama pengguna                                                                   | 0x0000       | 0x0000       |
| `FontPaletteUsername2`     | Warna *font* yang ditimpakan untuk nama pengguna                                                                         | 0xDEF7       | 0xDEF7       |
| `FontPaletteUsername3`     |                                                                                                                          | 0xC631       | 0xC631       |
| `FontPaletteUsername4`     |                                                                                                                          | 0xA108       | 0xA108       |
| `BipsUserPalette`          | Dengan warna DS Profile atau tidak untuk palet pada titik urutan di bilah gulir                                          |              | 0            |
| `BoxUserPalette`           | Dengan warna DS Profile atau tidak untuk palet pada kotak yang ada ikon di tema DSi                                      |              | 0            |
| `BoxEmptyUserPalette`      | Dengan warna DS Profile atau tidak untuk palet pada kotak kosong di tema 3DS                                             | 0            |              |
| `BoxFullUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada kotak yang ada ikon di tema 3DS                                      | 0            |              |
| `BraceUserPalette`         | Dengan warna DS Profile atau tidak untuk palet pada kurawal di awal dan akhir daftar permainan                           |              | 0            |
| `BubbleUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada pucuk gelembung judul                                                | 0            | 0            |
| `ButtonArrowUserPalette`   | Dengan warna DS Profile atau tidak untuk palet pada tombol arah panah di layar bawah                                     |              | 1            |
| `CornerButtonUserPalette`  | Dengan warna DS Profile atau tidak untuk palet pada ikon pengaturan dan menu DSi di menu SELECT                          |              | 0            |
| `CursorUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada kursor                                                               | 0            |              |
| `DialogBoxUserPalette`     | Dengan warna DS Profile atau tidak untuk palet pada kotak dialog                                                         | 0            | 1            |
| `FolderUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada folder                                                               | 0            | 0            |
| `LaunchDotsUserPalette`    | Dengan warna DS Profile atau tidak untuk palet pada launch_dot                                                           |              | 1            |
| `MovingArrowUserPalette`   | Dengan warna DS Profile atau tidak untuk palet pada arah panah saat memindah ikon                                        |              | 1            |
| `ProgressUserPalette`      | Dengan warna DS Profile atau tidak untuk palet pada kotak pemuatan berputar                                              | 1            | 1            |
| `ScrollWindowUserPalette`  | Dengan warna DS Profile atau tidak untuk palet pada batang jendela gulir di bilah gulir                                  |              | 0            |
| `SmallCartUserPalette`     | Dengan warna DS Profile atau tidak untuk palet pada ikon small_cart                                                      | 0            | 0            |
| `StartBorderUserPalette`   | Dengan warna DS Profile atau tidak untuk palet pada start_border                                                         |              | 1            |
| `StartTextUserPalette`     | Dengan warna DS Profile atau tidak untuk palet pada start_text                                                           |              | 1            |
| `WirelessIconsUserPalette` | Dengan warna DS Profile atau tidak untuk palet pada ikon nirkabel                                                        | 0            | 0            |
| `IconA26UserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon Atari 2600                                                      | 0            | 0            |
| `IconCOLUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon ColecoVision                                                    | 0            | 0            |
| `IconGBUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada ikon Game Boy                                                        | 0            | 0            |
| `IconGBAUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon Game Boy Advance                                                | 0            | 0            |
| `IconGBAModeUserPalette`   | Dengan warna DS Profile atau tidak untuk palet pada ikon Mode GBA lokal                                                  | 0            | 0            |
| `IconGGUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada ikon Game Gear                                                       | 0            | 0            |
| `IconIMGUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon berkas gambar                                                   | 0            | 0            |
| `IconINTUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon Intellivision                                                   | 0            | 0            |
| `IconM5UserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada ikon Sord M5                                                         | 0            | 0            |
| `IconManualUserPalette`    | Dengan warna DS Profile atau tidak untuk palet pada ikon manual                                                          | 0            | 0            |
| `IconMDUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada ikon Genesis/Mega Drive                                              | 0            | 0            |
| `IconNESUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon NES/Famicom                                                     | 0            | 0            |
| `IconNGPUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon Neo Geo Pocket                                                  | 0            | 0            |
| `IconPCEUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon PC Engine/TurboGrafx-16                                         | 0            | 0            |
| `IconPLGUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon colok-masuk DSTWO                                               | 0            | 0            |
| `IconSettingsUserPalette`  | Dengan warna DS Profile atau tidak untuk palet pada ikon DSi Settings                                                    | 0            | 0            |
| `IconSGUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada ikon SG-1000                                                         | 0            | 0            |
| `IconSMSUserPalette`       | Dengan warna DS Profile atau tidak untuk palet pada ikon Master System                                                   | 0            | 0            |
| `IconSNESUserPalette`      | Dengan warna DS Profile atau tidak untuk palet pada ikon SNES                                                            | 0            | 0            |
| `IconUnknownUserPalette`   | Dengan warna DS Profile atau tidak untuk palet pada ikon tidak diketahui (hilang)                                        | 0            | 0            |
| `IconWSUserPalette`        | Dengan warna DS Profile atau tidak untuk palet pada ikon WonderSwan                                                      | 0            | 0            |
| `UsernameUserPalette`      | Dengan warna DS Profile atau tidak untuk palet pada nama pengguna                                                        | 1            | 1            |
| `ProgressBarUserPalette`   | Dengan warna DS Profile atau tidak untuk warna bilah pemuatan                                                            | 1            | 1            |
| `ProgressBarColor`         | Ini warna bilah pemuatan jika `ProgressBarUserPalette` dinonaktifkan                                                     | 0x7C00       | 0x7C00       |
| `UseAlphaBlend`            | Memadukan warna teks layar atas (nama pengguna dan tanggal/waktu) dengan warna latar belakang atau tidak                 | 1            | 1            |
| `DarkLoading`              | Warna memudar putih diganti ke hitam atau tidak di layar pemuatan                                                        | 0            | 0            |
| `RenderPhoto`              | Mempermuncul foto atau tidak di layar atas                                                                               | 0            | 1            |
| `RotatingCubesRenderY`     | Posisi Y permunculan rotatingcubes di layar atas                                                                         | 78           |              |
| `PlayStartupJingle`        | Dengan suara awal buka atau tidak sebelum BGM utama. Lihat laman [SFX kustom](custom-dsi-3ds-sfx) untuk informasi lanjut | 1            | 0            |
| `StartupJingleDelayAdjust` | Jumlah sampel di awalan suara awal buka untuk kapan BGM diputar                                                          | 0            | 0            |

### Opsi Mode Macro
Opsi timpaan spesifik boleh ditambah di `theme.ini` untuk Mode Macro. Caranya, tulis `[MACRO]` di barisan baru di bawah tulisan konfigurasi yang ada, lalu tambahkan setelan tertentu di bawahnya.

## Musik latar belakang dan efek suara kustom
Tema DSi dan 3DS mendukung musik kustom. Lihat [Skin DSi/3DS - Efek Suara Kustom](custom-dsi-3ds-sfx) untuk perinciannya.

## *Font* kustom
[*Font* Kustom](custom-fonts) boleh ditaruh di folder `font` untuk skin. Bisa juga ditambah "*font* timpaan" untuk tanggal & waktu menggunakan `date_time.nftr`, dan nama pengguna dengan `username.nftr`.

## Warna palet kustom
Untuk tekstur berpalet (folder `grf`), bisa ditambah seperangkat palet timpaan yang digunakan saat pengaturan `UserPalette` terkait diaktifkan. Berkas palet bisa dibuat dengan [penyunting ini](https://skinpaltool.dvdo.dev/). Saat di penyunting, impor dulu gambar yang ingin dikerjakan, lalu buat palet untuk masing-masing 16 warna DS Profile. [Berkas palet contoh](/assets/files/example-palette.bin) ini bisa digunakan sebagai titik mula.

Ke-16 baris kumpulan palet merujuk ke masing-masing warna profil dan harus dalam urutan berikut:
1. Kelabu-Biru
2. Cokelat
3. Merah
4. Merah Jambu
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
16. Patma

Setelah membuat berkas palet, taruh berkasnya di folder `palettes`. Nama berkas palet harus sama dengan nama gambarnya tapi dengan ekstensi `.bin` (contoh: `start_border.bin` akan diterapkan ke gambar `start_border.bmp`).

Boleh juga menaruh berkas palet `username.bin` untuk mengubah palet dari *font* nama pengguna. Pastikan penyunting palet diatur ke `Font Mode` saat membuat berkas ini.

## Bagian 3: Menambahkan ke TWiLight Menu++
Setelah menyunting beberapa grafis dan ingin mencoba skin yang dibuat, cukup salin folder skin (folder yang berisi `background`, `battery`, dll) ke `sd:/_nds/TWiLightMenu/3dsmenu/themes/` atau `sd:/_nds/TWiLightMenu/dsimenu/themes/` untuk skin tema 3DS dan DSi secara urutan.

## Bagian 4: Membagikan skin
Setelah selesai membuat skin, bisa dibagikan ke komunitas dengan membuat *Pull Request* di repositori GitHub [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) dengan berkas `.7z`. Jika tidak terbiasa menggunakan git, buat saja *issue* di repositori tersebut dengan mencantumkan berkas zip skin Anda yang ingin ditambahkan.
