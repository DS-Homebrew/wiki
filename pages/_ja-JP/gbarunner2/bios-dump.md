---
lang: ja-JP
layout: wiki
section: gbarunner2
title: GBA BIOSダンピング
description: ニンテンドーGBAコンソールからBIOSを抽出する方法は
tabs:
  - 
    3ds-sd-card: open_agb_firmを搭載した3DS
    gba-flashcart: GBAモードフラッシュカートリッジを装備したGBA/DS/DS Lite
---

ほとんどのGBAエミュレータはGBAゲームを単独で問題なく再生できますが、一部のエミュレータやハイパーバイザー、例えばGBARunner2のようなものは、一部のタイトルを正しく再生するためにBIOSファイルが必要な場合があります。

これを達成するためには、2つの異なる方法があります。以下の方法を使用します：
- カスタムファームウェアを搭載した3DS、または
- GBAモードフラッシュカートリッジを使用したGBA/DS/DS Lite

{% capture tab-3ds-sd-card %}
### パート1：必要なファイルを取得する
1. [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest)（`.7z`ファイル）をダウンロードしてください
1. [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)をダウンロードしてください
1. 既に存在しない場合、`/luma`フォルダ内に`payloads`という名前のフォルダを作成してください
1. `open_agb_firm.firm`をopen_agb_firmの`.7z`ファイルから`/luma/payloads`フォルダにコピーしてください
1. `Bios_Dumper.gba`をSDカードのルートにコピーしてください
1. SDカードを再度デバイスに挿入してください

### パート2：Bios_Dumper
1. <kbd>START</kbd>ボタンを押しながら、<kbd>START</kbd>ボタンを押し続けたまま、デバイスの電源を入れてください
    - これにより、open_agb_firmが起動します
    - `Luma3DS Chainloader`が読み込まれた場合、このメニューから`open_agb_firm`を選択してください
    - それ以外の何かが読み込まれた場合、`open_agb_firm.firm`を正しいフォルダにコピーしていない可能性があります
1. open_agb_firmから、`Bios_Dumper.gba`を起動してください
1. 画面は赤く点滅し、その後緑く点滅します
1. 約5秒間お待ちください
1. デバイスの電源を切ってください

{% capture upload-bios-text %}
SDカードから、`/3ds/open_agb_firm/saves/Bios_Dumper.sav`をこちらにアップロードしてください：
{% endcapture %}

### パート3：生成されたセーブファイルからBIOSを展開してください
1. SDカードをコンピュータに挿入してください
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### パート1：必要なファイルを取得する
1. [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)をダウンロードしてください
1. `Bios_Dumper.gba`をフラッシュカートのSDカードのルートにコピーしてください
1. SDカードをフラッシュカートリッジに再挿入してください
1. GBAフラッシュカートリッジを再度カートリッジに挿入してください

### パート2：Bios_Dumper
1. フラッシュカートリッジを起動し、その後`Bios_Dumper.gba`を起動してください
1. 画面は赤く点滅し、その後緑く点滅します
1. 約5秒間お待ちください
1. デバイスの電源を切ってください

{% capture upload-bios-text %}
SDカードから、`Bios_Dumper.sav`をこちらにアップロードしてください：
{% endcapture %}

### パート3：生成されたセーブファイルからBIOSを展開してください
1. SDカードをコンピュータに挿入してください
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

`bios.bin`ファイルが自動的にダウンロードされます。 これが最終的なGBA BIOSファイルです。
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
