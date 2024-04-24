---
lang: ja-JP
layout: wiki
section: twilightmenu
category: updating
title: 更新（フラッシュカード）
long_title: TWiLight Menu++を更新（フラッシュカード）
description: ニンテンドーDSフラッシュカードでTWiLight Menu++を更新する方法
---

v16.4.0より古いバージョンから更新する場合は、DSゲームの`.sav`ファイルを`saves`という新しいフォルダに移動し、`saves`フォルダはDS ROMと同じ場所に置いてください。
{:.alert .alert-info}

v21.0.0より古いバージョンから更新する場合は、DSiウェアタイトルの`.pub`および/または`.prv`ファイルを`saves`という新しいフォルダに移動し、`saves`フォルダはDSウェアROMと同じ場所に置いてください。
{:.alert .alert-info}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

### 更新
1. 最新の[`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)をダウンロード
1. `TWiLightMenu-Flashcard.7z`を抽出
1. `_nds`フォルダをフラッシュカードのmicroSDカードのルートにコピーし、既存のファイルを置き換えます
   - macOSをお使いの場合、必ず**コピー**して`結合`してください。`置き換える`は使わないでください
1. `BOOT.NDS`ファイルをフラッシュカードのmicroSDカードのルートにコピーし、既存のファイルを置き換えます
1. If TWLMenu++ does not boot after updating, then update the autoboot file(s) as well

### DSi・3DSのSDカードの他の手順

TWLMenu++でSDとフラッシュカードの内容を切り替えることができ、フラッシュカードのTWLMenu++はv16.3.0以降である場合は、以下の手順に従ってください。

1. TWLMenu++の設定に行く
1. `TWiLight Menu++を更新します`を選択します
1. `Slot-1 microSD > 本体の(micro)SD`を選択します
