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
   - **Пользователи DSi/3DS:** Запустите TWLMenu++ на SD-карте консоли, откройте настройки TWLMenu++, перейдите на страницу `Misc. settings`, включите `SCFG access in Slot-1`  и установите `Slot-1: Touch Mode` на `DSi Mode`
      - Это позволит вам использовать тактовая частоту TWL и/или ускорение VRAM в играх на вашем флеш-картридже, так же как и доступ к SD-карте консоли, и запуску DSi-Enhanced/DSi-Exclusive/DSiWare игр в режиме DSi с флеш-картриджа
      - Включив эту функцию, вы можете использовать <kbd>SELECT</kbd> + <kbd>Up</kbd>/<kbd>Down</kbd> для переключения между внутренней SD-картой и SD-картой флеш-картриджа
      - To use the above features, you need to launch your flashcard via TWLMenu++ instead of the system menu

### Автозагрузка TWiLight Menu++
1. Извлеките всё содержимое `Autoboot/(ваш флеш-картридж)` в корень microSD-карты флеш-картриджа
   - Пропустите этот шаг, если вы не видите вашего флеш-картриджа в списке
1. ...
   - **Пользователи DS Phat/Lite:** Перейдите в настройки в меню DS и включите автозапуск, чтобы ваш флеш-картридж запускался при загрузке
   - **Пользователи DSi/3DS:** Запустите TWLMenu++ на SD-карте консоли, откройте настройки TWLMenu++, перейдите в `Misc settings` и влключите `Auto-start Slot-1`

### Для запуска игр с помощью прошивки вашей флеш-карты

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

   Установка [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Убедитесь, что у вас есть `YSMenu.nds` (переименуйте из `TTMenu.dat`, если его нет) и папка `TTMenu` в корне microSD карты вашего флеш-картриджа
1. Откройте Настройки TWLMenu++, перейдите на страницу `Настройки nds-bootstrap `, и установите `Исп. nds-bootstrap` на `Выкл`, чтобы вместо nds-bootstrap использовалась прошивка флэш-картриджа
