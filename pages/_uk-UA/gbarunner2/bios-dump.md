---
lang: uk-UA
layout: wiki
section: gbarunner2
title: Вибірка BIOS GBA
description: Як видобути BIOS Nintendo GBA з вашої консолі
tabs:
  - 
    3ds-sd-card: 3DS з open_agb_firm
    gba-flashcart: GBA/DS/DS Lite з картриджем у режимі GBA
---

Хоча більшість емуляторів GBA нормально працює зі стандартними іграми GBA, деякі емулятори та віртуалізатори, такі як GBARunner2, можуть вимагати файл BIOS для належного відтворення окремих ігор.

Існують два відмінних способи досягнути цього, використовуючи:
- 3DS із спеціальним прошиванням, АБО
- Гральна консоль GBA/DS/DS Lite з флеш-картриджем для режиму GBA

{% capture tab-3ds-sd-card %}
### Частина 1: Отримання необхідних файлів
1. Завантажте [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (файл `.7z`)
1. Завантажте [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Створіть теку з назвою `payloads` всередині теки `/luma`, якщо вона ще не існує
1. Скопіюйте файл `open_agb_firm.firm` з архіву `.7z` в теку `/luma/payloads`
1. Скопіюйте файл `Bios_Dumper.gba` в корінь вашої SD-карти
1. Вставте вашу SD-карту знову в пристрій

### Частина 2: Bios_Dumper
1. Натисніть і утримуйте <kbd>START</kbd>, і, утримуючи <kbd>START</kbd>, увімкніть ваш пристрій
    - Це запустить open_agb_firm
    - Якщо завантажується `Luma3DS Chainloader`, виберіть `open_agb_firm` з цього меню
    - Якщо він завантажується в інше місце, це означає, що ви не скопіювали файл `open_agb_firm.firm` в правильну папку на вашій SD-картці
1. З програми open_agb_firm запустіть файл `Bios_Dumper.gba`
1. Екран спершу спалахне червоним, а потім зеленим
1. Зачекайте приблизно п'ять секунд
1. Вимкніть пристрій

{% capture upload-bios-text %}
З вашої SD-карти завантажте `/3ds/open_agb_firm/saves/Bios_Dumper.sav` сюди:
{% endcapture %}

### Частина 3: Розпакуйте BIOS із створеного файлу збереження
1. Вставте свою SD-карту до комп'ютера
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Частина 1: Отримання необхідних файлів
1. Завантажте [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Скопіюйте `Bios_Dumper.gba` в корінь SD-карти вашого флеш-картриджа
1. Вставте свою SD-карту назад в флеш-картридж
1. Вставте свою флеш-картридж GBA назад в картридж

### Частина 2: Bios_Dumper
1. Запустіть свій флеш-картридж, а потім запустіть `Bios_Dumper.gba`
1. Екран спершу спалахне червоним, а потім зеленим
1. Зачекайте приблизно п'ять секунд
1. Вимкніть пристрій

{% capture upload-bios-text %}
З вашої SD-карти завантажте `Bios_Dumper.sav` сюди:
{% endcapture %}

### Частина 3: Розпакуйте BIOS із створеного файлу збереження
1. Вставте свою SD-карту до комп'ютера
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Файл `bios.bin` буде автоматично завантажено. Це остаточний файл BIOS GBA.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
