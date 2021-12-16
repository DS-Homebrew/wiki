---
lang: ja-JP
layout: faq
section: twilightmenu
category: other
title: よくある質問とトラブルシューティング
long_title: TWiLight Menu++のよくある質問とトラブルシューテイング
description: TWiLight Menu++のよくある質問とトラブルシューティング
---

もっとよくある質問ため、[GBAtempスレッド](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)にアクセスしてください。
{:.alert .alert-info}

#### TWiLight Menu++を起動する時に、3DSが黒い画面で動かなく、クラッシュする、電源を切るなどのはなぜですか？
TWL_FIRMは何らかの方法で破損している可能性があります。 このガイドに従って問題を解決してください：[ https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide](https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide)

#### TWiLight Menu++を起動する時に、白い画面が表示されるを修正するにはどうすればいいですか？
- まず、本体をスリープモードにしてから（例：本体の蓋を閉じるか、古い2DSのスリープバタンを押す）、本体をスリープモードから復帰します
- それがうまくいかない場合は、SDカードを32KBクラスタ／割り当てサイズでFAT32にフォーマットしてください
- それでもうまくいかない場合は、別のSDカードをお試してください

#### Acekard・Wood UIのテーマはどこですか？
Acekard（Wood UIとも呼ばれる）のテーマは、バグの動作とSDカードの破損の原因で削除されました。 修正をお待ちください。 このテーマの返還の進行状況は、[このPR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109)にあります。

#### ゲームを起動する時に、TWiLight Menu++が再起動したりGuru Meditation Errorを与えたりを修正するにはどうすればいいですか？
TWLMenu++設定に移動し、`最近プレイしたリストを更新する`を無効にする。

#### SDカードからDSゲームを読み込みようとすると、白い画面が表示されるのはなぜですか？
See [I’m having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) on the nds-bootstrap FAQ page.

#### チートはどうのように使いますか？
`sd:/_nds/TWiLightMenu/extras/`フォルダ内に`usrcheat.dat`ファイルの形式でチートデータベースが必要です。 最新のチートデータベースは、[DeadSkullzJrのデータベース](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/)です。
- 3DSでは、このデータベースはUniversal-Updaterアプリに「NDS Cheat Databases」として利用てきます。 これにより自動的に必要な場所にインストールされます。

あるいは、[r4cce](http://hp.vector.co.jp/authors/VA013928/soft.html)を使って独自のチートデータベースを作成できます。

#### DSiテーマの上画面にカスタム画像を表示するにはどうすればいいですか？
`sd:/_nds/TWiLightMenu/dsimenu/photos/`内のランダムな`.png`画像はメニューが読み込まれるたびに表示されます。 該当する画像がない場合は、代わりにnds-bootstrapで撮影されたスクリーンショットが使用されます。

- 画像は208x156以下である必要があります
- エラーがある場合は、画像サイズのエラーの可能性が最も高いです。 サイズを小さくするには、[tinypng](https://tinypng.com)を使ってください

#### ゲームを入手するにはどうすればよいですか？
[Universal-DB](https://db.universal-team.net/ds)と[GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)から自作ゲームをダウンロードできます。 小売ゲームのダンプを取得するには：
- DSでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってGBAゲームをダンプでき、Slot-2フラッシュカートを持っている場合はDSゲームをダンプできます。 Slot-1フラッシュカードのみを持っていてDSゲームをダンプしたい場合は、 [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/)を使用できます。DSと互換性のあるWi-Fi接続とROMを受信する別のデバイスのFTPクライアントが必要です。
- DSiでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってDSゲームとDSiウェアをダンプできます
- 3DSでは、[GodMode9](https://github.com/d0k3/GodMode9/releases)を使ってDSゲーム、DSiウェア、バーチァルコンソールのゲームをダンプできます

#### ゲームカードからSDカードにセーブファイルを取得するまたは逆にことはできますか？
はい、DSiと3DSで[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)、3DSで[Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)を使えます

#### TWiLight Menu++の言語を変更するにはどうしたらよいですか？
1. TWiLight Menu++設定を開きます。これを行うには、TWiLight Menu++を読み込んでいる間に<kbd>SELECT</kbd>を押し続けます
1. <kbd class="l">L</kbd>または<kbd class="face">Y</kbd>を1回（フラッシュカード・3DS上）または2回（DSi上）を押します
1. 言語が表示されるまで最初のオプションを変更し、設定を終了します
   - DSゲームの言語とTWiLight Menu++にそれのタイトルを制御するため、次の2つのオプションを変更することもできます

#### これはDS(i)エミュレータですか？
いいえ、これはエミュレータではありません。 メニューとDSゲーム（nds-bootstrapを介して読み取り）は、本体のDS・DSiモードでネイティブに実行されます。 唯一のエミュレートされる本体は、過去の本体です。しかし、GBAは部分的です（グラフィクスのようないくつかの部分はネイティブに実行されている）

#### TWiLight Menu++はどのシステムに対応ですか？
[TWiLight Menu++で対応されているシステムのリスト](../ds-index/emulators#twilight-menuで対応されているシステムのリスト)を参照してください。

#### Can exploits of Slot-1 games boot TWiLight Menu++?
No. As they're not DSiWare titles, SD access is disabled when running Slot-1 cards.

#### Why can't I find/see my games?
There are a multiple reasons you may be unable to find them.
- If you placed your games in the `_nds` folder, you are unable to access it because it is permanently invisible in TWiLight Menu++. Please move them to any other location on the SD card
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If the game type is set to be hidden in Emulation/HB settings, it won't appear on menus. Change these settings so that they will be displayed
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
The way to access the TWiLight Menu++ settings varies between your configuration.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

You can also hold <kbd>SELECT</kbd> while launching TWiLight Menu++ to directly access the settings.