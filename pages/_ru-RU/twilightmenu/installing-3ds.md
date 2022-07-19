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
   - Это займет некоторое время
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
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Скачайте последнюю версию [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Разархивируйте `TWiLightMenu-3DS.7z`
1. Скопируйте папку `_nds` в корень вашей SD карты
1. Скопируйте файл `BOOT.NDS` в корень вашей SD карты
1. Скопируйте папку `roms` в корень вашей SD карты
1. Скопируйте два `.cia` файла в корень вашей SD карты
1. Установите два CIA файла с помощью FBI на вашей 3DS
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Установка

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
