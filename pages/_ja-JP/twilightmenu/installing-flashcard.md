---
lang: ja-JP
layout: wiki
section: twilightmenu
category: installing
title: インストール（フラッシュカード）
long_title: TWiLight Menu++をインストール（フラッシュカード）
description: ニンテンドーDSフラッシュカードにTWiLight Menu++をインストールする方法
---

### インストール
1. 最新の[`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)をダウンロード
1. `TWiLightMenu-Flashcard.7z`を抽出
1. `_nds`フォルダをフラッシュカードのmicroSDカードのルートにコピー
1. `BOOT.NDS`ファイルをフラッシュカードのmicroSDカードのルートにコピー
1. `roms`フォルダをフラッシュカードのmicroSDカードのルートにコピー
1. すでにセーブデータがある場合は、DS ROMの場所にある`.sav`ファイルをDS ROMの場所に`saves`という新しいフォルダに移動
1. ...
   - **DS Phat・Liteユーザー：**`BOOT.NDS`を起動すると、白い画面のロックアップが発生した場合は、DSメモリー拡張カートリッジを挿入して、もう一度やり直してください
   - **DSi・3DSユーザー：**本体のSDカードからTWiLight Menu++を実行し、`Slot-1でSCFGアクセス`をオンに設定し、`Slot-1: タッチモード`を`DSiモード`に設定します
      - これにより、フラッシュカードのゲームでTWLクロック速度やVRAMブーストを使用できますほか、本体のSDカードにアクセスしたり、フラッシュカードからDSi対応・DSi専用・DSiウェアのゲームをDSiモードで実行したりできます

### フラッシュカードのファームウェアを使用してゲームを実行するには

すべてのフラッシュカードがこの方法でゲームを実行するがサポートしているわけではないことにご注意してください。 以下の手順があなたのフラッシュカードに通用されない場合は、このセクションをスキップできます。
{:.alert .alert-warning}

1. `Flashcard Loader/(あなたのフラッシュカード)`の内容をフラッシュカードのmicroSDカードのルートに抽出します
   - そうしたら場合は、手順3に進みます。 そうでない場合は、以下の手順に従ってください

1. 以下のフラッシュカードため：
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2020 cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHCとDSONEi（非SDHCモデルは**サポートされていません**)
   - M3 DS Real
   - M3i Zero (非GMP-Z003のモデル)
   - iTouchDSとiTouch2（M3Real_M3iZeroのYSMenuファイルを使用）
   - R4(i)RTS (r4rts.com)（M3Real_M3iZeroのYSMenuファイルを使用）
   - R4 SDHC RTS（黒いカートリッジ）（4isdhc.com）（M3Real_M3iZeroのYSMenuファイルを使用）

   [RetroGameFanのYSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)をインストールします。
      - フラッシュカードのmicroSDのルートに`YSMenu.nds`（既存しない場合は`TTMenu.dat`から名前を変更）と`TTMenu`フォルダがあることを確認します
1. `nds-bootstrapを使用`を`いいえ`に設定して、nds-bootstrapの代わりにフラッシュカードのファームウェアが使用されます

### TWiLight Menu++を自動起動する
1. `Flashcard Loader/(あなたのフラッシュカード)`の内容をフラッシュカードのmicroSDカードのルートに抽出
   - フラッシュカードが見つけない場合は、これをスキップ
1. ...
   - **DS Phat・DS Liteユーザー：**DSメニューで設定に移動し、自動起動をオンにして、起動時にフラッシュカードを起動されます
   - **DSi・3DSユーザー：**本体のSDカードでTWLMenu++を実行し、`Slot-1を自動起動`をオンにします
