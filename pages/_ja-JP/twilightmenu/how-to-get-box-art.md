---
lang: ja-JP
layout: wiki
section: twilightmenu
category: other
title: ボックスアートを取得する方法
description: TWiLight Menu++でボックスアート・ゲームカバーを取得する方法
---

### Windows
1. [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)の最新バージョンをダウンロードします
1. `TwilightBoxart-Windows-UX.zip`を抽出し、`TwilightBoxart.exe`を実行します
1. `Detect SD`をクリックします
   - 正しいSDカードが見つからない場合は、`Browse...`をクリックし、正しいSDカードを選択してください
1. サイズ、外枠などのオプションをお好みに変更します
1. `Start`をクリックします
1. TWiLight Menu++設定でボックスアートが表示されていることを確認してください

### macOS・Linux
1. [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)の最新バージョンをダウンロードします
1. `.zip`を抽出します
1. テキストエディタで抽出されたフォルダの`TwilightBoxart.ini`を開きます
1. `SdRoot=`の後にSDカードへのパスを入力し、ファイルを保存します
   - macOSでは、これは`/Volumes/`の後にSDカードの名前が続きます
1. 端末を開きます
1. 端末に`cd `を入力し、`TwilightBoxart.CLI`のフォルダを端末にドラッグします
1. `chmod +x TwilightBoxart.CLI`を実行します
1. `./TwilightBoxart.CLI`を実行します
1. SDパスが正しく表示されている場合は、`Yes`を入力します
1. TWiLight Menu++設定でボックスアートが表示されていることを確認してください

### 手動
1. [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)からPNGボックスアートパックをダウンロードします
1. .pngファィルを`sd:/_nds/TWiLightMenu/boxart`に抽出します
1. TWiLight Menu++設定でボックスアートが表示されていることを確認してください

**独自のボックスアートを追加するには：** `sd:/_nds/TWiLightMenu/boxart`に配置します。 ゲームのTID（例：`ASME.png`）、またはファイル名（例：`SM64DS.nds.png`）を持つことができます。 おすすめのサイズは128x115です、最大は208x143です、`.png`フォーマットである必要があります。

個々のボックスアートはGameTDBの**S Covers (png)**カテゴリーからダウンロードできます。
