---
lang: uk-UA
layout: wiki
section: twilightmenu
category: installing
title: Встановлення (Флешкарта)
long_title: Встановлення TWiLight Menu++ (Флешкарта)
description: Як встановити TWiLight Menu++ на флешкарту Nintendo DS
---

### Встановлення
1. Завантажте останню версію [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Якщо у вас вже є файли збереження, перемістіть файли `.sav`, які знаходяться у вашій теці з ROM DS, до нової теки під назвою `saves`, яка також знаходиться у теці з ROM
1. **Користувачі оригінальної DS та DS Lite:** Якщо завантаження `BOOT.NDS` призводить до білого екрана, виконайте наведені нижче кроки для автозапуску та/або встановіть DS Memory Expansion Pak і спробуйте ще раз

### Автозапуск TWiLight Menu++
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
    - Пропустіть це, якщо ви не бачите свою флешкарту
1. **Користувачі оригінальної DS та DS Lite:** Перейдіть до налаштувань в меню DS та увімкніть автозапуск, щоб ваша флешкарта запускалася при завантаженні

### Запуск ігор за допомогою прошивки вашої флешкарти

Зверніть увагу, що це працює тільки якщо на вашій флешкарті налаштовано автозапуск TWiLight Menu++. Про те, як це зробити, дивіться у попередньому розділі.
{:.alert .alert-warning}

Зверніть увагу, що не всі флешкарти підтримують запуск ігор у цьому режимі. Якщо кроки нижче не стосуються вашої флешкарти, ви можете пропустити цей розділ.
{:.alert .alert-warning}

Зверніть увагу, що ви втратите можливість використовувати чити в іграх, використовуючи цей режим. Якщо ви хочете зберегти функцію читів, пропустіть цей розділ.
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
    - Файл README.txt міститься в теці `Flashcart Loader`, щоб допомогти визначитися, який завантажувач підходить для вашої флешкарти.
    - Якщо ви це зробили, переходьте до кроку 3. Якщо ні, виконайте кроки, наведені нижче у списку флешкарт

1. Для цих флешкарт:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014-2024 cards (**not** .hk or .com.cn)
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

    Встановіть [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
        - Переконайтеся, що у вас є `YSMenu.nds` (перейменуйте з `TTMenu.dat`, якщо його немає) та тека `TTMenu` в кореневій теці вашої microSD карти
        - Не копіюйте `TTMenu.dat` безпосередньо; це порушить автозавантаження та швидке перезавантаження YSMenu
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
