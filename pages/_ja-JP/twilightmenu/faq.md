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

#### TWiLight Menu++を起動する時に、3DS／2DSが黒い画面で動かなく、クラッシュする、電源を切るなどのはなぜですか？
TWL_FIRMは何らかの方法で破損している可能性があります。 このガイドに従って問題を解決してください：[ https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide](https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide)

#### TWiLight Menu++を起動する時に、白い画面が表示されるを修正するにはどうすればいいですか？
- まず、本体をスリープモードにしてから（例：本体の蓋を閉じるか、古い2DSのスリープバタンを押す）、本体をスリープモードから復帰します
- それがうまくいかない場合は、SDカードを32KBクラスタ／割り当てサイズでFAT32にフォーマットしてください
- それでもうまくいかない場合は、別のSDカードをお試してください

#### ゲームを起動する時に、TWiLight Menu++が再起動したりGuru Meditation Errorを与えたりを修正するにはどうすればいいですか？
TWLMenu++設定に移動し、`最近プレイしたリストを更新する`を無効にする。

#### SDカードからゲームを読み込みようとすると、白い画面が表示されるのはなぜですか？
- まず、[nds-bootstrapの互換性リスト](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)を確認して、ゲームに互換性があることを確認してください
- いくつかのチートは現時点でnds-bootstrapと互換性がないため、そのゲームのすべてのチートを無効にしましたをお試してください。<kbd class="l">L</kbd>を使って、ゲームのすべてのチートを無効にできます
- 起動しようとしているゲームがDSi対応ゲーム場合は、TWiLight Menu++は`DS Mode`に設定されていることを確認します。
- 以前に機能した場合は、`sd:/_nds/nds-bootstrap/`で`fatTable`と`patchOffsetCache`フォルダ削除してください

