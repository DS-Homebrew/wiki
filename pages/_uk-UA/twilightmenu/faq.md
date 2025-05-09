---
lang: uk-UA
layout: faq
section: twilightmenu
title: ЧаПи та Усунення проблем
long_title: ЧаПи та Усунення проблем щодо TWiLight Menu++
description: ЧаПи та усунення проблем для TWiLight Menu++
---

Щоб отримати більше інформації, відвідайте [тред на GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Чому при запуску TWiLight Menu++ моя 3DS зависає на чорному екрані, вилітає, вимикається тощо?
Можливо, TWL_FIRM якимось чином була пошкоджена. Дотримуйтесь цього посібника, щоб вирішити проблему: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Як виправити білий екран при завантаженні TWiLight Menu++?
- Перезавантажте свою консоль
- Якщо це не спрацює, відформатуйте SD карту в FAT32 з розміром кластеру 32 КБ
    - Ознайомтеся з рекомендованими інструкціями на [на сторінці dsi.cfw.guide](https://dsi.cfw.guide/sd-card-setup.html)
- Якщо це теж не спрацює, спробуйте іншу SD карту

#### Як виправити непрацюючий сенсорний екран після запуску гри?
- Якщо ви запускаєте картридж, переконайтеся, що для параметра `Сенсорний режим у Slot-1` встановлено значення `Режимі DS`
- Якщо проблема не зникла, або якщо ви використовуєте ігри з ROM, дотримуйтесь цього посібника: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### Як виправити те, що TWiLight Menu++ перезавантажується або видає Guru Meditation Error під час запуску гри?
Перейдіть до Налаштувань TWLMenu++ та вимкніть `Оновляти список нещодавно відтворених`.

#### Чому при спробі завантажити гру DS з SD карти з'являється білий екран?
Ознайомтеся з [У мене проблеми з моїм ROM, що мені робити?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) на сторінці ЧаПи про nds-bootstrap.

#### Як використовувати чіти?
Вам потрібно мати базу даних чітів у вигляді файлу `usrcheat.dat` у теці `sd:/_nds/TWiLightMenu/extras/`. Найсвіжіша база даних чітів - [DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/).
- На 3DS ця база даних доступна в додатку Universal-Updater під назвою "NDS(i) Cheat Databases". Це автоматично встановить базу даних в потрібне місце.

Alternatively, you can use [r4cce](https://web.archive.org/web/20241130133125/http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

Після того, як ви встановите базу даних чітів, ви можете увімкнути чіти, натиснувши <kbd class="face">Y</kbd> у TWiLight Menu++, коли курсор знаходитиметься на потрібній грі, щоб відкрити налаштування гри, а потім <kbd class="face">X</kbd>, щоб відкрити меню чітів.

#### Як показати кастомне зображення на верхньому екрані теми DSi? Чи можу я приховати його?
Випадкове зображення `.png` з теки `sd:/_nds/TWiLightMenu/dsimenu/photos/` буде показуватися щоразу при завантаженні меню. Якщо відповідних зображень немає, замість них буде використано скріншоти, зроблені nds-bootstrap.

- Зображення мають бути розміром не більше 208x156
- Якщо у вас виникають помилки, то скоріш за все, це помилка з розміром зображення. Будь ласка, використайте [tinypng](https://tinypng.com) для зменшення розміру

As for hiding the picture, you need to edit the `theme.ini` file found in `sd:/_nds/TWiLightMenu/dsimenu/themes/[theme folder]/`. Відкрийте файл текстовим редактором, змініть рядок `RenderPhoto` з `1` на `0`, потім збережіть файл.

#### Як мені отримати ігри?
Ви можете завантажити саморобні програми з [Universal-DB](https://db.universal-team.net/ds) та [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Щоб отримати офіційно випущені ігри, вам потрібно отримати їх у вигляді дампа з ваших фізичних картриджів або з наявної консолі:
- На DS ви можете використати [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) для копіювання своїх ігор GBA, та, якщо у вас є флешкарта для Slot-2, ігор DS. Якщо у вас є лише флешкарта для Slot-1 і ви хочете створити копію гри для DS, ви можете скористатися програмою [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), яка вимагає сумісного з DS Wi-Fi з'єднання, а також клієнта FTP на окремому пристрої для отримання ROM
- На DSi ви можете використати [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) для копіювання своїх ігор DS та DSiWare
- На 3DS ви можете використати [GodMode9](https://github.com/d0k3/GodMode9/releases) для копіювання ваших ігор DS, DSiWare та Virtual Console

#### Чи можу я перенести файли збережень з мого Ігрового Картриджа на SD карту чи навпаки?
Так. Ви можете використовувати [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) на 3DS, або [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) на DSi / 3DS.

#### Як змінити мову TWiLight Menu++?
1. Відкрийте Налаштування TWiLight Menu++. Це можна зробити, утримуючи <kbd>SELECT</kbd> під час завантаження TWiLight Menu++
1. Змініть першу опцію, поки не побачите потрібну мову, після чого вийдіть з налаштувань
    - Ви також можете змінити перші три опції на сторінці налаштувань nds-bootstrap, оскільки вони керують мовою та регіоном ігор для DS та їхніми назвами у TWiLight Menu++

#### Чи це емулятор DS(i)?
Ні, це не емулятор. Меню та ігри DS (завантажені через nds-bootstrap) запускаються нативно у режимі DS/DSi. Емулюються лише консолі минулих років, та частково GBA (оскільки деякі або всі частини, такі як графіка, виконуються нативно).

#### Які системи підтримує TWiLight Menu++?
Ознайомтеся зі [Списком систем, що підтримуються TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Чи можуть експлойти ігор для Slot-1 завантажувати TWiLight Menu++?
Ні. Доступ до SD-карти надається лише додаткам DSiWare, тому ігри Slot-1 не можуть запускати TWiLight Menu++ (або навіть мати доступ до нього).

#### Чому я не можу знайти/побачити свої ігри?
Існує декілька причин, чому ви не можете їх знайти.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (themes, configuration, images, emulators and more). Якщо ви розмістили тут свої ігри, будь ласка, перенесіть їх в інше місце.
- Якщо у вашій теці понад 39 елементів і всі слоти в меню зайняті, ваші ігри можуть бути на наступній сторінці. Використовуйте <kbd class="l">L</kbd>/<kbd class="r">R</kbd> або <kbd>SELECT</kbd> + <kbd>Ліворуч</kbd>/<kbd>Праворуч</kbd> для перемикання сторінок
- Якщо ваша гра або тека прихована, вам може знадобитися показати приховані файли за допомогою налаштувань графічного інтерфейсу TWiLight Menu++
- Якщо ваша гра знаходиться в архіві (`zip`, `rar`, `7z`і т. д.), вона не може бути використана TWiLight Menu++. Розпакуйте гру з архіву, щоб користуватися нею
- Якщо ваша гра не використовує одне з підтримуваних [розширень](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), можливо, вам доведеться змінити розширення, перейменувавши файл

#### Як отримати доступ до налаштувань TWiLight Menu++?
Спосіб доступу до налаштувань TWiLight Menu++ залежить від вашої конфігурації.
- **Класичне меню DS:** Торкніться піктограми DS у нижній частині нижнього екрана
- **Теми Nintendo DSi/SEGA Saturn/Homebrew Launcher: використання меню SELECT:** Натисніть <kbd>SELECT</kbd>, потім запустіть аплет налаштувань (використовуйте D-PAD для виділення опцій)
- **Теми Nintendo DSi/SEGA Saturn/Homebrew Launcher, які не використовують меню SELECT:** Натиснувши <kbd>SELECT</kbd>, ви потрапите в меню DS Classic
- **Тема Nintendo 3DS:** Торкніться піктограми гайкового ключа на нижньому екрані
- **R4 Оригінальна тема:** Натисніть <kbd>START</kbd> (якщо ви перебуваєте у файловому браузері), потім натисніть <kbd>SELECT</kbd>
- **Wood UI theme:** Hitting <kbd>START</kbd> will bring you to the DS Classic Menu

Ви також можете утримувати <kbd>SELECT</kbd> під час запуску TWiLight Menu++, щоб отримати прямий доступ до налаштувань.

#### Як використовувати користувацькі іконки/банери для ігор?
Ви можете використовувати власний банер у форматі PNG або DS banner.bin, розмістивши його в теці `sd:/_nds/TWiLightMenu/icons` з назвою ПЗУ (включаючи розширення) або теки + `.png` або `.bin`.

Для банерів у форматі PNG вам потрібен будь-який файл PNG з 15 або менше кольорами та максимальною роздільною здатністю 32x32. Повна прозорість працює і не враховує 15 кольорів, але напівпрозорість не працює.

Банери типу banner.bin можуть бути анімованими та дозволяють замінити заголовок, який буде показано в TWiLight Menu++. Їх можна зробити за допомогою [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

Pre-made banners can be found in the [icons section of the TWiLight Menu++ themes site](https://skins.ds-homebrew.com/icon/) and if you make any they can be shared there as well.

#### Як встановити користувацькі теми для TWiLight Menu++?
Custom themes can be acquired from [the official themes site](https://skins.ds-homebrew.com/), which houses serveral community-made themes ready to apply. You can also make a custom theme for the Nintendo 3DS and Nintendo DSi UIs on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-themes). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** UIs are _**not**_ customizable.

Once you have acquired a custom theme, you can install it by placing its folder on the appropiate path, which depends on what UI the theme is made for.
- Themes for the Nintendo DSi UI go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Themes for the Nintendo 3DS UI go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Themes for the R4 Original UI go in `sd:\_nds\TWiLightMenu\r4menu\themes\`
- Themes for the Wood UI go in `sd:\_nds\TWiLightMenu\akmenu\themes\`

If you are using a 3DS family console, you can install custom themes using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Themes`.

Щоб застосувати власну тему, вам потрібно перейти до налаштувань TWiLight Menu++.
1. On the `GUI Settings` page, go to the `User Interface` option and choose the UI using the right and left buttons on the D-Pad.
1. Once the target UI is selected, go to the `Custom Theme` option and press the A button to choose between the themes you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired theme, then press A to select it.
1. Застосуйте налаштування, натиснувши B, щоб повернутися до TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected theme supports it and is enabled on the settings).

#### Чи існує емулятор 3DS для DS(i)?
Ні, його не існує. Емулювати 3DS на DS(i) неможливо, оскільки 3DS використовує новіше обладнання.
