---
lang: ja-JP
layout: wiki
section: gbarunner2
title: GBA BIOS Dumping
description: How to extract the Nintendo GBA BIOS from your console
tabs:
  - 
    3ds-sd-card: 3DS with open_agb_firm
    gba-flashcart: GBA/DS/DS Lite with a GBA-mode flashcart
---

While most GBA emulators have no issue playing GBA games by itself, some emulators and hypervisors, such as GBARunner2, may need the BIOS file to properly playback some titles.

There are two distinct ways to achieve this, using:
- a 3DS with custom firmware, OR
- a GBA/DS/DS Lite with a GBA-mode flashcart

{% capture tab-3ds-sd-card %}
### Part 1: Getting the required files
1. Download [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (the `.7z` file)
1. Download [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Create a folder named `payloads` inside the `/luma` folder if it does not already exist
1. Copy `open_agb_firm.firm` from the open_agb_firm `.7z` file to the `/luma/payloads` folder
1. Copy `3ds` from the open_agb_firm `.7z` file to the root of your SD card
1. Copy `Bios_Dumper.gba` to the root of your SD card
1. Reinsert your SD card into your device

### Part 2: Bios_Dumper
1. Press and hold <kbd>START</kbd>, and while holding <kbd>START</kbd>, power on your device
    - This will launch open_agb_firm
    - If it loads the `Luma3DS Chainloader`, select `open_agb_firm` from this menu
    - If it loads to something else, you did not copy `open_agb_firm.firm` to the correct folder on your SD card
1. From open_agb_firm, launch `Bios_Dumper.gba`
1. The screen will flash red, then it will flash green
1. Wait for about five seconds
1. Power off your device

{% capture upload-bios-text %}
From your SD card, upload `/3ds/open_agb_firm/saves/Bios_Dumper.sav` here:
{% endcapture %}

### Part 3: Unpack the BIOS from the generated save file
1. Insert your SD card into your computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Part 1: Getting the required files
1. Download [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Copy `Bios_Dumper.gba` to the root of your flashcart's SD card
1. Reinsert your SD card into your flashcart
1. Reinsert your GBA flashcart into your cartridge

### Part 2: Bios_Dumper
1. Launch your flashcart, then launch `Bios_Dumper.gba`
1. The screen will flash red, then it will flash green
1. Wait for about five seconds
1. Power off your device

{% capture upload-bios-text %}
From your SD card, upload `Bios_Dumper.sav` here:
{% endcapture %}

### Part 3: Unpack the BIOS from the generated save file
1. Insert your SD card into your computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

A `bios.bin` file will automatically download. This is the final GBA BIOS file.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
