---
lang: en-US
layout: wiki
section: twilightmenu
category: updating
title: 更新(3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: 说明书
---

如果从早于 v16.4.0的版本更新，请移动您的DS游戏的 `.sav` 文件到一个新的名为 `saves`的文件夹, `saves` 文件夹和DS roms文件夹在同一个位置。
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Open Universal-Updater
   - If you don't have it, follow the [installing](installing-3ds) instructions
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select `TWiLight Menu++` to install it
   - This will take a while
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 更新

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### 烧录卡片侧的更多步骤

如果您可以在TWLMenu++中切换 SD 卡和烧录卡中的内容，并且如果烧录卡TWLMenu++ 在 v16.3.0版本或以上，请遵循这些步骤。

1. 进入TWLMenu++ 设置
1. 选择 `更新 TWiLight Menu++`
1. 选择 `Console (micro)SD > Slot-1 microSD`
