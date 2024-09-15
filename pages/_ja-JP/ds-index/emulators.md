---
lang: ja-JP
layout: wiki
section: ds-index
category: reference
title: DS上のエミュレータ
description: DS上のエミュレータの参照
---

DSとDSiには多くのエミュレータがあります。 This page provides a comprehensive explanation on the many emulators and loaders bundled into **TW**i**L**ight Menu++.

### TWiLight Menu++で対応されているシステムのリスト

| 形式                      | ローダー                                             | 拡張子                                    | セーブファイル                                                                    |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | -------------------------------------------------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                                                            |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                                                            |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                                            |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                                            |
| Atari XEGS              | [A8DS][a8ds]                                     | `.xex`, `.atr`                         |                                                                            |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]               | `.col`                                 |                                                                            |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]                                                 |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].pub`, `saves/[rom name].prv`, `saves/[rom name].sav`[^7] |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                                            |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                                                           |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                                                           |
| ゲームギア                   | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                                                        |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`, `.md`                          | `[rom name].srm`[^6]                                                       |
| インテレビジョン                | [Nintellivision][nintellivision]                 | `.int`                                 |                                                                            |
| マスターシステム                | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`                                                       |
| MSX                     | [ColecoDS][colecods]                             | `.msx`                                 | ???                                                                        |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                   | `.ngp`, `.ngc`                         | `/data/ngpds/[rom name].ngp.fla`                                           |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]           | `.fv`                                  |                                                                            |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                                                           |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                                            |
| Rocket Video            | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                                            |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]               | `.sg`                                  |                                                                            |
| SORD M5                 | [ColecoDS][colecods]                             | `.m5`                                  |                                                                            |
| スーパーファミコン               | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`                                                           |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                           | `.ws`, `.wsc`                          | ???                                                                        |
| Xvid                    | [tuna-viDS][tunavids]                            | `.avi`                                 |                                                                            |

- Footnotes -
{:footnotes}

These are just recommended emulators and loaders that are present in TWiLight Menu++. There are other emulators for these consoles (such as lolSnes, Gbaemu4ds, etc.)

### DSの他のエミュレータ

| 形式      | ローダー           | 拡張子    | セーブファイル   |
| ------- | -------------- | ------ | --------- |
| Neo Geo | [neoDS][neods] | `.neo` | (unknown) |

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
    - Limit is 3 MB on a **Flashcard**
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
[^7]: Only when running in B4DS mode
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the flashcard
[^4]: When running in DSi Mode, it can use the DSP for better sound
[^5]: Requires a Slot-2 flashcart and thus only works on DS Phat and DS Lite
[^6]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[a8ds]: https://github.com/wavemotion-dave/A8DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
[fastvideodsplayer]: https://github.com/Gericom/FastVideoDSPlayer
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
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
