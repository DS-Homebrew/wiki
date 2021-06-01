---
lang: en-US
layout: wiki
section: hiyacfw
title: Troubleshooting
description: Troubleshooting information for hiyaCFW
---

### #-2435-8325
Errors in this format, with # being a number, are from boot stage 2. The easiest way to fix them is to [reinstall hiyaCFW](installing-hiyacfw).

### "An error has occurred"
When the Nintendo DSi Menu detects a problem it will usually show this generic error message, some of the causes are:

#### Too much free space
The Nintendo DSi Menu has a bug that limits how much free space there can be. While this doesn't occur on the actual NAND (since the chip can never exceed 128 MB), it can happen using an SD card. What works and what doesn't goes by every other range of two gigabytes. For example, having 0-2 GB of free space works, but 2-4 GB doesn't. The same goes for 4-6 GB vs 6-8, up until you get to the size of your SD card.

The latest hiyaCFW version can create dummy files though, so make sure that you download the latest version of [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) and place `hiya.dsi` from "for SDNAND SD card" to the root of your SD card.

#### Over 39 titles
There is a limit of 39 titles on your DSi System Menu. Delete any additional folders from `/title`.

#### Too much DSiWare
There is also a limit of 200 blocks (25MB) for DSiWare in the `00030004` folder. This can be worked around by installing as system apps using [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest).

#### Invalid title
There are several parameters you need to take into account when adding titles to hiyaCFW:
- Game card dumps cannot be ran without being handled by a [forwarder](forwarders)
- There are several arguments that have to be passed to the `.app` builder in order to work from the DSi System Menu
