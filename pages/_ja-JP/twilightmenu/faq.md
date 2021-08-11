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

#### TWiLight Menu++を起動する時に、3DS/2DSが黒い画面で動かなく、クラッシュする、電源を切るなどのはなぜですか？
TWL_FIRMは何らかの方法で破損している可能性があります。 このガイドに従って問題を解決してください：[ https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide](https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide)

#### TWiLight Menu++を起動する時に、白い画面が表示されるを修正するにはどうすればいいですか？
- まず、本体をスリープモードにしてから（例：本体の蓋を閉じるか、古い2DSのスリープバタンを押す）、本体をスリープモードから復帰します
- それがうまくいかない場合は、SDカードを32KBクラスタ／割り当てサイズでFAT32にフォーマットしてください
- それでもうまくいかない場合は、別のSDカードをお試してください

#### Acekard・Wood UIのテーマはどこですか？
Acekard（Wood UIとも呼ばれる）のテーマは、バグの動作とSDカードの破損の原因で削除されました。 修正をお待ちください。 このテーマの返還の進行状況は、[このPR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109)にあります。

#### ゲームを起動する時に、TWiLight Menu++が再起動したりGuru Meditation Errorを与えたりを修正するにはどうすればいいですか？
TWLMenu++設定に移動し、`最近プレイしたリストを更新する`を無効にする。

#### SDカードからゲームを読み込みようとすると、白い画面が表示されるのはなぜですか？
- まず、[nds-bootstrapの互換性リスト](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)を確認して、ゲームに互換性があることを確認してください
- いくつかのチートは現時点でnds-bootstrapと互換性がないため、そのゲームのすべてのチートを無効にしましたをお試してください。<kbd class="l">L</kbd>を使って、ゲームのすべてのチートを無効にできます
- 以前に機能した場合は、`sd:/_nds/nds-bootstrap/`で`fatTable`と`patchOffsetCache`フォルダ削除してください

#### チートはどうのように使いますか？
`sd:/_nds/TWiLightMenu/extras/`フォルダ内に`usrcheat.dat`ファイルの形式でチートデータベースが必要です。 最新のチートデータベースは、[DeadSkullzJrのデータベース](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/)です。
- 3DSでは、このデータベースはUniversal-Updaterアプリに「NDS Cheat Databases」として利用てきます。 これにより自動的に必要な場所にインストールされます。

あるいは、[r4cce](http://hp.vector.co.jp/authors/VA013928/soft.html)を使って独自のチートデータベースを作成できます。

#### DSiテーマの上画面にカスタム画像を表示するにはどうすればいいですか？
`sd:/_nds/TWiLightMenu/dsimenu/photos/`内のランダムな`.png`画像はメニューが読み込まれるたびに表示されます。

- 画像は208x156以下である必要があります
- エラーがある場合は、画像サイズのエラーの可能性が最も高いです。 サイズを小さくするには、[tinypng](https://tinypng.com)を使ってください

#### ゲームを入手するにはどうすればよいですか？
[Universal-DB](https://db.universal-team.net/ds)と[GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)から自作ゲームをダウンロードできます。 小売ゲームのダンプを取得するには：
- DSでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってGBAゲームをダンプでき、Slot-1フラッシュカートを持っている場合はDSゲームをダンプできます
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

#### sudokuhaxからタッチ入力がうまくいかないのはなぜですか？
sudokuhaxのセーブファイルによっては、タッチ画面の入力が動作しない場合があります。

#### The Biggest LoserはTWiLight Menu++を起動できますか？
いいえ。 The Biggest LoserはSlot-1ゲームです、DSiウェアではない、Slot-1カードを実行する時にSDアクセスが無効になります。
