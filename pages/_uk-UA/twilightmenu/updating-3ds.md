---
lang: uk-UA
layout: wiki
section: twilightmenu
category: updating
title: Оновлення (3DS)
long_title: Оновлення TWiLight Menu++ (3DS)
description: Як оновити TWiLight Menu++ на Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Вручну
---

Якщо ви оновлюєтесь з версії, старішої за v6.8.3, будь ласка, перемістіть ваші файли `.sav` для ігор DS до нової теки під назвою `saves`, що повинна знаходитись у тому ж місці, що й ROM для DS.
{:.alert .alert-info}

Якщо ви оновлюєтесь з версії, старішої за v21.0.0, будь ласка, перемістіть ваші файли `.pub` та/чи `.prv` для DSiWare до нової теки під назвою `saves`, що повинна знаходитись у тому ж місці, що й ROM для DSiWare.
{:.alert .alert-info}

При оновленні з версії v25.7.0 або старішої, рекомендовано видалити `TWiLight Menu++ Game Booter` зі списку додатків, використовуючи FBI.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Відкрийте Universal-Updater
   - Якщо у вас його немає, дотримуйтесь інструкцій зі [встановлення](installing-3ds)
1. Знайдіть TWiLight Menu++ в сітці додатків, ви можете шукати за допомогою 3-ї вкладки на бічній панелі, якщо у вас виникли проблеми з пошуком
1. Натисніть <kbd class="face">A</kbd> або торкніться іконки завантаження на бічній панелі та виберіть `TWiLight Menu++`, щоб встановити програму
   - Це займе деякий час
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Завантажте останню версію [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Розпакуйте `TWiLightMenu-3DS.7z`
1. Скопіюйте теку `_nds` в кореневу теку SD карти, замінивши всі наявні файли
   - Якщо ви використовуєте macOS, переконайтеся, що **скопіювали** та `об'єднали`, але не `замінили`
1. Скопіюйте файл `BOOT.NDS` в кореневу теку SD карти, замінивши всі наявні файли
1. Скопіюйте файл `.cia` в кореневу теку SD карти, замінивши всі вже наявні файли
1. Встановіть CIA файл на вашу 3DS за допомогою FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Оновлення

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
