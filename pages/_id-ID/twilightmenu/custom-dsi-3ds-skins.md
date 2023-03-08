---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Cara Membuat Skin DSi/3DS
description: Cara membuat skin DSi dan 3DS kustom untuk TWiLight Menu++
---

Untuk membuat skin TWiLight Menu++, dibutuhkan penyunting gambar yang mampu mengekspor `.png`, `.bmp` atau `.png` 16 <abbr title="Bits Per Pixel">BPP</abbr>, dan `.bmp` 4 BPP. Diharuskan juga mampu mengatur ulang palet gambar secara manual. Pada panduan ini dianjurkan menggunakan [GIMP](https://www.gimp.org), karena mampu melakukan semua yang dibutuhkan.

## Bagian 1: Mengunduh contoh
Pertama-tama harus mengunduh [contoh skin](/assets/files/skin-examples.zip). Ini berguna sebagai dasar pembuatan skin dengan format yang benar, jadi jika nanti terdapat masalah, dapat dibandingkan dengan berkas contoh ini.

## Bagian 2: Menyunting gambar
Unduh dan pasang [GIMP](https://www.gimp.org)
- Penyunting lain seperti Photoshop boleh digunakan, tapi pada panduan ini akan menggunakan GIMP

Setelah terpasang, buka GIMP, dan pilih `Windows` -> `Dockable Dialogs` -> `Colormap`. Ini akan membuka colormap dialog untuk memudahkan menyunting palet pada gambar.

Sekarang sudah boleh membuka dan menyunting gambar di GIMP lalu lanjut ke bagian di bawah berdasarkan letak foldernya. Mohon diingat TWiLight Menu++ itu pilih-pilih perihal ketepatan format gambar dan itu beragam tergantung letak folder dari gambar, jadi pastikan cara ekspor sesuai bagiannya.

### Tekstur latar belakang (folder `background`)
Berkas boleh PNG atau BMP yang 16-bit (`A1 R5 G5 B5` atau `X1 R5 G5 B5`).
- Jika berkasnya BMP, dapat diatur ke 16-bit di bawah Advance Options ketika mengekspor. Ini mungkin harus dilakukan setiap kali mengekspor BMP

| Tekstur               | Keterangan                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| top                   | Tekstur latar belakang layar atas                                                                       |
| bottom                | Tekstur latar belakang layar bawah ketika tidak melayang di atas ikon                                   |
| bottom_ds             | Untuk tema 3DS di DS Phat/Lite, tekstur latar layar bawah ketika tidak melayang di atas ikon            |
| bottom_macro          | Untuk tema DSi, tekstur latar belakang ketika tidak melayang di atas ikon ketika menggunakan Macro Mode |
| bottom_bubble         | Tekstur latar belakang bawah ketika tidak melayang di atas ikon                                         |
| bottom_bubble_ds    | Untuk tema 3DS di DS Phat/Lite, tekstur latar layar bawah ketika melayang di atas ikon                  |
| bottom_bubble_macro | Untuk tema DSi, tekstur latar belakang ketika melayang di atas ikon saat menggunakan Macro Mode         |
| bottom_moving         | Untuk tema DSi, tekstur latar belakang bawah ketika pindah ikon                                         |
| bottom_moving_macro | Untuk tema DSi, tekstur latar belakang bawah ketika pindah ikon ketika menggunakan Macro Mode           |

### Battery textures (`battery` folder)
Yang ini harus berkas PNG. Transparency is supported, however only 100% transparency will work.

| Tekstur            | Description/Notes                                                          |
| ------------------ | -------------------------------------------------------------------------- |
| battery0           | Berkedip dengan `battery1` saat baterai lemah                              |
| battery1           | 0-4 digunakan di mode DSi                                                  |
| battery1purple     | Ikon ungu digunakan saat `Warna LED Daya` diubah ke `Purple` di pengaturan |
| battery2           |                                                                            |
| battery2purple     |                                                                            |
| battery3           |                                                                            |
| battery3purple     |                                                                            |
| battery4           |                                                                            |
| battery4purple     |                                                                            |
| batterycharge      |                                                                            |
| batterychargeblink | Berkedip dengan `batterycharge` saat mengisi daya                          |
| batteryfull        | Digunakan saat di mode DS pada DSi/3DS                                     |
| batteryfullDS      | Untuk di DS Phat/Lite                                                      |
| batterylow         | Digunakan saat di mode DS                                                  |

### Tekstur Paletted (folder `grf`)
Berkas harus berupa berkas BMP 4 BPP (16 warna).

Untuk mengeditnya di GIMP, pilih `image-&#062; <code>Mode` -> `RGB`</code> untuk memberi izin penggantian warna, lalu setelah selesai, pilih `Image` -> `Mode` -> `Indexed...` untuk mengkonversikannya kembali ke paletted. Saat beralih ke indexed, pastikan bahwa `optimum palette` terceklis dan `Maximum number of colors` diatur ke `16`.

**Catatan:** Beberapa gambar di tema DSi paletnya dikesampingkan berdasarkan warna profil pengguna. Jika mengedit warna-warna tersebut, pastikan bahwa pengaturan `UserPalette` di `theme.ini` diatur ke `0`.

Setelah mengkonversikannya ke indexed, ke colormap dialog dan pastikan warna transparan (#FF00FF) berada pada color #0 di colormap. Jika bukan, pencet kanan pada colormap dan pilih `Rearrange Colormap...` lalu pindahkan warna lejas ke warna pertama di colormap lalu tekan `OK`.

Jika terdapat kurang dari 16 warna pada colormap mu, tekan tombol `+` di bawah dialog colormap sampai kamu mempunyai 16 warna.

Ketika mengekspor, direkomendasikan untuk mencentang `Do not write color space information` pada box di bawah `Compatibility Options`.

| Tekstur       | Keterangan                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------- |
| bips          | Bips yang ditampilkan di bagian bawah scrollbar (Tema DSi)                                         |
| box           | Tekstur kotak, berisi antara tekstur penuh dan kosong (Tema DSi)                                   |
| box_empty     | Tekstur yang ditampilkah untuk kotak kosong (Tema 3DS)                                             |
| box_full      | Tekstur yang ditampilkan untuk kotak dengan sebuah ikon (Tema 3DS)                                 |
| brace         | Tekstur penjepit yang menunjukkan ikon pertama dan terakhir (Tema DSi)                             |
| bubble        | Gelembung bawah yang digambar di bawah bingkai start atau kotak ikon                               |
| button_arrow  | Tekstur untuk panah di kedua sisi scrollbar bawah (DSi Theme)                                      |
| cornerbutton  | Tombol-tombol yang ditampilkan pada menu SELECT (DSi Theme) (Nama ini berdasarkan penggunaan lama) |
| cursor        | Perbatasan dengan bingkai animasi yang menunjukkan ikon yang dipilih (Tema 3DS)                    |
| dialogbox     | Perbatasan dengan bingkai animasi yang menunjukkan ikon yang dipilih (Tema 3DS)                    |
| folder        | The icon for folders                                                                               |
| icon_a26      | Ikon untuk permainan Atari 2600                                                                    |
| icon_col      | The icon for Colecovision games                                                                    |
| icon_gb       | The icon for Game Boy games                                                                        |
| icon_gba      | The icon for GBA games                                                                             |
| icon_gbamode  | The icon for native GBA Mode                                                                       |
| icon_gg       | The icon for Game Gear games                                                                       |
| icon_img      | The icon for BMP, GIF, and PNG images                                                              |
| icon_int      | The icon for Intellivision games                                                                   |
| icon_m5       | The icon for Sord M5 games                                                                         |
| icon_manual   | The icon for the manual                                                                            |
| icon_md       | The icon for Mega Drive games                                                                      |
| icon_nes      | The icon for NES games                                                                             |
| icon_ngp      | The icon for Neo Geo Pocket games                                                                  |
| icon_pce      | The icon for PC Engine/TurboGrafx-16 games                                                         |
| icon_plg      | The icon for DSTWO plugins                                                                         |
| icon_settings | The icon for Nintendo DSi Settings                                                                 |
| icon_sg       | The icon for Sega SG-1000 games                                                                    |
| icon_sms      | The icon for Sega Master System games                                                              |
| icon_snes     | The icon for SNES games                                                                            |
| icon_unk      | The icon displayed when a game is missing an icon                                                  |
| icon_ws       | The icon for WonderSwan games                                                                      |
| launch_dot    | The dots displayed when a game is launched (DSi Theme)                                             |
| moving_arrow  | The arrow displayed when a game is being moved (DSi Theme)                                         |
| progress      | The progress loading animation with 8 frames                                                       |
| scroll_window | The part of the scrollbar that indicates the icons that are in view                                |
| small_cart    | The icons displayed along the top (3DS Theme) and in the SELECT menu (DSi Theme)                   |
| start_border  | The border with animation frames that indicates the selected icon (DSi Theme)                      |
| start_text    | The text displayed on the start border (DSi Theme)                                                 |
| wirelessicons | The icons displayed to indicate a game has wireless support                                        |

### Tekstur Menu DS Klasik (folder `quickmenu`)
Yang ini harus berkas PNG.

| Tekstur    | Keterangan                                            |
| ---------- | ----------------------------------------------------- |
| bottombg   | Latar belakang untuk layar bawah                      |
| phat_topbg | Latar belakang untuk layar atas DS Phat (Kodok)       |
| topbg      | Latar belakang untuk layar atas pada model DS apa pun |

### UI textures (`ui` folder)
Yang ini harus berkas PNG. Transparency is supported, however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all of them, so that it's properly overwritten on change.

| Tekstur          | Keterangan                                              |
| ---------------- | ------------------------------------------------------- |
| Lshoulder        | The left shoulder                                       |
| Lshoulder_greyed | The left shoulder when there are no pages to the left   |
| Rshoulder        | The right shoulder                                      |
| Rshoulder_greyed | The right shoulder when there are no pages to the right |

### Video texture (`video` folder)
Only used for the 3DS theme, `3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. If you don't want this to be drawn you can simply delete it.

### Volume textures (`volume` folder)
Volume textures are only displayed in DSi Mode.

Yang ini harus berkas PNG. Transparency is supported, however only 100% transparency will work.


| Tekstur | Description/Notes            |
| ------- | ---------------------------- |
| volume0 | 0 is muted, 4 is full volume |
| volume1 |                              |
| volume2 |                              |
| volume3 |                              |
| volume4 |                              |

## Penyetelan tema (berkas `theme.ini`)
You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger graphics or different layouts. For true/false options, `0` is false, and `1` is true. Options with a blank default value for a theme are unused in that theme.

| Nilai (Value)              | Description/Notes                                                                                                               | Bawaan (3DS) | Bawaan (DSi) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `StartBorderRenderY`       | Posisi awalan Y dari tepian kotak penunjuk permainan                                                                            | 92           | 81           |
| `StartBorderSpriteW`       | The width of the start border sprite. Note that the start border texture is exactly half of the full border                     | 32           | 32           |
| `StartBorderSpriteH`       | The height of the start border sprite                                                                                           | 64           | 80           |
| `StartTextRenderY`         | Posisi awalan Y dari teks "Start"                                                                                               | 143          | 143          |
| `BubbleTipRenderX`         | The X position of the tip of the bubble that is drawn over the start border                                                     | 125          | 122          |
| `BubbleTipRenderY`         | The Y position of the tip of the bubble that is drawn over the start border                                                     | 98           | 80           |
| `BubbleTipSpriteW`         | The width of the bubble tip sprite                                                                                              | 7            | 11           |
| `BubbleTipSpriteH`         | The height of the bubble tip sprite                                                                                             | 7            | 8            |
| `TitleboxRenderY`          | The initial Y position of the title text box                                                                                    | 96           | 85           |
| `TitleboxTextY`            | The initial Y position of the title text                                                                                        | 55           | 30           |
| `TitleboxTextW`            | The maximum width of the title text                                                                                             | 200          | 240          |
| `TitleboxTextLarge`        | Whether to use the large font for the title text                                                                                | 0            | 1            |
| `TitleboxMaxLines`         | The maximum lines of text to show of the title                                                                                  | 3            | 4            |
| `VolumeRenderX`            | The X position on the top screen to draw the volume icon                                                                        | 4            | 4            |
| `VolumeRenderY`            | The Y position on the top screen to draw the volume icon                                                                        | 5            | 5            |
| `ShoulderLRenderX`         | The X position on the top screen to draw the left shoulder                                                                      | 0            | 0            |
| `ShoulderLRenderY`         | The Y position on the top screen to draw the left shoulder                                                                      | 172          | 172          |
| `ShoulderRRenderX`         | The X position on the top screen to draw the right shoulder                                                                     | 178          | 178          |
| `ShoulderRRenderY`         | The Y position on the top screen to draw the right shoulder                                                                     | 172          | 172          |
| `BatteryRenderX`           | The X position on the top screen to draw the battery icon                                                                       | 235          | 235          |
| `BatteryRenderY`           | The Y position on the top screen to draw the battery icon                                                                       | 5            | 5            |
| `UsernameRenderX`          | The X position on the top screen to draw the username text                                                                      | 28           | 28           |
| `UsernameRenderY`          | The Y position on the top screen to draw the username text                                                                      | 15           | 15           |
| `UsernameRenderXDS`        | The X position on the top screen to draw the username text, when on a DS Phat/Lite                                              | 4            | 4            |
| `DateRenderX`              | The X postion on the top screen to draw the date text                                                                           | 162          | 162          |
| `DateRenderY`              | The Y postion on the top screen to draw the date text                                                                           | 7            | 7            |
| `TimeRenderX`              | The X positon on the top screen to draw the time text                                                                           | 200          | 200          |
| `TimeRenderY`              | The Y positon on the top screen to draw the time text                                                                           | 7            | 7            |
| `PurpleBatteryAvailable`   | Whether or not to use the purple battery icons when `Power LED color` is set to `Purple` in settings                            | 1            | 1            |
| `FontPalette1`             | The transparent color of the font, unused for default fonts                                                                     | 0x0000       | 0x0000       |
| `FontPalette2`             | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                                      | 0xDEF7       | 0xDEF7       |
| `FontPalette3`             |                                                                                                                                 | 0xC631       | 0xC631       |
| `FontPalette4`             |                                                                                                                                 | 0xA108       | 0xA108       |
| `FontPaletteDateTime1`     | The override transparent color of the font for the date and time                                                                | 0x0000       | 0x0000       |
| `FontPaletteDateTime2`     | The override color of the font for the date and time                                                                            | 0xDEF7       | 0xA529       |
| `FontPaletteDateTime3`     |                                                                                                                                 | 0xC631       | 0xBDEF       |
| `FontPaletteDateTime4`     |                                                                                                                                 | 0xA108       | 0xD6B5       |
| `FontPaletteTitlebox1`     | The override transparent color of the font for the ROM title box                                                                | 0x0000       | 0x0000       |
| `FontPaletteTitlebox2`     | The override color of the font for the ROM title box                                                                            | 0xDEF7       | 0xDEF7       |
| `FontPaletteTitlebox3`     |                                                                                                                                 | 0xC631       | 0xC631       |
| `FontPaletteTitlebox4`     |                                                                                                                                 | 0xA108       | 0xA108       |
| `FontPaletteDialog1`       | The override transparent color of the font for dialogs                                                                          | 0x0000       | 0x0000       |
| `FontPaletteDialog2`       | The override color of the font for dialogs                                                                                      | 0xDEF7       | 0xDEF7       |
| `FontPaletteDialog3`       |                                                                                                                                 | 0xC631       | 0xC631       |
| `FontPaletteDialog4`       |                                                                                                                                 | 0xA108       | 0xA108       |
| `FontPaletteOverlay1`      | The override transparent color of the font for overlayed text                                                                   | 0x0000       | 0x0000       |
| `FontPaletteOverlay2`      | The override color of the font for overlayed text                                                                               | 0xDEF7       | 0xDEF7       |
| `FontPaletteOverlay3`      |                                                                                                                                 | 0xC631       | 0xC631       |
| `FontPaletteOverlay4`      |                                                                                                                                 | 0xA108       | 0xA108       |
| `FontPaletteUsername1`     | The override transparent color of the font for the username                                                                     | 0x0000       | 0x0000       |
| `FontPaletteUsername2`     | The override color of the font for the username                                                                                 | 0xDEF7       | 0xDEF7       |
| `FontPaletteUsername3`     |                                                                                                                                 | 0xC631       | 0xC631       |
| `FontPaletteUsername4`     |                                                                                                                                 | 0xA108       | 0xA108       |
| `StartTextUserPalette`     | Whether or not to use the DS Profile color for the palette of the start text                                                    |              | 1            |
| `StartBorderUserPalette`   | Whether or not to use the DS Profile color for the palette of the start border                                                  |              | 1            |
| `ButtonArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen                     |              | 1            |
| `MovingArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow shown when moving icons                                 |              | 1            |
| `LaunchDotsUserPalette`    | Whether or not to use the DS Profile color for the palette of the launch dots                                                   |              | 1            |
| `DialogBoxUserPalette`     | Whether or not to use the DS Profile color for the palette of the dialog box                                                    |              | 1            |
| `RenderPhoto`              | Whether or not to draw a photo on the top screen                                                                                | 0            | 1            |
| `RotatingCubesRenderY`     | The Y position on the top screen to draw the rotating cubes                                                                     | 78           |              |
| `PlayStartupJingle`        | Whether or not to use the startup sound before the main BGM. See the [custom SFX](custom-dsi-3ds-sfx) page for more information | 1            | 0            |
| `StartupJingleDelayAdjust` | The amount of samples early in the startup sound the BGM should start at                                                        | 0            | 0            |

### Macro Mode options
You may add specific override options to `theme.ini` for use in Macro Mode. To do this, add `[MACRO]` to a blank line at the bottom of the configuration file, then add any specified configurations below it.

## Custom background music and sound effects
The DSi and 3DS themes also support custom music. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.

## Custom fonts
You may put [Custom Fonts](custom-fonts) in the `font` folder for use in the skin. You can also add override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.
