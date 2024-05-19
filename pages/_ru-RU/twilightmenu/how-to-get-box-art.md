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
    manual: Ручная установка
---

{% capture tab-windows %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-GUI.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. **Optional:** Change the size, border, etc options to your liking
1. Click `Start`
1. Убедитесь, что в настройках TWiLight Menu++ установлено отображение обложек
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract the MacOS or Linux `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Use the arrow and enter keys to select `Yes` if it shows your SD path correctly
1. Убедитесь, что в настройках TWiLight Menu++ установлено отображение обложек
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), under the **S Covers (png)** category
1. Извлеките файлы .png в `sd:/_nds/TWiLightMenu/boxart`
1. Убедитесь, что в настройках TWiLight Menu++ установлено отображение обложек
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Чтобы добавить свою обложку:** Поместите их в `sd:/_nds/TWiLightMenu/boxart`.
- Может содержать либо ID игры (например, `ASME.png`), либо имя файла (например, `SM64DS.nds.png`)
- Обложка должна быть в формате `.png`, и рекомендованного размера 128x115 или до 208x143 максимум
- Если в конфигурации **TW**i**L**ight Menu++ для отображения обложек установлено значение `Кэшировать`, размер изображения должен быть 44 КБ или меньше. Вы можете использовать такой инструмент, как [tinypng](https://tinypng.com/), чтобы сжать изображения до приемлемого размера

Индивидуальную обложку также можно загрузить с GameTDB, в категории **S Covers (png)**.
