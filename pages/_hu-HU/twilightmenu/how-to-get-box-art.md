---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: Box-art beszerzése
description: Hogyan szerezz be játék dobozt/játékborítókat a TWiLight Menu++-ban
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Kézi
---

{% capture tab-windows %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-GUI.zip` and run `TwilightBoxart.exe`
1. Kattints a `Detect SD` opcióra
   - Ha nem találja meg a megfelelő SD kártyát, kattints a `Browse...`-ra és válaszd ki a jót
1. **Optional:** Change the size, border, etc options to your liking
1. Kattints a `Start`-ra
1. Ellenőrizd, hogy a Doboz/Játék borítók megjelenítése bekapcsolt a TWiLight Menu++ beállításaiban
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract the MacOS or Linux `.zip`
1. Nyisd meg a `TwilightBoxart.ini` fájlt egy szöveg editorral
1. Írd be az SD kártyád útvonalát az `SdRoot=` mögé, majd mentsd a fájlt
   - Ez macOS-en a `/Volumes/`, majd ezt követően az SD kártyád neve
1. Nyisd meg a terminált
1. A terminal-ban gépeld be, hogy `cd ` majd húzd bele a mappát, ami tartalmazza a `TwilightBoxart.CLI`-t a terminal-ba
1. Futtasd a `chmod +x TwilightBoxart.CLI` parancsot
1. Futtasd a `./TwilightBoxart.CLI` parancsot
1. Use the arrow and enter keys to select `Yes` if it shows your SD path correctly
1. Ellenőrizd, hogy a Doboz/Játék borítók megjelenítése bekapcsolt a TWiLight Menu++ beállításaiban
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Töltsd le a png box art csomagot a [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)-ről, az **S Covers (png)** kategória alatt
1. Csomagold ki a .png fájlokat a `sd:/_nds/TWiLightMenu/boxart` mappába
1. Ellenőrizd, hogy a Doboz/Játék borítók megjelenítése bekapcsolt a TWiLight Menu++ beállításaiban
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Saját box-art hozzáadása:** Rakd őket az `sd:/_nds/TWiLightMenu/boxart` mappába.
- A neve lehet a játék TID-e (pl. `ASME.png`), vagy a fájlneve (pl. `SM64DS.nds.png`)
- A formátuma `.png` kell legyen az ajánlott 128x115 felbontással, de maximum 208x143 lehet
- Ha a **TW**i**L**ight Menu++ beállításokban a Doboz/Játék borítók `Cache-lt`-re állított, a kép méretének 44 KiB vagy kevesebbnek kell lennie. Használhatsz megoldásokat, mint a [tinypng](https://tinypng.com/) a képek elfogadható méretűre csökkentéséhez

Egyesével is letölthető box-art a GameTDB-ről, az **S Covers (png)** kategória alatt.
