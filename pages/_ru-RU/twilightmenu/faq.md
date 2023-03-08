---
lang: ru-RU
layout: faq
section: twilightmenu
title: ЧаВо и Устранение неполадок
long_title: ЧаВо по TWiLight Menu++ и Устранение неполадок
description: FAQs and troubleshooting for TWiLight Menu++
---

Для получения более подробной информации посетите тему на [GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Почему моя 3DS зависает с чёрным экраном, вылетает, выключается, и т. д. когда я запускаю TWiLight Menu++?
Возможно TWL_FIRM повреждён. Следуйте этой инструкции чтобы исправить проблему: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Как мне исправить проблему зависания на белом экране при запуске TWiLight Menu++?
- Перезагрузить консоль
- Если это не поможет, отформатируйте вашу SD карту в FAT32 с размером кластера 32 Кб
   - Рекомендуемые инструменты см. на странице [dsi.cfw.guide](https://dsi.cfw.guide/sd-card-setup.html)
- Если и это не помогло, попробуйте использовать другую SD-карту

#### How do I fix touch screen not working after launching a game?
- If you're launching a cartridge, then make sure the `Slot-1 Touch Mode` setting is set to `DS mode`
- If the issue persists, or if you're using a ROM instead, then follow this guide: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### Where is the Acekard/Wood UI theme?
Тема acekard (также называемая Wood UI) была удалена из-за ошибок, вызвавших повреждение SD-карты. Ожидайте исправления. Прогресс по возвращению этой темы можно найти [здесь](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Зайдите в Настройки TWLMenu++ и отключите `Вести список недавних`.

#### Why do I get a white screen when trying to load a DS game from SD card?
См. [У меня возникли проблемы с моим(-и) ROM-ом(-ами), что я должен делать?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) на странице ЧаВо по nds-bootstrap.

#### How do I use cheats?
Вам необходимо иметь БД читов в виде файла `usrcheat.dat` в папке `sd:/_nds/TWiLightMenu/extras/`. Самая свежая база читов это - [DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS(i) Cheat Databases". This will automatically install it to the required location.

В качестве альтернативы вы можете использовать [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) для создания собственной чит-базы данных.

Как только у вас будет БД с читами, наведите курсор на нужную игру и нажмите <kbd class="face">Y</kbd>, чтобы открыть дополнительные настройки, затем <kbd class="face">X</kbd>, чтобы открыть меню читов.

#### How do I show a custom picture on the top screen of the DSi theme? Can I hide it instead?
Случайное `.png` изображение в `sd:/_nds/TWiLightMenu/dsimenu/photos/` будет отображаться при каждом запуске меню. Если подходящих изображений нет, вместо них будут использоваться скриншоты, сделанные nds-bootstrap.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

Что касается скрытия картинки, вам нужно отредактировать файл `theme.ini`, который находится в `sd:/_nds/TWiLightMenu/dsimenu/themes/[папка skin]/`. Откройте файл в текстовом редакторе, измените строку `RenderPhoto` с `1` на `0`, затем сохраните файл.

#### How do I get games?
Homebrew игры можно загрузить с сайтов [Universal-DB](https://db.universal-team.net/ds) и [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Чтобы получить копии своих розничных игр:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Да. Вы можете использовать [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) на 3DS, или [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) на DSi / 3DS.

#### How do I change TWiLight Menu++'s language?
1. Откройте настройки TWiLight Menu++, это можно сделать, удерживая <kbd>SELECT</kbd> во время загрузки TWiLight Menu++
1. Изменяйте первый параметр, пока не увидите нужный вам язык, затем выйдите из настроек
   - Вы также можете изменить первые три параметра на странице настроек nds-bootstrap, поскольку они управляют языком и регионом игр DS и их названиями в TWiLight Menu++

#### Is this a DS(i) emulator?
Нет, это не эмулятор. Меню и DS-игры (загруженные через nds-bootstrap) нативно запускаются на консоли DS/DSi. Единственными эмулируемыми консолями являются консоли прошлых лет, но частично и GBA (некоторые или все части, такие как графика, выполняются нативно).

#### What systems does TWiLight Menu++ support?
См. [Список систем, поддерживаемых TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
Нет. Доступ к SD-карте предоставляется только приложениям DSiWare, поэтому Slot-1 игры не могут запустить (или даже получить доступ) TWiLight Menu++.

#### Why can't I find/see my games?
Существует множество причин, по которым вы можете не найти их.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
Способ доступа к настройкам TWiLight Menu++ зависит от вашей конфигурации.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

Вы также можете удерживать <kbd>SELECT</kbd> при запуске TWiLight Menu++ для прямого доступа к настройкам.

#### How do I use custom icons/banners for games?
Вы можете использовать пользовательский баннер в формате PNG или DS banner.bin, поместив его в папку `sd:/_nds/TWiLightMenu/icons`, назвав его также, как и ROM (включая расширение) или папку (не забудьте добавить расширение `.png` или `.bin`).

Для баннеров в формате PNG вам нужен любой PNG файл с не более чем 15-ю цветами и максимальным разрешением 32x32. Полная прозрачность работает и не считается одним из 15-и цветов, а полупрозрачность не работает.

баннер типа banner.bin может быть анимированным и позволяет заменить иконку, которая будет отображаться в TWiLight Menu++. They can be made using [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

Готовые баннеры можно найти в разделе иконок [на сайте скинов TWiLight Menu++](https://skins.ds-homebrew.com/icon/), и если вы тоже сделаете какие-нибудь баннеры, то можете поделиться ими там же.

#### How do I install custom themes for TWiLight Menu++?
Пользовательские скины для тем можно найти на [официальном сайте скинов](https://skins.ds-homebrew.com/). На нем размещены несколько скинов, сделанных сообществом и готовых к использованию. Вы также можете самостоятельно создать скин для тем Nintendo 3DS и Nintendo DSi, следуя [этому руководству](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins). Темы **Homebrew Launcher**, **Sega Saturn** и **Game Boy Color** являются _**не**_ настраиваемыми.

Как только вы обзаведетесь скином, вы можете установить его, поместив его папку в соответствующий путь, который зависит от того, для какой темы создан скин.
- Skins for the Nintendo DSi theme go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skins for the Nintendo 3DS theme go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skins for the R4 Original theme go in `sd:\_nds\TWiLightMenu\r4menu\themes\`

Если вы используете консоль семейства 3DS, вы можете установить пользовательские скины с помощью [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Зайдите в настройки Universal-Updater, затем `Выберите Unistore`, `+`, `TWiLight Menu++ Skins`.

Чтобы применить пользовательскую тему, необходимо войти в Настройки TWiLight Menu++.
1. На странице `Настройки интерфейса` перейдите к параметру `Тема` и выберите тему, используя правую и левую кнопки на D-Pad.
1. После выбора целевой темы нажмите кнопку A, чтобы выбрать между установленными скинами.
1. С помощью кнопок вверх и вниз на D-Pad выделите нужный скин, затем нажмите A, чтобы выбрать его.
1. Примените настройки, нажав B - вернитесь в TWiLight Menu++.

TWiLight Menu++ теперь должно иметь индивидуальный внешний вид (и музыку, если выбранный скин поддерживает ее и включен в настройках).

#### Is there a 3DS emulator for DS(i)?
Нет, его не существует. Эмуляция 3DS на DS(i) невозможна, поскольку 3DS мощнее.
