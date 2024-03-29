---
lang: uk-UA
layout: wiki
section: twilightmenu
category: other
title: Ігри у широкоекранному режимі
description: Як використовувати TWiLight Menu++ на широкому екрані на Nintendo 3DS
---

Цей розділ потребує консоль сімейства 3DS, на якій запущено сучасне CFW з [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

If you're currently using Luma v13, please update to v13.0.1, before following this guide.
{:.alert .alert-info}

### Встановлення
1. Відкрийте FBI і виберіть `Remote Install`, потім `Scan QR Code`
1. Відскануйте цей QR-код, щоб встановити останню версію [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR код Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Відкрийте Universal Updater з меню HOME
1. Встановіть пакет TWPatch
   - Якщо ваша консоль не має доступу до Інтернету, ви можете завантажити [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) прямо на SD карту, а потім встановити його за допомогою FBI
1. Поверніться до меню HOME та запустіть TWPatch
1. Утримуйте <kbd class="face">Y</kbd> + <kbd class="face">B</kbd>, щоб відкрити меню патчів та увімкнути `Widescreen patch (384x240 16:10)`
1. (Необов'язково!) Для менш піксельного екрана, також увімкніть `GPU scaling (blurry, no filters)`
1. Натисніть <kbd class="face">B</kbd>, щоб вийти з меню
1. Натисніть <kbd>START</kbd>, щоб згенерувати файл `TwlBg.cxi` з широкоекранним режимом
   - Якщо на верхньому екрані не вказано, що широкий патч увімкнено, почніть знову з кроку 3
1. Перемістіть `TwlBg.cxi` з `sd:/luma/sysmodules/` до `sd:/_nds/TWiLightMenu/TwlBg/` (створіть теку `TwlBg`, якщо її не існує) та перейменуйте файл на `Widescreen.cxi`
1. Перезапустіть 3DS, утримуючи <kbd>SELECT</kbd>, щоб відкрити конфігурацію Luma3DS
1. Увімкніть `external FIRMs and modules`, потім натисніть <kbd>START</kbd> для збереження та виходу
1. Відкрийте TWiLight Menu++, натисніть <kbd class="face">Y</kbd> на потрібній грі, щоб викликати налаштування для кожної гри, і встановіть `Співвідношення Сторін Екрану` на `16:10`

Усе готово! Насолоджуйтеся іграми для DS у широкоекранному режимі!

**ПРИМІТКИ:**
1. Не утримуйте <kbd>START</kbd> або <kbd>SELECT</kbd> під час запуску TWLMenu++, якщо ви не хочете, щоб широкоекранний екран глючив
1. Не кожна гра сумісна з широкоекранним режимом. [Ось список ігор з підтримкою широкого екрану](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`.
   - If the problem persists, [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide, as well as using the original build of Luma
1. Більшість широкоекранних патчів лише підлаштовують 3D-елементи під широкоекранний режим, 2D-елементи (наприклад, меню) лише розтягуються
1. Luma3DS **повинна** завантажуватися з SD карти. Якщо широкоекранний режим не працює, переконайтеся, що у вас є `boot.firm` в корені вашої SD карти
