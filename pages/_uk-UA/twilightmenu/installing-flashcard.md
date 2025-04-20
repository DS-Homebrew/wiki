---
lang: uk-UA
layout: wiki
section: twilightmenu
category: installing
title: Встановлення (Флешкарта)
long_title: Встановлення TWiLight Menu++ (Флешкарта)
description: Як встановити TWiLight Menu++ на флешкарту Nintendo DS
tabs:
  - 
    loader: Flashcart Loader
    ysmenu: YSMenu
---

### Встановлення
1. Завантажте останню версію [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - Якщо воно не завантажується, див. [сторінку релізу](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Відкрийте чи розпакуйте `TWiLightMenu-Flashcard.7z`
1. Перетягніть теку `_nds` до кореневого каталогу вашої microSD карти
1. Перетягніть файл `BOOT.NDS` до кореневого каталогу вашої microSD карти
1. Перетягніть теку `roms` до кореневого каталогу вашої microSD карти
1. Якщо у вас вже є файли збереження, перемістіть файли `.sav`, які знаходяться у вашій теці з ROM DS, до нової теки під назвою `saves`, яка також знаходиться у теці з ROM
1. **Для користувачів DS Phat/Lite:** Якщо запуск `BOOT.NDS` призводить до блокування білим екраном, виконайте наведені нижче кроки для авто. запуску і спробуйте ще раз

### Автозапуск TWiLight Menu++
1. Відкрийте чи розпакуйте `TWiLightMenu-Flashcard.7z`
1. Open the `Autoboot` folder
1. Open the `README.txt` file to help find which autoboot files are appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
    - Skip this, if you don't see your flashcard listed
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### Для запуску ігор з використанням ядра флешкарти (за бажанням)

**Зверніть увагу:**
- Воно працюватиме, тільки якщо на вашій флешкарті налаштовано автозапуск TWiLight Menu++. Про те, як це зробити, дивіться у попередньому розділі.
- Не всі флешкарти підтримують запуск ігор у цьому режимі. Якщо кроки нижче не стосуються вашої флешкарти, ви можете пропустити цей розділ.
- Ви втратите можливість використовувати чити в іграх, використовуючи цей режим. Якщо ви хочете зберегти функцію читів, пропустіть цей розділ.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Відкрийте чи розпакуйте `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` folder
1. Open the `README.txt` file to help find which flashcart loader is appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Будь ласка, переконайтеся, що у вас є одна з наведених нижче флешкарт:
    - R4i-SDHC (r4i-sdhc.com)
    - картки r4isdhc.com 2014+ (**не** .hk чи .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC & DSONEi (моделі без підтримки SDHC ***не*** підходять)
    - M3 DS Real
    - M3i Zero (моделі, що не є GMP-Z003)
    - iTouchDS та iTouch2 (використайте файли M3Real_M3iZero YSMenu)
    - R4(i)RTS (r4rts.com) (використайте файли M3Real_M3iZero YSMenu)
    - R4 SDHC RTS (чорний картридж) (r4isdhc.com) (використайте файли M3Real_M3iZero YSMenu)
1. Завантажте [YSMenu від RetroGameFan](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Запуск ігор з ядром флешкарти
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
