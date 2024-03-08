---
lang: en-US
layout: wiki
section: twilightmenu
category: updating
title: Updating (DSi)
long_title: Updating TWiLight Menu++ (DSi)
description: How to update TWiLight Menu++ on the Nintendo DSi
---

If updating from a version older than v6.8.3, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To work around the false positive, please see this guide [here](https://www.makeuseof.com/microsoft-defender-restore-quarantined-file/).
{:.alert .alert-warning}

### Updating
1. Download the latest [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Extract `TWiLightMenu-DSi.7z`
1. Copy the `_nds` folder to your SD card root, replacing any existing files
   - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your SD card root, replacing any existing files
1. **hiyaCFW users:** Copy the `title` folder to your SD card root, replacing any existing files
   - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
