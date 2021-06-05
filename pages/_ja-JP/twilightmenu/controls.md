---
lang: ja-JP
layout: wiki
section: twilightmenu
category: other
title: コントロール
long_title: TWiLight Menu++のコントロール
description: TWiLight Menu++を使うためのコントロール
---

#### ニンテンドーDSi、ニンテンドー3DS、セガサターン、Homebrew Launcherのテーマ
- <kbd>左</kbd>・<kbd>右</kbd>：ゲーム・アプリの選択
- <kbd class="face">A</kbd>・<kbd>START</kbd>：ゲーム・アプリを起動する
- <kbd class="l">L</kbd>・<kbd class="r">R</kbd>または<kbd>SELECT</kbd>+<kbd>左</kbd>・<kbd>右</kbd>：ページを切り替える
- （DSi・サターン・HBLのテーマ）<kbd>SELECT</kbd>+<kbd>上</kbd>・<kbd>下</kbd>してから、<kbd>SELECT</kbd>を離します
- <kbd class="face">Y</kbd>：ゲームごとの設定
   - <kbd class="face">X</kbd>：チートメニュー
      - <kbd class="face">A</kbd>：チートを切り替える
      - <kbd class="face">B</kbd>：チートメニューを終了する
      - <kbd class="face">X</kbd>：保存してチートメニューを終了する
      - <kbd class="face">Y</kbd>：チートの説明を表示する
      - <kbd class="l">L</kbd>：すべてのチートを無効にする
- <kbd class="face">X</kbd>：ゲームの削除・非表示
- （DSi・サターン・HBLのテーマ）<kbd>SELECT</kbd>：SELECTメニューまたはDSクラシックメニュー（システムメニュー、TWiLight Menu++の設定、GBAモードにアクセスできます）

#### R4テーマ
- <kbd>上</kbd>・<kbd>下</kbd>：ゲーム・アプリの選択
- <kbd class="face">A</kbd>：ゲーム・アプリを起動する
- <kbd class="l">L</kbd>：SDカードとフラッシュカードを切り替える
- <kbd class="face">Y</kbd>：ゲームごとの設定
   - <kbd class="face">X</kbd>：チートメニュー
      - <kbd class="face">A</kbd>：チートを切り替える
      - <kbd class="face">B</kbd>：チートメニューを終了する
      - <kbd class="face">X</kbd>：保存してチートメニューを終了する
      - <kbd class="face">Y</kbd>：チートの説明を表示する
      - <kbd class="l">L</kbd>：すべてのチートを無効にする

#### DS(i) ROM（nds-bootstrapを使って）
これらはDSiウェアには適用されません。
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>上</kbd> + <kbd class="face">X</kbd>を1秒間押して：画面を入れ替え
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>下</kbd> + <kbd class="face">A</kbd>を3秒間押して：`ramDump.bin`として` sd:/_nds/nds-bootstrap`にRAMをダンプする
- 2秒ために<kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>下</kbd> + <kbd class="face">B</kbd>：TWiLight Menu++に戻る
- <kbd class="l">L</kbd> + <kbd>下</kbd> + <kbd>SELECT</kbd>：ゲーム内のメニューを開く
   - RAMビューアー
      - <kbd>上</kbd>・<kbd>下</kbd>：スクロール
      - <kbd>左</kbd>・<kbd>右</kbd>：高速のスクロール
      - <kbd class="face">A</kbd>：RAMエディターに入る
      - <kbd class="face">B</kbd>：ゲーム内のメニューに戻る
      - <kbd class="face">Y</kbd>：ジャンプするアドレスを指定
        - <kbd>上</kbd>・<kbd>下</kbd>：選択される値を増やす・減らす
        - <kbd>左</kbd>・<kbd>右</kbd>：値を選択
        - <kbd class="face">A</kbd>・<kbd class="face">B</kbd>：RAMビューアー・エディターを指定されたアドレスに戻る
   - RAMエディター
      - <kbd>上</kbd>・<kbd>下</kbd>・<kbd>左</kbd>・<kbd>右</kbd>：値を選択
      - <kbd class="face">A</kbd>：選択される値を変更
         - <kbd>上</kbd>・<kbd>下</kbd>：値を1hで増やす・減らす
         - <kbd>左</kbd>・<kbd>右</kbd>：値を10hで増やす・減らす
         - <kbd class="face">A</kbd>・<kbd class="face">B</kbd>：値の変更を終了
      - <kbd class="face">B</kbd>：RAMビューアーに戻る
      - <kbd class="face">Y</kbd>：ジャンプするアドレスを指定
        - <kbd>上</kbd>・<kbd>下</kbd>：選択される値を増やす・減らす
        - <kbd>左</kbd>・<kbd>右</kbd>：値を選択
        - <kbd class="face">A</kbd>・<kbd class="face">B</kbd>：RAMビューアー・エディターを指定されたアドレスに戻る
- ゲーム内のメニューはDSi対応・専用のゲームではアクセスできませんため、そのゲームにホットキーを使おうとするとゲームを終了します
- B4DSモードで画面入れ替えのみが動作します、他のボタンコンボは動作しません
- TWiLight Menu++に戻ると、一部の古い3DSモデルでは動作しない可能性があります

#### 起動時のショートカット
これらは、TWiLight Menu++のスプラッシュ画面で、またはニンテンドーDSiスプラッシュ画面の直後に押します必要があります。

- <kbd>SELECT</kbd>：設定を開く
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>：すべてのTWiLight Menu++設定をリセットする
- <kbd class="face">B</kbd>：最後に実行したROMを起動する
