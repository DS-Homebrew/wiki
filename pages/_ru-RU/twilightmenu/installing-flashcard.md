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
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, open TWLMenu++ Settings, switch to the `Misc. settings` page, and turn on `SCFG access in Slot-1` and set `Slot-1: Touch Mode` to `DSi Mode`
      - Это позволит вам использовать тактовая частоту TWL и/или ускорение VRAM в играх на вашем флеш-картридже, так же как и доступ к SD-карте консоли, и запуску DSi-Enhanced/DSi-Exclusive/DSiWare игр в режиме DSi с флеш-картриджа
      - With this enabled you can use <kbd>SELECT</kbd> + <kbd>Up</kbd>/<kbd>Down</kbd> to switch between your internal SD card and your flashcard's SD card

### Autobooting TWiLight Menu++
1. Extract the content(s) of `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Skip this, if you don't see your flashcard
1. ...
   - **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, open TWLMenu++ Settings, switch to `Misc settings` page, and turn on `Auto-start Slot-1`

### To run games using your flashcard firmware

Please note this only works if your flashcard is set to autoboot TWiLight Menu++. See above section for how to do so.
{:.alert .alert-warning}

Please note that not all flashcards support running games in this fashion. If the below steps do not apply to your flashcard, you can skip this section.
{:.alert .alert-warning}

1. Extract what's in `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

1. For these flashcards:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 cards (**not** .hk or .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (non-SDHC models are ***not*** supported)
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - iTouchDS and iTouch2 (use the M3Real_M3iZero YSMenu files)
   - R4(i)RTS (r4rts.com) (use the M3Real_M3iZero YSMenu files)
   - R4 SDHC RTS (black cartridge) (r4isdhc.com) (use the M3Real_M3iZero YSMenu files)

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Open TWLMenu++ Settings, switch to `nds-bootstrap settings` page, and set `Use nds-bootstrap` to `No`, so the flashcard firmware will be used instead of nds-bootstrap
