---
lang: zh-CN
layout: wiki
section: twilightmenu
category: other
title: 使用宽屏游玩
description: 如何在 Nintendo 3DS 中让 TWiLight Menu++ 使用宽屏
---

需要 Nintendo 3DS 或 2DS 主机。
{:.alert .alert-info}

### 准备工作
- 请确保 Luma 的 `boot.firm` 位于 SD 卡的根目录，这样才能正常工作

### 安装
1. 下载 [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) 然后复制`TWPatch.cia` 到SD卡中 ([GBATemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. 使用 FBI 安装 `TWPatch.cia`
   - 您也可以使用 Universal-Updater 来安装 TWPatch，以替代前两步
1. 返回主菜单并启动 TWPatch
1. 按住 <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> 打开补丁菜单， 启用 `Widescreen patch (384x240 16:10)`
1. (可选) 对于像素较小的宽屏游戏, 应同时启用 `GPU scaling (blurry, no filters)`
1. 按 <kbd class="face">B</kbd> 退出补丁菜单
1. 按 <kbd>START</kbd> 生成一个适用于宽屏的 `TwlBg.cxi` 文件
   - 如果顶部屏幕没有显示宽屏补丁已启用，则回到第 3 步
1. 将 `TwlBg.cxi` 从 `sd:/luma/sysmodules/` 移动到 `sd:/_nds/TWiLightMenu/TwlBg/` (如果不存在名为 `TwlBg` 的文件夹的话，创建一个), 然后重命名为 `Widescreen.cxi`
1. 重启 3DS，并按住 <kbd>SELECT</kbd> 以打开 Luma3DS 的配置菜单
1. 启用 `external FIRMs and modules`，然后按 <kbd>START</kbd> 保存并退出
1. 打开 TWiLight Menu++ 设置，切换到 `游戏设置` 页面，并将 `屏幕宽高比` 设置为 `16:10`
   - 也可以单独对某个游戏设置

已经完成了！ 在宽屏幕中享受您的 DS 游戏吧！

**NOTES:**
1. 启动TWLMenu++时不要按住 <kbd>START</kbd> 或 <kbd>SELECT</kbd> 不然宽屏会看起来很奇怪！
1. 并非每个游戏都可以使用宽屏补丁。 [我们创建了一个宽屏兼容游戏的列表](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. 如果在遵循指南，启动宽屏游戏后，所有 TWL_FIRM (包括 TWLMenu++ GUI) 都卡在宽屏, 删除位于 `sd:/luma/sysmodules/`的 `TwlBg.cxi` 然后 [卸载](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) 并且 [重装](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, 然后重做教程
