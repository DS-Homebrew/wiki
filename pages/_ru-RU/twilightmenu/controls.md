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
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Вниз</kbd> + <kbd class="face">A</kbd> на 3 секунды: Дамп ОЗУ в `sd:/_nds/nds-bootstrap` под названием `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Вниз</kbd> + <kbd class="face">B</kbd> на 2 секунды: Вернуться в TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Вниз</kbd> + <kbd>SELECT</kbd>: Открыть внутриигровое меню
   - Просмотр ОЗУ
      - <kbd>Вверх</kbd>/<kbd>Вниз</kbd>: Прокрутка
      - <kbd>Влево</kbd>/<kbd>Вправо</kbd>: Быстрая прокрутка
      - <kbd class="face">A</kbd>: Открыть редкатор ОЗУ
      - <kbd class="face">B</kbd>: Вернуться в внутриигровое меню
      - <kbd class="face">Y</kbd>: Указать адрес для перехода
        - <kbd>Вверх</kbd>/<kbd>Вниз</kbd>: Увеличить/уменьшить выбранное значение
        - <kbd>Влево</kbd>/<kbd>Вправо</kbd>: Выбор значения
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Вернуться к просмотр/редактору ОЗУ по указанному адресу
   - Редактор ОЗУ
      - <kbd>Вверх</kbd>/<kbd>Вниз</kbd>/<kbd>Влево</kbd>/<kbd>Вправо</kbd>: Выбор значения
      - <kbd class="face">A</kbd>: Изменить выбранное значение
         - <kbd>Вверх</kbd>/<kbd>Вниз</kbd>: Увеличить/уменьшить значение на 1h
         - <kbd>Влево</kbd>/<kbd>Вправо</kbd>: Увеличить/уменьшить значение на 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Закончить редактирование значения
      - <kbd class="face">B</kbd>: Вернуться к Просмотр ОЗУ
      - <kbd class="face">Y</kbd>: Указать адрес для перехода
        - <kbd>Вверх</kbd>/<kbd>Вниз</kbd>: Увеличить/уменьшить выбранное значение
        - <kbd>Влево</kbd>/<kbd>Вправо</kbd>: Выбор значения
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Вернуться к просмотр/редактору ОЗУ по указанному адресу
- Внутриигровое меню недоступно в играх DSi Enhanced/Exclusive запущенных в DSi Mode, так что использование комбинации кнопок для его вызова приведёт к выходу из игры
- Комбинация кнопок для переключения экранов работает только в режиме B4DS
- Возврат в TWiLight Menu++ может не работать на некоторых моделях O3DS

#### Шорткаты во время запуска TWiLight Menu++
Они должны быть нажаты на заставке TWiLight Menu++, сразу после заставки Nintendo DSi.

- <kbd>SELECT</kbd>: Открыть настройки
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Сброс всех настроек TWiLight Menu++
- <kbd class="face">B</kbd>: Запустить последний запущенный образ
