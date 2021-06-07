---
lang: ja-JP
layout: wiki
section: hiyacfw
title: インストール
long_title: HiyaCFWのインストール
description: ニンテンドーDSiにhiyaCFWをインストールする方法
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

hiyaCFWをインストールした後に本体を更新しませんでください。 そうすると、hiyaCFWのSDパッチを削除されます。
{: .alert .alert-danger}

### 必要条件
- [Unlaunchがインストールされる](https://dsi.cfw.guide/installing-unlaunch)ニンテンドーDSi
- dumpToolを使ってデバイスから作成したNANDバックアップ
   - お持ちでない場合は、dsi.cfw.guideの[NANDのダンプ](https://dsi.cfw.guide/dumping-nand)ガイドに従ってください
- Windows、macOSまたはLinuxのデバイス

### その1：hiyaCFWをインストールするためのPCの準備
{% capture tab-windows %}
hiyaCFWヘルパーは、Windows Defenderと他のアンチウイルスソフトで誤検知を引き起こすことが知られています。ダウンロードや実行に問題がある場合は一時的にそのプログラムを無効にしてください。
{: .alert .alert-info}

1. [7-Zip](https://sevenzip.osdn.jp)の最新バージョンをダウンロードしてインストールします
   - これはWinRARのような他のアーカイブ解凍ツールでは動作しません。hiyaCFWヘルパーは7-Zip自体に依存し、一般なアーカイブ解凍ツールではない
1. 最新のWindows版[hiyaCFWヘルパー](https://github.com/mondul/HiyaCFW-Helper/releases)をダウンロード
1. hiyaCFWヘルパーのアーカイブをパソコン上の任意の場所に解凍
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. 最新のmacOS版[hiyaCFWヘルパー](https://github.com/mondul/HiyaCFW-Helper/releases)をダウンロード
1. hiyaCFWヘルパーのアーカイブをパソコン上の任意の場所に解凍
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. まだインストールされていない場合は、Python 3をパッケージマネージャを使ってインストールしてください
1. 最新のPython版[hiyaCFWヘルパー](https://github.com/mondul/HiyaCFW-Helper/releases)をダウンロード
1. hiyaCFWヘルパーのアーカイブをパソコン上の任意の場所に解凍
1. まだ持っていません場合は、ディストリビューションための以下のコマンドを使ってtkinterをインストール：
   - Debianベース：`sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### その2：hiyaCFWのファイルをSDカードに追加
![hiyaCFWヘルパーのスクリーンショット](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. hiyaCFWヘルパーを開く
  - **Windows：** hiyaCFWヘルパーのアーカイブから解凍された`HiyaCFW_Helper.exe`ファイルを起動します（アンチウイルスを一時的に無効にする必要があるかもしれません）
  - **macOS：**hiyaCFWヘルパーのアーカイブから解凍された`HiyaCFW_Helper`ファイルを右クリックし、`開く`を選択します
  - **Linux：**hiyaCFWヘルパーのアーカイブから解凍された`HiyaCFW_Helper.py`を起動します
1. 「NAND file with No$GBA footer」ボックス内の`...`ボタンをクリック
1. NANDバックアップに移動し、 `Open` をクリック
1. `Start`をクリック
1. 新しいポップアップウィンドウで、SDカードのルートに移動し、`OK`をクリック
   - これは数分かかることがあります
1. アプリが`Done!`を表示される時に、hiyaCFWヘルパーを閉じる
1. ターミナルウィンドウを閉じる

### その3：Unlaunchとhiyacfwの設定
1. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままニンテンドーDSi本体の電源をオンにする
   - これはUnlaunchのファイルメニューを開かれます
1. `OPTIONS`に移動し、`NO BUTTON`
1. `hiyaCFW`を選択し、<kbd class="face">A</kbd>を押します
   - これは、本体を自動的にhiyaCFWに起動します
1. 設定を保存（`SAVE & EXIT`）して本体を再起動します
1. hiyaCFWの設定をアクセスには、ニンテンドーDSi本体の電源をオンにしながら<kbd>SELECT</kbd>を長押ししてください
1. 設定を好みに合わせて変更し、<kbd>START</kbd>を押して続けます

`エラーが発生しました`が表示される場合は、[トラブルシューティング](troubleshooting#エラーが発生しました)ページを参照してください。
{: .alert .alert-warning}
