---
lang: ru-RU
layout: wiki
section: ds-index
category: reference
title: Эмуляторы на DS
description: Справочник по эмуляторам на DS
---

Существует множество эмуляторов для DS и DSi. This page provides a comprehensive explanation on the many emulators and loaders bundled into **TW**i**L**ight Menu++.

### Список систем, поддерживаемых TWiLight Menu++

| Система                 | Загрузчик                                        | Расширение                             | Файл сохранения                                                               |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | ----------------------------------------------------------------------------- |
| ARGV[^1]                | Нативный                                         | `.argv`                                |                                                                               |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                                                               |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                                               |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                                               |
| Atari XEGS              | [A8DS][a8ds]                                     | `.xex`, `.atr`                         |                                                                               |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]               | `.col`                                 |                                                                               |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[имя rom-a].sav`[^2]                                                   |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[имя rom-a].pub`, `saves/[имя rom-a].prv`, `saves/[имя rom-a].sav`[^7] |
| Плагин DSTWO            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                                               |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[имя rom-a].sav`                                                             |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], нативный[^5]       | `.agb`, `.gba`, `.mb`                  | `[имя rom-a].sav`                                                             |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[имя rom-a].gg.sav`                                                          |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`, `.md`                          | `[имя rom-a].srm`[^6]                                                         |
| Intellivision           | [Nintellivision][nintellivision]                 | `.int`                                 |                                                                               |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[имя rom-a].sms.sav`                                                         |
| MSX                     | [ColecoDS][colecods]                             | `.msx`                                 | ???                                                                           |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                   | `.ngp`, `.ngc`                         | `/data/ngpds/[имя rom-a].ngp.fla`                                             |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]           | `.fv`                                  |                                                                               |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[имя rom-a].sav`                                                             |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                                               |
| Rocket Video            | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                                               |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]               | `.sg`                                  |                                                                               |
| Sord M5                 | [ColecoDS][colecods]                             | `.m5`                                  |                                                                               |
| SNES                    | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]                                                          |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                           | `.ws`, `.wsc`                          | ???                                                                           |
| Xvid                    | [tuna-viDS][tunavids]                            | `.avi`                                 |                                                                               |

Это лишь рекомендуемые эмуляторы и загрузчики, которые присутствуют в TWiLight Menu++. Существуют и другие эмуляторы для этих консолей (например, lolSnes, Gbaemu4ds и т. д.)

### Другие эмуляторы для DS

| Система | Загрузчик      | Расширение | Файл сохранения |
| ------- | -------------- | ---------- | --------------- |
| Neo Geo | [neoDS][neods] | `.neo`     | (неизвестен)    |

### BIOS usage

| Система             | Загрузчик                            | Path             | Required  |
| ------------------- | ------------------------------------ | ---------------- | --------- |
| Game Boy (Color)    | [GameYob][gameyob][^9]               | User-set         | No        |
| Game Boy Advance    | [GBARunner2][gbarunner2], native[^5] | `/_gba/bios.bin` | See [^10] |
| Famicom Disk System | [nesDS][nesds]                       | `/disksys.rom`   | Yes       |

- Примечание -
{:footnotes}

## Заметки о конкретных эмуляторах

### RAM диск
- In order for **jEnesisDS**, **SNEmulDS** (legacy version), or **neoDS** to work on the DSi SD card, you'll have to use a RAM disk with nds-bootstrap
    - A RAM disk maker for jEnesisDS and SNEmulDS (legacy version) is built into nds-bootstrap. Вам потребуется создать собственный RAM-диск для neoDS. Как это сделать, см. [Создание RAM-дисков](../twilightmenu/creating-ram-disks)
    - Причина, по которой используются RAM-диски, заключается в том, что ARM7 этих эмуляторов не работает должным образом

### Сравнение PicoDriveTWL и jEnesisDS
- **PicoDriveTWL**
    - Был создан для DSi
    - Не требует nds-bootstrap RAM дисков
        - Сохранение поддерживается на SD-картах DSi
        - Более быстрое время загрузки между TWiLight Menu++ и эмулятором на SD-карте DSi
    - Поддерживает аргументы
    - Ограничение - 3 МБ на **флэш-картридже**
        - Takes advantage of the DSi extra RAM or DS Memory Expansion Pak to extend this limit
    - Звук не эмулируется
    - Частота кадров очень низкая

- **jEnesisDS**
    - Режим DS
        - Требуется RAM-диск nds-bootstrap для использования SD-карт DSi
        - Сохранение недоступно для SD-карт DSi
    - Загрузка занимает некоторое время
    - Отсутствие поддержки аргументов
    - Ограничение составляет 3 МБ на всех платформах (из-за загрузки ромов в оперативную память)
        - No DS Memory Expansion Pak or DSi Extended Memory support
        - There is a patch for *Sonic 3 & Knuckles* that removes the multiplayer, getting the size count down
    - Эмуляция звука
    - Частота кадров плавная


<!-- Links for tables -->
[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^7]: Только при работе в режиме B4DS
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the flashcard
[^4]: При работе в режиме DSi возможно использовать ЦПОС (DSP) для улучшения звука
[^5]: Requires a Slot-2 flashcart and thus only works on DS Phat and DS Lite
[^6]: jEnesis может сохранять, только если запущен с флеш-картриджа, а PicoDriveTWL может сохранять и будучи запущенным с SD карты и с флеш-картриджа
[^8]: Saving requires a flashcard or a new version of the emulator (legacy version is used by default)
[^9]: Has a bug where the BIOS screen is not shown when starting a game via arguments
[^10]: Not required for native, required for a few games with GBARunner2, required for all games with GBARunner3

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
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
