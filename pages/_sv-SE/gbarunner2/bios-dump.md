---
lang: sv-SE
layout: wiki
section: gbarunner2
title: Dumpning av GBA BIOS
description: Hur du extraherar Nintendo GBA BIOS från din konsol
tabs:
  - 
    3ds-sd-card: 3DS med open_agb_firm
    gba-flashcart: GBA/DS/DS Lite med ett GBA-läge flashkort
---

Även om de flesta GBA-emulatorer inte har några problem med att spela GBA-spel i sig själva, kan vissa emulatorer och hypervisors, som GBARunner2, behöva BIOS-filen för att korrekt spela upp vissa titlar.

Det finns två distinkta sätt att uppnå detta, genom att använda:
- en 3DS med anpassad firmware, ELLER
- en GBA/DS/DS Lite med en GBA-läge minneskortsmodul

{% capture tab-3ds-sd-card %}
### Del 1: Få de nödvändiga filerna
1. Ladda ner [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (filen `.7z`)
1. Ladda ner [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Skapa en mapp med namnet `payloads` inuti mappen `/luma` om den inte redan finns
1. Kopiera `open_agb_firm.firm` från filen `.7z` i open_agb_firm till mappen `/luma/payloads`
1. Kopiera `Bios_Dumper.gba` till roten av ditt SD-kort
1. Sätt i ditt SD-kort i din enhet igen

### Del 2: Bios_Dumper
1. Håll ned <kbd>START</kbd>-knappen och medan du håller ned den, starta din enhet
    - Detta kommer att starta open_agb_firm
    - Om den laddar `Luma3DS Chainloader`, välj `open_agb_firm` från detta menyn
    - Om det laddar något annat, har du inte kopierat `open_agb_firm.firm` till rätt mapp på ditt SD-kort
1. Från open_agb_firm, starta `Bios_Dumper.gba`
1. Skärmen kommer att blixtra rött, sedan kommer den att blixtra grönt
1. Vänta i cirka fem sekunder
1. Stäng av din enhet

{% capture upload-bios-text %}
Från ditt SD-kort, ladda upp `/3ds/open_agb_firm/saves/Bios_Dumper.sav` här:
{% endcapture %}

### Del 3: Packa upp BIOS från den genererade sparfilen
1. Sätt in ditt SD-kort i din dator
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Del 1: Få de nödvändiga filerna
1. Ladda ner [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Kopiera `Bios_Dumper.gba` till roten av din flash-kassettens SD-kort
1. Sätt tillbaka ditt SD-kort i din flashkassett
1. Sätt tillbaka din GBA-flashkassett i din kassett

### Del 2: Bios_Dumper
1. Starta din flashkassett och starta sedan `Bios_Dumper.gba`
1. Skärmen kommer att blixtra rött, sedan kommer den att blixtra grönt
1. Vänta i cirka fem sekunder
1. Stäng av din enhet

{% capture upload-bios-text %}
Från ditt SD-kort, ladda upp `Bios_Dumper.sav` här:
{% endcapture %}

### Del 3: Packa upp BIOS från den genererade sparfilen
1. Sätt in ditt SD-kort i din dator
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

En `bios.bin`-fil kommer att laddas ner automatiskt. Detta är den slutgiltiga GBA BIOS-filen.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
