---
lang: zh-CN
layout: wiki
section: twilightmenu
category: updating
title: 更新（3DS）
long_title: 更新TWiLight Menu++（3DS）
description: 如何在 Nintendo 3DS 上更新 TWiLight Menu++
tabs:
  - 
    universal-updater: Universal-Updater
    manual: 手动安装
---

If updating from a version older than v6.8.3, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. 打开 Universal-Updater
   - 如果您没有，请按照 [安装](installing-3ds) 说明
1. 在应用列表中找到 TWiLight Menu++，如果找不到它，可以使用侧边栏上的第 3 个按钮进行搜索
1. 按 <kbd class="face">A</kbd> 键，或是点击侧边栏中的下载图标并选择 `TWiLight Menu++` 来安装它
   - 这需要一些时间
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. 下载最新的 [`TwiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. 解压 `TWiLightMenu-3DS.7z`
1. 将 `_nds` 文件夹复制到 SD 卡的根目录下
1. 将 `BOOT.NDS` 文件复制到 SD 卡的根目录下
1. 将两个 `.cia` 文件复制到 SD 卡的根目录下
1. 在 3DS 上使用 FBI 安装两个 CIA 文件
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 更新

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### 适用于烧录卡的更多步骤

如果您可以在 TWLMenu++ 中切换 SD 卡和烧录卡中的内容，并且如果烧录卡 TWLMenu++ 在 v16.3.0 版本或以上，请遵循这些步骤。

1. 进入 TWLMenu++ 设置
1. 选择 `更新 TWiLight Menu++`
1. 选择 `Console (micro)SD > Slot-1 microSD`
