---
lang: zh-CN
layout: wiki
section: twilightmenu
category: updating
title: 更新（DSi）
long_title: 更新 TwiLight Menu++（DSi）
description: 如何在 Nintendo DSi 上更新 TWiLight Menu++
---

如果从早于 v6.8.3 的版本更新，请移动您的 DS 游戏的 `.sav` 文件到一个新的名为 `saves` 的文件夹，`saves` 文件夹和 DS ROM 在同一个位置。
{:.alert .alert-info}

如果从一个比v21.0.0更老的版本更新的话，请把对于DSiWare游戏的 `.pub` 和/或 `.prv` 文件移动到一个叫 `saves`的文件夹，`saves` 文件夹和 DSiWare Rom 在同一个位置。
{:.alert .alert-info}

### 更新
1. 下载最新的 [`TwiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. 解压 `TWiLightMenu-DSi.7z`
1. 将 `_nds` 文件夹复制到你的SD卡根目录，替换掉所有现有文件。
   - If using macOS, make sure **copy** and `Merge`, don't `Replace`
1. 将 `BOOT.NDS` 文件复制到你的SD卡根目录，替换掉所有现有文件。
1. **对于 hiyaCFW用户：**将 `title` 文件夹复制到 SD 卡的根目录下，替换所有现有文件
   - If using macOS, make sure **copy** and `Merge`, don't `Replace`

### 适用于烧录卡的更多步骤

如果您可以在 TWLMenu++ 中切换 SD 卡和烧录卡中的内容，并且如果烧录卡 TWLMenu++ 在 v16.3.0 版本或以上，请遵循这些步骤。

1. 进入 TWLMenu++ 设置
1. 选择 `更新 TWiLight Menu++`
1. 选择 `Console (micro)SD > Slot-1 microSD`
