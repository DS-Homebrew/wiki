---
lang: ja-JP
layout: wiki
section: twilightmenu
category: customization
title: DSi・3DSのスキンの作り方
description: TWiLight Menu++用のDSi・3DSのカスタムスキンを作る方法
---

TWiLight Menu++のスキンを作るには、画像編集ソフト、特に`.png`ファイル、16<abbr title="Bits Per Pixel">BPP</abbr>`.bmp`ファイルまたは`.png`ファイル、4BPP`.bmp`ファイルを出力できるものが必要です。 理想的には、画像パレットを手動で並べ替えできるとなお良いです。 おすすめは[GIMP](https://www.gimp.org)です。必要な機能をすべて備えているため、このガイドでも使用します。

## その1．サンプルをダウンロードする
まず最初に、[サンプルスキン](/assets/files/skin-examples.zip)をダウンロードします。 これらは制作の下地として使えるし、すでに正しい形式になっているので、後で問題が発生したときに比較することが可能なためです。

## その2．画像を編集する
[GIMP](https://www.gimp.org)をダウンロード・インストールします。
- Photoshopなど他の画像編集ソフトも使えますが、このガイドではGIMPを使用します。

インストールしたらGIMPを開き、 `ウィンドウ（Windows）` -> `ドッキング可能なダイアログ（Dockable Dialogs）` -> `カラーマップ（Colormap）`を選択します。 カラーマップダイアログが表示され、パレット画像の編集に使えるようになります。

これで、編集したい画像をGIMPで開けるようになりました。画像の配置フォルダに応じて、以下のセクションに進んでください。 TWiLight Menu++は画像形式について厳格であり、またどのフォルダ下の画像かによって要求形式が異なるため、セクションに書かれているとおりの形式でエクスポートするよう注意してください。

### 背景テクスチャ（`background` フォルダ）
PNGファイル または 16 ビット（`A1 R5 G5 B5` または `X1 R5 G5 B5`）BMPファイルが使用できます。
- BMPファイルを使用する場合は、エクスポート時に「詳細設定」で16ビットに設定することができます。 BMPでエクスポートするたびに、この操作が必要になる場合があります。

| テクスチャ                 | 説明                                                            |
| --------------------- | ------------------------------------------------------------- |
| top                   | 上画面の背景テクスチャ                                                   |
| top_photo             | The top screen background texture when a photo is being shown |
| bottom                | アイコンにカーソルを合わせていない時の下画面背景テクスチャ                                 |
| bottom_ds             | DS・DS Lite上の3DSテーマで、アイコンにカーソルを合わせていない時の下画面背景テクスチャ             |
| bottom_macro          | DSiテーマかつマクロモードで、アイコンにカーソルを合わせた時の下画面背景テクスチャ                    |
| bottom_bubble         | アイコンにカーソルを合わせた時の下画面背景テクスチャ                                    |
| bottom_bubble_ds    | DS・DS Lite上の3DSテーマで、アイコンにカーソルを合わせた時の下画面背景テクスチャ                |
| bottom_bubble_macro | DSiテーマかつマクロモードで、アイコンにカーソルを合わせた時の下画面背景テクスチャ                    |
| bottom_moving         | DSiテーマで、アイコン移動時の下画面背景テクスチャ                                    |
| bottom_moving_macro | DSiテーマかつマクロモードで、アイコン移動時の下画面背景テクスチャ                            |

### 電池テクスチャ（`battery` フォルダ）
PNGファイルとすること。 透明度には対応していますが、100％透明でないと効果がありません。

| テクスチャ              | 説明／備考                          |
| ------------------ | ------------------------------ |
| battery0           | 電池残量が僅かなときに`battery1`と交互に点滅    |
| battery1           | 0から4はDSiモード用                   |
| battery1purple     | 紫色は、設定で`電源LEDの色`を`紫`に指定した場合に使用 |
| battery2           |                                |
| battery2purple     |                                |
| battery3           |                                |
| battery3purple     |                                |
| battery4           |                                |
| battery4purple     |                                |
| batterycharge      |                                |
| batterychargeblink | 充電中に`batterycharge`と交互に点滅      |
| batteryfull        | DSi・3DS上のDSモード用                |
| batteryfullDS      | DS・DS Lite用                    |
| batterylow         | DSモード用                         |

### パレット付きテクスチャ（`grf` フォルダ）
4BPP（16色）BMPファイルとすること。

To edit these in GIMP, select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors, select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. When switching to indexed, ensure that `Generate optimum palette` is checked and `Maximum number of colors` is set to `16`.

**注：** DSi テーマの一部の画像は、ユーザー情報のユーザーカラーに基づいてパレットが上書きされます。 これらの色を編集する場合は、`theme.ini`の`UserPalette`オプションを`0`に設定してください。

After converting to indexed, go to the colormap dialog and ensure the transparent color (#FF00FF) is color #0 in the colormap. If it isn't, right click in the colormap and select `Rearrange Colormap...` then move the transparent color to be the first color in the colormap and select `OK`.

If there are fewer than 16 colors in your final colormap, press the `+` button at the bottom of the colormap dialog until you have 16 colors.

エクスポートの際には、 `互換性のオプション（Compatibility Options）` で、 `色空間の情報を書き込まない（Do not write color space information）` ボックスをチェックすることをお勧めします。

| テクスチャ         | 説明                                                |
| ------------- | ------------------------------------------------- |
| bips          | スクロールバーに表示され、アイコンボックスを示す点（DSiテーマ）                 |
| box           | ボックスのテクスチャ。空きなし・空きの両方を含む（DSiテーマ）                  |
| box_empty     | 空のボックス（3DSテーマ）のテクスチャ                              |
| box_full      | アイコン付きのボックスのテクスチャ（3DSテーマ）                         |
| brace         | 両端のアイコンの先に表示される括弧型のテクスチャ（DSiテーマ）                  |
| bubble        | start_borderまたはアイコンボックスの上部に描画される吹き出しの下端部分         |
| button_arrow  | 下スクロールバーの左右矢印のテクスチャ（DSiテーマ）                       |
| cornerbutton  | SELECTメニューに表示されるボタン（DSiテーマ）（名称は旧来の使い方を踏襲。）        |
| cursor        | 選択したアイコンを示すアニメーションフレーム付き枠線（3DSテーマ）                |
| dialogbox     | スライド表示されるダイアログボックスの背景                             |
| folder        | フォルダのアイコン                                         |
| icon_a26      | Atari 2600 ゲームのアイコン                               |
| icon_col      | コレコビジョンゲームのアイコン                                   |
| icon_gb       | ゲームボーイゲームのアイコン                                    |
| icon_gba      | GBAゲームのアイコン                                       |
| icon_gbamode  | ネイティブGBAモードのアイコン                                  |
| icon_gg       | ゲームギアゲームのアイコン                                     |
| icon_img      | BMP、GIF、PNG画像のアイコン                                |
| icon_int      | インテレビジョンゲームのアイコン                                  |
| icon_m5       | M5ゲームのアイコン                                        |
| icon_manual   | マニュアルのアイコン                                        |
| icon_md       | メガドライブゲームのアイコン                                    |
| icon_nes      | ファミコンゲームのアイコン                                     |
| icon_ngp      | ネオジオポケットゲームのアイコン                                  |
| icon_pce      | PCエンジンゲームのアイコン                                    |
| icon_plg      | DSTWOプラグインのアイコン                                   |
| icon_settings | ニンテンドーDSi設定のアイコン                                  |
| icon_sg       | セガSG-1000ゲームのアイコン                                 |
| icon_sms      | セガマスターシステムゲームのアイコン                                |
| icon_snes     | スーパーファミコンゲームのアイコン                                 |
| icon_unk      | 適切なアイコンがないときに表示されるアイコン                            |
| icon_ws       | ワンダースワンゲームのアイコン                                   |
| launch_dot    | ゲーム起動時に表示されるドット（DSiテーマ）                           |
| moving_arrow  | ゲームの移動中に表示される矢印（DSiテーマ）                           |
| progress      | 8フレームで構成されるローディングアニメーション                          |
| scroll_window | 表示されているアイコンを示すスクロールバー部分                           |
| small_cart    | 上部に表示されるアイコン（3DSテーマ）・SELECTメニューに表示されるアイコン（DSiテーマ） |
| start_border  | 選択したアイコンを示すアニメーションフレーム付き枠線（DSiテーマ）                |
| start_text    | start_borderに表示されるテキスト（DSiテーマ）                    |
| wirelessicons | ワイヤレス対応ゲームであることを示すアイコン                            |

### DSクラシックメニューテクスチャ（`quickmenu` フォルダ）
PNGファイルとすること。

| テクスチャ      | 説明            |
| ---------- | ------------- |
| bottombg   | 下画面の背景        |
| phat_topbg | DSの上画面背景      |
| topbg      | 初代以外のDSの上画面背景 |

### UI テクスチャ（`ui` フォルダ）
PNGファイルとすること。 透明度には対応していますが、100％透明でないと効果がありません。 あるテクスチャで透明なピクセルは、すべてのテクスチャで透明であるべきです。変更時の上書きを適切にするためです。

| テクスチャ                    | 説明                                                               |
| ------------------------ | ---------------------------------------------------------------- |
| Lshoulder                | Lボタン                                                             |
| Lshoulder_greyed         | 左側にページがない場合のLボタン                                                 |
| Lshoulder_photo          | The left shoulder when there is a photo being shown              |
| Lshoulder_photo_greyed | The left shoulder with no pages to the left and a photo showing  |
| Rshoulder                | Rボタン                                                             |
| Rshoulder_greyed         | 右側にページがない場合のRボタン                                                 |
| Rshoulder_photo          | The right shoulder when there is a photo being shown             |
| Rshoulder_photo_greyed | The right shoulder with no pages to the left and a photo showing |

### ビデオテクスチャ（`video` フォルダ）
3DSテーマでのみ使用されます。 `3dsRotatingCubes.rvid` は Rocket Video ファイルです。 動画を rvid へ変換する手順などの詳細は、Vid2RVID wiki の [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) をご覧ください。 もしこれを表示したくない場合は、削除すればOKです。

### 音量テクスチャ（`volume` フォルダ）
DSiモード時のみ表示されます。

PNGファイルとすること。 透明度には対応していますが、100％透明でないと効果がありません。


| テクスチャ   | 説明／備考         |
| ------- | ------------- |
| volume0 | 0はミュート、4は最大音量 |
| volume1 |               |
| volume2 |               |
| volume3 |               |
| volume4 |               |

## テーマ設定（`theme.ini` ファイル）
You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger graphics or different layouts. For true/false options, `0` is false, and `1` is true. Options with a blank default value for a theme are unused in that theme.

| キー                         | 説明／備考                                                                                                                           | 既定値 （3DS） | 既定値 （DSi） |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| `StartBorderRenderY`       | start_borderの初期Y座標                                                                                                              | 92        | 81        |
| `StartBorderSpriteW`       | start_borderスプライトの幅。 start_borderテクスチャの幅はボーダー全体の半分であることに注意                                                                    | 32        | 32        |
| `StartBorderSpriteH`       | start_borderスプライトの高さ                                                                                                            | 64        | 80        |
| `StartTextRenderY`         | start_textの初期Y座標                                                                                                                | 143       | 143       |
| `BubbleTipRenderX`         | The X position of the tip of the bubble that is drawn over the start border                                                     | 125       | 122       |
| `BubbleTipRenderY`         | The Y position of the tip of the bubble that is drawn over the start border                                                     | 98        | 80        |
| `BubbleTipSpriteW`         | The width of the bubble tip sprite                                                                                              | 7         | 11        |
| `BubbleTipSpriteH`         | The height of the bubble tip sprite                                                                                             | 7         | 8         |
| `TitleboxRenderY`          | The initial Y position of the title text box                                                                                    | 96        | 85        |
| `TitleboxTextY`            | The initial Y position of the title text                                                                                        | 55        | 30        |
| `TitleboxTextW`            | The maximum width of the title text                                                                                             | 200       | 240       |
| `TitleboxTextLarge`        | Whether to use the large font for the title text                                                                                | 0         | 1         |
| `TitleboxMaxLines`         | The maximum lines of text to show of the title                                                                                  | 3         | 4         |
| `VolumeRenderX`            | The X position on the top screen to draw the volume icon                                                                        | 4         | 4         |
| `VolumeRenderY`            | The Y position on the top screen to draw the volume icon                                                                        | 5         | 5         |
| `ShoulderLRenderX`         | The X position on the top screen to draw the left shoulder                                                                      | 0         | 0         |
| `ShoulderLRenderY`         | The Y position on the top screen to draw the left shoulder                                                                      | 172       | 172       |
| `ShoulderRRenderX`         | The X position on the top screen to draw the right shoulder                                                                     | 178       | 178       |
| `ShoulderRRenderY`         | The Y position on the top screen to draw the right shoulder                                                                     | 172       | 172       |
| `BatteryRenderX`           | The X position on the top screen to draw the battery icon                                                                       | 235       | 235       |
| `BatteryRenderY`           | The Y position on the top screen to draw the battery icon                                                                       | 5         | 5         |
| `UsernameRenderX`          | The X position on the top screen to draw the username text                                                                      | 28        | 28        |
| `UsernameRenderY`          | The Y position on the top screen to draw the username text                                                                      | 15        | 15        |
| `UsernameRenderXDS`        | The X position on the top screen to draw the username text, when on a DS Phat/Lite                                              | 4         | 4         |
| `DateRenderX`              | The X postion on the top screen to draw the date text                                                                           | 162       | 162       |
| `DateRenderY`              | The Y postion on the top screen to draw the date text                                                                           | 7         | 7         |
| `TimeRenderX`              | The X positon on the top screen to draw the time text                                                                           | 200       | 200       |
| `TimeRenderY`              | The Y positon on the top screen to draw the time text                                                                           | 7         | 7         |
| `PurpleBatteryAvailable`   | Whether or not to use the purple battery icons when `Power LED color` is set to `Purple` in settings                            | 1         | 1         |
| `FontPalette1`             | The transparent color of the font, unused for default fonts                                                                     | 0x0000    | 0x0000    |
| `FontPalette2`             | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                                      | 0xDEF7    | 0xDEF7    |
| `FontPalette3`             |                                                                                                                                 | 0xC631    | 0xC631    |
| `FontPalette4`             |                                                                                                                                 | 0xA108    | 0xA108    |
| `FontPaletteDateTime1`     | The override transparent color of the font for the date and time                                                                | 0x0000    | 0x0000    |
| `FontPaletteDateTime2`     | The override color of the font for the date and time                                                                            | 0xDEF7    | 0xA529    |
| `FontPaletteDateTime3`     |                                                                                                                                 | 0xC631    | 0xBDEF    |
| `FontPaletteDateTime4`     |                                                                                                                                 | 0xA108    | 0xD6B5    |
| `FontPaletteTitlebox1`     | The override transparent color of the font for the ROM title box                                                                | 0x0000    | 0x0000    |
| `FontPaletteTitlebox2`     | The override color of the font for the ROM title box                                                                            | 0xDEF7    | 0xDEF7    |
| `FontPaletteTitlebox3`     |                                                                                                                                 | 0xC631    | 0xC631    |
| `FontPaletteTitlebox4`     |                                                                                                                                 | 0xA108    | 0xA108    |
| `FontPaletteDialog1`       | The override transparent color of the font for dialogs                                                                          | 0x0000    | 0x0000    |
| `FontPaletteDialog2`       | The override color of the font for dialogs                                                                                      | 0xDEF7    | 0xDEF7    |
| `FontPaletteDialog3`       |                                                                                                                                 | 0xC631    | 0xC631    |
| `FontPaletteDialog4`       |                                                                                                                                 | 0xA108    | 0xA108    |
| `FontPaletteOverlay1`      | The override transparent color of the font for overlayed text                                                                   | 0x0000    | 0x0000    |
| `FontPaletteOverlay2`      | The override color of the font for overlayed text                                                                               | 0xDEF7    | 0xDEF7    |
| `FontPaletteOverlay3`      |                                                                                                                                 | 0xC631    | 0xC631    |
| `FontPaletteOverlay4`      |                                                                                                                                 | 0xA108    | 0xA108    |
| `FontPaletteUsername1`     | The override transparent color of the font for the username                                                                     | 0x0000    | 0x0000    |
| `FontPaletteUsername2`     | The override color of the font for the username                                                                                 | 0xDEF7    | 0xDEF7    |
| `FontPaletteUsername3`     |                                                                                                                                 | 0xC631    | 0xC631    |
| `FontPaletteUsername4`     |                                                                                                                                 | 0xA108    | 0xA108    |
| `BipsUserPalette`          | Whether or not to use the DS Profile color for the palette of the bips on the scrollbar                                         |           | 0         |
| `BoxUserPalette`           | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the DSi Theme              |           | 0         |
| `BoxEmptyUserPalette`      | Whether or not to use the DS Profile color for the palette of empty boxes in the 3DS Theme                                      | 0         |           |
| `BoxFullUserPalette`       | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the 3DS Theme              | 0         |           |
| `BraceUserPalette`         | Whether or not to use the DS Profile color for the palette of the brace at the start and end of the game list                   |           | 0         |
| `BubbleUserPalette`        | Whether or not to use the DS Profile color for the palette of the tip of the title bubble                                       | 0         | 0         |
| `ButtonArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen                     |           | 1         |
| `CornerButtonUserPalette`  | Whether or not to use the DS Profile color for the palette of the DSi Menu and Settings icons in the SELECT menu                |           | 0         |
| `CursorUserPalette`        | Whether or not to use the DS Profile color for the palette of the cursor                                                        | 0         |           |
| `DialogBoxUserPalette`     | Whether or not to use the DS Profile color for the palette of the dialog box                                                    | 0         | 1         |
| `FolderUserPalette`        | Whether or not to use the DS Profile color for the palette of folders                                                           | 0         | 0         |
| `LaunchDotsUserPalette`    | Whether or not to use the DS Profile color for the palette of the launch dots                                                   |           | 1         |
| `MovingArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow shown when moving icons                                 |           | 1         |
| `ProgressUserPalette`      | Whether or not to use the DS Profile color for the palette of the loading progress spinner                                      | 1         | 1         |
| `ScrollWindowUserPalette`  | Whether or not to use the DS Profile color for the palette of the background to the scroll window on the scrollbar              |           | 0         |
| `SmallCartUserPalette`     | Whether or not to use the DS Profile color for the palette of the cartridge icons                                               | 0         | 0         |
| `StartBorderUserPalette`   | Whether or not to use the DS Profile color for the palette of the start border                                                  |           | 1         |
| `StartTextUserPalette`     | Whether or not to use the DS Profile color for the palette of the start text                                                    |           | 1         |
| `WirelessIconsUserPalette` | Whether or not to use the DS Profile color for the palette of the wireless icons                                                | 0         | 0         |
| `IconA26UserPalette`       | Whether or not to use the DS Profile color for the palette of the Atari 2600 icon                                               | 0         | 0         |
| `IconCOLUserPalette`       | Whether or not to use the DS Profile color for the palette of the ColecoVision icon                                             | 0         | 0         |
| `IconGBUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Boy icon                                                 | 0         | 0         |
| `IconGBAUserPalette`       | Whether or not to use the DS Profile color for the palette of the Game Boy Advance icon                                         | 0         | 0         |
| `IconGBAModeUserPalette`   | Whether or not to use the DS Profile color for the palette of the native GBA Mode icon                                          | 0         | 0         |
| `IconGGUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Gear icon                                                | 0         | 0         |
| `IconIMGUserPalette`       | Whether or not to use the DS Profile color for the palette of the image icon                                                    | 0         | 0         |
| `IconINTUserPalette`       | Whether or not to use the DS Profile color for the palette of the Intellivision icon                                            | 0         | 0         |
| `IconM5UserPalette`        | Whether or not to use the DS Profile color for the palette of the Sord M5 icon                                                  | 0         | 0         |
| `IconManualUserPalette`    | Whether or not to use the DS Profile color for the palette of the manual icon                                                   | 0         | 0         |
| `IconMDUserPalette`        | Whether or not to use the DS Profile color for the palette of the Genesis/Mega Drive icon                                       | 0         | 0         |
| `IconNESUserPalette`       | Whether or not to use the DS Profile color for the palette of the NES/Famicom icon                                              | 0         | 0         |
| `IconNGPUserPalette`       | Whether or not to use the DS Profile color for the palette of the Neo Geo Pocket icon                                           | 0         | 0         |
| `IconPCEUserPalette`       | Whether or not to use the DS Profile color for the palette of the PC Engine/TurboGrafx-16 icon                                  | 0         | 0         |
| `IconPLGUserPalette`       | Whether or not to use the DS Profile color for the palette of the DSTWO plugin icon                                             | 0         | 0         |
| `IconSettingsUserPalette`  | Whether or not to use the DS Profile color for the palette of the DSi Settings icon                                             | 0         | 0         |
| `IconSGUserPalette`        | Whether or not to use the DS Profile color for the palette of the SG-1000 icon                                                  | 0         | 0         |
| `IconSMSUserPalette`       | Whether or not to use the DS Profile color for the palette of the Master System icon                                            | 0         | 0         |
| `IconSNESUserPalette`      | Whether or not to use the DS Profile color for the palette of the SNES icon                                                     | 0         | 0         |
| `IconUnknownUserPalette`   | Whether or not to use the DS Profile color for the palette of the unknown (missing) icon                                        | 0         | 0         |
| `IconWSUserPalette`        | Whether or not to use the DS Profile color for the palette of the WonderSwan icon                                               | 0         | 0         |
| `UsernameUserPalette`      | Whether or not to use the DS Profile color for the palette of the username                                                      | 1         | 1         |
| `ProgressBarUserPalette`   | Whether or not to use the DS Profile color as the color of the progress bar                                                     | 1         | 1         |
| `ProgressBarColor`         | The color of the progress bar if `ProgressBarUserPalette` is disabled                                                           | 0x7C00    | 0x7C00    |
| `UseAlphaBlend`            | Whether or not to blend the colors of the top screen text (the date/time and username) with the colors of the background        | 1         | 1         |
| `DarkLoading`              | Whether or not to fade to black instead of white during loading screens                                                         | 0         | 0         |
| `RenderPhoto`              | Whether or not to draw a photo on the top screen                                                                                | 0         | 1         |
| `RotatingCubesRenderY`     | The Y position on the top screen to draw the rotating cubes                                                                     | 78        |           |
| `PlayStartupJingle`        | Whether or not to use the startup sound before the main BGM. See the [custom SFX](custom-dsi-3ds-sfx) page for more information | 1         | 0         |
| `StartupJingleDelayAdjust` | The amount of samples early in the startup sound the BGM should start at                                                        | 0         | 0         |

### マクロモードオプション
You may add specific override options to `theme.ini` for use in Macro Mode. To do this, add `[MACRO]` to a blank line at the bottom of the configuration file, then add any specified configurations below it.

## カスタムBGMと効果音
DSi・3DSテーマは、カスタムサウンドにも対応しています。 詳しくは [DSi・3DSスキン - カスタムSFX](custom-dsi-3ds-sfx) をご覧ください。

## カスタムフォント
[カスタムフォント](custom-fonts) を `font` フォルダに入れ、スキンで使うことができます。 You can also add override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

## Custom palettes
For the paletted textures (`grf` folder), you can optionally add override palette sets which are used when the corresponding `UserPalette` setting is enabled. Palette set files can be created using [this editor](https://skinpaltool.dvdo.dev/). When using the editor, import the image you would like to work with, then create a palette for each of the 16 DS Profile colors. You can use this [example palette file](/assets/files/example-palette.bin) as a starting point.

The 16 rows of the palette collection correspond to each profile color and should be in the following order:
1. Gray-Blue
2. Brown
3. 赤
4. ピンク
5. Orange
6. 黄
7. Lime Green
8. 緑
9. Dark Green
10. Turquoise
11. Cyan/Light Blue
12. 青
13. Dark Blue/Indigo
14. Violet/Dark Purple
15. 紫
16. Magenta

Once you've created a palette file, place it in the `palettes` folder. The name of the palette file should match the name of its image but with a `.bin` extension instead (ex. `start_border.bin` will be applied to `start_border.bmp`).

You may also put a `username.bin` palette file to change the palettes of the username font. Make sure to set the palette editor to `Font Mode` when creating this file.

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.
