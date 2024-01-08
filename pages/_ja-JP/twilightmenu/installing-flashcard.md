---
lang: ja-JP
layout: wiki
section: twilightmenu
category: installing
title: インストール（マジコン）
long_title: TWiLight Menu++をインストール（マジコン）
description: ニンテンドーDSマジコンにTWiLight Menu++をインストールする方法
---

### インストール
1. 最新の[`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)をダウンロード
1. `TWiLightMenu-Flashcard.7z`を展開
1. `_nds`フォルダをマジコンのmicroSDカードのルートにコピー
1. `BOOT.NDS`ファイルをマジコンのmicroSDカードのルートにコピー
1. `roms`フォルダをマジコンのmicroSDカードのルートにコピー
1. すでにセーブデータがある場合は、DS ROMの場所にある`.sav`ファイルを、同じくDS ROMの場所にある`saves`という新しいフォルダに移動
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and/or insert a DS Memory Expansion Pak, and try again

### TWiLight Menu++を自動起動する
1. `Autoboot/(使っているマジコン)`の中身をマジコンのmicroSDカードのルートに展開する
   - マジコンが表示されない場合は、スキップしてください
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### マジコンファームウェアを使用してゲームを起動するには

これは、TWiLight Menu++を自動起動するようにマジコンが設定されている場合しか機能しないのでご注意ください。 設定方法については、上記の項を参照してください。
{:.alert .alert-warning}

すべてのマジコンがこの方法でのゲーム起動をサポートしているわけではありません。 以下の手順がお使いのマジコンに当てはまらない場合は、このセクションを飛ばして構いません。
{:.alert .alert-warning}

Please note that you'll lose the ability to use cheats when running games in this fashion. If you want to retain cheat functionality, please skip this section.
{:.alert .alert-warning}

1. `Flashcart Loader/(お使いのマジコン)`内のものをマジコンのmicroSDカードのルートへ展開します。
   - `Flashcart Loader`には、どのFlashcart Loaderがお使いのマジコンに適しているかの判断材料となるREADME.txtがあります
   - 判断がついたら、ステップ3に進んでください。 そうでなければ、下記のマジコンリストの載ったステップ2に進んでください

1. 次のマジコンを使う場合：
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014〜2022（.hkや.com.cn**ではない**）
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi（非SDHCモデルは***非対応***）
   - M3 DS Real
   - M3i Zero（GMP-Z003以外のモデル）
   - iTouchDSとiTouch2（M3Real_M3iZero YSMenuファイルを使用）
   - R4(i)RTS（r4rts.com）（M3Real_M3iZero YSMenuファイルを使用）
   - R4 SDHC RTS（黒いカートリッジ）（r4isdhc.com）（M3Real_M3iZero YSMenuファイルを使用）

   Install [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
      - マジコンのmicroSDのルートに`YSMenu.nds`（存在しない場合は`TTMenu.dat`から名前を変更する）と`TTMenu`フォルダがあることを確認してください
      - Do not copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `nds-bootstrap settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
