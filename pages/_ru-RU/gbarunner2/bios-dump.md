---
lang: ru-RU
layout: wiki
section: gbarunner2
title: Извлечение BIOS-а GBA
description: How to extract the Nintendo GBA BIOS from your console
tabs:
  - 
    3ds-sd-card: 3DS при помощи open_agb_firm
    gba-flashcart: GBA/DS/DS Lite при помощи флеш-картриджа для GBA
---

Хотя большинство эмуляторов GBA без проблем воспроизводят игры GBA сами по себе, некоторым эмуляторам и гипервизорам, например GBARunner2, может потребоваться BIOS для корректного воспроизведения некоторых игр.

Есть два разных способа получить BIOS:
- 3DS с пользовательской прошивкой, ИЛИ
- a GBA/DS/DS Lite with a GBA-mode flashcart

{% capture tab-3ds-sd-card %}
### Part 1: Getting the required files
1. Download [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (the `.7z` file)
1. Download [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Создайте папку `payloads` внутри папки `luma`, если ее еще нет
1. Из архива `open_agb_firm.7z` скопируйте файл `open_agb_firm.firm` в `/luma/payloads` (на вашей SD-карте), а также из архива скопируйте папку `3ds` в корень SD-карты
1. Copy `3ds` from the open_agb_firm `.7z` file to the root of your SD card
1. Copy `Bios_Dumper.gba` to the root of your SD card
1. Reinsert your SD card into your device

### Part 2: Bios_Dumper
1. Press and hold <kbd>START</kbd>, and while holding <kbd>START</kbd>, power on your device
    - Это приведет к запуску open_agb_firm
    - If it loads the `Luma3DS Chainloader`, select `open_agb_firm` from this menu
    - Если происходит что-то другое, значит вы не скопировали `open_agb_firm.firm` в правильную папку на вашей SD-карте
1. From open_agb_firm, launch `Bios_Dumper.gba`
1. Экран замигает красным, затем зеленым
1. Wait for about five seconds
1. Power off your device

{% capture upload-bios-text %}
Загрузите сюда файл, находящийся на вашей SD-карте по пути `/3ds/open_agb_firm/saves/Bios_Dumper.sav`:
{% endcapture %}

### Часть 3: Распаковка BIOS-а из созданного файла сохранения
1. Insert your SD card into your computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Part 1: Getting the required files
1. Download [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Copy `Bios_Dumper.gba` to the root of your flashcart's SD card
1. Вставьте SD-карту в флеш-картридж
1. Вставьте флеш-картридж GBA в слот

### Part 2: Bios_Dumper
1. Запустите флеш-картридж, затем запустите `Bios_Dumper.gba`
1. Экран замигает красным, затем зеленым
1. Wait for about five seconds
1. Power off your device

{% capture upload-bios-text %}
Загрузите `Bios_Dumper.sav` файл сюда:
{% endcapture %}

### Часть 3: Распаковка BIOS-а из созданного файла сохранения
1. Insert your SD card into your computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

A `bios.bin` file will automatically download. Это окончательный файл BIOS-а GBA.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
