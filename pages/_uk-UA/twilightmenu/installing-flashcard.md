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
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Якщо у вас вже є файли збереження, перемістіть файли `.sav`, які знаходяться у вашій теці з ROM DS, до нової теки під назвою `saves`, яка також знаходиться у теці з ROM
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

### Автозапуск TWiLight Menu++
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Autoboot` -> `(your flashcard)` folders
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
    - Пропустіть це, якщо ви не бачите свою флешкарту
1. **Користувачі оригінальної DS та DS Lite:** Перейдіть до налаштувань в меню DS та увімкніть автозапуск, щоб ваша флешкарта запускалася при завантаженні

### To run games using your flashcard firmware (optional)

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. Про те, як це зробити, дивіться у попередньому розділі.
- Not all flashcards support running games in this fashion. Якщо кроки нижче не стосуються вашої флешкарти, ви можете пропустити цей розділ.
- You'll lose the ability to use cheats when running games in this fashion. Якщо ви хочете зберегти функцію читів, пропустіть цей розділ.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` -> `(your flashcard)` folders
    - Файл README.txt міститься в теці `Flashcart Loader`, щоб допомогти визначитися, який завантажувач підходить для вашої флешкарти.
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Please confirm that you have one of the below flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ cards (**not** .hk or .com.cn)
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
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with your flashcart firmware
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
