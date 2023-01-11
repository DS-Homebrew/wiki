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

#### Acekard（Wood UI）のテーマが見当たらない
Acekard（Wood UIとも呼ばれる）のテーマは、動作がおかしいのとSDカード破損の原因となるのとが理由で削除されました。 修正をお待ちください。 このテーマの復活の進行状況は、[このプルリクエスト](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109)で確認できます。

#### ゲーム起動時に、TWiLight Menu++が再起動したりGuru Meditationエラーが発生する
TWLMenu++設定に移動し、`最近プレイしたリストを更新する`を無効にする。

#### SDカードからDSゲームを読み込みようとすると、白い画面が表示される
nds-bootstrapの良くある質問ページの[I'm having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do)を参照してください。

#### チートはどうやって使う？
`sd:/_nds/TWiLightMenu/extras/`フォルダ内に`usrcheat.dat`ファイルの形式のチートデータベースが必要です。 最も更新されているチートデータベースは、[DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/)です。
- 3DSでは、このデータベースはUniversal-Updaterアプリで「NDS(i) Cheat Databases」として利用てきます。 これにより自動的に必要な場所にインストールされます。

あるいは、[r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)を使って独自のチートデータベースを作ることもできます。

チートデータベースを取得したら、TWiLight Menu++上でゲームにカーソルを合わせた状態で、<kbd class="face">Y</kbd>を押してゲームごとの設定を開き、 <kbd class="face">X</kbd> でチートメニューを開くと、チートを有効にすることができます。

#### DSiテーマの上画面にオリジナル画像を表示したい あるいは非表示にしたい
`sd:/_nds/TWiLightMenu/dsimenu/photos/`にある拡張子`.png`の画像が、メニュー読み込みのたびにランダムで表示されます。 該当する画像がない場合は、nds-bootstrapで撮影したスクリーンショットが代わりに使用されます。

- 画像は208x156以下である必要があります。
- エラーが出る場合は、画像サイズに問題がある可能性が高いです。 [tinypng](https://tinypng.com)を使うなどしてサイズを小さくしてください。

画像を隠すには、`sd:/_nds/TWiLightMenu/dsimenu/themes/[skin folder]/`にある`theme.ini`ファイルを編集する必要があります。 テキストエディタでファイルを開き、`RenderPhoto`の行を`1`から`0`に変更し、保存してください。

#### ゲームを入手するには？
[Universal-DB](https://db.universal-team.net/ds)および[GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)から自作ゲームをダウンロードすることができます。 市販ゲームの吸い出しをするには：
- DSでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってGBAゲームをダンプでき、Slot-2マジコンを持っていればDSゲームをダンプできます。 Slot-1マジコンしか持っていないがDSゲームをダンプしたい場合は、 [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/)を使用できます。DSに利用可能なWi-Fi接続と、ROMを受け取るFTPクライアントが別のデバイスに必要です。
- DSiでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってDSゲームとDSiウェアをダンプできます
- 3DSでは、[GodMode9](https://github.com/d0k3/GodMode9/releases)を使ってDSゲーム、DSiウェア、バーチァルコンソールのゲームをダンプできます

#### カセットからSDカードへセーブデータを移したり、その逆はできる？
はい。 3DSでは[Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)を、DSiおよび3DSでは[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使って可能です。

#### TWiLight Menu++の言語を変更したい
1. TWiLight Menu++設定を開きます。これを行うには、TWiLight Menu++を読み込んでいる間に<kbd>SELECT</kbd>を押し続けます
1. 言語が表示されるまで最初のオプションを変更し、設定を終了します
   - また、nds-bootstrap設定ページの最初の3つのオプションを変更することもできます。これらのオプションは、DSゲームの言語と地域、およびTWiLight Menu++のタイトルを制御します

#### これはDS(i)エミュレータですか？
いいえ、これはエミュレータではありません。 メニューとDSゲーム（nds-bootstrap経由で起動）は、本体のDS・DSiモードでネイティブに実行されます。 エミュレートされるのは過去のゲーム機だけです。GBAは一部がエミュレートされます（グラフィックなど一部または全部がネイティブで動作しているため）。

#### TWiLight Menu++はどのシステムに対応していますか？
[TWiLight Menu++ 対応システム一覧](../ds-index/emulators#list-of-supported-systems-by-twilight-menu)をご覧ください。

#### Slot-1ゲームのエクスプロイトでTWiLight Menu++を起動できますか？
いいえ。 SDカードへのアクセスはDSiウェアアプリにのみ許可されているため、Slot-1ゲームではTWiLight Menu++を起動できません（アクセスも不能です）。

#### 手に入れたゲームが見つからない
いくつかの原因がありえます。
- SDカードのルートにある`_nds`フォルダは、TWiLight Menu++のファイル（スキン、設定、画像、エミュレータなど）を保存するため、TWiLight TWiLight++からアクセスするアプリケーション向けではありません。 ここにタイトルを配置した場合は、他の場所に移動してください。
- フォルダ内に39個以上のアイテムがあり、メニュー上のスロットがすべて取られている場合は、ゲームは次のページにある可能性があります。 <kbd class="l">L</kbd>・<kbd class="r">R</kbd>または<kbd>SELECT</kbd>+<kbd>左</kbd>・<kbd>右</kbd>を使ってページを切り替える
- ゲームやフォルダが隠されている場合は、TWiLight Menu++のGUI設定から「隠しファイルの表示」をオンにする必要があります
- ゲームがアーカイブ（`ZIP`、`RAR`、`7Z`など）にある場合は、TWiLight Menu++では使用できません。 アーカイブからゲームを解凍して使用します
- ゲームが[対応されている拡張子](../ds-index/emulators#list-of-systems-supported-by-twilight-menu)のにずれかを使わない場合は、ファイルの名前を変更して拡張子を変更する必要があります

#### TWiLight Menu++設定にアクセスするにはどうすればいいですか？
TWiLight Menu++設定にアクセスする方法は、設定内容によって異なります。
- **DSクラシックメニュー：**下画面の下のDSアイコンをタップします
- **ニンテンドーDSi・セガサターン・Homebrew Launcherテーマで、SELECTメニューを使う：**<kbd>SELECT</kbd>を押して設定アプレットを起動します（十字キーを使ってオプションをハイライトします）
- **ニンテンドーDSi・セガサターン・Homebrew LauncherテーマでSELECTメニューを使わない：**<kbd>SELECT</kbd>を押してDSクラシックメニューに入ります
- **ニンテンドー3DSのテーマ：**下画面の左上のスパナのアイコンをタップします
- **R4オリジナルテーマ：**ファイルブラウザ上で<kbd>START</kbd>を押し、<kbd>SELECT</kbd>を押します

また、TWiLight Menu++の起動時に<kbd>SELECT</kbd>を長押しして、設定に直接アクセスすることもできます。

#### ゲームにオリジナルのアイコンやバナーを表示したい
オリジナルバナーは、PNGかDS banner.bin形式のものを、`sd:/_nds/TWiLightMenu/icons`フォルダに配置すれば使用できます。画像ファイルの名前は「ROMの名前（拡張子付き）　または　フォルダ名」 + 「`.png` または `.bin`」としてください。

PNGバナーの場合、15色以下、最大解像度32x32のPNGファイルが必要です。 完全な透過はサポートされ、かつこの15色にはカウントされませんが、半透明はサポートされません。

banner.bin形式のバナーはアニメーションが可能で、TWiLight Menu++に表示されるタイトルを置き換えることができます。 これらは [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases)を使って作ることができます。現在は [nightly version](https://nightly.link/TheGameratorT/NDS_Banner_Editor/workflows/build/master) を使うことが推奨されており、安定版よりもいくつかの改良が加えられています。

既製のバナーは、 [TWiLight Menu++ スキンサイトのアイコンセクション](https://skins.ds-homebrew.com/icon/)で閲覧できます。あなたのオリジナルバナーを共有することもできます。

#### How do I install custom themes for TWiLight Menu++?
Custom skins for themes can be acquired from [the official skins site](https://skins.ds-homebrew.com/), which houses serveral community-made skins ready to apply. You can also make a custom skin for the Nintendo 3DS and Nintendo DSi themes on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** themes are _**not**_ customizable.

Once you have acquired a custom skin, you can install it by placing its folder on the appropiate path, which depends on what theme the skin is made for.
- Skins for the Nintendo DSi theme go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skins for the Nintendo 3DS theme go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skins for the R4 Original theme go in `sd:\_nds\TWiLightMenu\r4menu\themes\`

If you are using a 3DS family console, you can install custom skins using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Skins`.

To apply a custom theme you must access TWiLight Menu++ Settings.
1. On the `GUI Settings` page, go to the `Theme` option and choose the theme using the right and left buttons on the D-Pad.
1. Once the target theme is selected, press the A button to choose between the skin you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired skin, then press A to select it.
1. Apply the settings by pressing B to go back to TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected skin supports it and is enabled on the settings).

#### Is there a 3DS emulator for DS(i)?
No, there isn't. It is not possible to emulate 3DS on DS(i) because of the 3DS using newer hardware.
