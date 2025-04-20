---
lang: ru-RU
layout: faq
section: twilightmenu
title: ЧаВо и Устранение неполадок
long_title: ЧаВо по TWiLight Menu++ и Устранение неполадок
description: ЧаВо и устранение неполадок для TWiLight Menu++
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

#### Что делать, если не работает сенсорный экран после запуска игры?
- Если вы запускаете картридж, то убедитесь, что для параметра `Режим работы сенсора в Slot-1` установлено значение `DS`
- Если проблема не решена или если вы используете ROM, следуйте этому руководству: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### Что делать, если TWiLight Menu++ перезапускается или выдает ошибку Guru Meditation Error при запуске игры?
Зайдите в Настройки TWLMenu++ и отключите `Вести список недавних`.

#### Почему приставка зависает на белом экране, когда я пытаюсь запустить игру с SD карты?
См. [У меня возникли проблемы с моим(-и) ROM-ом(-ами), что я должен делать?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) на странице ЧаВо по nds-bootstrap.

#### Как использовать читы?
Вам необходимо иметь БД читов в виде файла `usrcheat.dat` в папке `sd:/_nds/TWiLightMenu/extras/`. Самая свежая база читов это - [DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/).
- На 3DS эта база данных доступна в приложении Universal-Updater под названием "NDS(i) Cheat Databases". При помощи этой программы вы сможете автоматически установить базу данных.

