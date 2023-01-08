---
lang: ja-JP
layout: faq
section: gbarunner2
title: よくある質問・トラブルシューティング
long_title: GBARunner2のよくある質問とトラブルシューティング
description: GBARunner2に関するよくある質問とトラブルシューティング
---

#### カスタムボーダーを作成・追加する方法
FrescoASFによる[このガイド](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing)を読んで手順に従います。

#### チートには対応していますか？
現在は非対応です。 その代わり、 [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/)を使って、GBA ROMにチートコードを恒久的に埋め込むことができます。

#### GBARunner2のどのビルドを使うべきですか？
通常は、TWiLight Menu++に付属しているビルドで十分です。 GBARunner の様々なビルドの詳細については、 [Builds wiki ページ](https://wiki.ds-homebrew.com/gbarunner2/builds)を参照してください。

#### How do I use Wi-Fi link features?
You will need a build from the [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) branch to use the features. You can find detailed instructions on how to setup the builds on its [WikiTemp page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Why isn't RTC (Real Time Clock) supported in a ROM hack?
RTC is supported on a per-game basis. You will have to change the ROM's title ID to that of a game that supports RTC so that GBARunner2 will recognize it.

タイトルIDは、以下の方法で変更可能です。
1. <label for="file-input" class="form-label">GBA ROM ファイルを選択します：</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">希望するタイトルIDを入力します：</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">更新したファイルを保存します：</label> <input id="save" class="btn btn-secondary" type="button" value="保存" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### 互換性リストには動作すると書かれているのに、なぜROMが動作しないのですか？
GBARunner2の互換性リストは、主に互換性の高い公式GBA BIOSでテストされています。 公式GBA BIOSの入手方法については、 [GBA BIOS Info](https://wiki.ds-homebrew.com/gbarunner2/bios) を参照してください。

#### How do I fix duplicated layers at the bottom of the screen on 3DS?
This is a bug in TWLBg that is rather prevalent in GBARunner2. The only way to temporarily fix this is to restart GBARunner2.
- If applicable, you may be better off using other options for running GBA ROMs on 3DS, such as VC injects, open_agb_firm, or mGBA on n3DS models
