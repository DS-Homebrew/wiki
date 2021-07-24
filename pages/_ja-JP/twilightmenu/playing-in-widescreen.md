---
lang: ja-JP
layout: wiki
section: twilightmenu
category: other
title: ワイドスクリーンでプレイ
description: ニンテンドー3DSでTWiLight Menu++をワイドスクリーンでプレイする方法
---

ニンテンドー3DS・2DS本体が必要です。
{:.alert .alert-info}

### 準備
- Lumaの`boot.firm`がSDルート上にあることを確認してください

### インストール
1. [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia)をダウンロードし、`TWPatch.cia`をSDカードにコピーします（[GBAtempスレッド](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/)）
1. FBIを使って、`TWPatch.cia`をインストールします
   - また、前の2つの手順ではなく、Universal-Updaterを使ってTWPatchをインストールすることもできます
1. ホームメニューに戻り、TWPatchを起動します
1. <kbd class="face">Y</kbd>+<kbd class="face">B</kbd>を長押しし、パッチメニューを開き、` Widescreen patch (384x240 16:10)`を有効にします
1. （任意！） ピクセス化されていないワイドスクリーンのために、`GPU scaling (blurry, no filters)`を有効にします
1. <kbd class="face">B</kbd>を押してパッチメニューを終了します
1. <kbd>START</kbd>を押して、ワイドスクリーン付きの`TwlBg.cxi`ファイルを生成します
   - 上画面はワイドパッチが有効であることを示していない場合は、手順3から再度開始します
1. `TwlBg.cxi`を`sd:/luma/sysmodules/`から`sd:/_nds/TWiLightMenu/TwlBg/`（`TwlBg`フォルダが既存しない場合は、それを作成します）に移動し、ファイル名を`Widescreen.cxi`に変更します
1. <kbd>SELECT</kbd>を押したまま3DSを再起動し、Luma3DSの設定を開きます
1. `external FIRMs and modules`を有効にして、<kbd>START</kbd>を押して保存して終了します
1. TWiLight Menu++設定を開き、`ゲームとアプリ設定`ページに切り替え、`画面アスペクト比`を`16:10`に設定します
   - これはゲームごとにも行うことができます

すべて完了しました！ ワイドスクリーンでDSゲームをお楽しみください！

**注:**
1. ワイドスクリーンがグリッチに見えないようにするには、TWLMenu++を起動する時に<kbd>START</kbd>または<kbd>SELECT</kbd>を長押ししない
1. すべてのゲームがワイドスクリーン対応ではありません。 [ワイドスクリーン付きゲームのリストを作成しました](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. このガイドに従ってワイドスクリーン対応のゲームを起動した後、TWL_FIRM（TWLMenu++のGUIを含む）のすべてでワイドスクリーンモードでなってしまう場合は、 `sd:/luma/sysmodules/`に`TwlBg.cxi`を削除して、TWiLight Menu++を[アンインストールして](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds)[再インストールして](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds)、以上のガイドに再従います
