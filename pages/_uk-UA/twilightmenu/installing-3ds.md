---
lang: uk-UA
layout: wiki
section: twilightmenu
category: installing
title: Встановлення (3DS)
long_title: Встановлення TWiLight Menu++ (3DS)
description: Як встановити TWiLight Menu++ на Nintendo 3DS
tabs:
  - 
    working-camera: Робоча камера
    non-working-camera: Неробоча камера
    manual: Вручну
---

Спочатку вам потрібно мати коистувацьку прошивку на 3DS, дотримуйтесь інструкцій на [3ds.hacks.guide](https://3ds.hacks.guide), щоб встановити її
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Відкрийте FBI і виберіть `Remote Install`, потім `Scan QR Code`
1. Відскануйте цей QR-код, щоб встановити останню версію [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR код Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Закрийте FBI та запустіть Universal-Updater
    - Якщо додаток не відображається у головному меню, перезавантажте 3DS
1. Знайдіть TWiLight Menu++ в сітці додатків, ви можете шукати за допомогою 3-ї вкладки на бічній панелі, якщо у вас виникли проблеми з пошуком
    - Там повинна бути така іконка: ![Значок TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Натисніть <kbd class="face">A</kbd> або торкніться іконки завантаження на бічній панелі та виберіть `TWiLight Menu++`, щоб встановити програму
    - Це займе деякий час
    - Якщо встановлення не вдалося, переконайтеся, що консоль підключена до інтернету. В іншому випадку перейдіть на вкладку `Manual`
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Завантажте останню версію [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. Розмістіть файл `Universal-Updater.cia` в будь-якому місці на вашій SD-карті
1. Запустіть FBI на Nintendo 3DS
1. У FBI, перейдіть до місця, куди ви скопіювали файл `Universal-Updater.cia`
1. Виберіть файл `Universal-Updater.cia` та натисніть "Install & Delete"
1. Закрийте FBI та запустіть Universal-Updater
    - Якщо додаток не відображається у головному меню, перезавантажте 3DS
1. Знайдіть TWiLight Menu++ в сітці додатків, ви можете шукати за допомогою 3-ї вкладки на бічній панелі, якщо у вас виникли проблеми з пошуком
    - Там повинна бути така іконка: ![Значок TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Натисніть <kbd class="face">A</kbd> або торкніться іконки завантаження на бічній панелі та виберіть `TWiLight Menu++`, щоб встановити програму
    - Це займе деякий час
    - Якщо встановлення не вдалося, переконайтеся, що консоль підключена до інтернету. В іншому випадку перейдіть на вкладку `Manual`
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Завантажте останню версію [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
    - Якщо воно не завантажується, див. [сторінку релізу](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Розпакуйте `TWiLightMenu-3DS.7z`
1. Скопіюйте теку `_nds` в кореневу теку вашої SD карти
1. Скопіюйте файл `BOOT.NDS` в кореневу теку вашої SD карти
1. Скопіюйте теку `roms` в кореневу теку вашої SD карти
1. Скопіюйте файл `.cia` в кореневу теку вашої SD карти
1. Встановіть CIA файл на вашу 3DS за допомогою FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Встановлення

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Доступ до вмісту флешкарти

Флешкарта - це пристрій, що вставляється в слот для ігрових картриджів та містить слот для карт пам'яті microSD. Якщо у вас немає флешкартки, на цьому посібник для вас завершено.
{:.alert .alert-warning}

#### Якщо у вас є R4(i) Ultra

1. Дотримуйтесь [цього посібника](installing-flashcard), починаючи з `Запуск ігор за допомогою прошивки вашої флешкарти`
    - Ви можете сміливо ігнорувати попередження
1. Відкрийте Налаштування TWLMenu++
1. Перейдіть на сторінку `Змішані налаштування`
1. Увімкніть `Доступ до microSD у Slot-1`
1. Вийдіть з Налаштувань TWLMenu++, натиснувши кнопку `B`
    - Якщо ви опинитеся в Класичному DS Меню, натисніть `B` ще раз

#### Якщо у вас немає R4(i) Ultra

1. Створіть файл чи теку з назвою `primary` у `sd:/_nds/` (не на флешкарті), щоб TWiLight Menu++ зчитувала налаштування з SD карти консолі після запуску вашої флешкарти
1. Дотримуйтесь [цього посібника](installing-flashcard), починаючи з `Щодо запуску ігор за допомогою прошивки вашої флешкарти`
1. Скопіюйте файл `BOOT.NDS` з `TWiLightMenu-Flashcard.7z` у кореневу теку вашої microSD карти, що використовуватиметься у вашій флешкарті
1. Відкрийте Налаштування TWLMenu++
1. Перейдіть на сторінку `Змішані налаштування`
1. Увімкніть `доступ до SD у Slot-1`
1. Увімкніть `доступ до SCFG у Slot-1`
1. Увімкніть `Автозапуск Slot-1`
1. Вийдіть з Налаштувань TWLMenu++, натиснувши кнопку `B`
    - Якщо ви опинитеся в Класичному DS Меню, запустіть вашу флешкарту
    - В іншому випадку, перезапустіть TWiLight Menu++

#### Перемикання між вмістом SD та флешкарти
- Натисніть `SELECT`+`Вгору` чи `SELECT`+`Вниз`, щоб перемикатися між вмістом SD та флешкарти
    - Якщо меню SELECT увімкнено в налаштуваннях, ви також можете зробити це там
    - Якщо ви використовуєте тему 3DS, торкніться піктограми Ігровий Картридж/SD картка
    - Якщо ви використовуєте теми R4, GBC, або Wood, натисніть кнопку `R`
