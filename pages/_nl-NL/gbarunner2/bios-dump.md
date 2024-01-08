---
lang: nl-NL
layout: wiki
section: gbarunner2
title: Dumpen van GBA BIOS
description: Hoe het Nintendo GBA BIOS te extraheren vanuit uw console
tabs:
  - 
    3ds-sd-card: 3DS met open_agb_firm
    gba-flashcart: GBA/DS/DS Lite met een GBA-modus flash cartridge
---

Terwijl de meeste GBA-emulators geen problemen hebben met het afspelen van GBA-games op zich, hebben sommige emulators en hypervisors, zoals GBARunner2, het BIOS-bestand nodig om sommige titels correct af te spelen.

Er zijn twee onderscheiden manieren om dit te bereiken, door gebruik te maken van:
- een 3DS met aangepaste firmware, OF
- een GBA/DS/DS Lite met een GBA-modus flashcartridge

{% capture tab-3ds-sd-card %}
### Deel 1: Het verkrijgen van de benodigde bestanden
1. Download [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (het `.7z`-bestand)
1. Download [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Maak een map met de naam `payloads` binnen de map `/luma` aan als deze nog niet bestaat
1. Kopieer `open_agb_firm.firm` vanuit het open_agb_firm `.7z`-bestand naar de map `/luma/payloads`
1. Kopieer `Bios_Dumper.gba` naar de hoofdmap van je SD-kaart
1. Steek je SD-kaart opnieuw in je apparaat

### Deel 2: Bios_Dumper
1. Houd <kbd>START</kbd> ingedrukt en houd deze vast terwijl je je apparaat inschakelt
    - Dit zal open_agb_firm starten
    - Als het `Luma3DS Chainloader` laadt, selecteer dan `open_agb_firm` in dit menu
    - Als het naar iets anders laadt, heb je `open_agb_firm.firm` niet naar de juiste map op je SD-kaart gekopieerd
1. Start `Bios_Dumper.gba` vanuit open_agb_firm
1. Het scherm zal rood knipperen, waarna het groen zal knipperen
1. Wacht ongeveer vijf seconden
1. Schakel uw apparaat uit

{% capture upload-bios-text %}
Upload vanaf uw SD-kaart `/3ds/open_agb_firm/saves/Bios_Dumper.sav` hier:
{% endcapture %}

### Deel 3: Pak de BIOS uit het gegenereerde opslagbestand uit
1. Plaats uw SD-kaart in uw computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Deel 1: Het verkrijgen van de benodigde bestanden
1. Download [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Kopieer `Bios_Dumper.gba` naar de hoofdmap van uw flashkaart's SD-kaart
1. Plaats uw SD-kaart opnieuw in uw flashkaart
1. Steek uw GBA flashkaart opnieuw in uw cartridge

### Deel 2: Bios_Dumper
1. Start uw flashkaart en start vervolgens `Bios_Dumper.gba`
1. Het scherm zal rood knipperen, waarna het groen zal knipperen
1. Wacht ongeveer vijf seconden
1. Schakel uw apparaat uit

{% capture upload-bios-text %}
Upload vanaf uw SD-kaart `Bios_Dumper.sav` hier:
{% endcapture %}

### Deel 3: Pak de BIOS uit het gegenereerde opslagbestand uit
1. Plaats uw SD-kaart in uw computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Een `bios.bin`-bestand wordt automatisch gedownload. Dit is het uiteindelijke GBA BIOS-bestand.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
