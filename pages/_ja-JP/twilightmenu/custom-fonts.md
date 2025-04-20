---
lang: ja-JP
layout: wiki
section: twilightmenu
category: customization
title: カスタムフォント
description: TWiLight Menu++でカスタムフォントを使う方法
---

TWiLight Menu++では、NFTR（Nitro FonT Resource）形式のカスタムフォントを利用できます。 They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### ディレクトリ構造
カスタムフォントは`sd:/_nds/TWiLightMenu/extras/fonts/[フォントの名前]/[フォントファイル].nftr`から読み込まれます。ここで、`[フォントの名前]`は任意の名前であり、`[フォントファイル].nftr`は以下のいずれかです。
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### カスタムフォントの生成
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. nftr-editorでNFTRファイルを読み込む
1. `Input font`テキストボックスに、優先度の高いフォントから低いフォントへを入力します、カンマで区切っていください
    - 左上のボックスに入力フォントのプレビューが、下のボックスには現在のNFTRが表示されます
1. `Generate from font`をクリックし、既存の文字を再生成するには`OK`と言って、特別なボタン文字（例：&#xE000;）を再生成するに`キャンセル`を選びます
1. `Save`をクリックし、他のサイズについて繰り返します
