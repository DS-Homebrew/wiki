---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: Установка (Флеш-картридж)
description: How to install TWiLight Menu++ on a Nintendo DS flashcard
---

### Установка
1. Загрузите последнюю версию `TWiLightMenu-Flashcard.7z` со [страницы релизов](https://github.com/DS-Homebrew/TWiLightMenu/releases).
1. Извлеките архив `TWiLightMenu-Flashcard.7z`.
1. Скопируйте папку `_nds` в корень карты microSD, которая будет вставлена в вашу флеш-карточку.
1. Скопируйте файл `BOOT.NDS` в корень карты microSD, которая будет вставлена в вашу флеш-картридж.
1. Скопируйте папку `roms` в корень карты microSD, которая будет вставлена в вашу флеш-картридж.
1. Если у вас уже есть данные, переместите файлы `.sav`, которые находятся в вашей DS ROM, в новую папку с именем `saves`, которая также идет в DS ROM
1. ...
   - **DS Phat / Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1`
      - Это позволит вам использовать тактовую скорость TWL и/или VRAM ускорение в играх с флеш-картами, а также доступ к SD-карте консоли.

### Для запуска игр с помощью прошивки флеш-картриджа
1. Извлеките всё, что есть в `Flashcart Loader/(ваш флеш-картридж)` в корень карты microSD флеш-картриджа.
   - Если вы это сделали, перейдите к шагу 3. Иначе, выполните шаги, указанные ниже:

1. Для этих флешкартриджей:
   - R4i-SDHC
   - r4isdhc.com карты
   - r4isdhc.hkcom карты
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   Install YSMenu from [here](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Установите `Use nds-bootstrap (B4DS)` на `No`, чтобы запуск TWLMenu++ был как в вашем флеш-картридже вместо nds-bootstrap.

### Автозагрузка TWiLight Menu++
1. Извлеките всё содержимое из `Autoboot/(ваш флеш-картридж)` в корень карты microSD флеш-картриджа.
   - Пропустите прошлый пункт, если вы не видите название своего флеш-картриджа
1. ...
   - **DS Phat / DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
