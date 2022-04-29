---
lang: zh-CN
layout: wiki
section: godmode9i
title: GodMode9i
description: 关于 GodMode9i 的信息
---

[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/) 是任天堂DS生态系统的开源文件浏览器，从任天堂3DS的 GodMode9 获得灵感。 GodMode9i具有转储游戏、管理SD卡文件、浏览NitroFS、计算文件的SHA1哈希值、用十六进制编辑器编辑二进制文件等功能。

## 转储功能

要转储游戏，在驱动器列表中选择驱动器并按照屏幕上的提示操作。
- 在任天堂DS和任天堂DS Lite上，如果从Slot-1闪存卡运行，GodMode9i可以转储Slot-2游戏卡，如果GodMode9i从Slot-2闪存卡运行，则可以转储Slot-1游戏卡
   - 保存文件也可以使用GBA卡带进行转储，更多信息请参见 [FAQ](faq?faq=how-do-i-dump-ds-saves-using-gba-save-data)
- 在任天堂DSi系列系统中，将Slot-1游戏转储到SD卡时需要Unlaunch
   - 转到 [dsi.cfw.guide](https://dsi.cfw.guide/) 获取如何安装 Unlaunch 的说明
- 在任天堂3DS系列系统上，需要一个现代的CFW环境来启动GodMode9i
   - 转到 [3ds.hacks.guide](https://3ds.hacks.guide/) 了解如何安装 Luma3DS 和 boot9strap

### 还原存档
GodMode9i还可以恢复DS游戏卡/GBA游戏卡的保存文件。 这可以通过在插入游戏卡时选择SD卡上的 `.sav` 文件并选择 `还原存档` 来实现。
