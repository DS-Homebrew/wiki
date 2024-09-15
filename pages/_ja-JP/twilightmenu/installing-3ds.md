---
lang: ja-JP
layout: wiki
section: twilightmenu
category: installing
title: インストール（3DS）
long_title: TWiLight Menu++をインストール（3DS）
description: ニンテンドー3DSにTWiLight Menu++をインストールする方法
tabs:
  - 
    working-camera: カメラが機能する場合
    non-working-camera: カメラが機能しない場合
    manual: 手動
---

まず、3DSにカスタムファームウェアが必要です。インストールには[3ds.hacks.guide](https://3ds.hacks.guide)に従ってください。
{:.alert .alert-info}

{% capture tab-working-camera %}
1. FBIを開き、`Remote Install`を選択し、`Scan QR Code`を実行します
1. このQRコードをスキャンして、[Universal-Updater](https://github.com/Universal-Team/Universal-Updater)の最新バージョンをインストールします<br> ![Universal-UpdaterのQRコード](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. FBIを閉じ、Universal-Updaterを起動します
    - HOMEメニューに表示されない場合は、3DSを再起動してください
1. アプリのグリッドで「TWiLight Menu++」を見つけます。見つからない場合は、サイドバーの3番目のタブで検索できます
    - 次のアイコンがあります：![TWiLight Menu++のアイコン](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. <kbd class="face">A</kbd>を押すか、サイドバーのダウンロードアイコンをタップし、`TWiLight Menu++`を選択してインストールします
    - This will take a while
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. 最新の[`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)をダウンロードします
1. `Universal-Updater.cia`ファイルをSDカードの任意の場所に配置します
1. ニンテンドー3DSでFBIを起動します
1. FBIで、`Universal-Updater.cia`ファイルを貼り付けた場所に移動
1. `Universal-Updater.cia`ファィルを選択し、「Install & Delete」を押します
1. FBIを閉じ、Universal-Updaterを起動します
    - HOMEメニューに表示されない場合は、3DSを再起動してください
1. アプリのグリッドで「TWiLight Menu++」を見つけます。見つからない場合は、サイドバーの3番目のタブで検索できます
    - 次のアイコンがあります：![TWiLight Menu++のアイコン](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. <kbd class="face">A</kbd>を押すか、サイドバーのダウンロードアイコンをタップし、`TWiLight Menu++`を選択してインストールします
    - しばらく時間がかかります
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. 最新の[`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)をダウンロードします
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. `TWiLightMenu-3DS.7z`を展開します
1. `_nds`フォルダをSDカードのルートにコピーします
1. `BOOT.NDS`ファイルをSDカードのルートにコピーします
1. `roms`フォルダをSDカードのルートにコピーします
1. `.cia`ファイルをSDカードのルートにコピーします
1. 3DSでFBIを使いCIAファイルをインストールします
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### インストール

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
    - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
    - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file or folder called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
    - If you end up in the DS Classic Menu, launch your flashcard
    - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
    - If the SELECT menu is enabled, you can do so there as well
    - If you use the 3DS theme, touch the Game Card/SD Card icon
    - If you use the R4, GBC, or Wood themes, press `R` button
