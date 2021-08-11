---
lang: ru-RU
layout: faq
section: twilightmenu
category: other
title: FAQ и Устранение неполадок
long_title: TWiLight Menu++ FAQ и устранение неполадок
description: FAQ и устранение неполадок для TWiLight Menu++
---

Больше FAQ вы можете найти в [теме на GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Почему моя 3DS/2DS зависает с чёрным экраном, вылетает, выключается, и т.д. когда я запускаю TWiLight Menu++?
Возможно TWL_FIRM повреждён. Следуйте этой инструкции чтобы исправить проблему: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Как мне исправить проблему зависания на белом экране при запуске TWiLight Menu++?
- Для начала, попробуйте ввести консоль в режим сна (т.е. закройте крышку консоли, или нажмите кнопку сна на O2DS), затем выведите из него
- Если это не сработает, отформатируйте вашу SD карту в FAT32 с размером кластера 32 Кб
- Если и это не сработает, попробуйте другую SD карту

#### Где тема Acekard/Wood UI?
Тема acekard (также называемая Wood UI) была удалена из-за ошибок, вызвавших повреждение SD-карты. Ожидайте исправления. Прогресс по возвращению этой темы можно найти в [этом PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Go into TWLMenu++ Settings, and disable `Update recently played list`.

#### Почему приставка зависает на белом экране когда я пытаюсь запустить игру с SD карты?
- Для начала, проверьте [список совместимости nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) и убедитесь что ваша игра совместима
- Попробуйте запустить игру с полностью отключёнными читами, т.к. не все читы совместимы с nds-bootstrap на данный момент. Вы можете использовать <kbd class="l">L</kbd> чтобы отключить все читы для игры
- Если игра изначально работала, удалите папки `fatTable` и `patchOffsetCache` в `sd:/_nds/nds-bootstrap/`

#### Как использовать читы?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### How do I show a custom picture on the top screen of the DSi theme?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcard, DS games
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my game cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### How do I change TWiLight Menu++'s language?
1. Open TWiLight Menu++ settings, you can do this by holding <kbd>SELECT</kbd> while loading TWiLight Menu++
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard/3DS) or twice (on DSi)
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the next two options as they control the language of DS games and their titles in TWiLight Menu++

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?

See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Why isn't touch input working on sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Can The Biggest Loser boot TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.
