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
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. Ellenőrizd, hogy a Doboz/Játék borítók megjelenítése bekapcsolt a TWiLight Menu++ beállításaiban
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
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
