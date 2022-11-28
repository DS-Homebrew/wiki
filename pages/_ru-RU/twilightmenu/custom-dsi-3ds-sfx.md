---
lang: ru-RU
layout: wiki
section: twilightmenu
category: customization
title: Скины DSi/3DS - пользовательские эффекты
description: Как использовать пользовательскую фоновую музыку и звуковые эффекты в скинах DSi и 3DS для TWiLight Menu++
---

TWiLight Menu++ поддерживает пользовательские звуковые файлы в темах. Поместите звуковые файлы в папку `sound`, находящуюся в папке темы, например, для темы `white` вы поместите файлы в `themes/white/sound/sfx.bin` и `themes/white/sound/bgm.pcm.raw` соответственно. Оба файла необязательны, если `bmg.pcm.raw` отсутствует, будет использована музыка по умолчанию. То же самое произойдет со звуковыми эффектами, если `sfx.bin` отсутствует.

Эти инструкции предполагают, что у вас установлен devkitPro с mmutil. Вы можете получить devkitPro на [сайте devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Банк звуковых эффектов
The sound effect bank (`sfx.bin`) contains sound effects such as the icon select sound, etc.

| Файл        | Описание                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| startup.wav | Воспроизводится при запуске. Более подробную информацию смотри в разделе [Звук запуска](#startup-sound) |
| back.wav    | Назад                                                                                                   |
| launch.wav  | Воспроизводится при запуске игры                                                                        |
| select.wav  | Воспроизводится при перемещении курсора в настройках игры и SELECT меню                                 |
| wrong.wav   | Воспроизводится при достижении конца страницы                                                           |
| switch.wav  | Воспроизводится при переключении страниц                                                                |
| stop.wav    | Воспроизводится в теме DSi, когда курсор перестает двигаться                                            |

Все перечисленные выше файлы необходимы для создания пользовательского банка звуковых эффектов. Если вы хотите, чтобы звук был отключен, можно использовать беззвучный аудиофайл. Формат `.wav` является обязательным, а кодировка *должна быть* PCM.

[This file](/assets/files/sfx-example.zip) includes the sounds used in the default DSi and 3DS themes, along with the makefile used to build them into a valid sfx.bin file. Feel free to edit and change the sound files to make a custom sound effect bank.

To build your custom sound effect bank, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command. You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### Звук при запуске
В то время как другие звуковые эффекты будут работать с любым WAV-файлом с кодировкой PCM, звук запуска должен быть в определенном формате, иначе будет наблюдаться разрыв между остановкой звука, воспроизводимого при запуске, и началом фоновой музыки.

Файл startup.wav должен быть **16 бит 16 кГц**. Для конвертации в этот формат можно использовать, например, [Audacity](https://www.audacityteam.org/download/). После загрузки файла в Audacity измените **Project Rate (Hz)** на **16000**, затем нажмите **Shift+M**, и измените **Format** на **16-bit PCM**.

Если ваш файл в стерео формате, вам также следует перейти на страницу **Tracks > Mix > Mix Stereo to Mono**.

Вы должны установить `PlayStartupJingle=1` в файле `theme.ini` для воспроизведения джингла запуска.


## Фоновая музыка Меню
Фоновая музыка Меню должна быть **16 бит 16 кГц Монo** необработанный PCM файл. Ниже приведены два метода преобразования аудиофайлов в этот формат.

В отличие от sfx.bin, *bgm.pcm.raw* может быть сколь угодно большим.

### ffmpeg
Самый простой способ конвертировать музыку для использования в TWiLight Menu++ - запустить в терминале эту [ffmpeg](https://ffmpeg.org) команду:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Замените `[input file]` на имя файла, которого вы хотите конвертировать. Обычно это можно сделать, просто перетащив файл в нужное место окна терминала.

### Audacity
Если вы не хотите использовать командную строку, вы также можете конвертировать с помощью [Audacity](https://www.audacityteam.org/download/).

Для конвертирования аудио файла:
1. Загрузите файл в Audacity
1. Если ваш файл в стерео, нажмите на песню и выберите `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Измените значение `Project Rate (Hz)` в левом нижнем углу на `16000`

Для экспорта в правильном формате:
1. Выберите `File` > `Export` > `Export Audio...`
1. Установите `File Type` на `Other uncompressed files`
1. Установите `Header` на `RAW (header-less)`
1. Установите `Encoding` на `Signed 16-bit PCM`
1. Установите имя выходящего файла на `bgm.pcm.raw` и нажмите `Save`
1. Нажмите `OK`, чтобы перейти к редактированию метаданных

В результате вы получите файл `bgm.pcm.raw`, который можно скопировать в папку `sound`, находящуюся в папке вашей темы.

 Затем, чтобы ваша фоновая музыка играла в меню, необходимо в настройках TWiLight Menu++ установить опцию `Музыка в темах DSi/3DS` на "Тема".
