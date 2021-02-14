---
lang: ja-JP
layout: wiki
section: twilightmenu
category: installing
title: インストール（3DS）
description: ニンテンドー3DSにTWiLight Menu++をインストールする方法
---

3DSにカスタムファームウェアが必要です。インストールには[3ds.hacks.guide](https://3ds.hacks.guide)に従ってください
{:.alert .alert-info}

{% capture tab-working-camera %}
1. FBIを開き、`Remote Install`を選択し、`Scan QR Code`します
1. このQRコードをスキャンして、[Universal-Updater](https://github.com/Universal-Team/Universal-Updater)の最新バージョンをインストースします<br> ![Universal-UpdaterのQRコード](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. FBIを閉じ、Universal-Updaterを起動します
   - ホームメニューに表示されない場合は、3DSを再起動します
1. アプリのグリッドで「TWiLight Menu++」を見つけます。見つからない場合は、サイドバーの3番目のダブで検索できます。
   - 次のアイコンがあります：![TWiLight Menu++のアイコン](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. <kbd class="face">A</kbd>を押すか、サイドバーのダウンロードアイコンをタップし、`TWiLight Menu++`を選択してインストールする
   - しばらく時間がかかります
{% endcapture %}

{% capture tab-non-working-camera %}
1. [Universal-Updaterのリリースページ](https://github.com/Universal-Team/Universal-Updater/releases)から`Universal-Updater.cia`ファイルをダウンロードする
1. `Universal-Updater.cia`ファイルをSDカードの任意の場所に配置します
1. FBIをニンテンドー3DSで起動する
1. FBIで、`Universal-Updater.cia`ファイルを貼り付けた場所に移動します
1. `Universal-Updater.cia`ファィルを選択し、「Install & Delete」を押します
1. FBIを閉じ、Universal-Updaterを起動します
   - ホームメニューに表示されない場合は、3DSを再起動します
1. アプリのグリッドで「TWiLight Menu++」を見つけます。見つからない場合は、サイドバーの3番目のダブで検索できます。
   - 次のアイコンがあります：![TWiLight Menu++のアイコン](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. <kbd class="face">A</kbd>を押すか、サイドバーのダウンロードアイコンをタップし、`TWiLight Menu++`を選択してインストールする
   - しばらく時間がかかります
{% endcapture %}

{% capture tab-manual %}
1. [リリースページ](https://github.com/DS-Homebrew/TWiLightMenu/releases)から`TWiLightMenu-3DS.7z`の最新バージョンをダウンロードする
1. `TWiLightMenu-3DS.7z`を抽出する
1. `_nds`フォルダをSDカードのルートにコピーする
1. `BOOT.NDS`ファイルをSDカードのルートにコピーする
1. `roms`フォルダをSDカードのルートにコピーする
1. 2つの`.cia`ファイルをSDカードのルートにコピーする
1. 3DSに、FBIと2つのCIAをインストールする
{% endcapture %}

### インストール

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">機能されるカメラ</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">機能されないカメラ</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">手動</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>機能されるカメラ</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>機能されないカメラ</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>手動</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
