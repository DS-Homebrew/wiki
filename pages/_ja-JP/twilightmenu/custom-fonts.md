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
TWiLight Menu++には3つのフォントが含まれています。 DSiモードでTWiLight Menu++が実行されている場合は、TWiLight Menu++が翻訳されているのすべての言語に必要なすべての文字が含まれています。しかし、DSモードで実行されている場合はRAMの制限によって制限されます。 これらは以下の通りである：
- デフォルト：これは公式のDSiフォントを主要なフォントとして使い、DSモードですべての言語でTWiLight Menu++で使われるすべての文字を含みます。
- 中国語（簡体字）：これはNoto Sans CSを主要なフォントとして使い、DSモードの中国語（簡体字）の文字数が大幅に増加します、他の言語の文字を犠牲にして
- 韓国語：これはDSiモードではデフォルトと同じです。しかし、DSモードではより完全なハングルのセットを持っています、他の言語の文字を犠牲にして

### ディレクトリ構造
カスタムフォントは`sd:/_nds/TWiLightMenu/extras/fonts/[フォントの名前]/[フォントファイル].nftr`から読み込まれます。ここで、`[フォントの名前]`は任意の名前であり、`[フォントファイル].nftr`は以下のいずれかであります：
- `large-ds.nftr`、`large-dsi.nftr`または`large.nftr`：タイトルに使われる大きなフォント
- `small-ds.nftr`、`small-dsi.nftr`または`small.nftr`：他のほとんどのテキストに使われる小さいフォント

`-ds`と`-dsi`ファイルは通常のファイルよりも優先度が高く、見つかった場合はそれぞれDS・DSiモードでTWiLight Menu++が実行されている時に使われます。

### カスタムフォントの生成
Pk11の[nftr-editor](https://pk11.us/nftr-editor/)などのユーティリティを使って独自のフォントを作成できます。 TWiLight Menu++の既存のフォントを再生成するには、以下をします：
1. nftr-editorでNFTRファイルを読み込む
1. `Input font`テキストボックスに、優先度の高いフォントから低いフォントへを入力します、カンマで区切っていください
   - 左上のボックスに入力フォントのプレビューが、下のボックスには現在のNFTRが表示されます
1. `Generate from font`をクリックし、既存の文字を再生成するには`OK`と言って、特別なボタン文字（例：&#xE000;）を再生成するに`キャンセル`を選びます
1. `Save`をクリックし、他のサイズについて繰り返します
