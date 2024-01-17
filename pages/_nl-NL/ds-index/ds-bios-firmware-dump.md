---
lang: nl-NL
layout: wiki
section: ds-index
category: guides
title: BIOS/Firmware Dumping
description: How to extract the Nintendo DS or DSi BIOS/Firmware from your console
tabs:
  - 
    dsi-sd-card: DSi with Unlaunch
    flashcard: Flashkaart
---

Some emulators, such as melonDS, require the DS-mode or DSi-mode BIOS and firmware, which are available by extracting from your console. There are two distinct ways to achieve this, using:
- a DSi with Unlaunch, OR
- a DS/DS Lite/3DS or a DSi without Unlaunch, along with a flashcard compatible with the console

The DSi method will extract both the DS-mode and DSi-mode BIOS and firmware files. The flashcard method will only extract the DS-mode files.

{% capture tab-dsi-sd-card %}

This page assumes you are running a modern CFW environment from [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Part 1: Getting the required files

1. Download [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Copy `dsibiosdumper.nds` from the dsibiosdumper `.7z` file to the root of your SD card
1. Reinsert your SD card into your device

### Part 2: dsibiosdumper
1. With your device still powered off, hold the following buttons: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, and while holding these buttons together, power on your device
1. Your device should have booted into the Unlaunch menu
1. Launch dsibiosdumper from the list of applications
1. Press <kbd class="face">A</kbd> to dump everything
1. Wait for the process to complete
    - This can take a while
1. After the process is complete, press <kbd>SELECT</kbd> to exit dsibiosdumper
1. Power off your device
1. Insert your SD card into your computer

All the necessary files will be in the `dsidump` folder on the root of your SD card.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Part 1: Getting the required files

1. Download [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (the `.nds` file)
1. Copy `dsbf_dump.nds` to the root of your SD card
1. Reinsert your SD card into your flashcard

### Part 2: dsbf_dump
1. Power on your device
1. Launch your flashcard
1. Navigate to the root of your SD card, and launch dsbf_dump
1. Wait for the process to complete
1. After the process is complete, press <kbd>START</kbd> to power off your device
  - On 3DS-family systems, it will instead show "Software closed". Power off your device from this screen
1. Insert your SD card into your computer

All the necessary files will be in a folder specified on the top screen of your device.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
