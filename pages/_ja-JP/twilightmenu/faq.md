---
lang: ja-JP
layout: faq
section: twilightmenu
title: よくある質問・トラブルシューティング
long_title: TWiLight Menu++のよくある質問とトラブルシューティング
description: TWiLight Menu++のよくある質問とトラブルシューティング
---

ここにないFAQについては、[GBAtempスレッド](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)をご覧ください。
{:.alert .alert-info}

#### ３DSでTWiLight Menu++を起動すると、画面が暗くなってフリーズしたり、クラッシュしたり、電源が落ちたりする
TWL_FIRMが何らかの原因で破損した可能性があります。 このガイドに従って問題を解決してください：<https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### TWiLight Menu++の起動時に、白い画面が表示されるのを修正したい
- 本体を再起動してください
- それでもうまくいかない場合は、32KBのアロケーションサイズに指定したFAT32でSDカードをフォーマットしてください
   - 推奨ツールは[dsi.cfw.guideのページ](https://dsi.cfw.guide/sd-card-setup.html)をご覧ください
- それでもうまくいかない場合は、別のSDカードをお試しください

#### How do I fix touch screen not working after launching a game?
- If you're launching a cartridge, then make sure the `Slot-1 Touch Mode` setting is set to `DS mode`
- If the issue persists, or if you're using a ROM instead, then follow this guide: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
TWLMenu++設定に移動し、`最近プレイしたリストを更新する`を無効にする。

#### Why do I get a white screen when trying to load a DS game from SD card?
nds-bootstrapの良くある質問ページの[I'm having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do)を参照してください。

#### How do I use cheats?
`sd:/_nds/TWiLightMenu/extras/`フォルダ内に`usrcheat.dat`ファイルの形式のチートデータベースが必要です。 最も更新されているチートデータベースは、[DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/)です。
- On the 3DS, this database is available in the Universal-Updater app as "NDS(i) Cheat Databases". This will automatically install it to the required location.

あるいは、[r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)を使って独自のチートデータベースを作ることもできます。

チートデータベースを取得したら、TWiLight Menu++上でゲームにカーソルを合わせた状態で、<kbd class="face">Y</kbd>を押してゲームごとの設定を開き、 <kbd class="face">X</kbd> でチートメニューを開くと、チートを有効にすることができます。

#### How do I show a custom picture on the top screen of the DSi theme? Can I hide it instead?
`sd:/_nds/TWiLightMenu/dsimenu/photos/`にある拡張子`.png`の画像が、メニュー読み込みのたびにランダムで表示されます。 該当する画像がない場合は、nds-bootstrapで撮影したスクリーンショットが代わりに使用されます。

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

画像を隠すには、`sd:/_nds/TWiLightMenu/dsimenu/themes/[skin folder]/`にある`theme.ini`ファイルを編集する必要があります。 テキストエディタでファイルを開き、`RenderPhoto`の行を`1`から`0`に変更し、保存してください。

#### How do I get games?
[Universal-DB](https://db.universal-team.net/ds)および[GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)から自作ゲームをダウンロードすることができます。 To get officially released games, you need to get those as dumps, either from your physical cartridges, or from an existing console:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
はい。 3DSでは[Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)を、DSiおよび3DSでは[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使って可能です。

#### How do I change TWiLight Menu++'s language?
1. TWiLight Menu++設定を開きます。これを行うには、TWiLight Menu++を読み込んでいる間に<kbd>SELECT</kbd>を押し続けます
1. 言語が表示されるまで最初のオプションを変更し、設定を終了します
   - また、nds-bootstrap設定ページの最初の3つのオプションを変更することもできます。これらのオプションは、DSゲームの言語と地域、およびTWiLight Menu++のタイトルを制御します

#### Is this a DS(i) emulator?
いいえ、これはエミュレータではありません。 メニューとDSゲーム（nds-bootstrap経由で起動）は、本体のDS・DSiモードでネイティブに実行されます。 エミュレートされるのは過去のゲーム機だけです。GBAは一部がエミュレートされます（グラフィックなど一部または全部がネイティブで動作しているため）。

#### What systems does TWiLight Menu++ support?
[TWiLight Menu++ 対応システム一覧](../ds-index/emulators#list-of-supported-systems-by-twilight-menu)をご覧ください。

#### Can exploits of Slot-1 games boot TWiLight Menu++?
いいえ。 SDカードへのアクセスはDSiウェアアプリにのみ許可されているため、Slot-1ゲームではTWiLight Menu++を起動できません（アクセスも不能です）。

#### Why can't I find/see my games?
いくつかの原因がありえます。
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
TWiLight Menu++設定にアクセスする方法は、設定内容によって異なります。
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>
- **Wood UI theme:** Hitting <kbd>START</kbd> will bring you to the DS Classic Menu

また、TWiLight Menu++の起動時に<kbd>SELECT</kbd>を長押しして、設定に直接アクセスすることもできます。

#### How do I use custom icons/banners for games?
オリジナルバナーは、PNGかDS banner.bin形式のものを、`sd:/_nds/TWiLightMenu/icons`フォルダに配置すれば使用できます。画像ファイルの名前は「ROMの名前（拡張子付き）　または　フォルダ名」 + 「`.png` または `.bin`」としてください。

PNGバナーの場合、15色以下、最大解像度32x32のPNGファイルが必要です。 完全な透過はサポートされ、かつこの15色にはカウントされませんが、半透明はサポートされません。

banner.bin形式のバナーはアニメーションが可能で、TWiLight Menu++に表示されるタイトルを置き換えることができます。 They can be made using [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

既製のバナーは、 [TWiLight Menu++ スキンサイトのアイコンセクション](https://skins.ds-homebrew.com/icon/)で閲覧できます。あなたのオリジナルバナーを共有することもできます。

#### How do I install custom themes for TWiLight Menu++?
Custom skins for themes can be acquired from [the official skins site](https://skins.ds-homebrew.com/), which houses serveral community-made skins ready to apply. You can also make a custom skin for the Nintendo 3DS and Nintendo DSi themes on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** themes are _**not**_ customizable.

Once you have acquired a custom skin, you can install it by placing its folder on the appropiate path, which depends on what theme the skin is made for.
- Skins for the Nintendo DSi theme go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skins for the Nintendo 3DS theme go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skins for the R4 Original theme go in `sd:\_nds\TWiLightMenu\r4menu\themes\`
- Skins for the Wood UI theme go in `sd:\_nds\TWiLightMenu\akmenu\themes\`

If you are using a 3DS family console, you can install custom skins using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Skins`.

To apply a custom theme you must access TWiLight Menu++ Settings.
1. On the `GUI Settings` page, go to the `Theme` option and choose the theme using the right and left buttons on the D-Pad.
1. Once the target theme is selected, press the A button to choose between the skin you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired skin, then press A to select it.
1. Apply the settings by pressing B to go back to TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected skin supports it and is enabled on the settings).

#### Is there a 3DS emulator for DS(i)?
No, there isn't. It is not possible to emulate 3DS on DS(i) because of the 3DS using newer hardware.
