---
lang: ru-RU
layout: wiki
section: ds-index
category: reference
title: Эмуляторы на DS
description: Справочник по эмуляторам на DS
---

Существует множество эмуляторов для DS и DSi. На этой странице представлено исчерпывающее описание множества эмуляторов и загрузчиков, входящих в состав TWiLight Menu++.

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
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[имя rom-a].srm`[^6]                                                         |
| Intellivision           | [Nintellivision][nintellivision]                 | `.int`                                 |                                                                               |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[имя rom-a].sms.sav`                                                         |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                   | `.ngp`, `.ngc`                         | `/data/ngpds/[имя rom-a].ngp.fla`                                             |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]           | `.fv`                                  |                                                                               |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[имя rom-a].sav`                                                             |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                                               |
| Rocket Video            | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                                               |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]               | `.sg`                                  |                                                                               |
| Sord M5                 | [ColecoDS][colecods]                             | `.m5`                                  |                                                                               |
| SNES                    | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[имя rom-a].srm`                                                             |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                           | `.ws`, `.wsc`                          | ???                                                                           |
| Xvid                    | [tuna-viDS][tunavids]                            | `.avi`                                 |                                                                               |

- Примечание -
{:footnotes}

Это лишь рекомендуемые эмуляторы и загрузчики, которые присутствуют в TWiLight Menu++. Существуют и другие эмуляторы для этих консолей (например, lolSnes, Gbaemu4ds и т. д.)

### Другие эмуляторы для DS

| Система | Загрузчик      | Расширение | Файл сохранения |
| ------- | -------------- | ---------- | --------------- |
| Neo Geo | [neoDS][neods] | `.neo`     | (неизвестен)    |

## Заметки о конкретных эмуляторах
### RAM диск
- Чтобы **jEnesisDS** или **neoDS** работали на SD-карте DSi, вам придется использовать RAM-диск с nds-bootstrap
   - Создатель RAM-дисков для jEnesisDS встроен в TWiLight Menu++. Вам потребуется создать собственный RAM-диск для neoDS. Как это сделать, см. [Создание RAM-дисков](../twilightmenu/creating-ram-disks)
   - Причина, по которой используются RAM-диски, заключается в том, что ARM7 этих эмуляторов не работает должным образом

### Сравнение PicoDriveTWL и jEnesisDS
- **PicoDriveTWL**
   - Был создан для DSi
   - Не требует nds-bootstrap RAM дисков
      - Сохранение поддерживается на SD-картах DSi
      - Более быстрое время загрузки между TWiLight Menu++ и эмулятором на SD-карте DSi
   - Поддерживает аргументы
   - Ограничение - 3 МБ на **флэш-картридже**
      - Использует преимущества дополнительной оперативной памяти DSi или DS Memory Pak
   - Звук не эмулируется
   - Частота кадров очень низкая

- **jEnesisDS**
   - Режим DS
      - Требуется RAM-диск nds-bootstrap для использования SD-карт DSi
      - Сохранение недоступно для SD-карт DSi
   - Загрузка занимает некоторое время
   - Отсутствие поддержки аргументов
   - Ограничение составляет 3 МБ на всех платформах (из-за загрузки ромов в оперативную память)
      - Расширенная память DSi или DS Memory Pak не задействованы
      - Существует патч для Sonic 3 & Knuckles, который удаляет мультиплеер, уменьшая размер
   - Эмуляция звука
   - Частота кадров плавная


<!-- Links for tables -->
[^1]: Текстовые файлы, содержащие путь к домашнему приложению DS и аргументы для его запуска, см. [README nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) для получения дополнительной информации
[^2]: Только для розничных ROM-ов, у homebrew нет специфичных файлов сохранения
[^7]: Только при работе в режиме B4DS
[^3]: Работает только с флеш-картриджем SuperCard DSTWO, так как внутри него находится дополнительная вычислительная мощность и оперативная память
[^4]: При работе в режиме DSi возможно использовать ЦПОС (DSP) для улучшения звука
[^5]: Требуется флti-картридж для Slot-2, поэтому это работает только на DS Phat и DS Lite
[^6]: jEnesis может сохранять, только если запущен с флеш-картриджа, а PicoDriveTWL может сохранять и будучи запущенным с SD карты и с флеш-картриджа

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
