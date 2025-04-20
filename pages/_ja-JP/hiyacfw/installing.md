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
- [dumpToolを使って](https://dsi.cfw.guide/dumping-nand)デバイスから取られたNANDバックアップ
- Windows、macOSまたはLinuxのデバイス

### その1：hiyaCFWをインストールするためのPCの準備
{% capture tab-windows %}
1. Download the latest Windows version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Run the TWLMagician MSI package and extract it to anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. まだインストールされていない場合は、Python 3をパッケージマネージャを使ってインストールしてください
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. まだ持っていません場合は、ディストリビューションための以下のコマンドを使ってtkinterをインストール：
    - Debian-based: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Install requirements with the following command:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### その2：hiyaCFWのファイルをSDカードに追加
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. 「NAND file with No$GBA footer」ボックス内の`...`ボタンをクリック
1. NANDバックアップに移動し、 `Open` をクリック
1. `Start`をクリック
1. 新しいポップアップウィンドウで、SDカードのルートに移動し、`OK`をクリック
    - これは数分かかることがあります
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### その3：Unlaunchとhiyacfwの設定
1. <kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したままニンテンドーDSi本体の電源をオンにする
    - これはUnlaunchのファイルメニューを開かれます
1. `OPTIONS`に移動し、`NO BUTTON`
1. `hiyaCFW`を選択し、<kbd class="face">A</kbd>を押します
    - これは、本体を自動的にhiyaCFWに起動します
1. 設定を保存（`SAVE & EXIT`）して本体を再起動します
1. hiyaCFWの設定をアクセスには、ニンテンドーDSi本体の電源をオンにしながら<kbd>SELECT</kbd>を長押ししてください
1. 設定を好みに合わせて変更し、<kbd>START</kbd>を押して続けます

`エラーが発生しました`が表示される場合は、[よくある質問](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw)ページを参照してください。
{: .alert .alert-warning}
