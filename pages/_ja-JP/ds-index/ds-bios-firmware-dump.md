---
lang: ja-JP
layout: wiki
section: ds-index
category: guides
title: BIOS/Firmwareのダンプ
description: 任天堂DSまたはDSiのBIOS/ファームウェアをコンソールから抽出する方法は何ですか
tabs:
  - 
    dsi-sd-card: Unlaunchを備えたDSi
    flashcard: フラッシュカード
---

melonDSなど、一部のエミュレーターは、DSモードまたはDSiモードのBIOSおよびファームウェアを必要とし、これらはコンソールから抽出して利用可能です。 これを達成するためには、2つの異なる方法があります。以下の方法を使用します：
- Unlaunchを備えたDSi、または
- UnlaunchのないDS/DS Lite/3DSまたはDSi、およびそのコンソールに対応したフラッシュカードとともに

DSiの方法では、DSモードとDSiモードのBIOSおよびファームウェアファイルの両方を抽出します。 フラッシュカードの方法では、DSモードのファイルのみを抽出します。

{% capture tab-dsi-sd-card %}

このページは、[dsi.cfw.guide](https://dsi.cfw.guide)からの最新のカスタムファームウェア環境を実行していると仮定しています。
{:.alert .alert-warning}

### パート1：必要なファイルを取得する

1. [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)をダウンロードしてください
1. `dsibiosdumper.nds`をdsibiosdumper`.7z`ファイルからSDカードのルートディレクトリにコピーしてください
1. SDカードを再度デバイスに挿入してください

### パート2：dsibiosdumper
1. デバイスの電源がまだ切れた状態で、以下のボタンを押しながら電源を入れてください：<kbd class="face">A</kbd> + <kbd class="face">B</kbd>。これらのボタンを一緒に押したまま、デバイスの電源を入れてください
1. デバイスはUnlaunchメニューに起動しているはずです
1. アプリケーションのリストからdsibiosdumperを起動してください
1. <kbd class="face">A</kbd>ボタンを押して、すべてをダンプしてください
1. プロセスの完了を待ってください
    - これにはしばらく時間がかかることがあります
1. プロセスが完了したら、dsibiosdumperを終了するために<kbd>SELECT</kbd>ボタンを押してください
1. デバイスの電源を切ってください
1. SDカードをコンピュータに挿入してください

必要なすべてのファイルは、SDカードのルートにある`dsidump`フォルダに保存されます。
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### パート1：必要なファイルを取得する

1. [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest)（`.nds`ファイル）をダウンロードしてください
1. `dsbf_dump.nds`をSDカードのルートにコピーしてください
1. SDカードをフラッシュカードに再挿入してください

### パート2：dsbf_dump
1. デバイスの電源を入れてください
1. フラッシュカードを起動してください
1. SDカードのルートに移動し、dsbf_dumpを起動してください
1. プロセスの完了を待ってください
1. プロセスが完了したら、デバイスの電源を切るために<kbd>START</kbd>ボタンを押してください
  - 3DSファミリーシステムでは、代わりに「ソフトウェアが終了しました」と表示されます。 この画面からデバイスの電源を切ってください
1. SDカードをコンピュータに挿入してください

必要なすべてのファイルは、デバイスの上部画面に指定されたフォルダに保存されます。
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
