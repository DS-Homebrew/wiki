---
lang: uk-UA
layout: wiki
section: ds-index
category: guides
title: Вилучення BIOS/прошивки
description: Як витягти BIOS/прошивку Nintendo DS або DSi з вашої консолі
tabs:
  - 
    dsi-sd-card: DSi з Unlaunch
    flashcard: Флешкарта
---

Деякі емулятори, такі як melonDS, вимагають біосу та прошивки режиму DS або DSi, які можна отримати шляхом їх видобування з вашої консолі. Існують два відмінних способи досягнути цього, використовуючи:
- DSi з Unlaunch, АБО
- DS/DS Lite/3DS або DSi без Unlaunch, разом з карткою пам'яті, сумісною з консоллю

Метод DSi видобуде файли обох режимів DS та DSi BIOS та вбудованого програмного забезпечення. Метод за допомогою флеш-карти видобуде лише файли режиму DS.

{% capture tab-dsi-sd-card %}

Ця сторінка передбачає, що ви використовуєте сучасне середовище CFW з [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Частина 1: Отримання необхідних файлів

1. Завантажте [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Скопіюйте `dsibiosdumper.nds` з архіву dsibiosdumper `.7z` до кореня вашої SD-карти
1. Вставте вашу SD-карту знову в пристрій

### Частина 2: dsibiosdumper
1. З вашим пристроєм, який все ще вимкнутий, утримуйте наступні кнопки: <kbd class="face">A</kbd> + <kbd class="face">B</kbd> і, утримуючи ці кнопки разом, увімкніть пристрій
1. Вашому пристрою має відбулося завантаження в меню Unlaunch
1. Запустіть dsibiosdumper із списку застосунків
1. Натисніть <kbd class="face">A</kbd>, щоб вивантажити всі дані
1. Зачекайте, поки процес завершиться
    - Це може зайняти деякий час
1. Після завершення процесу натисніть <kbd>SELECT</kbd>, щоб вийти з dsibiosdumper
1. Вимкніть пристрій
1. Вставте свою SD-карту до комп'ютера

Усі необхідні файли будуть у папці `dsidump` у корені вашої SD-карти.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Частина 1: Отримання необхідних файлів

1. Завантажте [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (файл `.nds`)
1. Скопіюйте `dsbf_dump.nds` до кореня вашої SD-карти
1. Вставте свою SD-карту назад у вашу флеш-карту

### Частина 2: dsbf_dump
1. Увімкніть ваш пристрій
1. Запустіть свою флеш-карту
1. Перейдіть до кореня вашої SD-карти та запустіть dsbf_dump
1. Зачекайте, поки процес завершиться
1. Після завершення процесу натисніть <kbd>START</kbd>, щоб вимкнути пристрій
  - На системах сімейства 3DS, замість цього відображатиметься "Програма закрита". Вимкніть пристрій з цього екрану
1. Вставте свою SD-карту до комп'ютера

Усі необхідні файли будуть в папці, вказаній на верхньому екрані вашого пристрою.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
