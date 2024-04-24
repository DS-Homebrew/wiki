---
lang: id-ID
layout: wiki
section: ds-index
category: reference
title: Emulator di konsol DS
description: Rujukan terkait Emulator untuk di DS
---

Tersedia banyak emulator yang dibuat untuk DS dan DSi. Laman ini akan menjelaskan berbagai emulator dan pemuat yang sekemas di **TW**i**L**ight Menu++.

### Daftar sistem yang didukung TWiLight Menu++

| Format                  | Pemuat                                            | Ekstensi                               | Simpanan                                                                   |
| ----------------------- | ------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| ARGV[^1]                | Lokal                                             | `.argv`                                |                                                                            |
| Atari 2600              | [StellaDS][stellads]                              | `.a26`                                 |                                                                            |
| Atari 5200              | [A5200DS][a5200ds]                                | `.a52`                                 |                                                                            |
| Atari 7800              | [A7800DS][a7800ds]                                | `.a78`                                 |                                                                            |
| Atari XEGS              | [A8DS][a8ds]                                      | `.xex`, `.atr`                         |                                                                            |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]                | `.col`                                 |                                                                            |
| DS                      | [nds-bootstrap][ndsbs], *kernel flashcard*, lokal | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nama rom].sav`[^2]                                                 |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]      | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nama rom].pub`, `saves/[nama rom].prv`, `saves/[nama rom].sav`[^7] |
| Colok-masuk DSTWO       | [DSTWO][dstwo][^3]                                | `.plg`                                 |                                                                            |
| Game Boy (Color)        | [GameYob][gameyob]                                | `.gb`, `.sgb`, `.gbc`                  | `[nama rom].sav`                                                           |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], lokal[^5]           | `.agb`, `.gba`, `.mb`                  | `[nama rom].sav`                                                           |
| Game Gear               | [S8DS][s8ds]                                      | `.gg`                                  | `[nama rom].gg.sav`                                                        |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]       | `.gen`, `.md`                          | `[nama rom].srm`[^6]                                                       |
| Intellivision           | [Nintellivision][nintellivision]                  | `.int`                                 |                                                                            |
| Master System           | [S8DS][s8ds]                                      | `.sms`                                 | `[nama rom].sms.sav`                                                       |
| MSX                     | [ColecoDS][colecods]                              | `.msx`                                 | ???                                                                        |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                    | `.ngp`, `.ngc`                         | `/data/ngpds/[nama rom].ngp.fla`                                           |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]            | `.fv`                                  |                                                                            |
| NES/Famicom             | [nesDS][nesds]                                    | `.nes`, `.fds`                         | `[nama rom].sav`                                                           |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                          | `.pce`                                 |                                                                            |
| Rocket Video            | [Rocket Video Player][rvidplayer]                 | `.rvid`                                |                                                                            |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]                | `.sg`                                  |                                                                            |
| Sord M5                 | [ColecoDS][colecods]                              | `.m5`                                  |                                                                            |
| SNES                    | [SNEmulDS][snemulds]                              | `.smc`, `.sfc`                         | `[nama rom].srm`                                                           |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                            | `.ws`, `.wsc`                          | ???                                                                        |
| Xvid                    | [tuna-viDS][tunavids]                             | `.avi`                                 |                                                                            |

- Catatan kaki -
{:footnotes}

Ini semua jenis emulator dan pemuat anjuran yang disediakan di TWiLight Menu++. Masih ada emulator lain untuk konsol ini (seperti lolSnes, Gbaemu4ds, dll.)

### Emulator lain untuk DS

| Format  | Pemuat         | Ekstensi | Simpanan        |
| ------- | -------------- | -------- | --------------- |
| Neo Geo | [neoDS][neods] | `.neo`   | (tak diketahui) |

## Catatan pada emulator tertentu
### *RAM Disk*
- Agar **jEnesisDS** atau **neoDS** berfungsi di kartu SD DSi, diperlukan *RAM disk* dengan nds-bootstrap
   - Pembuat *RAM disk* untuk jEnesisDS sudah ada di TWiLight Menu++. Tapi *RAM disk* neoDS harus dibuat sendiri. Lihat laman [Membuat *RAM Disk*](../twilightmenu/creating-ram-disks) untuk caranya
   - *RAM disk* ini diperlukan karena kail ARM7 emulator tersebut tidak berfungsi baik

### Perbandingan antara PicoDriveTWL dan jEnesisDS
- **PicoDriveTWL**
   - Dibuat khusus DSi
   - Tidak memerlukan *RAM Disk* nds-bootstrap
      - Mampu menyimpan di kartu SD DSi
      - Waktu pemuatan TWiLight Menu++ ke emulator lebih cepat di kartu SD DSi
   - Mendukung *argument*
   - Batasnya 3 MB di ***Flashcard***
      - Membaca RAM tambahan DSi atau DS Memory Pak untuk memperluas batas
   - Tidak ada emulasi suara
   - Laju bingkai sangat patah-patah

- **jEnesisDS**
   - Mode DS
      - Perlu *RAM disk* nds-bootstrap untuk digunakan di kartu SD DSi
      - Tidak bisa menyimpan di kartu SD DSi
   - Pemuatan agak lama
   - Tidak mendukung *argument*
   - Batasnya 3 MB di semua pelantar (karena berkas dimuat ke RAM)
      - Tidak mendukung DS Memory Pak atau Memori Tambahan DSi
      - Tersedia tambalan Sonic 3 & Knuckles yang menghapus main jamak untuk mengurangi ukuran
   - Ada emulasi Suara
   - Laju bingkai mulus


<!-- Links for tables -->
[^1]: Untuk berkas teks yang berisi jalur ke *homebrew* DS dan *argument* perintah luncur, lihat [README nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) untuk info lanjut
[^2]: Hanya untuk ROM retail, karena simpanan *homebrew* berbeda-beda
[^7]: Hanya saat dijalankan di mode B4DS
[^3]: Hanya berfungsi dari *flashcard* SuperCard DSTWO karena ada daya pengolahan dan RAM tambahan di dalamnya
[^4]: Saat dijalakan di Mode DSi, DSP akan digunakan agar suara lebih baik
[^5]: Perlu *flashcart* Slot-2 yang berarti hanya bisa di DS Phat dan DS Lite
[^6]: jEnesis bisa menyimpan JIKA dijalankan dari *flashcard*, untuk PicoDriveTWL bisa dari kartu SD dan *flashcard*

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
