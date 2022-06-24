---
lang: ja-JP
layout: wiki
section: ds-index
category: reference
title: DS上のエミュレータ
description: DS上のエミュレータの参照
---

DSとDSiには多くのエミュレータがあります。 このページでは、TWiLight Menu++にバンドルされている多くのエミュレータやローダーについて、包括的な説明を提供します。

### TWiLight Menu++で対応されているシステムのリスト

| 形式                   | ローダー                                         | 拡張子                                    | セーブファイル                                    |
| -------------------- | -------------------------------------------- | -------------------------------------- | ------------------------------------------ |
| ARGV[^1]             | ネイティブ                                        | `.argv`                                |                                            |
| Atari 2600           | [StellaDS][stellads]                         | `.a26`                                 |                                            |
| Atari 5200           | [A5200DS][a5200ds]                           | `.a52`                                 |                                            |
| Atari 7800           | [A7800DS][a7800ds]                           | `.a78`                                 |                                            |
| Atari XEGS           | [XEGS-DS][xegs-ds]                           | `.xex`, `.atr`                         |                                            |
| コレコビジョン              | [S8DS][s8ds], [ColecoDS][colecods]           | `.col`                                 |                                            |
| DS                   | [nds-bootstrap][ndsbs], フラッシュカードのカーネル, ネイティブ | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[ROMの名前].sav`[^2]                   |
| DSiウェア               | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs] | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[ROMの名前].pub`, `saves/[ROMの名前].prv` |
| DSTWOプラグイン           | [DSTWO][dstwo][^3]                           | `.plg`                                 |                                            |
| ゲームボーイ（カラー）          | [GameYob][gameyob]                           | `.gb`, `.sgb`, `.gbc`                  | `[ROMの名前].sav`                             |
| ゲームボーイアドバンス          | [GBARunner2][gbarunner2][^4], ネイティブ[^5]      | `.agb`, `.gba`, `.mb`                  | `[ROMの名前].sav`                             |
| ゲームギア                | [S8DS][s8ds]                                 | `.gg`                                  | `[ROMの名前].gg.sav`                          |
| メガドライブ・Genesis       | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]  | `.gen`                                 | `[ROMの名前].srm`[^6]                         |
| インテレビジョン             | [Nintellivision][nintellivision]             | `.int`                                 |                                            |
| マスターシステム             | [S8DS][s8ds]                                 | `.sms`                                 | `[ROMの名前].sms.sav`                         |
| ネオジオポケット（カラー）        | [NGPDS][ngpds]                               | `.ngp`, `.ngc`                         | `/data/ngpds/[ROMの名前].ngp.fla`             |
| Fast Video           | 近日公開                                         | `.fv`                                  |                                            |
| ファミリーコンピュータ・NES      | [nesDS][nesds]                               | `.nes`, `.fds`                         | `[ROMの名前].sav`                             |
| PCエンジン・TurboGrafx-16 | [NitroGrafx][nitrografx]                     | `.pce`                                 |                                            |
| Rocket Video         | [Rocket Video Player][rvidplayer]            | `.rvid`                                |                                            |
| SG-1000              | [S8DS][s8ds], [ColecoDS][colecods]           | `.sg`                                  |                                            |
| SORD M5              | [ColecoDS][colecods]                         | `.m5`                                  |                                            |
| スーパーファミコン            | [SNEmulDS][snemulds]                         | `.smc`, `.sfc`                         | `[ROMの名前].srm`                             |
| ワンダースワン（カラー）         | [NitroSwan][nitroswan]                       | `.ws`, `.wsc`                          | ???                                        |

- Footnotes -
{:footnotes}

これらは、TWiLight Menu++にあるおすすめされるエミュレータとローダーだけです。 これらの本体には他のエミュレータ（lolSnesやGbaemu4dsなど）があります。

### DSの他のエミュレータ

| 形式    | ローダー           | 拡張子    | セーブファイル |
| ----- | -------------- | ------ | ------- |
| ネオ・ジオ | [neoDS][neods] | `.neo` | (不明)    |

## 特定のエミュレータに関する注意
### RAMディスク
- DSiのSDカードで**jEnesisDS**または**neoDS**を機能するには、nds-bootstrapでRAMディスクを使用する必要があります
   - jEnesisDS用のRAMディスクメーカーは、TWiLight Menu++に組み込まれています neoDS用に独自のRAMディスクを作成する必要があります。 その方法については、[RAMディスクを作成](../twilightmenu/creating-ram-disks)を参照してください
   - RAMディスクが使用されている理由は、これらのエミュレータのARM7フックが正しく動作しないためです

### PicoDriveTWLとjEnesisDSの比較
- **PicoDriveTWL**
   - DSi用に作られました
   - nds-bootstrapのRAMディスクは必要ありません
      - DSiのSDカードで保存するがサポートされています
      - DSiのSDカードのエミュレータにTWiLight Menu++間の読み込み時間を短縮します
   - 引数をサポート
   - **フラッシュカード**に制限は2.5MBです
      - この制限を延長するために、DSiの追加のRAMまたはDSメモリ拡張カートリッジを利用します
   - サウンドエミュレーションなし
   - フレームレートは非常に不安定です

- **jEnesisDS**
   - DSモード
      - DSiのSDカードにはnds-bootstrapのRAMディスクが必要です
      - DSiのSDカードに保存することができません
   - ロードに時間がかかります
   - 引数をサポートしません
   - 制限はすべてのプラットフォームで3MBです（ROMをRAM内に読み取りに起因します）
      - DSメモリ拡張カートリッジまたはDSi拡張メモリーサポートなし
      - ソニック3&ナックルズにはマルチプレイヤーを削除するパッチがあり、サイズを小さくします
   - サウンドエミュレーションあり
   - フレームレートは滑らかです


<!-- Links for tables -->
[^1]: DSの自作アプリへのパスとそれを起動する引数を含むテキストファイルです。詳細については、[nds-hb-menuのREADME](https://github.com/devkitPro/nds-hb-menu#passing-arguments)を参照してください
[^2]: 小売ROMのみ、自作ソフトには特定の保存ファイルがありません
[^3]: 追加の処理能力とRAMがフラッシュカード内にあるため、SuperCard DSTWOフラッシュカードでのみ機能します
[^4]: DSiモードで実行している場合は、DSPを使って良いサウンドを得ることができます
[^5]: Slot-2フラッシュカートが必要なのでオリジナルのDSとDS Liteでのみ機能します
[^6]: jEnesisはフラッシュカードから実行している時にのみ保存できますが、PicoDriveTWLはSDカードとフラッシュカードから保存できます

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[ngpds]: https://github.com/FluBBaOfWard/NGPDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[nitroswan]: https://github.com/FluBBaOfWard/NitroSwan
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://github.com/FluBBaOfWard/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SnemulDS_-_Revival
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
