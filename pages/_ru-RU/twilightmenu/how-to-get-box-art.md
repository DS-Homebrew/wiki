---
lang: ru-RU
layout: wiki
section: twilightmenu
category: other
title: Как получить обложки
description: Как получить обложки игр в TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Manual
---

{% capture tab-windows %}
1. Скачайте последнюю версию [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Разархивируйте `TwilightBoxart-Windows-UX.zip` и запустите `TwilightBoxart.exe`
1. Нажмите `Detect SD`
   - Если приложение не может правильно найти путь к SD-карте, то нажмите `Browse...` и выберете правильный
1. Изменить размер, границы, и т. п. параметры по вашему вкусу
1. Нажмите `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Скачайте последнюю версию [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Разархивируйте `.zip`
1. Откройте `TwilightBoxart.ini` в извлеченной папке в текстовом редакторе
1. Введите путь к вашей SD-карте после `SdRoot=`, затем сохраните файл
   - В macOS это `/Volumes/` затем название вашей SD-карты
1. Откройте Терминал
1. В терминале введите `cd`, затем перетащите папку с `TwilightBoxart.CLI` в открытый ранее терминал
1. Введите и примените `chmod +x TwilightBoxart.CLI`
1. Введите и примените `./TwilightBoxart.CLI`
1. Нажмите `Да` если путь к вашей SD-карте показан верно
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Скачайте набор png обложек с [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Извлеките файлы .png в `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**To add your own box art:** Place them in `sd:/_nds/TWiLightMenu/boxart`.
- Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`)
- Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143
- If your **TW**i**L**ight Menu++ configuration has Box Art viewing set to `Cached`, the image size must be 44 KiB or below. You can use a tool like [tinypng](https://tinypng.com/) to compress the images to an acceptable size

Individual box art can also be downloaded from GameTDB, under the **S Covers (png)** category.
