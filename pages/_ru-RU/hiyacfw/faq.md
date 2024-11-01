---
lang: ru-RU
layout: faq
section: hiyacfw
title: ЧаВо & Устранение неполадок
long_title: hiyaCFW ЧаВо & Устранение неполадок
description: ЧаВо & Устранение неполадок hiyaCFW
---

#### Как установить приложения или DSiWare на SDNAND hiyaCFW?
You will need to use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to install apps to the SDNAND, but older DS homebrew may not be compatible.
- Если вы хотите установить дампы игровых карт, вам следует использовать [переадресатор](../ds-index/forwarders)

#### Почему я получаю код ошибки #-2435-8325?
Если ваш Nintendo DSi показывает ошибку в этом формате при загрузке, где # является числом, это означает, что второй этап загрузки считает, что что-то не так с вашим SDNAND. Обычно это исправляется путем [переустановки hiyaCFW](installing).

#### Почему я получаю сообщение "An error has occurred" при загрузке hiyaCFW?
Когда меню Nintendo DSi обнаруживает проблему, оно обычно показывает это сообщение об ошибке:

##### Ошибка свободного пространства
При проверке свободного места на устройствах хранения большого объема, DSi меню обнаруживает ошибку. Хотя это не может произойти на самом NAND (поскольку чип имеет объем всего 256 Мб), это может произойти при использовании SD-карты.

Что работает, а что нет определяется диапазоном в 2 ГБ. Например, при наличии 0-2 ГБ свободного места ошибки не возникают, а 2-4 ГБ - возникают. То же самое касается 4-6 ГБ и 6-8 ГБ, вплоть до размера вашей SD-карты.

Последняя версия hiyaCFW может создавать фиктивные файлы для обхода этой проблемы, поэтому убедитесь, что вы загрузили последнюю версию [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) и скопировали `hiya.dsi` из "for SDNAND SD card" в корень вашей SD карты.

##### Более 39 приложений
Меню Nintendo DSi имеет ограничение в 39 приложений. If you have more than that, delete some from the folders in `sd:/title` or use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to uninstall them.

##### Слишком много места используется для DSiWare
Также существует ограничение в 200 блоков (25 МБ) для DSiWare в папке `00030004`. This can be worked around by installing DSiWare as system apps using [NTM](https://github.com/Epicpkmn11/NTM/releases/latest).

##### Некоректное приложение
При добавлении приложений в hiyaCFW необходимо учитывать несколько моментов:
- Дампы игровых карт невозможно запустить без использования [переадресатора](../ds-index/forwarders)
- Для работы Homebrew из меню Nintendo DSi нужно правильно его собрать с помощью современных инструментов
