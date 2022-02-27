---
lang: ja-JP
layout: wiki
section: twilightmenu
category: updating
title: 更新（DSi）
long_title: TWiLight Menu++を更新（DSi）
description: ニンテンドーDSiでTWiLight Menu++を更新する方法
---

v6.8.3より古いバージョンから更新する場合は、DSゲームの`.sav`ファイルを`saves`という新しいフォルダに移動し、`saves`フォルダはDS ROMと同じ場所に置いてください。
{:.alert .alert-info}

v21.0.0より古いバージョンから更新する場合は、DSiウェアタイトルの`.pub`および/または`.prv`ファイルを`saves`という新しいフォルダに移動し、`saves`フォルダはDSウェアROMと同じ場所に置いてください。
{:.alert .alert-info}

### 更新
1. 最新の[`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)をダウンロードする
1. `TWiLightMenu-DSi.7z`を抽出する
1. `_nds`フォルダをSDカードのルートにコピーし、既存のファイルを置き換えます
   - macOSを使用している場合、**コピー**して`結合`しますを確認し、`置き換える`しないでください。
1. `BOOT.NDS`ファイルをSDカードのルートにコピーし、既存のファイルを置き換えます
1. **hiyaCFWユーザー：**`title`フォルダをSDカードのルートにコピーし、既存のファイルを置き換えます
   - macOSを使用している場合、**コピー**して`結合`しますを確認し、`置き換える`しないでください。

### フラッシュカード側の他の手順

TWLMenu++でSDとフラッシュカードの内容を切り替えることができ、フラッシュカードのTWLMenu++はv16.3.0以降である場合は、以下の手順に従ってください。

1. TWLMenu++の設定に行く
1. `TWiLight Menu++を更新します`を選択します
1. `本体の(micro)SD > Slot-1のmicroSD`を選択します
