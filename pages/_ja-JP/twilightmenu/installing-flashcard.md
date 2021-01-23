---
lang: ja-JP
layout: wiki
section: twilightmenu
category: installing
title: インストール（フラッシュカード）
description: ニンテンドーDSフラッシュカードにTWiLight Menu++をインストールする方法
---

### インストール
1. [リリースページ](https://github.com/DS-Homebrew/TWiLightMenu/releases)から`TWiLightMenu-Flashcard.7z`の最新バージョンをダウンロードする
1. `TWiLightMenu-Flashcard.7z`を抽出する
1. `_nds`フォルダをフラッシュカードのmicroSDカードのルートにコピーする
1. `BOOT.NDS`ファイルをフラッシュカードのmicroSDカードのルートにコピーする
1. `roms`フォルダをフラッシュカードのmicroSDカードのルートにコピーする
1. すでにセーブデータがある場合は、DS ROMの場所にある`.sav`ファイルを`saves`という新しいフォルダに移動します。このフォルダもDS ROMの場所にあります。
1. ...
   - **DS Phat/liteユーザー：**`BOOT.NDS`を起動すると、白い画面のロックアップが発生した場合は、DSメモリー拡張カートリッジを挿入して、もう一度やり直してください
   - **DSi/3DSユーザー：**本体のSDカードでTWLMenu++を実行し、`Slot-1でSCFGアクセス`をオンにする
      - これにより、フラッシュカードのゲームでTWLクロック速度やVRAMブーストを使用し、本体のSDカードにアクセスすることができます

### フラッシュカードのファームウェアを使用してゲームを実行するには
1. `Flashcard Loader/(あなたのフラッシュカード)`の内容をフラッシュカードのmicroSDカードのルートに抽出します
   - そうしたら場合は、手順3に進みます。 そうでない場合は、以下の手順に従ってください

1. 以下のフラッシュカードため：
   - R4i-SDHC
   - r4isdhc.comのカード
   - r4isdhc.hkのカード
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS

   [ここ](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)からYSMenuをインストールします
      - フラッシュカードのmicroSDのルートに`YSMenu.nds`と`TTMenu`フォルダ（必要場合は、`YSMenu`から名前を変更）があることを確認します
1. `nds-bootstrapを使用 (B4DS)`を`いいえ`に設定して、nds-bootstrapの代わりにフラッシュカードのファームウェアが使用されます。

### TWiLight Menu++を自動起動する
1. `Flashcard Loader/(あなたのフラッシュカード)`の内容をフラッシュカードのmicroSDカードのルートに抽出します
   - フラッシュカードが見つけない場合は、これをスキップします
1. ...
   - **DS Phat/DS Liteユーザー：**DSメニューで設定に移動し、自動起動をオンにして、起動時にフラッシュカードょ起動します
   - **DSi/3DSユーザー：**本体のSDカードでTWLMenu++を実行し、`Slot-1を自動起動`をオンにする
