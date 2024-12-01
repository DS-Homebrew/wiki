---
lang: it-IT
layout: wiki
section: ds-index
category: guides
title: ntrboot
description: How to use ntrboot on a Nintendo DSi
tabs:
  - unhacked: Unhacked DS/DSi/3DS
    dsi: DSi
    3ds: 3DS
---

**ntrboot** is a recovery mode built into every DSi and 3DS. If a specially signed cartridge is inserted and a button combo is held, the cartridge will be loaded before anything on NAND. Nintendo used this to set up blank units in the factory, but it can be used as a recovery mode if the NAND is corrupted, missing, or otherwise damaged.

### Required hardware

To use ntrboot on your DSi you will need:

- An ntrboot compatible flashcard. [Here's a list of working carts](https://www.flashcarts.net/ntrboot-ds-carts.html?tab=flashable). Ignore the pre-flashed ones as those use the 3DS version of ntrboot.
- A magnet to trigger ntrboot
- A working DS/DSi/3DS in order to flash ntrboot to the flashcard

{% capture tab-unhacked %}

This method requires a working DS, DSi or 3DS console and does not require custom firmware
{:.alert .alert-warning}

1. Ensure your flashcart is set up with a working kernel that can load homebrew
2. Create a folder named `ntrboot` on your flashcart's MicroSD card
3. Download the [ntrboot image](/assets/files/default.gcd) and copy it to the `ntrboot` folder on your flashcart's MicroSD card
4. Download the [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) and copy it to anywhere on your flashcart's MicroSD card
5. Insert the MicroSD card into the flashcart and boot the flashcart on the working console
6. Launch `ntrboot_flasher_nds.nds` from your flashcart's kernel
7. Follow the instructions on screen. Select your cartridge from the list, back up your flashcard with the `Dump Flash` option, then inject ntrboot. You must select the "TWL" option

{% endcapture tab-unhacked %}
{% assign tab-unhacked = tab-unhacked | split: "////////" %}

{% capture tab-dsi %}

You must have already followed [dsi.cfw.guide](https://dsi.cfw.guide) and have a way of running homebrew.
{:.alert .alert-warning}

1. Download the [ntrboot image](/assets/files/default.gcd) to your DSi SD card as `sdmc:/ntrboot/default.gcd`
2. Download the [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) to anywhere on your SD card
3. Insert your SD card into a modded DSi, then run the ntrboot flasher
4. Follow the instructions on screen. Select your cartridge from the list, back up your flashcard with the `Dump Flash` option, then inject ntrboot. You must select the "TWL" option

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

You must have already followed [3ds.hacks.guide](https://3ds.hacks.guide) and have luma installed.
{:.alert .alert-warning}

1. Download the [ntrboot image](/assets/files/default.gcd) to your 3DS SD card as `sdmc:/ntrboot/default.gcd`
2. Download the [ntrboot flasher](/assets/files/ntrboot_flasher.firm) to your SD card as `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Insert your SD card into a modded 3DS. Power on your 3DS while holding `START` to open the luma chainloader, then select the ntrboot flasher
4. Follow the instructions on screen. Select your cartridge from the list, back up your flashcard with the `Dump Flash` option, then inject ntrboot. You must select the "TWL" option

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Flashing ntrboot

{% assign tabs = tab-unhacked | concat: tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Running ntrboot

1. Download any homebrew to the **DSi** SD card (not the flashcart MicroSD card) as `sdmc:/ntrboot.nds`. For this example we'll use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases/).
2. Insert your SD card and the ntrboot flashcard in your DSi
3. Place a magnet near the `ABXY` buttons until you trigger sleep mode
4. Turn off your DSi
5. With the magnet in place, hold `start` + `select` + `x` and turn the DSi on
6. GodMode9i should now boot

### Troubleshooting

If ntrboot does nothing and you're sure that the magnet and button combo are correct, ntrboot might not be working. Try following the flashing instructions again with [this ntrboot image](/assets/files/default_green.gcd) and see if ntrboot loads a green screen. If it does not, your flashcard may be incompatible and you will need to ask in the [DS(i) Mode Hacking](https://ds-homebrew.com/discord) Discord server.

If you get a "NAND Init failure" error or don't see the NAND from ntrboot, you will need to boot the homebrew you want through another program (eg. launching SafeNANDManager through GodMode9i). There is an issue with ntrboot in which the CID/ConsoleID are not properly set up on boot, so mounting the NAND for editing/recovery will not work right away.

### Removing ntrboot

If you wish to restore your flashcart back to it's original state before it was flashed with ntrboot, read the section on [removing ntrboot](/ds-index/removing-ntrboot).
