---
lang: ja-JP
layout: wiki
section: twilightmenu
category: updating
title: 更新（3DS）
description: ニンテンドー3DSでTWiLight Menu++を更新する方法
---

v16.4.0より古いバージョンから更新する場合は、DSゲームの`.sav`ファイルを`saves`という新しいフォルダに移動し、`saves`フォルダはDS ROMと同じ場所に置いてください。
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Universal-Updaterを開く
   - お持ちでない場合は、[インストール](installing-3ds)手順に従ってください
1. アプリのグリッドで「TWiLight Menu++」を見つけます。見つからない場合は、サイドバーの3番目のダブで検索できます。
1. <kbd class="face">A</kbd>を押すか、サイドバーのダウンロードアイコンをタップし、`TWiLight Menu++`を選択してインストールする
   - しばらく時間がかかります
{% endcapture %}

{% capture tab-manual %}
1. [リリースページ](https://github.com/DS-Homebrew/TWiLightMenu/releases)から`TWiLightMenu-3DS.7z`の最新バージョンをダウンロードする
1. `TWiLightMenu-3DS.7z`を抽出する
1. `_nds`フォルダをSDカードのルートにコピーする
1. `BOOT.NDS`ファイルをSDカードのルートにコピーする
1. 2つの`.cia`ファイルをSDカードのルートにコピーする
1. 3DSに、FBIと2つのCIAをインストールする
{% endcapture %}

### 更新

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">手動</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>手動</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### フラッシュカード側の他の手順

TWLMenu++でSDとフラッシュカードの内容を切り替えることができ、フラッシュカードのTWLMenu++はv16.3.0以降である場合は、以下の手順に従ってください。

1. TWLMenu++の設定に行く
1. `TWiLight Menu++を更新します`を選択します
1. `本体の(micro)SD > Slot-1のmicroSD`を選択します
