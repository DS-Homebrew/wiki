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

如果从早于 v6.8.3 的版本更新，请将您的 DS 游戏的 `.sav` 文件移动到一个新的名为 `saves` 的文件夹，`saves` 文件夹和 DS ROM 在同一个位置。
{:.alert .alert-info}

如果从早于 v21.0.0 的版本更新，请将用于 DSiWare 游戏的 `.pub` 和/或 `.prv` 文件移动到一个新的 `saves` 文件夹，`saves` 文件夹和 DSiWare ROM 在同一个位置。
{:.alert .alert-info}

如果从早于 v25.7.0 的版本更新，建议使用 FBI 从标题列表中删除 `TWiLight Menu++ Game Booter` 标题。
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. 打开 Universal-Updater
    - 如果您没有，请按照[安装](installing-3ds)说明
1. 在应用列表中找到 TWiLight Menu++，如果找不到它，可以使用侧边栏上的第 3 个按钮进行搜索
1. 按 <kbd class="face">A</kbd> 键，或是点击侧边栏中的下载图标并选择 `TWiLight Menu++` 来安装它
    - This will take a while
    - 如果安装失败，请确保掌机已连接到互联网。 否则，请单击 "`Manual`"选项卡
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. 下载最新的 [`TwiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. 解压 `TWiLightMenu-3DS.7z`
1. 将 `_nds` 文件夹复制到 SD 卡根目录，替换所有现有文件
    - 如果使用 macOS，请确保选择**复制**及`合并`，不要选择`替换`
1. 将 `BOOT.NDS` 文件复制到 SD 卡根目录，替换所有现有文件
1. 将两个 `.cia` 文件复制到 SD 卡根目录，替换所有现有文件
1. 在 3DS 上使用 FBI 安装 CIA 文件
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 更新

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
