---
lang: ja-JP
layout: wiki
section: twilightmenu
category: customization
title: カスタムフォント
description: TWiLight Menu++でカスタムフォントを使う方法
---

TWiLight Menu++は、NFTR（Nitro FonT Resource）形式のカスタムフォントを使える。 設定、説明書のタイトル、およびニンテンドーDSi、ニンテンドー3DS、セガサターン、Homebrew Launcherのテーマに使われる。

### 含まれるフォント情報
TWiLight Menu++には3つのフォントが含まれています。 When TWiLight Menu++ is running in DSi Mode, they all contain all of the characters that should be needed for all of the languages TWiLight is translated to, but when running in DS Mode they are more limited due to RAM limitations. これらは以下の通りである：
- Default: This uses the official DSi font as its primary font, and supports all characters that are used in TWiLight Menu++ itself in all languages in DS mode
- 中国語（簡体字）：これはNoto Sans CSを主要なフォントとして使い、DSモードの中国語（簡体字）の文字数が大幅に増加します、他の言語の文字を犠牲にして
- 韓国語：これはDSiモードではデフォルトと同じです。しかし、DSモードではより完全なハングルのセットを持っています、他の言語の文字を犠牲にして

### ディレクトリ構造
カスタムフォントは`sd:/_nds/TWiLightMenu/extras/fonts/[フォントの名前]/[フォントファイル].nftr`から読み込まれます。ここで、`[フォントの名前]`は任意の名前であり、`[フォントファイル].nftr`は以下のいずれかであります：
- `large-ds.nftr`、`large-dsi.nftr`または`large.nftr`：タイトルに使われる大きなフォント
- `small-ds.nftr`、`small-dsi.nftr`または`small.nftr`：他のほとんどのテキストに使われる小さいフォント

`-ds`と`-dsi`ファイルは通常のファイルよりも優先度が高く、見つかった場合はそれぞれDS・DSiモードでTWiLight Menu++が実行されている時に使われます。

### Skin fonts
You may add fonts to [custom DSi/3DS theme skins](custom-dsi-3ds-skins), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the skin's root folder.

Custom skins can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. nftr-editorでNFTRファイルを読み込む
1. `Input font`テキストボックスに、優先度の高いフォントから低いフォントへを入力します、カンマで区切っていください
   - 左上のボックスに入力フォントのプレビューが、下のボックスには現在のNFTRが表示されます
1. `Generate from font`をクリックし、既存の文字を再生成するには`OK`と言って、特別なボタン文字（例：&#xE000;）を再生成するに`キャンセル`を選びます
1. `Save`をクリックし、他のサイズについて繰り返します
