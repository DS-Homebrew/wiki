---
lang: ru-RU
layout: wiki
section: twilightmenu
category: other
title: Создание RAM-дисков
description: Как создать RAM-диски для использования старых homebrew приложений в TWiLight Menu++
---

Некоторые DS homebrew не могут правильно получить доступ к файловой системе SD-карты. Из-за этого может потребоваться загрузить в оперативную память автономную файловую систему, содержащую необходимые файлы для работы вашего homebrew.

Используемое здесь программное обеспечение требует операционной системы Windows.
{:.alert .alert-info}

Вам не нужно следовать этому руководству, если вы используете флеш-картридж.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](https://web.archive.org/web/20240923165935/https://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Инструкции от @Dakkon7, изменены RocketRobz:

1. Запустите RAMDisk
1. Нажмите **View** -> **Advanced**
1. В поле **Disk Size** введите `12` для DSi, `28` для 3DS, но **не более 1023 МБ**
1. Снимите отметку с **Create TEMP Directory** если она стоит
1. Нажмите **Load/Save**
1. Нажмите `Start RAMDisk`, теперь должно появится новое окно для вашего .img
1. Поместите туда любой файл и/или папку homebrew приложений и/или любой(-ые) другой(-ие) файл(-ы), которые вы собираетесь использовать
1. В программе RAMDisk нажмите `Save Disk Image Now`
1. Сохраните `имяrom-a.img` в папку `ramdisks`, находящуюся в папке с вашим .nds файлом. Если она еще не существует, создайте её
1. Когда закончите нажмите `Stop RAMDisk`
1. В TWiLight Menu++ наведитесь на ваше homebrew и нажмите Y
1. Установите значение "RAM диск" на 0
1. Запустите homebrew программу, она должна считать ваш RAM-диск

Если вы хотите использовать несколько слотов RAM-дисков для одного и того же приложения, то можете использовать расширение `.img1` для слота RAM-дисков №1 и далее по аналогии.
{:.alert .alert-info}
