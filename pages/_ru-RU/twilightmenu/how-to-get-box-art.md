---
lang: ru-RU
layout: wiki
section: twilightmenu
category: other
title: Как получить обложки
description: Как получить обложки игр в TWiLight Menu++
---

### Windows
1. Скачайте последнюю версию [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Разархивируйте `TwilightBoxart-Windows-UX.zip` и запустите `TwilightBoxart.exe`
1. Нажмите `Detect SD`
   - Если приложение не может правильно найти путь к SD-карте, то нажмите `Browse...` и выберете правильный
1. Изменить размер, границы, и т. п. параметры по вашему вкусу
1. Нажмите `Start`
1. Убедитесь, что в настройках TWiLight Menu++ "Обложки игр" включены

### macOS/Linux
1. Скачайте последнюю версию [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Разархивируйте `.zip`
1. Откройте `TwilightBoxart.ini` в извлеченной папке в текстовом редакторе
1. Введите путь к вашей SD-карте после `SdRoot=`, затем сохраните файл
   - В macOS это `/Volumes/` затем название вашей SD-карты
1. Откройте Терминал
1. В терминале введите `cd`, затем перетащите папку с `TwilightBoxart.CLI` в открытый ранее терминал
1. Введите и примените `chmod +x TwilightBoxart.CLI`
1. Введите и примените `./TwilightBoxart.CLI`
1. Нажмите `Да` если путь к вашей SD-карте показан верно
1. Убедитесь, что в настройках TWiLight Menu++ "Обложки игр" включены

### Ручная установка
1. Скачайте набор png обложек с [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Извлеките файлы .png в `sd:/_nds/TWiLightMenu/boxart`
1. Убедитесь, что в настройках TWiLight Menu++ "Обложки игр" включены

**Чтобы добавить свою обложку:** Поместите их в `sd:/_nds/TWiLightMenu/boxart`. Обложка может иметь TID в качестве названия файла (например `ASME.png`) или (`SM64DS.nds.png`). Обложка должна быть в формате `.png`, и рекомендованного размера 128x115 или до 208x143 максимум.

Индивидуальную обложку также можно загрузить с GameTDB, в категории **S Covers (png)**.
