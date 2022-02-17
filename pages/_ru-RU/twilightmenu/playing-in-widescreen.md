---
lang: ru-RU
layout: wiki
section: twilightmenu
category: other
title: Игра в широкоэкранном режиме
description: Как использовать TWiLight Menu++ в широкоэкранном режиме на Nintendo 3DS
---

Необходима консоль Nintendo 3DS или 2DS.
{:.alert .alert-info}

### Подготовка
- Убедитесь, что `boot.firm` Люмы находится в корне SD чтобы всё сработало

### Установка
1. Download [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) and copy `TWPatch.cia` to your SD card ([GBAtemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Установите `TWPatch.cia` с помощью FBI
   - Вы также можете использовать Universal-Updater для установки TWPatch вместо двух предыдущих шагов
1. Вернитесь в главное меню и запустите TWPatch
1. Удерживайте <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> чтобы открыть меню патчей, после включите `Widescreen patch (384x240 16:10)`
1. (Необязательно!) Для менее пиксельного изображения также включите `GPU scaling (blurry, no filters)`
1. Нажмите <kbd class="face">B</kbd> чтобы выйти из меню патчей
1. Нажмите <kbd>START</kbd> чтобы сгенерировать файл `TwlBg.cxi` с широкоформатным хаком
   - Это займёт некоторое время. Если на верхнем экране не будет написано что широкоформатный патч применён, то повторите шаги начиная с 3
1. Переместите `TwlBg.cxi` из `sd:/luma/sysmodules/` в `sd:/_nds/TWiLightMenu/TwlBg/` (если папки `TwlBg` нет - создайте её), и переименуйте файл в `Widescreen.cxi`
1. Перезапустите вашу 3DS с зажатой <kbd>SELECT</kbd> чтобы открыть настройки Luma3DS
1. Включите `external FIRMs and modules`, затем нажмите <kbd>START</kbd> чтобы сохранить и выйти
1. Open TWiLight Menu++, press <kbd class="face">Y</kbd> on your desired game to bring up the per-game settings, and set `Screen Aspect Ratio` to `16:10`

Всё готово! Наслаждайтесь вашими DS играми в широкоформатном режиме!

**ПРИМЕЧАНИЕ:**
1. Не удерживайте <kbd>START</kbd> или <kbd>SELECT</kbd> при запуске TWLMenu++, иначе изображение заглючит
1. Не каждая игра совместима с широкоформатным патчем. [Here is a list of games with widescreen support](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide, as well as using the original build of Luma
1. Most widescreen patches will only adjust 3D elements for widescreen, 2D elements (such as menus) will only be stretched
