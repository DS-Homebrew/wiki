---
lang: ru-RU
layout: wiki
section: twilightmenu
category: other
title: Игра в широкоэкранном режиме
description: Как использовать TWiLight Menu++ в широкоэкранном режиме на Nintendo 3DS
---

Для этого требуется консоль семейства 3DS, на которой установлена современная среда CFW с сайта [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

Если вы используете Luma v13, пожалуйста, обновите ее до v13.0.1, прежде чем следовать этому руководству.
{:.alert .alert-info}

### Установка
1. Откройте FBI и выберете `Remote Install`, затем `Scan QR Code`
1. Отсканируйте этот QR-код для установки последней версии [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR код Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Откройте Universal Updater из меню HOME
1. Установите пакет TWPatch
    - Если ваша консоль не имеет доступа к Интернету, вы можете скачать [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) напрямую, а затем установить его с помощью FBI
1. Return to the HOME menu and launch TWPatch
    - If you get a message which says `Can't open /luma/exeTWL.bin`, then use [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/) to fix broken TWL mode
1. Удерживайте <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> чтобы открыть меню патчей, после включите `Widescreen patch (384x240 16:10)`
1. (Необязательно!) Для менее пиксельного изображения также включите `GPU scaling (blurry, no filters)`
1. Нажмите <kbd class="face">B</kbd> чтобы выйти из меню патчей
1. Нажмите <kbd>START</kbd> чтобы сгенерировать файл `TwlBg.cxi` с широкоформатным хаком
    - Это займёт некоторое время. Если на верхнем экране не будет написано, что широкоэкранный режим работает, то повторите шаги начиная с 3
1. Переместите `TwlBg.cxi` из `sd:/luma/sysmodules/` в `sd:/_nds/TWiLightMenu/TwlBg/` (если папки `TwlBg` нет - создайте её), и переименуйте файл в `Widescreen.cxi`
1. Перезапустите вашу 3DS с зажатой <kbd>SELECT</kbd> чтобы открыть настройки Luma3DS
1. Включите `external FIRMs and modules`, затем нажмите <kbd>START</kbd> чтобы сохранить и выйти
1. Откройте TWiLight Menu++, нажмите <kbd class="face">Y</kbd> на нужной игре, чтобы вызвать настройки для каждой игры, и установите `Соотношение сторон экрана` на `16:10`

Всё готово! Наслаждайтесь вашими DS играми в широкоэкранном режиме!

**ПРИМЕЧАНИЕ:**
1. Не удерживайте <kbd>START</kbd> или <kbd>SELECT</kbd> при запуске TWLMenu++, иначе изображение заглючит
1. Не все игры поддерживают широкоэкранный режим. [Вот список игр с поддержкой широкоэкранного режима](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`.
    - If the problem persists, [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide, as well as using the original build of Luma
1. В большинстве случаев широкоэкранный режим корректируют только 3D-элементы, а 2D-элементы (например, меню) будут растянуты
1. Luma3DS **должна быть** загружена с SD-карты, если широкоэкранный режим не работает, убедитесь, что у вас есть `boot.firm` в корне SD карты
