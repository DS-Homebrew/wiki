---
lang: ja-JP
layout: wiki
section: twilightmenu
category: other
title: よくある質問とトラブルシューティング
description: TWiLight Menu++のよくある質問とトラブルシューティング
---

もっとよくある質問ため、[GBAtempスレッド](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)にアクセスしてください。
{:.alert .alert-info}

#### Q：TWiLight Menu++を起動する時に、3DS／2DSが黒い画面で動かなく、クラッシュする、電源を切るなどのはなぜですか？
A：TWL_FIRMは何らかの方法で破損している可能性があります。 このガイドに従って問題を解決してください：[ https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide](https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide)

#### Q：TWiLight Menu++を起動する時に、白い画面が表示されるを修正するにはどうすればよいですか？
A：
- まず、本体をスリープモードにしてから（例：本体の蓋を閉じるか、古い2DSのスリープバタンを押す）、本体をスリープモードから復帰します
- それがうまくいかない場合は、SDカードを32KBクラスタ／割り当てサイズでFAT32にフォーマットしてください
- それでもうまくいかない場合は、別のSDカードをお試してください

#### Q：SDカードからゲームを読み込みようとすると、白い画面が表示されるのはなぜですか？
A：
- まず、[nds-bootstrapの互換性リスト](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)を確認して、ゲームに互換性があることを確認してください
- いくつかのチートは現時点でnds-bootstrapと互換性がないため、そのゲームのすべてのチートを無効にしましたをお試してください。<kbd class="l">L</kbd>を使って、ゲームのすべてのチートを無効にできます
- 起動しようとしているゲームがDSi対応ゲーム場合は、TWiLight Menu++は`DS Mode`に設定されていることを確認します。
- 以前に機能した場合は、`sd:/_nds/nds-bootstrap/`で`fatTable`と`patchOffsetCache`フォルダ削除してください

#### Q：チートはどうのように使いますか？
A：`sd:/_nds/TWiLightMenu/extras/`フォルダ内に`usrcheat.dat`ファイルの形式でチートデータベースが必要です。 最新のチートデータベースは、[DeadSkullzJrのデータベース](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/)です。 あるいは、[r4cce](http://hp.vector.co.jp/authors/VA013928/soft.html)を使って独自のチートデータベースを作成できます。

#### Q：DSiテーマの上画面にカスタム画像を表示するにはどうすればよいですか？
A：`sd:/_nds/TWiLightMenu/dsimenu/photos/`内のランダムな`.png`画像はメニューが読み込まれるたびに表示されます。

- 画像は208x156以下である必要があります
- エラーがある場合は、画像サイズのエラーの可能性が最も高いです。 サイズを小さくするには、[tinypng](https://tinypng.com)を使ってください

#### Q：ゲームを入手するにはどうすればよいですか？
A：[Universal-DB](https://db.universal-team.net/ds)と[GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications)から自作ゲームをダウンロードできます。 小売ゲームのダンプを取得するには：
- DSでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってGBAゲームをダンプでき、Slot-1フラッシュカートを持っている場合はDSゲームをダンプできます
- DSiでは、[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)を使ってDSゲームとDSiウェアをダンプできます
- 3DSでは、[GodMode9](https://github.com/d0k3/GodMode9/releases)を使ってDSゲーム、DSiウェア、バーチァルコンソールのゲームをダンプできます

#### Q：ゲームカードからSDカードにセーブファイルを取得するまたは逆にことはできますか？
A：はい、DSiと3DSで[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)、3DSで[Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)を使えます

#### Q：TWiLight Menu++の言語を変更するにはどうしたらよいですか？
A：
1. TWiLight Menu++設定を開きます。これを行うには、TWiLight Menu++を読み込んでいる間に<kbd>SELECT</kbd>を押し続けます
1. <kbd class="l">L</kbd>または<kbd class="face">Y</kbd>を1回（フラッシュカード・3DS上）または2回（DSi上）を押します
1. 言語が表示されるまで最初のオプションを変更し、設定を終了します
   - DSゲームの言語とTWiLight Menu++にそれのタイトルを制御するため、次の2つのオプションを変更することもできます

#### Q：TWiLight Menu++はどのシステムに対応ですか？

A：

| 本体                       | ローダー                                       | 拡張子                                | セーブファイル                                        |
| ------------------------ | ------------------------------------------ | ---------------------------------- | ---------------------------------------------- |
| [ARGV][nds-hb-menu-argv] | ネイティブ                                      | `.argv`                            |                                                |
| Atari 2600               | [StellaDS][stellads]                       | `.a26`                             |                                                |
| Atari 5200               | [A5200DS][a5200ds]                         | `.a52`                             |                                                |
| Atari 7800               | [A7800DS][a7800ds]                         | `.a78`                             |                                                |
| DS                       | [nds-bootstrap][ndsbs]、フラッシュカードのカーネル、ネイティブ | `.nds`、`.dsi`、`.ids`、`.srl`、`.app` | `saves/[ROMの名前].sav`<br>（小売ROMのみ）        |
| DSiウェア                   | [Unlaunch][unlaunch]                       | `.nds`、`.dsi`、`.ids`、`.srl`、`.app` | `[ROMの名前].pub`、`[ROMの名前].prv`                  |
| DSTWOプラグイン               | [DSTWO][dstwo]（DSTWOフラッシュカードが必要）           | `.plg`                             |                                                |
| ゲームボーイ（カラー）              | [GameYob][gameyob]                         | `.gb`、`.sgb`、`.gbc`                | `[ROMの名前].sav`                                 |
| ゲームボーイアドバンス              | [GBARunner2][gbarunner2]、ネイティブ             | `.agb`、`.gba`、`.mb`                | `[ROMの名前].sav`                                 |
| ゲームギア                    | [S8DS][s8ds]                               | `.gg`                              | `[ROMの名前].gg.sav`                              |
| メガドライブ・Genesis           | [jEnesisDS][jenesis]、[PicoDriveTWL][pdtwl] | `.gen`                             | `[ROMの名前].srm`<br>（jEnesisDSでフラッシュカードのみ） |
| マスターシステム                 | [S8DS][s8ds]                               | `.sms`                             | `[ROMの名前].sms.sav`                             |
| MPEG4ビデオ                 | [MPEG4プレイヤー][mpeg4player]                  | `.mp4`                             |                                                |
| ファミリーコンピュータ・NES          | [nesDS][nesds]                             | `.nes`、`.fds`                      | `[ROMの名前].sav`                                 |
| PCエンジン・TurboGrafx-16     | [NitroGrafx][nitrografx]                   | `.pce`                             |                                                |
| RVIDビデオ                  | [Rocket Video Player][rvidplayer]          | `.rvid`                            |                                                |
| スーパーファミコン                | [SNEmulDS][snemulds]                       | `.smc`、`.sfc`                      | `[ROMの名前].srm`<br>（フラッシュカードのみ）           |


#### Q：sudokuhaxからタッチ入力がうまくいかないのはなぜですか？
A：sudokuhaxのセーブファイルによっては、タッチ画面の入力が動作しない場合があります。

#### Q：The Biggest LoserはTWiLight Menu++を起動できますか？
A：いいえ。 The Biggest LoserはSlot-1ゲームです、DSiウェアではない、Slot-1カードを実行する時にSDアクセスが無効になります。

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nds-hb-menu-argv]: https://github.com/devkitPro/nds-hb-menu#passing-arguments
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
