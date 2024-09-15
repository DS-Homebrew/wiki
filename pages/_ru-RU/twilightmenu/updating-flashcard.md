---
lang: ru-RU
layout: wiki
section: twilightmenu
category: updating
title: Обновление (Флеш-картридж)
long_title: Обновление TWiLight Menu++ (Флеш-картридж)
description: Как обновить TWiLight Menu++ на флеш-картридже Nintendo DS
---

Если обновляетесь с версии ниже чем v16.4.0, пожалуйста, переместите ваши `.sav` файлы для DS игр в новую папку `saves`, находящуюся в той же папке, что и ваши DS ROM-ы.
{:.alert .alert-info}

Если обновляетесь с версии ниже чем v21.0.0, пожалуйста, переместите ваши `.pab` и/или `.prv` файлы для DSiWare в новую папку `saves`, находящуюся в той же папке, что и ваши DSiWare ROM-ы.
{:.alert .alert-info}

### Обновление
1. Скачайте последнюю версию [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Разархивируйте `TWiLightMenu-Flashcard.7z`
1. Скопируйте папку `_nds` в корень Sd карты вашего флеш-картриджа, согласившись на замену
    - При использовании macOS убедитесь, что вы **копируете** и `Объединяете`, а не `Заменяете`
1. Скопируйте файл `BOOT.NDS` в корень SD карты вашего флеш-картриджа, согласившись на замену
1. Если после обновления TWLMenu++ не запускается, то обновите также файл(ы) автомтатического запуска (autoboot)

### Дополнительные шаги для пользователей SD карт DSi/3DS

Если вы можете переключаться между SD-картой и флеш-картриджем в TWLMenu++, и если версия TWLMenu++ на флеш-картридже v16.3.0 или ниже, выполните эти шаги.

1. Перейдите в настройки TWLMenu++
1. Выберите `Обновить TWiLight Menu++`
1. Выберете `microSD Slot-1 > (micro)SD консоли`
