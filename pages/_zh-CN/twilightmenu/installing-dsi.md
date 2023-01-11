---
lang: zh-CN
layout: wiki
section: twilightmenu
category: installing
title: 安装步骤（DSi）
long_title: 安装 TwiLight Menu++（DSi）
description: 如何在 Nintendo DSi上安装 TWiLight Menu++
---

如果你还不能在你的 DSi 上运行自制程序，请按照 [dsi.cfw.guide](https://dsi.cfw.guide) 来安装 TWiLight Menu++
{:.alert .alert-info}

### 安装
1. 下载最新的 [`TwiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. 解压 `TWiLightMenu-DSi.7z`
1. 将 `_nds` 文件夹复制到 SD 卡的根目录下
1. 将 `BOOT.NDS` 文件复制到 SD 卡的根目录下
1. 将 `roms` 文件夹复制到 SD 卡的根目录下
1. **对于 hiyaCFW用户：**将 `title` 文件夹复制到 SD 卡的根目录下

### 使用Unlaunch自动引导
1. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd> 后，再摁下 DSi 的电源键
1. 在 Unlaunch 的菜单中，选择 `OPTIONS`
1. 将下屏中的 `BOOT.NDS` 项设置成 `NO BUTTON` 或是其他你想要的键位

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
     - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, launch your flashcard
     - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
     - If the SELECT menu is enabled, you can do so there as well
     - If you use the 3DS theme, touch the Game Card/SD Card icon
     - If you use the R4/GBC theme, press `L` button
