---
lang: zh-CN
layout: wiki
section: twilightmenu
category: other
title: 使用宽屏游玩
description: 如何在 Nintendo 3DS 中让 TWiLight Menu++ 使用宽屏
---

本节要求使用运行 [3ds.hacks.guide](https://3ds.hacks.guide)上的现代 CFW 环境的 3DS 系列主机。
{:.alert .alert-info}

If you're currently using Luma v13, please update to v13.0.1, before following this guide.
{:.alert .alert-info}

### 安装
1. 启动 FBI 并选择 `Remote Install`（远程安装），再选择 `Scan QR Code`（扫描二维码）
1. 扫描这个二维码来安装最新版本的 [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater 二维码](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. 从 HOME 菜单中打开 Universal Updater
1. 安装 TWPatch 包
   - 如果您的主机无法访问互联网，可以直接下载 [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085)，然后用 FBI 安装
1. Return to the HOME menu and launch TWPatch
   - If you get a message which says `Can't open /luma/exeTWL.bin`, then use [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/) to fix broken TWL mode
1. 按住 <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> 以启动补丁菜单，然后启用 `Widescreen patch (384x240 16:10)`
1. （可选！） 对于像素化程度较低的宽屏游戏，应同时启用 `GPU scaling (blurry, no filters)`
1. 按 <kbd class="face">B</kbd> 退出补丁菜单
1. 按 <kbd>START</kbd> 生成宽屏的 `TwlBg.cxi` 文件
   - 如果上屏幕没有显示宽屏补丁已启用，请从第 3 步重新开始
1. 将 `TwlBg.cxi` 从 `sd:/luma/sysmodules/` 移动到 `sd:/_nds/TWiLightMenu/TwlBg/`（如果不存在名为 `TwlBg` 的文件夹的话，创建一个），然后将其重命名为 `Widescreen.cxi`
1. 重启 3DS，并按住 <kbd>SELECT</kbd> 以打开 Luma3DS 的配置
1. 启用 `external FIRMs and modules`，然后按 <kbd>START</kbd> 保存并退出
1. 打开TWiLight Menu++，在你想要的游戏上按 <kbd class="face">Y</kbd>，调出游戏前的设置，并将 `Screen Aspect Ratio` 设置为 `16:10`

已经完成了！ 在宽屏幕中享受您的 DS 游戏吧！

**注意：**
1. 启动TWLMenu++时不要按住 <kbd>START</kbd> 或 <kbd>SELECT</kbd>，否则宽屏会看起来很奇怪
1. 并非每个游戏都可以使用宽屏补丁。 [这是兼容宽屏的游戏列表](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. 如果按照本指南启动宽屏兼容游戏后，TWL_FIRM 的所有部分（包括 TWLMenu++ 界面）都卡在宽屏模式下，请删除 `TwlBg.cxi` ，它位于 `sd:/luma/sysmodules/`。
   - 如果问题仍然存在， [卸载](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) ， [重新安装](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++，并重新按照上述指南操作，以及使用 Luma 的原始版本。
1. 大多数宽屏补丁只会针对宽屏调整 3D 元素，2D 元素（如菜单）只会被拉长
1. Luma3DS **必须**从 SD 卡加载，如果宽屏无法正常工作，请确保您的 SD 卡根目录中有 `boot.firm`
