---
lang: uk-UA
layout: wiki
section: twilightmenu
category: other
title: Ігри у широкоекранному режимі
description: Як використовувати TWiLight Menu++ в широкоекранному режимі на Nintendo 3DS
---

Цей розділ потребує консоль сімейства 3DS, на якій запущено сучасне CFW з [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

Якщо ви використовуєте Luma v13, будь ласка, оновіть її до v13.0.1, перш ніж дотримуватися цього посібника.
{:.alert .alert-info}

### Встановлення
1. Відкрийте FBI і виберіть `Remote Install`, потім `Scan QR Code`
1. Відскануйте цей QR-код, щоб встановити останню версію [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR код Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Відкрийте Universal Updater з меню HOME
1. Встановіть пакет TWPatch
    - Якщо ваша консоль не має доступу до Інтернету, ви можете завантажити [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) прямо на SD карту, а потім встановити його за допомогою FBI
1. Return to the HOME menu and launch TWPatch
    - If you get a message which says `Can't open /luma/exeTWL.bin`, then use [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/) to fix broken TWL mode
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
1. Якщо ви застрягли у широкоекранному режимі у всьому TWL_FIRM (включно з графічним інтерфейсом TWLMenu++) після виконання цього посібника і запуску гри, сумісної з широкоекранним режимом, видаліть `TwlBg.cxi` в теці `sd:/luma/sysmodules/`.
    - Якщо проблема не зникне, [видаліть](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) та [ переінсталюйте](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++ і повторіть наведені вище інструкції, а також використовуйте оригінальну збірку Luma
1. Більшість широкоекранних патчів лише підлаштовують 3D-елементи під широкоекранний режим, 2D-елементи (наприклад, меню) лише розтягуються
1. Luma3DS **повинна** завантажуватися з SD карти. Якщо широкоекранний режим не працює, переконайтеся, що у вас є `boot.firm` в корені вашої SD карти
