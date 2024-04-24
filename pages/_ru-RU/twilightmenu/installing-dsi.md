---
lang: ru-RU
layout: wiki
section: twilightmenu
category: installing
title: Установка (DSi)
long_title: Установка TWiLight Menu++ (DSi)
description: Как установить TWiLight Menu++ на Nintendo DSi
---

Если у вас еще нет возможности запускать homebrew на DSi, следуйте[dsi.cfw.guide](https://dsi.cfw.guide) для установки TWiLight Menu++
{:.alert .alert-info}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

### Установка
1. Скачайте последнюю версию [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Разархивируйте `TWiLightMenu-DSi.7z`
1. Скопируйте папку `_nds` в корень вашей SD карты
1. Скопируйте файл `BOOT.NDS` в корень вашей SD карты
1. Скопируйте папку `roms` в корень вашей SD карты
1. **Пользователям hiyaCFW:** Скопируйте папку `title` в корень вашей SD карты

### Автозапуск с помощью Unlaunch
1. Включите DSi удерживая <kbd class="face">A</kbd> и <kbd class="face">B</kbd>
1. В меню "Unlaunch" перейдите к `OPTIONS`
1. Выберете `NO BUTTON` или любую другую кнопку, после выберите `TWiLight Menu++`. На нижнем экране в строке пути до файла отобразится `sdmc:/BOOT.NDS`

### Доступ к содержимому флэш-картриджа

Флеш-картридж - это то, что вставляется в слот для игровой карты и содержит разъём для карты microSD. Если у вас нет флэш-картриджа, то это руководство для вас закончилось.
{:.alert .alert-warning}

#### Если у вас есть R4(i) Ultra

1. Следуйте [этому](installing-flashcard) руководству, начиная с `Для запуска игр с помощью прошивки флеш-картриджа`
     - Вы можете спокойно игнорировать предупреждения
1. Откройте Настройки TWLMenu++
1. Перейдите на страницу `Разные настройки`
1. Включить `Доступ к microSD в Slot-1`
1. Выйдите из Настроек TWLMenu++, нажав кнопку `B`
     - Если вы оказались в Классическом Меню DS, нажмите `B` еще раз

#### Если у вас нет R4(i) Ultra

1. Создайте файл или папку с именем `primary` в `sd:/_nds/` (не на флэш-картридже), чтобы настройки TWiLight Menu++ считывались с SD-карты консоли после запуска флеш-картриджа
1. Следуйте [этому](installing-flashcard) руководству, начиная с `Автоматический запуск TWiLight Menu++`
1. Скопируйте файл `BOOT.NDS` из архива `TWiLightMenu-Flashcard.7z` в корень microSD вашего флэш-картриджа
1. Откройте Настройки TWLMenu++
1. Перейдите на страницу `Разные настройки`
1. Включите `Доступ SCFG к Slot-1` (Обратите внимание, что из-за этой опции `Доступ Slot-1 к SD` не может использоваться)
1. Установите `Режим работы сенсора в Slot-1` на `DSi`
1. Включите `Автозапуск Slot-1`
1. Выйдите из Настроек TWLMenu++, нажав кнопку `B`
     - Если вы оказались в Классическом Меню DS, запустите свой флэш-картридж
     - В противном случае перезапустите TWiLight Меню++

#### Переключение между SD картой и флэш-картриджем
- Нажмите либо `SELECT`+`Вверх` или `SELECT`+`Вниз` для переключения между SD картой и флэш-картриджем
     - Если включено Меню SELECT, вы можете сделать это и в нем
     - Если вы используете тему 3DS, коснитесь значка Игровой карты/SD карты
     - Если вы используете тему R4/GBC, нажмите кнопку `L`