#### チートはどうのように使いますか？
`sd:/_nds/TWiLightMenu/extras/`フォルダ内に`usrcheat.dat`ファイルの形式でチートデータベースが必要です。 最新のチートデータベースは、[DeadSkullzJrのデータベース](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/)です。 あるいは、[r4cce](http://hp.vector.co.jp/authors/VA013928/soft.html)を使って独自のチートデータベースを作成できます。

#### DSiテーマの上画面にカスタム画像を表示するにはどうすればいいですか？
`sd:/_nds/TWiLightMenu/dsimenu/photos/`内のランダムな`.png`画像はメニューが読み込まれるたびに表示されます。

- 画像は208x156以下である必要があります
- エラーがある場合は、画像サイズのエラーの可能性が最も高いです。 サイズを小さくするには、[tinypng](https://tinypng.com)を使ってください

#### ゲームを入手するにはどうすればよいですか？
[Universal-DB](https://db.universal-team.net/ds)と[GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications)から自作ゲームをダウンロードできます。 小売ゲームのダンプを取得するには：
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

<table spaces-before="0">
  <tr>
    <th>
      形式
    </th>
    
    <th>
      ローダー
    </th>
    
    <th>
      拡張子
    </th>
    
    <th>
      セーブファイル
    </th>
  </tr>
  
  <tr>
    <td>
      ARGV<fnref target="1" />
    </td>
    
    <td>
      ネイティブ
    </td>
    
    <td>
      <code>.argv</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      Atari 2600
    </td>
    
    <td>
      <a href="https://github.com/wavemotion-dave/StellaDS" f-id="stellads" fo="15">StellaDS</a>
    </td>
    
    <td>
      <code>.a26</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      Atari 5200
    </td>
    
    <td>
      <a href="https://github.com/wavemotion-dave/A5200DS" f-id="a5200ds" lbb="2" fo="1">A5200DS</a>
    </td>
    
    <td>
      <code>.a52</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      Atari 7800
    </td>
    
    <td>
      <a href="https://github.com/wavemotion-dave/A7800DS" f-id="a7800ds" fo="2">A7800DS</a>
    </td>
    
    <td>
      <code>.a78</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      Atari XEGS
    </td>
    
    <td>
      <a href="https://github.com/wavemotion-dave/XEGS-DS" f-id="xegs-ds" fo="17">XEGS-DS</a>
    </td>
    
    <td>
      <code>.xex</code>、<wbr><code>.atr</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      DS
    </td>
    
    <td>
      <a href="https://github.com/DS-Homebrew/nds-bootstrap" f-id="ndsbs" fo="8">nds-bootstrap</a>、<wbr>フラッシュカードのカーネル、<wbr>ネイティブ
    </td>
    
    <td>
      <code>.nds</code>、<wbr><code>.dsi</code>、<wbr><code>.ids</code>、<wbr><code>.srl</code>、<wbr><code>.app</code>
    </td>
    
    <td>
      <code>saves/[ROMの名前].sav</code><fnref target="2" />
    </td>
  </tr>
  
  <tr>
    <td>
      DSiウェア
    </td>
    
    <td>
      <a href="https://problemkaputt.de/unlaunch.htm" f-id="unlaunch" fo="16">Unlaunch</a>
    </td>
    
    <td>
      <code>.nds</code>、<wbr><code>.dsi</code>、<wbr><code>.ids</code>、<wbr><code>.srl</code>、<wbr><code>.app</code>
    </td>
    
    <td>
      <code>[ROMの名前].pub</code>、<wbr><code>[ROMの名前].prv</code>
    </td>
  </tr>
  
  <tr>
    <td>
      DSTWOプラグイン
    </td>
    
    <td>
      <a href="http://eng.supercard.sc" f-id="dstwo" fo="3">DSTWO</a><fnref target="3" />
    </td>
    
    <td>
      <code>.plg</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      ゲームボーイ（カラー）
    </td>
    
    <td>
      <a href="https://github.com/Drenn1/GameYob" f-id="gameyob" fo="4">GameYob</a>
    </td>
    
    <td>
      <code>.gb</code>、<wbr>​<code>.sgb</code>、​<wbr><code>.gbc</code>
    </td>
    
    <td>
      <code>[ROMの名前].sav</code>
    </td>
  </tr>
  
  <tr>
    <td>
      ゲームボーイアドバンス
    </td>
    
    <td>
      <a href="https://github.com/Gericom/GBARunner2" f-id="gbarunner2" fo="5">GBARunner2</a><fnref target="4" />、<wbr>ネイティブ<fnref target="5" />
    </td>
    
    <td>
      <code>.agb</code>、<wbr><code>.gba</code>、<wbr><code>.mb</code>
    </td>
    
    <td>
      <code>[ROMの名前].sav</code>
    </td>
  </tr>
  
  <tr>
    <td>
      ゲームギア
    </td>
    
    <td>
      <a href="https://www.gamebrew.org/wiki/S8DS" f-id="s8ds" fo="13">S8DS</a>
    </td>
    
    <td>
      <code>.gg</code>
    </td>
    
    <td>
      <code>[ROMの名前].gg.sav</code>
    </td>
  </tr>
  
  <tr>
    <td>
      メガドライブ・Genesis
    </td>
    
    <td>
      <a href="https://www.gamebrew.org/wiki/JEnesisDS" f-id="jenesis" fo="6">jEnesisDS</a>、<wbr><a href="https://github.com/DS-Homebrew/PicoDriveTWL" f-id="pdtwl" fo="11">PicoDriveTWL</a>
    </td>
    
    <td>
      <code>.gen</code>
    </td>
    
    <td>
      <code>[ROMの名前].srm</code><fnref target="6" />
    </td>
  </tr>
  
  <tr>
    <td>
      マスターシステム
    </td>
    
    <td>
      <a href="https://www.gamebrew.org/wiki/S8DS" f-id="s8ds" fo="13">S8DS</a>
    </td>
    
    <td>
      <code>.sms</code>
    </td>
    
    <td>
      <code>[ROMの名前].sms.sav</code>
    </td>
  </tr>
  
  <tr>
    <td>
      MPEG4ビデオ
    </td>
    
    <td>
      <a href="https://gbatemp.net/threads/544095" f-id="mpeg4player" fo="7">MPEG4 Player</a>
    </td>
    
    <td>
      <code>.mp4</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      ファミリーコンピュータ・NES
    </td>
    
    <td>
      <a href="https://github.com/DS-Homebrew/NesDS" f-id="nesds" fo="9">nesDS</a>
    </td>
    
    <td>
      <code>.nes</code>、<wbr><code>.fds</code>
    </td>
    
    <td>
      <code>[ROMの名前].sav</code>
    </td>
  </tr>
  
  <tr>
    <td>
      PCエンジン・TurboGrafx-16
    </td>
    
    <td>
      <a href="https://www.gamebrew.org/wiki/NitroGrafx" f-id="nitrografx" fo="10">NitroGrafx</a>
    </td>
    
    <td>
      <code>.pce</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      RVIDビデオ
    </td>
    
    <td>
      <a href="https://gbatemp.net/threads/539163" f-id="rvidplayer" fo="12">Rocket Video Player</a>
    </td>
    
    <td>
      <code>.rvid</code>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      スーパーファミコン<fnref target="7" />
    </td>
    
    <td>
      <a href="https://www.gamebrew.org/wiki/SNEmulDS" f-id="snemulds" fo="14">SNEmulDS</a>
    </td>
    
    <td>
      <code>.smc</code>、<wbr><code>.sfc</code>
    </td>
    
    <td>
      <code>[ROMの名前].srm</code><fnref target="8" />
    </td>
  </tr>
</table>
{:.table}

- Footnotes -
{:footnotes}

#### sudokuhaxからタッチ入力がうまくいかないのはなぜですか？
sudokuhaxのセーブファイルによっては、タッチ画面の入力が動作しない場合があります。

#### The Biggest LoserはTWiLight Menu++を起動できますか？
いいえ。 The Biggest LoserはSlot-1ゲームです、DSiウェアではない、Slot-1カードを実行する時にSDアクセスが無効になります。

[^1]: DSの自作アプリへのパスとそれを起動する引数を含むテキストファイルです。詳細については、[nds-hb-menuのREADME](https://github.com/devkitPro/nds-hb-menu#passing-arguments)を参照してください
[^2]: 小売ROMのみ、自作ソフトには特定のセーブファイルがありません
[^3]: 追加の処理能力とRAMがカートリッジ内にあるため、SuperCard DSTWOフラッシュカードでのみ機能します
[^4]: DSiモードで実行している場合は、DSPを使って良いサウンドを得ることができます
[^5]: Slot-2フラッシュカードが必要なのでオリジナルのDSとDS Liteでのみ機能します
[^6]: jEnesisはフラッシュカードから実行している時にのみ保存できますが、PicoDriveTWLはSDカードとフラッシュカードから保存できます
[^7]: フラッシュカード、3DSの内部のSDカードまたはUnlaunchがインストール済みのDSiを使っている場合にのみ表示されます
[^8]: フラッシュカードから実行している時にのみ保存できます
