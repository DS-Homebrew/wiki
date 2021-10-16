---
lang: ru-RU
layout: wiki
section: twilightmenu
category: installing
title: Установка (Флеш-картридж)
long_title: Установка TWiLight Menu++ (Флеш-картридж)
description: Как установить TWiLight Menu++ на флеш-картридж Nintendo DS
---

### Установка
1. Скачайте последнюю версию [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Разархивируйте `TWiLightMenu-Flashcard.7z`
1. Скопируйте папку `_nds` в корень вашей microSD карты, которая будет вставлена в флеш-картридж
1. Скопируйте файл `BOOT.NDS` в корень вашей microSD карты, которая будет вставлена в флеш-картридж
1. Скопируйте папку `roms` в корень вашей microSD карты, которая будет вставлена в флеш-картридж
1. Если у вас уже есть сохранения, создайте папку `saves` внутри папки с вашими DS образами, и переместите все `.sav` из вашей папки с образами в папку `saves`
1. ...
   - **Пользователям DS Phat/Lite:** Если после запуска `BOOT.NDS` консоль виснет на белом экране, вставьте DS Memory Expansion Pak и попробуйте ещё раз
   - **Пользователям DSi/3DS:** Запустите TWLMenu++ с SD карты консоли, включите `Доступ SCFG в Slot-1` и поставьте `Слот-1: Режим касания` в `DSi режиме`
      - Это позволит вам использовать тактовая частоту TWL и/или ускорение VRAM в играх на вашем флеш-картридже, так же как и доступ к SD-карте консоли, и запуску DSi-Enhanced/DSi-Exclusive/DSiWare игр в режиме DSi с флеш-картриджа

### Для запуска игр используя прошивку вашего флеш-картриджа
1. Извлеките всё, что есть в `Flashcart Loader/(ваш флеш-картридж)` в корень карты microSD флеш-картриджа
   - Если вы это сделали, перейдите к шагу 3. Если нет, выполните шаги, указанные ниже списка флеш-картриджей

1. Для этих флеш-картриджей:
   - R4i-SDHC
   - карты r4isdhc.com
   - карты r4isdhc.hkcom
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - DSONE SDHC & DSONEi

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Установите `Исп. nds-bootstrap` на `Нет`, чтобы использовалась прошивка вашего флеш-картриджа вместо nds-bootstrap

### Автозагрузка TWiLight Menu++
1. Извлеките всё содержимое из `Autoboot/(ваш флеш-картридж)` в корень microSD карты флеш-картриджа
   - Пропустите если вы не видите ваш флеш-картридж в списке
1. ...
   - **DS Phat/Lite users:** Перейдите в настройки DS menu, и включите автозапуск, чтобы ваш флеш-картридж запускался после запуска консоли
   - **Пользователи DSi/3DS:** Запустите TWLMenu++ на SD-карте консоли и включите `Автозапуск Slot-1`
