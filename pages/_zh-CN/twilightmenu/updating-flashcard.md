---
lang: zh-CN
layout: wiki
section: twilightmenu
category: updating
title: 更新（烧录卡）
long_title: 更新 TWiLight Menu++（烧录卡）
description: 如何在 Nintendo DS 烧录卡上更新 TWiLight Menu++
---

如果从早于 v16.4.0 的版本更新，请将您的 DS 游戏的 `.sav` 文件移动到一个新的名为 `saves` 的文件夹，`saves` 文件夹和 DS ROM 在同一个位置。
{:.alert .alert-info}

如果从早于 v21.0.0 的版本更新，请将用于 DSiWare 游戏的 `.pub` 和/或 `.prv` 文件移动到一个新的 `saves` 文件夹，`saves` 文件夹和 DSiWare ROM 在同一个位置。
{:.alert .alert-info}

### 更新
1. 下载最新的 [`TwiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. 解压 `TWiLightMenu-Flashcard.7z`
1. 将 `_nds` 文件夹复制到烧录卡的 microSD 卡根目录，替换所有现有文件
   - 如果使用 macOS，请确保选择**复制**及`合并`，不要选择`替换`
1. 将 `BOOT.NDS` 文件复制到烧录卡的 microSD 卡根目录，替换所有现有文件
1. 如果更新后 TWLMenu++ 没有启动，请同时更新自动启动文件

### 适用于 DSi/3DS SD 卡的更多步骤

如果您可以在 TWLMenu++ 中切换 SD 卡和烧录卡中的内容，并且如果烧录卡 TWLMenu++ 在 v16.3.0 版本或以上，请遵循这些步骤。

1. 进入 TWLMenu++ 设置
1. 选择 `Update TWiLight Menu++`
1. 选择 `Slot-1 microSD > Console (micro)SD`
