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
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and/or insert a DS Memory Expansion Pak, and try again

### Автозагрузка TWiLight Menu++
1. Извлеките всё содержимое `Autoboot/(ваш флеш-картридж)` в корень microSD-карты флеш-картриджа
   - Пропустите этот шаг, если вы не видите вашего флеш-картриджа в списке
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### Для запуска игр с помощью прошивки флеш-картриджа

Обратите внимание, что это работает только в том случае, если на вашей флеш-карте установлена функция автозагрузки TWiLight Menu++. Как это сделать, см. в разделе выше.
{:.alert .alert-warning}

Обратите внимание, что не все флеш-картриджи поддерживают запуск игр таким образом. Если нижеприведенные шаги не относятся к вашему флеш-картриджу, вы можете пропустить этот раздел.
{:.alert .alert-warning}

1. Извлеките содержимое `Flashcart Loader/(ваш флеш-картридж)` в корень microSD карты вашего флеш-картриджа
   - A README.txt file is present in the `Flashcart Loader` folder, to help find which flashcart loader is appropriate for your flashcard.
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

1. Для этих флеш-картриджей:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 картриджы (**не** .hk или .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC и DSONEi (модели без SDHC ***не поддерживаются***)
   - M3 DS Real
   - M3i Zero (модель, отличная от GMP-Z003)
   - iTouchDS и iTouch2 (используйте файлы M3Real_M3iZero YSMenu)
   - R4(i)RTS (r4rts.com) (используйте файлы M3Real_M3iZero YSMenu)
   - R4 SDHC RTS (черный картридж) (r4isdhc.com) (используйте файлы M3Real_M3iZero YSMenu)

   Install [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
      - Убедитесь, что у вас есть `YSMenu.nds` (переименуйте из `TTMenu.dat`, если его нет) и папка `TTMenu` в корне microSD карты вашего флеш-картриджа
1. Open TWLMenu++ Settings, switch to `nds-bootstrap settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
