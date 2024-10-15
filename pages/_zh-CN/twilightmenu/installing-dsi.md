---
lang: zh-CN
layout: wiki
section: twilightmenu
category: installing
title: 安装（DSi）
long_title: 安装 TwiLight Menu++（DSi）
description: 如何在 Nintendo DSi上安装 TWiLight Menu++
---

如果你还不能在你的 DSi 上运行自制程序，请按照 [dsi.cfw.guide](https://dsi.cfw.guide) 来安装 TWiLight Menu++
{:.alert .alert-info}

### 安装
1. 下载最新的 [`TwiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. 解压 `TWiLightMenu-DSi.7z`
1. 将 `_nds` 文件夹复制到 SD 卡的根目录下
1. 将 `BOOT.NDS` 文件复制到 SD 卡的根目录下
1. 将 `roms` 文件夹复制到 SD 卡的根目录下
1. **对于 hiyaCFW用户：**将 `title` 文件夹复制到 SD 卡的根目录下

### 使用Unlaunch自动引导
1. 摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd> 后，再摁下 DSi 的电源键
1. 在 Unlaunch 的菜单中，选择 `OPTIONS`
1. 将下屏中的 `BOOT.NDS` 项设置成 `NO BUTTON` 或是其他你想要的键位

### 访问烧录卡内容

烧录卡是一种可插入游戏卡插槽的东西，包含一个 microSD 卡插槽。 如果您没有烧录卡，可以无需继续阅读本指南。
{:.alert .alert-warning}

#### 如果您有 R4(i) Ultra

1. 要使用烧录卡固件运行游戏，请从[本指南](installing-flashcard)的`使用烧录卡固件运行游戏`章节开始阅读
    - 您可以放心地忽略这些警告
1. 打开 TWLMenu++ 设置
1. 切换到 `Misc settings`（杂项设置）页面
1. 打开 `Slot-1 microSD access`（Slot-1 microSD访问）
1. 按 `B` 键退出 TWLMenu++ 设置
    - 如果您最后进入的是 DS 经典菜单，请再次按 `B`

#### 如果您没有 R4(i) Ultra

1. 在 `sd:/_nds/`（不是烧录卡的 microSD 卡）中创建名为 `primary` 的文件或文件夹，以便 TWiLight Menu++ 启动烧录卡后从主机的 SD 卡读取设置。
1. 要使用烧录卡固件运行游戏，请从[本指南](installing-flashcard)的`自动启动TWiLight Menu++`章节开始阅读
1. 将 `BOOT.NDS` 文件从 `TWiLightMenu-Flashcard.7z` 复制到烧录卡的 microSD 卡根目录。
1. 打开 TWLMenu++ 设置
1. 切换到 `Misc settings`（杂项设置）页面
1. Turn on `SD access in Slot-1`
1. Turn on `SCFG access in Slot-1`
1. 打开 `Auto-start Slot-1`
1. 按 `B` 键退出 TWLMenu++ 设置
    - 如果您最后进入的是 DS 经典菜单，请启动烧录卡
    - 否则，重新启动 TWiLight Menu++

#### 在 SD 卡和烧录卡内容之间切换
- 按 `SELECT`+`↑` 或 `SELECT`+`↓` 在 SD 卡和烧录卡内容之间切换
    - 如果启用了 SELECT 菜单，也可以在该菜单中进行操作
    - 如果使用 3DS 主题，请点击游戏卡/SD 卡图标
    - 如果你用的主题是 R4、GBC 或 Wood 主题，按`R`键
