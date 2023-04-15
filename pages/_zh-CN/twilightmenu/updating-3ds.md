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

如果从早于 v6.8.3 的版本更新，请移动您的 DS 游戏的 `.sav` 文件到一个新的名为 `saves` 的文件夹，`saves` 文件夹和 DS ROM 在同一个位置。
{:.alert .alert-info}

如果从一个比v21.0.0更老的版本更新的话，请把对于DSiWare游戏的 `.pub` 和/或 `.prv` 文件移动到一个叫 `saves`的文件夹，`saves` 文件夹和 DSiWare Rom 在同一个位置。
{:.alert .alert-info}

If updating from a version older than v25.7.0, it is recommended to delete the `TWiLight Menu++ Game Booter` title from the title list, using FBI
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
1. 将 `_nds` 文件夹复制到你的SD卡根目录，替换掉所有现有文件。
   - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. 将 `BOOT.NDS` 文件复制到你的SD卡根目录，替换掉所有现有文件。
1. Copy the `.cia` file to your SD card root, replacing any existing files
1. On your 3DS, install the CIA with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 更新

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
