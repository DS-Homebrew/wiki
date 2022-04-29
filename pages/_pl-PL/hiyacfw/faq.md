---
lang: pl-PL
layout: faq
section: hiyacfw
title: FAQ & Troubleshooting
long_title: hiyaCFW FAQ & Troubleshooting
description: FAQ & Troubleshooting for hiyaCFW
---

#### How do I install apps or DSiWare to hiyaCFW's SDNAND?
You will need to use [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) to install apps to the SDNAND, but older DS homebrew may not be compatible.
- If you would like to install Game Card dumps, you should use a [forwarder](../ds-index/forwarders)

#### Why do I get the #-2435-8325 error code?
If your Nintendo DSi shows an error in this format when booting, with the # being a number, that means that bootstage 2 thinks something is wrong with your SDNAND. This is usually fixed by [reinstalling hiyaCFW](installing).

#### Why do I get "An error has occurred" message when booting hiyaCFW?
When the Nintendo DSi Menu detects a problem it will usually show this generic error message, some of the causes are:

##### The free space bug
The Nintendo DSi Menu has a bug when checking the free space on large storage devices. While this can't occur on the actual NAND (since the chip is only 256 MiB), it can happen when using an SD card.

What works and what doesn't goes by every other range of two gibibytes. For example, having 0-2 GiB of free space works, but 2-4 GiB doesn't. The same goes for 4-6 GiB vs 6-8 GiB, up until you get to the size of your SD card.

The latest hiyaCFW version can create dummy files to work around this, so make sure that you download the latest version of [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) and copy `hiya.dsi` from "for SDNAND SD card" to the root of your SD card.

##### Over 39 titles
The Nintendo DSi Menu has a limit of 39 titles. If you have more than that, delete some from the folders in `sd:/title` or use [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) to uninstall them.

##### Too much space used by DSiWare
There is also a limit of 200 blocks (25MB) for DSiWare in the `00030004` folder. This can be worked around by installing DSiWare as system apps using [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest).

##### Invalid title
There are several things you need to take into account when adding titles to hiyaCFW:
- Game Card dumps cannot be run without being using a [forwarder](../ds-index/forwarders)
- Homebrew need to be built correctly using modern tools to work from the Nintendo DSi Menu
