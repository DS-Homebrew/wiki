---
lang: ja-JP
layout: faq
section: twilightmenu
title: FAQ & Troubleshooting
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs and troubleshooting for TWiLight Menu++
---

もっとよくある質問ため、[GBAtempスレッド](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)にアクセスしてください。
{:.alert .alert-info}

#### TWiLight Menu++を起動する時に、3DSが黒い画面で動かなく、クラッシュする、電源を切るなどのはなぜですか？
TWL_FIRMは何らかの方法で破損している可能性があります。 このガイドに従って問題を解決してください：[ https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide](https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide)

#### TWiLight Menu++を起動する時に、白い画面が表示されるを修正するにはどうすればいいですか？
- 本体を再起動
- If that doesn't work, format your SD card to FAT32 with 32 KB cluster/allocation size
   - See [dsi.cfw.guide's page](https://dsi.cfw.guide/sd-card-setup.html) for the recommended tools
- それでもうまくいかない場合は、別のSDカードをお試してください

#### Acekard・Wood UIのテーマはどこですか？
Acekard（Wood UIとも呼ばれる）のテーマは、バグの動作とSDカードの破損の原因で削除されました。 修正をお待ちください。 このテーマの返還の進行状況は、[このPR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109)にあります。

#### ゲームを起動する時に、TWiLight Menu++が再起動したりGuru Meditation Errorを与えたりを修正するにはどうすればいいですか？
TWLMenu++設定に移動し、`最近プレイしたリストを更新する`を無効にする。

#### SDカードからDSゲームを読み込みようとすると、白い画面が表示されるのはなぜですか？
nds-bootstrapの良くある質問ページの[I'm having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do)を参照してください。

#### チートはどうのように使いますか？
`sd:/_nds/TWiLightMenu/extras/`フォルダ内に`usrcheat.dat`ファイルの形式でチートデータベースが必要です。 最新のチートデータベースは、[DeadSkullzJr'sのNDS(i)チートデータベース](https://gbatemp.net/threads/488711/)。
- 3DSでは、このデータベースはUniversal-Updaterアプリに「NDS(i) Cheat Databases」として利用てきます。 これにより自動的に必要な場所にインストールされます。

あるいは、[r4cce](http://hp.vector.co.jp/authors/VA013928/soft.html)を使って独自のチートデータベースを作成できます。

Once you have a cheat DB, you can enable cheats by pressing <kbd class="face">Y</kbd> in TWiLight Menu++ when the cursor is on the game to open the per-game settings, then <kbd class="face">X</kbd> to open the cheats menu.

#### How do I show a custom picture on the top screen of the DSi theme? Can I hide it instead?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- 画像は208x156以下である必要があります
- エラーがある場合は、画像サイズのエラーの可能性が最も高いです。 サイズを小さくするには、[tinypng](https://tinypng.com)を使ってください

As for hiding the picture, you need to edit the `theme.ini` file found in `sd:/_nds/TWiLightMenu/dsimenu/themes/[skin folder]/`. Open the file with a text editor, change the line `RenderPhoto` from `1` to `0`, then save the file.

#### ゲームを入手するにはどうすればよいですか？
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- DSでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってGBAゲームをダンプでき、Slot-2フラッシュカートを持っている場合はDSゲームをダンプできます。 Slot-1フラッシュカードのみを持っていてDSゲームをダンプしたい場合は、 [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/)を使用できます。DSと互換性のあるWi-Fi接続とROMを受信する別のデバイスのFTPクライアントが必要です。
- DSiでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってDSゲームとDSiウェアをダンプできます
- 3DSでは、[GodMode9](https://github.com/d0k3/GodMode9/releases)を使ってDSゲーム、DSiウェア、バーチァルコンソールのゲームをダンプできます

#### ゲームカードからSDカードにセーブファイルを取得するまたは逆にことはできますか？
Yes. You can use [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS, or [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi / 3DS.

#### TWiLight Menu++の言語を変更するにはどうしたらよいですか？
1. TWiLight Menu++設定を開きます。これを行うには、TWiLight Menu++を読み込んでいる間に<kbd>SELECT</kbd>を押し続けます
1. 言語が表示されるまで最初のオプションを変更し、設定を終了します
   - また、nds-bootstrap設定ページの最初の3つのオプションを変更することもできます。これらのオプションは、DSゲームの言語と地域、およびTWiLight Menu++のタイトルを制御します

#### これはDS(i)エミュレータですか？
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### TWiLight Menu++はどのシステムに対応ですか？
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Slot-1ゲームのエクスプロイトでTWiLight Menu++を起動できますか？
No. SD card access is only granted to DSiWare applications, so Slot-1 games cannot launch (or even access) TWiLight Menu++.

#### ゲームを見つける・見ることができないのはなぜですか？
There are a multiple reasons you may be unable to find them.
- SDカードのルートにある`_nds`フォルダは、TWiLight Menu++のファイル（スキン、設定、画像、エミュレータなど）を保存するため、TWiLight TWiLight++からアクセスするアプリケーション向けではありません。 ここにタイトルを配置した場合は、他の場所に移動してください。
- フォルダ内に39個以上のアイテムがあり、メニュー上のスロットがすべて取られている場合は、ゲームは次のページにある可能性があります。 <kbd class="l">L</kbd>・<kbd class="r">R</kbd>または<kbd>SELECT</kbd>+<kbd>左</kbd>・<kbd>右</kbd>を使ってページを切り替える
- ゲームやフォルダが隠されている場合は、TWiLight Menu++のGUI設定から「隠しファイルの表示」をオンにする必要があります
- ゲームがアーカイブ（`ZIP`、`RAR`、`7Z`など）にある場合は、TWiLight Menu++では使用できません。 アーカイブからゲームを解凍して使用します
- ゲームが[対応されている拡張子](../ds-index/emulators#list-of-systems-supported-by-twilight-menu)のにずれかを使わない場合は、ファイルの名前を変更して拡張子を変更する必要があります

#### TWiLight Menu++設定にアクセスするにはどうすればいいですか？
The way to access the TWiLight Menu++ settings varies between your configuration.
- **DSクラシックメニュー：**下画面の下のDSアイコンをタップします
- **ニンテンドーDSi/セガサターン/Homebrew Launcherのテーマ：SELECTメニューを使う：**<kbd>SELECT</kbd>を押して設定アプレットを起動します（D-PADを使ってオプションをハイライトします）
- **SELECTメニューを使わないニンテンドーDSi/セガサターン/Homebrew Launcherのテーマ：**<kbd>SELECT</kbd>を押してDSクラシックメニューになります
- **ニンテンドー3DSのテーマ：**下画面の左上のスパナのアイコンをタップします
- **R4オリジナルテーマ：**<kbd>START</kbd>（ファイルブラウザにいている）を押し、<kbd>SELECT</kbd>を押します

You can also hold <kbd>SELECT</kbd> while launching TWiLight Menu++ to directly access the settings.
