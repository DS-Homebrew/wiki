---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: איך להשיג תמונות קופסה
description: איך להשיג תמונות קופסה/עטיפות משחק בTWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: ידני
---

{% capture tab-windows %}
1. הורידו את הגרסה האחרונה של [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. חלצו את `TwilightBoxart-Windows-UX.zip` והריצו את `TwilightBoxart.exe`
1. לחצו על `Detect SD`
   - אם זה לא מוצא את כרטיס הSD הנכון, לחצו על `Browse...` ובחרו את הנכון
1. שנו את הגדרות הגודל, גבול ועוד לפי רצונכם
1. לחצו על `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. הורידו את הגרסה האחרונה של [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. חלצו את ה`.zip`
1. פתחו את `TwilightBoxart.ini` שנמצא בתיקיה שחילצתם באמצעות עורך טקסט
1. הקלידו את הנתיב לכרטיס הSD שלכם אחרי `SdRoot=` ושמרו את הקובץ
   - בmacOS זה יהיה `/Volumes/` ואז השם של הכרטיס SD
1. פתח את terminal
1. בterminal הקלידו `cd `, לאחר מכן גררו את התיקיה עם `TwilightBoxart.CLI` בתוכה על הterminal ושחררו
1. הריצו את `chmod +x TwilightBoxart.CLI`
1. הריצו את `./TwilightBoxart.CLI`
1. בחרו ב`Yes` אם זה מראה את הנתיב הנכון לSD שלכם
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. הורידו חבילת תמונות קופסה בפורמט png מ[GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. חלצו את קבצי ה.png אל `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**To add your own box art:** Place them in `sd:/_nds/TWiLightMenu/boxart`.
- Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`)
- Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143
- If your **TW**i**L**ight Menu++ configuration has Box Art viewing set to `Cached`, the image size must be 44 KiB or below. You can use a tool like [tinypng](https://tinypng.com/) to compress the images to an acceptable size

Individual box art can also be downloaded from GameTDB, under the **S Covers (png)** category.
