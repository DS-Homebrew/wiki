---
lang: uk-UA
layout: wiki
section: twilightmenu
category: other
title: Як отримати обкладинки
description: Як отримати обкладинки ігор у TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Вручну
---

{% capture tab-windows %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-GUI.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
    - If it doesn't find the correct SD card click `Browse...` and select the right one
1. **Optional:** Change the size, border, etc options to your liking
1. Click `Start`
1. Переконайтеся, що в налаштуваннях TWiLight Menu++ ввімкнено показ обкладинок
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
1. Переконайтеся, що в налаштуваннях TWiLight Menu++ ввімкнено показ обкладинок
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Завантажте обкладинку у форматі png з [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), у категорії **S Covers (png)**
1. Розпакуйте файли .png у теку `sd:/_nds/TWiLightMenu/boxart`
1. Переконайтеся, що в налаштуваннях TWiLight Menu++ ввімкнено показ обкладинок
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Щоб додати власні обкладинки:** Розмістіть їх у `sd:/_nds/TWiLightMenu/boxart`.
- Назва може мати або TID гри (наприклад, `ASME.png`), або ім'я файлу (наприклад, `SM64DS.nds.png`)
- Має бути у форматі `.png` з рекомендованим розміром 128x115 та максимальним 208x143
- Якщо у вашій конфігурації **TW**i**L**ight Menu++ для перегляду обкладинок встановлено значення `Кешувати`, розмір зображення має бути не більшим за 44 КБ. Ви можете використовувати такі інструменти, як [tinypng](https://tinypng.com/) для стиснення зображень до потрібного розміру

Окремі обкладинки також можна завантажити з GameTDB, у категорії **S Covers (png)**.
