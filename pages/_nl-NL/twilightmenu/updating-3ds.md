---
lang: nl-NL
layout: wiki
section: twilightmenu
category: updating
title: Bijwerken (3DS)
long_title: TWiLight Menu++ Bijwerken (3DS)
description: Hoe kan ik TWiLight Menu++ bijwerken op de Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Handmatig
---

Als je bijwerkt vanaf een versie ouder dan v6.8.3, verplaats dan je `.sav`-bestanden voor DS-games naar een nieuwe map genaamd `saves`, waarbij de map `saves` op dezelfde plaats staat als de DS-ROM's.
{:.alert .alert-info}

Als je bijwerkt vanaf een versie ouder dan v21.0.0, verplaats dan je `.pub`- en/of `.prv`-bestanden voor DSiWare-titels naar een nieuwe map genaamd `saves`, waarbij de map `saves` op dezelfde plaats staat als de DSiWare-ROM's.
{:.alert .alert-info}

If updating from a version older than v25.7.0, it is recommended to delete the `TWiLight Menu++ Game Booter` title from the title list, using FBI.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Open Universal-Updater
   - Als je dit niet hebt, volg dan de instructies voor [installatie](installing-3ds)
1. Vind TWiLight Menu++ in de app-raster, je kunt zoeken met de 3e tab op de zijbalk als je moeite hebt het te vinden
1. Druk op <kbd class="face">A</kbd> of tik op het download-pictogram in de zijbalk en selecteer `TWiLight Menu++` om het te installeren
   - This will take a while
   - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Download de meest recente versie van [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Pak `TWiLightMenu-3DS.7z` uit
1. Kopieer de map `_nds` naar de root van je SD-kaart, alle bestaande bestanden zullen worden vervangen
   - Als je macOS gebruikt, zorg er dan voor dat je **kopieert** en `Samenvoegt`, en niet `Vervangt`
1. Kopieer het bestand `BOOT.NDS` naar de root van je SD-kaart, alle bestaande bestanden zullen worden vervangen
1. Kopieer het bestand `.cia` naar de root van je SD-kaart, alle bestaande bestanden zullen worden vervangen
1. Installeer op je 3DS de CIA met FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Bijwerken

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
