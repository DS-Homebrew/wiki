---
lang: sv-SE
layout: wiki
section: ds-index
category: guides
title: Dumpning av BIOS/Firmware
description: Hur man extraherar Nintendo DS- eller DSi-BIOS/Firmware från din konsol
tabs:
  - 
    dsi-sd-card: DSi med Unlaunch
    flashcard: Minneskort
---

Vissa emulatorer, som melonDS, kräver DS-läge eller DSi-läge BIOS och firmware, vilka är tillgängliga genom att extrahera från din konsol. Det finns två distinkta sätt att uppnå detta, genom att använda:
- en DSi med Unlaunch, ELLER
- en DS/DS Lite/3DS eller en DSi utan Unlaunch, tillsammans med en flashkort som är kompatibelt med konsolen

DSi-metoden kommer att extrahera både DS-läge och DSi-läge BIOS- och firmware-filer. Metoden med minneskort kommer endast att extrahera DS-läge-filer.

{% capture tab-dsi-sd-card %}

Denna sida förutsätter att du använder en modern CFW-miljö från [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Del 1: Få de nödvändiga filerna

1. Ladda ner [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Kopiera `dsibiosdumper.nds` från dsibiosdumper `.7z`-filen till rotkatalogen på ditt SD-kort
1. Sätt i ditt SD-kort i din enhet igen

### Del 2: dsibiosdumper
1. Med din enhet fortfarande avstängd, håll ned följande knappar: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, och medan du håller ned dessa knappar tillsammans, starta din enhet
1. Din enhet borde ha startat upp i Unlaunch-menyn
1. Starta dsibiosdumper från listan över program
1. Tryck på <kbd class="face">A</kbd> för att dumpa allt
1. Vänta tills processen är klar
    - Detta kan ta en stund
1. Efter att processen är klar, tryck på <kbd>SELECT</kbd> för att avsluta dsibiosdumper
1. Stäng av din enhet
1. Sätt in ditt SD-kort i din dator

Alla nödvändiga filer kommer att finnas i mappen `dsidump` i roten av ditt SD-kort.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Del 1: Få de nödvändiga filerna

1. Ladda ner [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (filen `.nds`)
1. Kopiera `dsbf_dump.nds` till roten av ditt SD-kort
1. Sätt tillbaka ditt SD-kort i din flashkort

### Del 2: dsbf_dump
1. Slå på din enhet
1. Starta ditt flashkort
1. Gå till roten av ditt SD-kort och starta dsbf_dump
1. Vänta tills processen är klar
1. När processen är klar, tryck på <kbd>START</kbd> för att stänga av din enhet
  - På 3DS-familjesystem kommer det istället att visa "Programmet stängt". Stäng av din enhet från den här skärmen
1. Sätt in ditt SD-kort i din dator

Alla nödvändiga filer kommer att finnas i en mapp som anges på den övre skärmen på din enhet.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
