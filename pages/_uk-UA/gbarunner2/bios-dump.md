---
lang: uk-UA
layout: wiki
section: gbarunner2
title: Витяг GBA BIOS
description: Як витягти BIOS Nintendo GBA з вашої консолі
tabs:
  - 
    3ds-sd-card: 3DS з open_agb_firm
    gba-flashcart: GBA/DS/DS Lite із GBA флешкартою
---

Хоча більшість емуляторів GBA не мають проблем з іграми для GBA, деяким емуляторам та гіпервізорам, таким як GBARunner2, може знадобитися файл BIOS для правильного відтворення деяких ігор.

Існують два відмінних способи досягнути цього, використовуючи:
- 3DS з кастомною прошивкою, АБО
- GBA/DS/DS Lite із GBA флешкартою

{% capture tab-3ds-sd-card %}
### Частина 1: Отримання необхідних файлів
1. Завантажте [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (`.7z` файл)
1. Завантажте [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Створіть теку з назвою `payloads` всередині `/luma`, якщо її ще нема
1. Скопіюйте `open_agb_firm.firm` з open_agb_firm `.7z` файлу до теки `/luma/payloads`
1. Copy `3ds` from the open_agb_firm `.7z` file to the root of your SD card
1. Скопіюйте `Bios_Dumper.gba` в корінь SD карти
1. Вставте вашу SD карту знову в пристрій

### Частина 2: Bios_Dumper
1. Натисніть і утримуйте <kbd>START</kbd>, і, утримуючи <kbd>START</kbd>, увімкніть пристрій
    - Це призведе до запуску open_agb_firm
    - Якщо він завантажує `Luma3DS Chainloader`, виберіть `open_agb_firm` з цього меню
    - Якщо він завантажується в щось інше, то скоріш за все, ви не скопіювали `open_agb_firm.firm` в потрібну теку на вашій SD карті
1. З open_agb_firm, запустіть `Bios_Dumper.gba`
1. Екран почне блимати червоним кольором, потім почне блимати зеленим
1. Зачекайте близько п'яти секунд
1. Вимкніть пристрій

{% capture upload-bios-text %}
Зі своєї SD карти, завантажте `/3ds/open_agb_firm/saves/Bios_Dumper.sav` сюди:
{% endcapture %}

### Частина 3: Розпакуйте BIOS зі створеного файлу збереження
1. Вставте свою SD карту у ваш комп'ютер
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Частина 1: Отримання необхідних файлів
1. Завантажте [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Скопіюйте `Bios_Dumper.gba` в корінь SD карти вашої флешкарти
1. Вставте свою SD карту назад у вашу флеш-карту
1. Вставте флеш-карту GBA в Slot-2

### Частина 2: Bios_Dumper
1. Запустіть вашу флешкарту, потім запустіть `Bios_Dumper.gba`
1. Екран почне блимати червоним кольором, потім почне блимати зеленим
1. Зачекайте близько п'яти секунд
1. Вимкніть пристрій

{% capture upload-bios-text %}
Зі своєї SD карти завантажте `Bios_Dumper.sav` сюди:
{% endcapture %}

### Частина 3: Розпакуйте BIOS зі створеного файлу збереження
1. Вставте свою SD карту у ваш комп'ютер
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Файл `bios.bin` буде автоматично завантажено. Це є остаточний файл BIOS GBA.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
