---
lang: ja-JP
layout: wiki
section: hiyacfw
title: フォワーダー
category: other
description: hiyaCFWでnds-bootstrapのフォワーダーを使用する方法
---

### 必要条件
- [Unlaunch](https://dsi.cfw.guide/installing-unlaunch)、[hiyaCFW](installing)と[TWilight Menu++](/twilightmenu/installing-dsi)がインストールされるニンテンドーDSi
- [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)の最新リリース

### 手順
1. `MakeForwarder.zip`の**中身**をSDカードのルートに解凍
1. TWiLight Menu++を起動
1. フォワーダーを作成したいニンテンドーDS ROMを起動
1. ROMが起動したら、本体をオフにしてください
   - 動作しない場合は、nds-bootstrapトラブルシューティングガイドに従ってください
1. hiyaCFWを起動
1. ニンテンドーDSiメニューに入ったら、「Forwarder Maker」を開いて起動します
1. アプリケーションに応じて、ターゲットのbootstrapを設定してください:
   - **小売のROM：**`sd:/_nds/nds-bootstrap-release.nds`
   - **自作ソフト：**`sd:/_nds/nds-bootstrap-hb-release.nds`
1. `create forwarder`を選択し、ROMの場所に移動します

目的のフォワーダーをすべて作成するまで、その7と8を繰り返します。
- 同じタイプのROMを使用している場合は、ターゲットのbootstrapを再設定する必要はありません

すべてのROMのフォワーダーをインストールしたら、本体を再起動し、hiyaCFWを起動します。 ギフトボックスに表示されるはずです。
