---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: Установка (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

Первым делом, вам нужно будет иметь кастомную прошивку на вашем 3DS  ([3ds.hacks.guide](https://3ds.hacks.guide)) для её установки.
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Откройте FBI и выберите `Удаленная установка`, затем `Сканируйте QR-код`
1. Сканируйте этот QR-код для установки последней версии [Universal-Updater](https://github.com/Universal-Team/Universal-Updater).<br> ![Universal-Updater QR код](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Закройте FBI и запустите Universal-Updater.
   - Если оно не появляется в главном меню, перезагрузите 3DS.
1. Найдите TWiLight Menu + + в сетке приложений, вы сможете найти с помощью третьей вкладки на боковой панели, если у вас возникли проблемы с ее нахождением, то:
   - Оно имеет такую иконку: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Нажмите <kbd class="face">A</kbd> или нажмите на значок загрузки в боковой панели и выберите `TWiLight Menu++` для его установки.
   - This will take a while
{% endcapture %}

{% capture tab-non-working-camera %}
1. Зугрузите файл `Universal-Updater.cia` со [страницы релиза Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases)
1. Поместите файл `Universal-Updater.cia` в любом месте на вашей SD-карте.
1. Запустите FBI на вашей Nintendo 3DS.
1. В FBI, перейдите на место, где вы вставили файл `Universal-Updater.cia`.
1. Выберите файл `Universal-Updater.cia` и нажмите "Install & Delete" ("Загрузить & Удалить").
1. Закройте FBI и запустите Universal-Updater.
   - Если оно не появляется в главном меню, перезагрузите 3DS.
1. Найдите TWiLight Menu + + в сетке приложений, вы сможете найти с помощью третьей вкладки на боковой панели, если у вас возникли проблемы с ее нахождением, то:
   - Оно имеет такую иконку: ![Иконка TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Нажмите <kbd class="face">A</kbd> или нажмите на значок загрузки в боковой панели и выберите `TWiLight Menu++` для его установки.
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Installing

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Non-Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Working Camera</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Non-Working Camera</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
