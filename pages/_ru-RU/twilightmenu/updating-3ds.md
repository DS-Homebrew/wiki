---
lang: ru-RU
layout: wiki
section: twilightmenu
category: updating
title: Обновление (3DS)
long_title: Обновление TWiLight Menu++ (3DS)
description: Как обновить TWiLight Menu++ на Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Ручная установка
---

Если обновляетесь с версии ниже чем v6.8.3, пожалуйста, переместите ваши `.sav` файлы для DS игр в новую папку под названием `saves`, находящуюся в той же папке, что и ваши DS ROM-ы.
{:.alert .alert-info}

Если обновляетесь с версии ниже чем v21.0.0, пожалуйста, переместите ваши `.pab` и/или `.prv` файлы для DSiWare игр в новую папку `saves`, находящуюся в той же папке, что и ваши DSiWare ROM-ы.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Откройте Universal-Updater
   - Если у вас его нет, следуйте инструкциям [ по его установке](installing-3ds)
1. Найдите TWiLight Menu++ среди других приложений, вы можете использовать поиск чтобы найти его (нажмите на лупу на нижнем экране)
1. Нажмите <kbd class="face">A</kbd> или тапните на значок загрузки в боковой панели и выберите `TWiLight Menu++` для установки
   - Это займет некоторое время
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Скачайте последнюю версию [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Разархивируйте `TWiLightMenu-3DS.7z`
1. Скопируйте папку `_nds` в корень вашей SD карты, согласившись на замену
   - При использовании macOS убедитесь, что вы **копируете** и `Объединяете`, а не `Заменяете`
1. Скопируйте файл `BOOT.NDS` в корень вашей SD карты, заменив все существующие файлы
1. Скопируйте два файла `.cia` в корень вашей SD карты, согласившись на замену
1. Установите два CIA файла с помощью FBI на вашей 3DS
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Обновление

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Дополнительные шаги для пользователей флеш-картриджей

Если вы можете переключаться между SD-картой и флеш-картриджем в TWLMenu++, и если версия TWLMenu++ на флеш-картридже v16.3.0 или ниже, выполните эти шаги.

1. Перейдите в Настройки TWLMenu++
1. Выберите `Обновить TWiLight Menu++`
1. Выберете `(micro)SD консоли > microSD Slot-1`
