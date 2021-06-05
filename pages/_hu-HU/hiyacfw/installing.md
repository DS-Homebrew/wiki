---
lang: hu-HU
layout: wiki
section: hiyacfw
title: Telepítés
long_title: A hiyaCFW telepítése
description: How to install hiyaCFW on the Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Ne frissítsd a rendszert a hiyaCFW telepítése után. Az eltávolítja a hiyaCFW SD patch-eit.
{: .alert .alert-danger}

### Követelmények
- Egy Nintendo DSi telepített [Unlaunch](https://dsi.cfw.guide/installing-unlaunch)-csel
- Egy a dumpTool-lal készült NAND mentés az eszközödről
   - If you don't have one, follow the [Dumping NAND](https://dsi.cfw.guide/dumping-nand) guide on dsi.cfw.guide
- Egy Windows, macOS vagy Linux eszköz

### I. rész - A PC-d előkészítése a hiyaCFW telepítéséhez
{% capture tab-windows %}
The hiyaCFW Helper is known to cause false positives with Windows Defender and other antivirus programs, please temporarity disable such programs if you have trouble downloading or running it.
{: .alert .alert-info}

1. Töltsd le & telepítsd a [7-Zip](https://www.7-zip.org/download.html) legutolsó verzióját
   - This will not work with any other archive extractor tool, such as WinRAR, the hiyaCFW helper relies on 7-Zip itself, and not a general archive extractor
1. Töltsd le az [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) legfrissebb Windows kiadását
1. Csomagold ki a hiyaCFW Helper archívot bárhova a számítógépeden
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Töltsd le az [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) legfrissebb macOS kiadását
1. Csomagold ki a hiyaCFW Helper archívot bárhova a számítógépeden
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Telepítsd a Python 3-at a csomagkezelőddel, ha még nincs telepítve
1. Töltsd le az [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) legfrissebb Python verzióját
1. Csomagold ki a hiyaCFW Helper archívot bárhova a számítógépeden
1. Install tkinter with the following command for your distro if you don't already have it:
   - Debian-based: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### II. rész - A hiyaCFW fájlok hozzáadása az SD kártyához
![A hiyaCFW Helper képernyőképe](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Indítsd el a hiyaCFW Helper-t
  - **Windows:** Indítsd el a `HiyaCFW_Helper.exe` fájlt, amit a hiyaCFW Helper archívból csomagoltál ki (lehet, hogy ki kell kapcsolnod átmenetileg a víruskeresődet)
  - **macOS:** Kattins jobb gombbal a `HiyaCFW_Helper` fájlon, amit a hiyaCFW Helper archívból csomagoltál ki, majd válaszd az `Open` opciót
  - **Linux:** Indítsd el a `HiyaCFW_Helper.py` fájlt, amit a hiyaCFW Helper archívból csomagoltál ki
1. Kattints a `...` gombra a "NAND file with No$GBA footer" dobozban
1. Navigálj a NAND mentésedhez és kattints az `Open` opcióra
1. Nyomj a `Start`-ra
1. Ez előugró ablakban navigálj az SD kártyád gyökerébe és nyomj `OK` gombot.
   - A folyamat néhány percig tarthat
1. Ha az alkalmazás `Done!` üzenetet mond, zárd be a hiyaCFW Helper-t
1. Zárd be a terminál ablakot

### III. rész - Az Unlaunch és a hiyaCFW konfigurálása
1. Kapcsold be a Nintendo DSi konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez az Unlaunch fájl menüjébe kell vigyen
1. Navigálj az `OPTIONS` majd a `NO BUTTON` opcióhoz
1. Válaszd a `hiyaCFW`-t és nyomj <kbd class="face">A</kbd> gombot
   - Ez beállítja a hiyaCFW indítását automatikusan
1. Mentsd a beállításaidat és indítsd újra a konzolt
1. Tarts nyomva a <kbd>SELECT</kbd>-et a Nintendo DSi konzoldo bekapcsolásakor, hogy a hiyaCFW beállításokhoz juss
1. Változtasd meg a beállításokat ahogy neked tetszik, majd nyomj <kbd>START</kbd> gombot a folytatáshoz

Ha a `An Error Has Occurred` hibaüzenetet mutatja, tekintsd meg a [hibaelhárítás](troubleshooting#an-error-has-occurred) oldalt.
{: .alert .alert-warning}
