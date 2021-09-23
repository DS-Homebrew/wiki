---
lang: ru-RU
layout: wiki
section: twilightmenu
category: other
title: Управление
long_title: Управление TWiLight Menu++
description: Управление TWiLight Menu++
---

#### Темы Nintendo DSi, Nintendo 3DS, SEGA Saturn, и Homebrew Launcher
- <kbd>Влево</kbd>/<kbd>Вправо</kbd>: Выбор игры/приложения
- <kbd class="face">A</kbd>/<kbd>START</kbd>: Запуск игры/приложения
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> или <kbd>SELECT</kbd> + <kbd>Влево</kbd>/<kbd>Вправо</kbd>: Переключение страниц
- (Тема DSi/Saturn/HBL) <kbd>SELECT</kbd> + <kbd>Вверх</kbd>/<kbd>Вниз</kbd> после отпустить <kbd>SELECT</kbd>: Переключение между SD картой и флеш-картриджем
- <kbd class="face">Y</kbd>: Настройки для каждой игры отдельно
   - <kbd class="face">X</kbd>: Чит-меню
      - <kbd class="face">A</kbd>: Переключить чит
      - <kbd class="face">B</kbd>: Выйти из чит-меню
      - <kbd class="face">X</kbd>: Сохранить и выйти из чит-меню
      - <kbd class="face">Y</kbd>: Показать описание чита
      - <kbd class="l">L</kbd>: Отключить все читы
- <kbd class="face">X</kbd>: Удалить/скрыть игру
- (Тема DSi/Saturn/HBL) <kbd>SELECT</kbd>: выбор между SELECT menu и DS Classic Menu (системное меню, настройки TWiLight Menu++, и GBA Режим)

#### Тема R4
- <kbd>Вверх</kbd>/<kbd>Вниз</kbd>: Выбор игры/приложения
- <kbd class="face">A</kbd>: Запуск игры/приложения
- <kbd class="l">L</kbd>: Переключение между SD картой и флеш-картриджем
- <kbd class="face">Y</kbd>: Настройки для каждой игры отдельно
   - <kbd class="face">X</kbd>: Чит-меню
      - <kbd class="face">A</kbd>: Переключить чит
      - <kbd class="face">B</kbd>: Выйти из чит-меню
      - <kbd class="face">X</kbd>: Сохранить и выйти из чит-меню
      - <kbd class="face">Y</kbd>: Показать описание чита
      - <kbd class="l">L</kbd>: Отключить все читы

#### DS(i) ROM (используя nds-bootstrap)
Не применимо к DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Вверх</kbd> + <kbd class="face">X</kbd> на 1 секунду: Переключение между экранами
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 2 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Вниз</kbd> + <kbd class="face">B</kbd> на 2 секунды: Вернуться в TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Вниз</kbd> + <kbd>SELECT</kbd>: Открыть внутриигровое меню
   - <kbd class="r">R</kbd>: Advance by one frame
   - Screenshot
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Change VRAM bank
      - <kbd class="face">A</kbd>: Save screenshot
      - <kbd class="face">B</kbd>: Return to in-game menu
   - RAM Viewer
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="r">R</kbd> + <kbd>Down</kbd>/<kbd>Up</kbd>: Faster scroll
      - <kbd class="r">R</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Fastest scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM Editor
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
         - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- Returning to TWiLight Menu++ may not work on some O3DS models
- The button combination for opening the in-game menu can be changed in the TWiLight Menu++ settings
- Screenshots are saved to `sd:/_nds/nds-bootstrap/screenshots.tar`. This file can be opened using an archive viewer such as [7-Zip](https://www.7-zip.org/)
- Dumping RAM and taking screenshots are currently not possible in B4DS mode

#### Шорткаты во время запуска TWiLight Menu++
Они должны быть нажаты на заставке TWiLight Menu++, сразу после заставки Nintendo DSi.

- <kbd>SELECT</kbd>: Открыть настройки
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Сброс всех настроек TWiLight Menu++
- <kbd class="face">B</kbd>: Запустить последний запущенный образ
