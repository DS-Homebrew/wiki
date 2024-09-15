---
lang: ja-JP
layout: wiki
section: twilightmenu
category: customization
title: カスタムフォント
description: TWiLight Menu++でカスタムフォントを使う方法
---

TWiLight Menu++では、NFTR（Nitro FonT Resource）形式のカスタムフォントを利用できます。 設定画面、説明書のタイトル、およびニンテンドーDSi、ニンテンドー3DS、セガサターン、Homebrew Launcherのテーマに使われます。

### ディレクトリ構造
カスタムフォントは`sd:/_nds/TWiLightMenu/extras/fonts/[フォントの名前]/[フォントファイル].nftr`から読み込まれます。ここで、`[フォントの名前]`は任意の名前であり、`[フォントファイル].nftr`は以下のいずれかです。
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### スキンフォント
You may add fonts to [custom DSi/3DS theme skins](custom-dsi-3ds-skins), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the skin's root folder.

Custom skins can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### カスタムフォントの生成
Pk11の[nftr-editor](https://pk11.us/nftr-editor/)などのユーティリティを使って独自のフォントを作成できます。 To regenerate one of TWiLight Menu++'s existing fonts using it:
1. nftr-editorでNFTRファイルを読み込む
1. `Input font`テキストボックスに、優先度の高いフォントから低いフォントへを入力します、カンマで区切っていください
    - 左上のボックスに入力フォントのプレビューが、下のボックスには現在のNFTRが表示されます
1. `Generate from font`をクリックし、既存の文字を再生成するには`OK`と言って、特別なボタン文字（例：&#xE000;）を再生成するに`キャンセル`を選びます
1. `Save`をクリックし、他のサイズについて繰り返します
