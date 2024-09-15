---
lang: ja-JP
layout: wiki
section: twilightmenu
category: updating
title: 更新（3DS）
long_title: TWiLight Menu++を更新（3DS）
description: ニンテンドー3DSでTWiLight Menu++を更新する方法
tabs:
  - 
    universal-updater: Universal-Updater
    manual: 手動
---

v6.8.3より古いバージョンから更新する場合は、DSゲームの`.sav`ファイルを`saves`という新しいフォルダに移動し、`saves`フォルダはDS ROMと同じ場所に置いてください。
{:.alert .alert-info}

v21.0.0より古いバージョンから更新する場合は、DSiウェアタイトルの`.pub`および/または`.prv`ファイルを`saves`という新しいフォルダに移動し、`saves`フォルダはDSウェアROMと同じ場所に置いてください。
{:.alert .alert-info}

If updating from a version older than v25.7.0, it is recommended to delete the `TWiLight Menu++ Game Booter` title from the title list, using FBI.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Universal-Updaterを開く
    - お持ちでない場合は、[インストール](installing-3ds)手順に従ってください
1. アプリのグリッドで「TWiLight Menu++」を見つけます。見つからない場合は、サイドバーの3番目のダブで検索できます
1. <kbd class="face">A</kbd>を押すか、サイドバーのダウンロードアイコンをタップし、`TWiLight Menu++`を選択してインストールします
    - This will take a while
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. 最新の[`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)をダウンロード
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. `TWiLightMenu-3DS.7z`を抽出
1. `_nds`フォルダをSDカードのルートにコピーし、既存のファイルを置き換えます
    - macOSをお使いの場合、必ず**コピー**して`結合`してください。`置き換える`は使わないでください
1. `BOOT.NDS`ファイルをSDカードのルートにコピーし、既存のファイルを置き換えます
1. Copy the `.cia` file to your SD card root, replacing any existing files
1. 3DSでFBIを使いCIAファイルをインストールします
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 更新

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
