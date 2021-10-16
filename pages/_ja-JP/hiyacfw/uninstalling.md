---
lang: ja-JP
layout: wiki
section: hiyacfw
title: アンインストール
long_title: HiyaCFWのアンインストール
description: ニンテンドーDSiからhiyaCFWをアンインストールする方法
---

hiyaCFWはSDカード上にのみ存在し、NAND上には存在しません。 その前に、保存したいSDNANDからセーブデータをバックアップしてください。 [dsi.cfw.guide](https://dsi.cfw.guide)の[DSiWare Backups](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional)ガイドのSection IIIに従って学ぶことができます。

### アンインストール
1. `hiya.dsi`をSDカードのルートから削除
1. `hiya`フォルダを削除
1. `import`、`photo`、`progress`、`shared1`、`shared2`、`sys`、`title`、`ticket`、`tmp`フォルダを削除

### Unlaunch設定の変更

UnlaunchでhiyaCFWを自動起動に設定した場合は、使わなくなった今、この設定を変更するとことができます。

1. ニンテンドーDSiにSDカードを挿入して、<kbd class="face">A</kbd>と<kbd class="face">B</kbd>を押したまま本体を起動
   - UnlaunchのFilemenuを開きます
1. `OPTIONS`にアクセスし、`NO BUTTON`を希望のアプリケーションに設定
   - システムNANDを自動起動させたい場合は、`Launcher`というアプリに設定
   - TWiLight Menu++を自動起動させたい場合は、`BOOT.NDS`というファイルを選択
1. `SAVE & EXIT`を選択