Alternatively, you can use [r4cce](https://web.archive.org/web/20241130133125/http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

Как только у вас будет БД с читами, наведите курсор на нужную игру и нажмите <kbd class="face">Y</kbd>, чтобы открыть дополнительные настройки, затем <kbd class="face">X</kbd>, чтобы открыть меню читов.

#### Как вывести свою картинку на верхний экран в теме DSi? Могу ли я скрыть её вместо этого?
Случайное `.png` изображение в `sd:/_nds/TWiLightMenu/dsimenu/photos/` будет отображаться при каждом запуске меню. Если подходящих изображений нет, вместо них будут использоваться скриншоты, сделанные nds-bootstrap.

- Изображения должны быть размером не более 208x156
- Если у вас возникают ошибки, то, скорее всего, это из-за размера изображения. Пожалуйста, используйте [tinypng](https://tinypng.com) для уменьшения размера

As for hiding the picture, you need to edit the `theme.ini` file found in `sd:/_nds/TWiLightMenu/dsimenu/themes/[theme folder]/`. Откройте файл в текстовом редакторе, измените строку `RenderPhoto` с `1` на `0`, затем сохраните файл.

#### Где брать игры?
Homebrew игры можно загрузить с сайтов [Universal-DB](https://db.universal-team.net/ds) и [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Чтобы играть в официально выпущенные игры, вам необходимо получить их копии, снятые либо с ваших картриджей, либо с другой консоли:
- На DS вы можете использовать [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) для копирования своих GBA-игр и, если у вас есть флэш-картридж для Slot-2, то и DS-игр. Если у вас есть только флеш-картридж для Slot-1 и вы хотите сделать копию игры для DS, вы можете использовать [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), который требует Wi-Fi соединения, совместимого с DS, а также FTP-клиента на отдельном устройстве для получения ROM-а
- На DSi вы можете использовать [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) для копирования игр DS и DSiWare
- На 3DS вы можете использовать [GodMode9](https://github.com/d0k3/GodMode9/releases) для копирования игр DS, DSiWare и игр Virtual Console

#### Можно ли перенести файлы сохранений с картриджа на SD-карту или наоборот?
Да. Вы можете использовать [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) на 3DS, или [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) на DSi / 3DS.

#### Как изменить язык TWiLight Menu++?
1. Откройте настройки TWiLight Menu++, это можно сделать, удерживая <kbd>SELECT</kbd> во время загрузки TWiLight Menu++
1. Изменяйте первый параметр, пока не увидите нужный вам язык, затем выйдите из настроек
    - Вы также можете изменить первые три параметра на странице настроек nds-bootstrap, поскольку они управляют языком и регионом игр DS и их названиями в TWiLight Menu++

#### Это эмулятор DS(i)?
Нет, это не эмулятор. Меню и DS-игры (загруженные через nds-bootstrap) нативно запускаются на консоли DS/DSi. Единственными эмулируемыми консолями являются консоли прошлых лет, но частично и GBA (некоторые или все части, такие как графика, выполняются нативно).

#### Какие системы поддерживает TWiLight Menu++?
См. [Список систем, поддерживаемых TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Можно ли использовать уязвимость игр в Slot-1 для запуска TWiLight Menu++?
Нет. Доступ к SD-карте предоставляется только приложениям DSiWare, поэтому Slot-1 игры не могут запустить (или даже получить доступ) TWiLight Menu++.

#### Почему я не могу найти/просмотреть свои игры?
Существует множество причин, по которым вы можете не найти их.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (themes, configuration, images, emulators and more). Если вы разместили здесь свои игры, пожалуйста, переместите их в другое место.
- Если в папке более 39 элементов и все ячейки в меню заняты, ваши игры могут оказаться на следующей странице. Используйте <kbd class="l">L</kbd>/<kbd class="r">R</kbd> или <kbd>SELECT</kbd> + <kbd>Влево</kbd>/<kbd>Впрво</kbd> для переключения страниц
- Если ваша игра или папка скрыта, вам может понадобиться включить отображение скрытых файлов, через Настройки Графического Интерфейса TWiLight Menu++
- Если ваша игра находится в архиве (`zip`, `rar`, `7z`и т. д.), она не может быть использована TWiLight Menu++. Извлеките игру из архива, чтобы использовать ее
- Если ваша игра не использует одно из [поддерживаемых расширений](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), вам, возможно, придется изменить расширение, переименовав файл

#### Как открыть настройки TWiLight Menu++?
Способ доступа к настройкам TWiLight Menu++ зависит от вашей конфигурации.
- **Классическое Меню DS:** Нажмите на значок DS в нижней части нижнего экрана
- **Темы Nintendo DSi/SEGA Saturn/Homebrew Launcher с помощью меню SELECT: ** нажмите <kbd>SELECT</kbd>, затем выберите Настройки (используйте крестовину для перемещения по меню)
- **Темы Nintendo DSi/SEGA Saturn/Homebrew Launcher не используя меню SELECT: ** Нажав <kbd>SELECT</kbd>, вы попадете в Классическое Меню DS
- **Тема Nintendo 3DS:** Нажмите на значок гаечного ключа в нижней части экрана
- **Оригинальная тема R4:** Нажмите <kbd>START</kbd> (если вы находитесь в браузере файлов), затем нажмите <kbd>SELECT</kbd>
- **Wood UI theme:** Hitting <kbd>START</kbd> will bring you to the DS Classic Menu

Вы также можете удерживать <kbd>SELECT</kbd> при запуске TWiLight Menu++ для прямого доступа к настройкам.

#### Как использовать пользовательские значки/баннеры для игр?
Вы можете использовать пользовательский баннер в формате PNG или DS banner.bin, поместив его в папку `sd:/_nds/TWiLightMenu/icons`, назвав его также, как и ROM (включая расширение) или папку (не забудьте добавить расширение `.png` или `.bin`).

Для баннеров в формате PNG вам нужен любой PNG файл с не более чем 15-ю цветами и максимальным разрешением 32x32. Полная прозрачность работает и не считается одним из 15-и цветов, а полупрозрачность не работает.

баннер типа banner.bin может быть анимированным и позволяет заменить иконку, которая будет отображаться в TWiLight Menu++. Их можно сделать с помощью [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

Pre-made banners can be found in the [icons section of the TWiLight Menu++ themes site](https://skins.ds-homebrew.com/icon/) and if you make any they can be shared there as well.

#### Как установить пользовательскую тему для TWiLight Menu++?
Custom themes can be acquired from [the official themes site](https://skins.ds-homebrew.com/), which houses serveral community-made themes ready to apply. You can also make a custom theme for the Nintendo 3DS and Nintendo DSi UIs on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-themes). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** UIs are _**not**_ customizable.

Once you have acquired a custom theme, you can install it by placing its folder on the appropiate path, which depends on what UI the theme is made for.
- Themes for the Nintendo DSi UI go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Themes for the Nintendo 3DS UI go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Themes for the R4 Original UI go in `sd:\_nds\TWiLightMenu\r4menu\themes\`
- Themes for the Wood UI go in `sd:\_nds\TWiLightMenu\akmenu\themes\`

If you are using a 3DS family console, you can install custom themes using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Themes`.

Чтобы применить пользовательскую тему, необходимо войти в Настройки TWiLight Menu++.
1. On the `GUI Settings` page, go to the `User Interface` option and choose the UI using the right and left buttons on the D-Pad.
1. Once the target UI is selected, go to the `Custom Theme` option and press the A button to choose between the themes you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired theme, then press A to select it.
1. Примените настройки, нажав B - вернитесь в TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected theme supports it and is enabled on the settings).

#### Существует ли эмулятор 3DS для DS(i)?
Нет, его не существует. Эмуляция 3DS на DS(i) невозможна, поскольку 3DS мощнее.
