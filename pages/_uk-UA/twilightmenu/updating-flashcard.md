---
lang: uk-UA
layout: wiki
section: twilightmenu
category: updating
title: Оновлення (Флешкарта)
long_title: Оновлення TWiLight Menu++ (Флешкарта)
description: Як оновити TWiLight Menu++ на флешкарту Nintendo DS
---

Якщо ви оновлюєтесь з версії, старішої за v6.4.0, будь ласка, перемістіть ваші файли `.sav` для ігор DS до нової теки під назвою `saves`, що повинна знаходитись у тому ж місці, що й ROM для DS.
{:.alert .alert-info}

Якщо ви оновлюєтесь з версії, старішої за v21.0.0, будь ласка, перемістіть ваші файли `.pub` та/чи `.prv` для DSiWare до нової теки під назвою `saves`, що повинна знаходитись у тому ж місці, що й ROM для DSiWare.
{:.alert .alert-info}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

### Оновлення
1. Завантажте останню версію [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Розпакуйте `TWiLightMenu-Flashcard.7z`
1. Скопіюйте теку `_nds` в кореневу теку вашої microSD карти, замінивши всі наявні файли
   - Якщо ви використовуєте macOS, переконайтеся, що **скопіювали** та `об'єднали`, але не `замінили`
1. Скопіюйте файл `BOOT.NDS` в кореневу теку вашої microSD карти, замінивши всі наявні файли
1. Якщо TWLMenu++ не завантажується після оновлення, оновіть також і файл(и) автозапуску

### Додаткові кроки для SD карти DSi/3DS

Якщо ви можете перемикатися між вмістом SD і флешкарти у TWLMenu++, та якщо флешкарта TWLMenu++ має версію v16.3.0 або новішу, виконайте ці кроки.

1. Відкрийте Налаштування TWLMenu++
1. Виберіть `Оновити TWiLight Menu++`
1. Виберіть `Slot-1 microSD > Консоль (micro)SD`
