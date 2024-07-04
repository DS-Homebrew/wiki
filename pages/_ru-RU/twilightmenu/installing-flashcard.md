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
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Если у вас уже есть сохранения, создайте папку `saves` внутри папки с вашими DS образами, и переместите все `.sav` из вашей папки с образами в папку `saves`
1. **Пользователям DS Phat/Lite:** Если после запуска `BOOT.NDS` консоль виснет на белом экране, выполните приведенные ниже действия для автозагрузки и/или вставьте DS Memory Expansion Pak и попробуйте ещё раз

### Автозагрузка TWiLight Menu++
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Пропустите этот шаг, если вы не видите вашего флеш-картриджа в списке
1. **Пользователи DS Phat/Lite:** Откройте настройки в меню DS и включите автозапуск, чтобы ваш флеш-картридж запускался при загрузке

### Для запуска игр с помощью прошивки флеш-картриджа

Обратите внимание, что это работает только в том случае, если на вашей флеш-карте установлена функция автозагрузки TWiLight Menu++. Как это сделать, см. в разделе выше.
{:.alert .alert-warning}

Обратите внимание, что не все флеш-картриджи поддерживают запуск игр таким образом. Если нижеприведенные шаги не относятся к вашему флеш-картриджу, вы можете пропустить этот раздел.
{:.alert .alert-warning}

Пожалуйста, обратите внимание, что вы потеряете возможность использовать читы при запуске игр таким образом. Если вы хотите сохранить возможность использовать читы, пожалуйста, пропустите этот раздел.
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - В папке `Flashcart Loader` находится файл README.txt, который поможет определить, какой загрузчик подходит для вашего флеш-картриджа.
   - Если вы это сделали, перейдите к шагу 3. Если нет, выполните действия, указанные ниже в списке флеш-картриджей

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

   Установка [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
      - Убедитесь, что у вас есть `YSMenu.nds` (переименуйте из `TTMenu.dat`, если его нет) и папка `TTMenu` в корне microSD карты вашего флеш-картриджа
      - Не копируйте `TTMenu.dat` напрямую; это нарушит работу автозагрузки и мягкой перезагрузки YSMenu
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
