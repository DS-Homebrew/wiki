---
lang: ja-JP
layout: wiki
section: gbarunner2
title: GBA BIOS情報
description: GBA BIOSとそのダンプ方法に関する情報
---

GBARunner2がタイトルを実行するためには、GBA BIOS必要があります。 GBARunner2の新しいビルド（TWiLight Menu++の最新リリースに付属）には、[NotmattのオープンソースBIOS](https://github.com/Normmatt/gba_bios)が組み込まれています。 しかし、正確なコピーではないので、公式のBIOSのダンプを使用すると、互換性が向上します。 以下のいずれかの方法で、公式のBIOSをダンプすることができます。

### ダンプガイド

- [Wii(Familyエディション以外)/ゲームキューブ+リンクケーブルダンパー](https://github.com/FIX94/gba-link-cable-dumper)
- [ほとんどのバーチャルコンソールタイトルを使用する3DS](https://glazedbelmont.github.io/gbabiosdump/#virtual-console-title-from-a-3ds)（GBAまたはニンテンドー以外（ゲームギア）のバーチャルコンソールタイトルは使用できません）
- [GBAまたはDS Phat・LiteとGBAフラッシュカートリッジ](https://glazedbelmont.github.io/gbabiosdump/#gameboy-advance-sp-micro-ds-ds-lite)

GBARunner2がそれを読むため、BIOSをダンプした後に`bios.bin`に名前を変更する必要があり、`sd:/`、`sd:/gba/`または`sd:/_gba/`に配置してください。

BIOSが適切なダンプであるかどうかは、以下のチェックサムと比較することで確認できます。

GBA/GBA SP/ゲームボーイミクロ/ゲームボーイプレーヤー：
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`

DS/DS Lite/3DSファミリー：
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`

ファイルチェックサムを取得する方法がわからない場合は、[オンラインチェックサム計算機](https://emn178.github.io/online-tools/crc32_checksum.html)を使用できます。
