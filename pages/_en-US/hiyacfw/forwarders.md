---
lang: en-US
layout: wiki
section: hiyacfw
title: Forwarders
category: other
description: How to use nds-bootstrap forwarders with hiyaCFW
---

DSi menu forwarders are icons on your HOME menu that redirect to another software that runs the icon as listed. In this case, one can add DS games from the SD card (utilizing nds-bootstrap) or from a compatible flashcard (via its respective kernel) to the DSi menu for easier access to games.

DS games need to be dumped to a digital `.nds` format. You can dump your DS cartridges using [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge).
{:.alert .alert-info}

### Requirements
- A Nintendo DSi with [Unlaunch](https://dsi.cfw.guide/installing-unlaunch), [hiyaCFW](installing), and [TWiLight Menu++](/twilightmenu/installing-dsi) installed
- The latest release of [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)

### Instructions
1. Extract *the contents of* `MakeForwarder.zip` to the root of your SD card
1. Launch TWiLight Menu++
1. Launch the Nintendo DS ROM you want to create a forwarder for
1. Once the ROM boots, turn off your console
   - If it does not work, please follow the nds-bootstrap troubleshooting guide
1. Launch hiyaCFW
1. Once in the Nintendo DSi Menu, unwrap and launch "Forwarder Maker"
1. Set your target bootstrap depending on what your application is:
   - **Retail ROM:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Select `create forwarder` and navigate to the location of your ROM

Repeat step 7 and 8 until you have created all desired forwarders.
- You do not need to reset the target bootstrap if using the same type of ROM

Once you've installed forwarders for all of your ROMs, reboot the system and launch hiyaCFW. They should now appear in gift boxes.
