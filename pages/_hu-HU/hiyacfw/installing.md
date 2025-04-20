---
lang: hu-HU
layout: wiki
section: hiyacfw
title: Telepítés
long_title: A hiyaCFW telepítése
description: Hogyan telepítsd a hiyaCFW-t Nintendo DSi-ra
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
- Egy NAND mentés az eszközödről ami a [dumpTool használatával](https://dsi.cfw.guide/dumping-nand) készült
- Egy Windows, macOS vagy Linux eszköz

### I. rész - A PC-d előkészítése a hiyaCFW telepítéséhez
{% capture tab-windows %}
1. Töltsd le a [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases) legfrissebb Windows kiadását
1. Futtasd a TWLMagician MSI csomagot és csomagold ki bárhova a számítógépeden
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Töltsd le a [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases) legfrissebb macOS kiadását
1. Csomagold ki a TWLMagician archívot bárhova a számítógépeden
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Telepítsd a Python 3-at a csomagkezelőddel, ha még nincs telepítve
1. Töltsd le a [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases) legfrissebb Python kiadását
1. Csomagold ki a TWLMagician archívot bárhova a számítógépeden
1. Telepítsd a tkinter-t a következő paranccsal a disztibúciódra, ha még nem lenne telepítve:
    - Debian-alapon: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Telepítsd a függőségeket a következő paranccsal:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### II. rész - A hiyaCFW fájlok hozzáadása az SD kártyához
![A TWLMagician képernyőképe](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Indítsd el a TWLMagician-t
    - **Windows:** Indítsd el a `TWLMagician.exe` fájlt, amit a TWLMagician archívból csomagoltál ki (lehet, hogy ki kell kapcsolnod átmenetileg a víruskeresődet)
    - **macOS:** Kattins jobb gombbal a `TWLMagician` fájlon, amit a TWLMagician archívból csomagoltál ki, majd válaszd az `Open` opciót
    - **Linux:** Indítsd el a `TWLMagician.py` fájlt, amit a TWLMagician archívból csomagoltál ki
1. Kattints a `...` gombra a "NAND file with No$GBA footer" dobozban
1. Navigálj a NAND mentésedhez és kattints az `Open` opcióra
1. Nyomj a `Start`-ra
1. Ez előugró ablakban navigálj az SD kártyád gyökerébe és nyomj `OK` gombot.
    - A folyamat néhány percig tarthat
1. Ha az alkalmazás `Done!` üzenetet mond, zárd be a TWLMagician-t
1. Zárd be a terminál ablakot (opcionális)

### III. rész - Az Unlaunch és a hiyaCFW konfigurálása
1. Kapcsold be a Nintendo DSi konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
    - Ez az Unlaunch fájl menüjébe kell vigyen
1. Navigálj az `OPTIONS` majd a `NO BUTTON` opcióhoz
1. Válaszd a `hiyaCFW`-t és nyomj <kbd class="face">A</kbd> gombot
    - Ez beállítja a hiyaCFW indítását automatikusan
1. Mentsd a beállításaidat és indítsd újra a konzolt
1. Tarts nyomva a <kbd>SELECT</kbd>-et a Nintendo DSi konzoldo bekapcsolásakor, hogy a hiyaCFW beállításokhoz juss
1. Változtasd meg a beállításokat ahogy neked tetszik, majd nyomj <kbd>START</kbd> gombot a folytatáshoz

Ha a `An Error Has Occurred` hibaüzenetet mutatja, tekintsd meg a [GYIK](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) oldalt.
{: .alert .alert-warning}
