---
lang: ru-RU
layout: wiki
section: gbarunner2
title: Извлечение GBA BIOS
description: Как извлечь BIOS Nintendo GBA из вашей консоли
tabs:
  - 
    3ds-sd-card: 3DS с open_agb_firm
    gba-flashcart: GBA/DS/DS Lite с картриджем для режима GBA
---

Хотя большинство эмуляторов GBA не испытывают проблем при воспроизведении игр GBA в одиночку, некоторым эмуляторам и гипервизорам, таким как GBARunner2, может потребоваться BIOS-файл для правильного воспроизведения некоторых игр.

Существует два отдельных способа достичь этого, используя:
- 3DS с кастомной прошивкой ИЛИ
- GBA/DS/DS Lite с флэш-картриджем в режиме GBA

{% capture tab-3ds-sd-card %}
### Часть 1: Получение необходимых файлов
1. Загрузите [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (файл `.7z`)
1. Скачайте [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Создайте папку с именем `payloads` внутри папки `/luma`, если ее еще нет
1. Скопируйте файл `open_agb_firm.firm` из архива `.7z` open_agb_firm в папку `/luma/payloads`
1. Скопируйте файл `Bios_Dumper.gba` в корень вашей SD-карты
1. Вставьте вашу SD-карту обратно в устройство

### Часть 2: Bios_Dumper
1. Удерживайте <kbd>START</kbd> и, не отпуская его, включите ваше устройство
    - Это запустит open_agb_firm
    - Если загрузится `Luma3DS Chainloader`, выберите `open_agb_firm` в этом меню
    - Если происходит что-то другое, вы не скопировали `open_agb_firm.firm` в правильную папку на вашей SD-карте
1. Из open_agb_firm запустите `Bios_Dumper.gba`
1. Экран мигнет красным, затем зеленым
1. Подождите примерно пять секунд
1. Выключите ваше устройство

{% capture upload-bios-text %}
С вашей SD-карты загрузите `/3ds/open_agb_firm/saves/Bios_Dumper.sav` сюда:
{% endcapture %}

### Часть 3: Распаковать BIOS из созданного файла сохранения
1. Вставьте свою SD-карту в компьютер
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Часть 1: Получение необходимых файлов
1. Скачайте [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Скопируйте `Bios_Dumper.gba` в корень SD-карты вашего флеш-картриджа
1. Вставьте обратно вашу SD-карту в флеш-картридж
1. Вставьте обратно вашу флеш-картридж GBA в картридж

### Часть 2: Bios_Dumper
1. Запустите свою флеш-картридж, затем запустите `Bios_Dumper.gba`
1. Экран мигнет красным, затем зеленым
1. Подождите примерно пять секунд
1. Выключите ваше устройство

{% capture upload-bios-text %}
С вашей SD-карты загрузите `Bios_Dumper.sav` сюда:
{% endcapture %}

### Часть 3: Распаковать BIOS из созданного файла сохранения
1. Вставьте свою SD-карту в компьютер
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Файл `bios.bin` будет загружен автоматически. Это финальный файл BIOS для GBA.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
