---
lang: ja-JP
layout: faq
section: hiyacfw
title: よくある質問とトラブルシューティング
long_title: hiyaCFWのよくある質問とトラブルシューティング
description: hiyaCFWのよくある質問とトラブルシューティング
---

#### hiyaCFWのSDNANDにアプリまたはDSiウェアをインストールするにはどうすればいいですか？
You will need to use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to install apps to the SDNAND, but older DS homebrew may not be compatible.
- ゲームカードのダンプをインストールしたい場合は、[フォワーダー](../ds-index/forwarders)を使用する必要があります

#### #-2435-8325エラーコードを取得するのはなぜですか？
ニンテンドーDSiが起動時にこのフォーマット（#が数字である）でエラーが表示された場合は、つまりブートステージ2はSDNANDに何か問題があると考えているということです。 これは通常に、[hiyaCFWを再インストールする](installing)ことによって修正されます。

#### hiyaCFWの起動時に「エラーが発生しました」というメッセージが表示されるのはなぜですか？
ニンテンドーDSiメニューが問題を検出すると、通常にこの一般的なエラーメッセージが表示されます、原因のいくつかは：

##### 空き容量のバグ
大容量ストレージデバイスの空き容量を確認する時に、ニンテンドーDSiメニューにバグがあります。 これは実物のNANDでは発生しませんが（チップはわずか256 MiBなので）、SDカードを使用している時に発生する可能性があります。

何が動作する・しないは、一つ置きの2つのギガバイトの範囲に依存します。 例えば、0〜2GiBの空き容量は動作しますが、2〜4GiBは動作しません。 同じことは、SDカードの容量になるまで、4〜6GiB対6〜8GiBなどに当てはまります。

We made the brand new launcher patches which fix the free space bug. To work around this, please ensure that you are running the latest TWLMagician when installing hiyaCFW. If not, please [reinstall hiyaCFW](installing).

##### 40タイトル以上
ニンテンドーDSiメニューには39タイトルの制限があります。 If you have more than that, delete some from the folders in `sd:/title` or use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to uninstall them.

##### DSiWareの使用する容量が多すぎます
`00030004`フォルダには、DSiWare用の200ブロック（25MB）の制限もあります。 This can be worked around by installing DSiWare as system apps using [NTM](https://github.com/Epicpkmn11/NTM/releases/latest).

##### 無効なタイトル
hiyaCFWにタイトルを追加する時に考慮する必要があることがいくつかあります：
- [フォワーダー](../ds-index/forwarders)を使用せずにゲームカードのダンプを実行することができません
- 自作ソフトは、ニンテンドーDSiメニューから動作するには最新のツールを使用して正しく構築する必要があります
