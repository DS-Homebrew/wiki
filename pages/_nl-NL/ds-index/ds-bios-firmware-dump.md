---
lang: nl-NL
layout: wiki
section: ds-index
category: guides
title: BIOS/Firmware Uitlezen
description: Hoe u het BIOS/Firmware van uw Nintendo DS of DSi uit uw console kunt halen
tabs:
  - 
    dsi-sd-card: DSi met Unlaunch
    flashcard: Flashkaart
---

Sommige emulators, zoals melonDS, vereisen het DS-modus- of DSi-modus BIOS en firmware, die beschikbaar zijn door extractie uit uw console. Er zijn twee onderscheiden manieren om dit te bereiken, door gebruik te maken van:
- een DSi met Unlaunch, OF
- een DS/DS Lite/3DS of een DSi zonder Unlaunch, samen met een flashcard die compatibel is met de console

De DSi-methode zal zowel de BIOS- als firmwarebestanden voor de DS-modus en DSi-modus extraheren. De methode met de flashkaart zal alleen de bestanden voor de DS-modus extraheren.

{% capture tab-dsi-sd-card %}

Deze pagina gaat ervan uit dat u een moderne CFW-omgeving gebruikt vanaf [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Deel 1: Het verkrijgen van de benodigde bestanden

1. Download [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Kopieer `dsibiosdumper.nds` vanuit het dsibiosdumper `.7z` bestand naar de hoofdmap van uw SD-kaart
1. Steek je SD-kaart opnieuw in je apparaat

### Deel 2: dsibiosdumper
1. Met uw apparaat nog steeds uitgeschakeld, houd de volgende knoppen ingedrukt: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, en terwijl u deze knoppen samen ingedrukt houdt, schakel uw apparaat in
1. Uw apparaat zou nu moeten zijn opgestart in het Unlaunch-menu
1. Start dsibiosdumper vanuit de lijst met toepassingen
1. Druk op <kbd class="face">A</kbd> om alles te dumpen
1. Wacht tot het proces is voltooid
    - Dit kan even duren
1. Nadat het proces is voltooid, druk op <kbd>SELECT</kbd> om dsibiosdumper af te sluiten
1. Schakel uw apparaat uit
1. Plaats uw SD-kaart in uw computer

Alle benodigde bestanden zullen zich bevinden in de `dsidump`-map op de hoofdmap van uw SD-kaart.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Deel 1: Het verkrijgen van de benodigde bestanden

1. Download [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (het `.nds` bestand)
1. Kopieer `dsbf_dump.nds` naar de hoofdmap van uw SD-kaart
1. Plaats uw SD-kaart opnieuw in uw flashkaart

### Deel 2: dsbf_dump
1. Schakel uw apparaat in
1. Start uw flashkaart op
1. Ga naar de hoofdmap van uw SD-kaart en start dsbf_dump
1. Wacht tot het proces is voltooid
1. Na voltooiing van het proces, druk op <kbd>START</kbd> om uw apparaat uit te schakelen
  - Op 3DS-systemen van de familie zal het in plaats daarvan "Software gesloten" weergeven. Schakel uw apparaat uit vanaf dit scherm
1. Plaats uw SD-kaart in uw computer

Alle benodigde bestanden worden in een op het bovenscherm van uw apparaat gespecificeerde map geplaatst.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
