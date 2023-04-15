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

If updating from a version older than v25.7.0, it is recommended to delete the `TWiLight Menu++ Game Booter` title from the title list, using FBI
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
   - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Скопируйте файл `BOOT.NDS` в корень вашей SD карты, заменив все существующие файлы
1. Copy the `.cia` file to your SD card root, replacing any existing files
1. При помощи FBI установите CIA файл на вашу 3DS
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Обновление

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
