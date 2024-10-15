---
lang: ru-RU
layout: wiki
section: twilightmenu
category: installing
title: Установка (3DS)
long_title: Установка TWiLight Menu++ (3DS)
description: Как установить TWiLight Menu++ на Nintendo 3DS
tabs:
  - 
    working-camera: Рабочая камера
    non-working-camera: Нерабочая камера
    manual: Ручная установка
---

Для начала у вас должна быть установлена кастомная прошивка на вашей 3DS, следуйте [3ds.hacks.guide](https://3ds.hacks.guide), для её установки
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Откройте FBI и выберете `Remote Install`, затем `Scan QR Code`
1. Отсканируйте этот QR-код для установки последней версии [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR код Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Закройте FBI и запустите Universal-Updater
    - Если оно не появляется в главном меню, перезагрузите 3DS
1. Найдите TWiLight Menu++ среди других приложений, вы можете использовать поиск чтобы найти его (нажмите на лупу на нижнем экране)
    - Оно имеет такую иконку: ![Иконка TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Нажмите <kbd class="face">A</kbd> или тапните на значок загрузки в боковой панели и выберите `TWiLight Menu++` для установки
    - This will take a while
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Скачайте последнюю версию [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. Скопируйте файл `Universal-Updater.cia` в любое место на вашей SD-карте
1. Запустите FBI на вашей Nintendo 3DS
1. В FBI перейдите туда, куда вы скопировали файл `Universal-Updater.cia`
1. Выберете файл `Universal-Updater.cia` и нажмите "Install & Delete"
1. Закройте FBI и запустите Universal-Updater
    - Если оно не появляется на главном экране, перезагрузите вашу 3DS
1. Найдите TWiLight Menu++ среди других приложений, вы можете использовать поиск чтобы найти его (нажмите на лупу на нижнем экране)
    - Оно имеет такую иконку: ![Иконка TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Нажмите <kbd class="face">A</kbd> или тапните на значок загрузки в боковой панели и выберите `TWiLight Menu++` для установки
    - Это займет некоторое время
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Скачайте последнюю версию [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Разархивируйте `TWiLightMenu-3DS.7z`
1. Скопируйте папку `_nds` в корень вашей SD карты
1. Скопируйте файл `BOOT.NDS` в корень вашей SD карты
1. Скопируйте папку `roms` в корень вашей SD карты
1. Скопируйте `.cia` файл в корень вашей SD карты
1. При помощи FBI установите CIA файл на вашу 3DS
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Установка

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

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
1. Turn on `SD access in Slot-1`
1. Turn on `SCFG access in Slot-1`
1. Включите `Автозапуск Slot-1`
1. Выйдите из Настроек TWLMenu++, нажав кнопку `B`
    - Если вы оказались в Классическом Меню DS, запустите свой флэш-картридж
    - В противном случае перезапустите TWiLight Меню++

#### Переключение между SD картой и флэш-картриджем
- Нажмите либо `SELECT`+`Вверх` или `SELECT`+`Вниз` для переключения между SD картой и флэш-картриджем
    - Если включено Меню SELECT, вы можете сделать это и в нем
    - Если вы используете тему 3DS, коснитесь значка Игровой карты/SD карты
    - If you use the R4, GBC, or Wood themes, press `R` button
