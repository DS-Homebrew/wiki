---
lang: ja-JP
layout: wiki
section: twilightmenu
category: other
title: ボックスアートを取得する方法
description: TWiLight Menu++でボックスアート・ゲームカバーを取得する方法
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Manual
---

{% capture tab-windows %}
1. [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)の最新バージョンをダウンロードします
1. `TwilightBoxart-Windows-UX.zip`を抽出し、`TwilightBoxart.exe`を実行します
1. `Detect SD`をクリックします
   - 正しいSDカードが見つからない場合は、`Browse...`をクリックし、正しいSDカードを選択してください
1. サイズ、外枠などのオプションをお好みに変更します
1. `Start`をクリックします
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
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
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)からPNGボックスアートパックをダウンロードします
1. .pngファィルを`sd:/_nds/TWiLightMenu/boxart`に抽出します
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**To add your own box art:** Place them in `sd:/_nds/TWiLightMenu/boxart`.
- Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`)
- Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143
- If your **TW**i**L**ight Menu++ configuration has Box Art viewing set to `Cached`, the image size must be 44 KiB or below. You can use a tool like [tinypng](https://tinypng.com/) to compress the images to an acceptable size

Individual box art can also be downloaded from GameTDB, under the **S Covers (png)** category.
