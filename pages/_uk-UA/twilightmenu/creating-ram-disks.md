---
lang: uk-UA
layout: wiki
section: twilightmenu
category: other
title: Створення RAM дисків
description: Як створити RAM диски для використання старих доморобок DS за допомогою TWiLight Menu++
---

Деякі доморобки DS не можуть отримати належний доступ до файлової системи SD карти. Через те, може знадобитися завантажити в оперативну пам'ять окрему файлову систему, що містить необхідні файли для вашого доморобного додатка, щоб вона працювала.

Програмне забезпечення, що тут використовуватиметься, вимагає наявності операційної системи Windows.
{:.alert .alert-info}

Вам не потрібно дотримуватися цього посібника, якщо ви використовуєте флешкарту.
{:.alert .alert-info}

Щоб зробити RAM диск, завантажте [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (натисніть `Download Software`) та дотримуйтесь наведених нижче інструкцій.

Інструкції від Dakkon7, модифіковані Rocket Robz:

1. Запустіть RAMDisk
1. Натисніть **View** -> **Advanced**
1. Для **Disk Size**, введіть `12` для DSi, або `28` для 3DS, але не більше **1023 MB**
1. Зніміть позначку **Create TEMP Directory**, якщо його вже позначено
1. Натисніть кнопку **Load/Save**
1. Натисніть `Start RAMDisk`, а потім має з'явитися нове вікно для вашого .img
1. Помістіть туди будь-який файл та/або теку, яку очікує доморобна програма, та/або файл(и), який(і) ви хочете використати
1. У програмі RAMDisk натисніть `Save Disk Image Now`
1. Збережіть `romname.img` до теки `ramdisks` у розташуванні файлу .nds. Якщо його ще не існує, створіть його
1. Натисніть `Stop RAMDisk`, коли закінчите
1. У TWiLight Menu++ відкрийте налаштування гри для вашої доморобки
1. Встановіть значення "Диск ОЗП" на 0
1. Запустіть вашу доморобку, та вона повинна прочитати ваш диск ОЗП

Якщо ви хочете використати інші слоти ОЗП для однієї доморобки, використовуйте розширення `.img1` для диску ОЗП 1 тощо.
{:.alert .alert-info}
