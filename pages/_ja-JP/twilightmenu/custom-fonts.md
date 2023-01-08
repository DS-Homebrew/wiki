---
lang: ja-JP
layout: wiki
section: twilightmenu
category: customization
title: カスタムフォント
description: TWiLight Menu++でカスタムフォントを使う方法
---

TWiLight Menu++では、NFTR（Nitro FonT Resource）形式のカスタムフォントを利用できます。 設定画面、説明書のタイトル、およびニンテンドーDSi、ニンテンドー3DS、セガサターン、Homebrew Launcherのテーマに使われます。

### 含まれるフォント情報
TWiLight Menu++には3つのフォントが含まれています。 TWiLight Menu++がDSiモードで実行される場合は、翻訳済み言語に必要なすべての文字が含まれます。しかし、DSモードで実行される場合はRAM容量の限界によって制限されます。 これらは以下の通りです。
- デフォルト：これは公式DSiフォントを主なフォントとして使い、DSモードでも全言語でTWiLight Menu++で使われるすべての文字を含みます。
- 中国語（簡体字）：これはNoto Sans CSを主要なフォントとして使い、他言語の文字と引き換えにDSモードの中国語（簡体字）の文字数を大幅に増加します。
- 韓国語：これはDSiモードではデフォルトと同じです。しかしDSモードでは、他言語の文字と引き換えに、より完全なハングルのセットを提供します。

### ディレクトリ構造
カスタムフォントは`sd:/_nds/TWiLightMenu/extras/fonts/[フォントの名前]/[フォントファイル].nftr`から読み込まれます。ここで、`[フォントの名前]`は任意の名前であり、`[フォントファイル].nftr`は以下のいずれかです。
- `large-ds.nftr`、`large-dsi.nftr`または`large.nftr`：タイトルに使われる大きなフォント
- `small-ds.nftr`、`small-dsi.nftr`または`small.nftr`：他のほとんどのテキストに使われる小さいフォント

`-ds`と`-dsi`ファイルは通常のファイルよりも優先度が高く、見つかった場合はそれぞれDS・DSiモードでTWiLight Menu++が実行される時に使われます。

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
