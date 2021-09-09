---
lang: zh-CN
layout: wiki
section: twilightmenu
category: other
title: 操作方式
long_title: TWiLight Menu++ 操作方式
description: 如何操作TWiLight Menu++
---

#### Nintendo DSi, Nintendo 3DS, SEGA Saturn, 和 Homebrew Launcher 主题
- <kbd>左</kbd>/<kbd>右</kbd>: 选择游戏/应用
- <kbd class="face">A</kbd>/<kbd>START</kbd>: 启动游戏/应用
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> 或 <kbd>SELECT</kbd> + <kbd>左</kbd>/<kbd>右</kbd>：切换页面
- (DSi/Saturn/HBL主题) <kbd>SELECT</kbd> + <kbd>上</kbd>/<kbd>下</kbd> & 发行 <kbd>SELECT</kbd>: 在SD卡和烧录卡之间切换
- <kbd class="face">Y</kbd>: 打开游戏子设置菜单
   - <kbd class="face">X</kbd>: 金手指菜单
      - <kbd class="face">A</kbd>: 切换作弊模式
      - <kbd class="face">B</kbd>: 退出金手指菜单
      - <kbd class="face">X</kbd>: 保存并退出金手指菜单
      - <kbd class="face">Y</kbd>: 查看金手指描述
      - <kbd class="l">L</kbd>: 禁用所有金手指
- <kbd class="face">X</kbd>: 删除/隐藏游戏
- (DSi/Saturn/HBL主题) <kbd>SELECT</kbd>: SELECT 菜单/DS经典菜单 (在系统菜单、 TWiLight 菜单++ 设置和GBA 模式可以访问)

#### R4 主题
- <kbd>上</kbd>/<kbd>下</kbd>: 选择游戏/应用
- <kbd class="face">A</kbd>: 启动游戏/应用
- <kbd class="l">L</kbd>: 在SD卡和烧录卡之间切换
- <kbd class="face">Y</kbd>: 打开游戏子设置菜单
   - <kbd class="face">X</kbd>: 金手指菜单
      - <kbd class="face">A</kbd>: 切换金手指模式
      - <kbd class="face">B</kbd>: 退出金手指菜单
      - <kbd class="face">X</kbd>: 保存并退出金手指菜单
      - <kbd class="face">Y</kbd>: 查看金手指描述
      - <kbd class="l">L</kbd>: 禁用所有金手指

#### DS(i) ROMs (使用 nds-bootstrap)
这些不适用于DSiWare。
- 按住<kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>up</kbd> + <kbd class="face">X</kbd> 一秒: 交换上下屏
- 按住<kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> 3秒: Dump RAM到 `sd:/_nds/nds-bootstrap` ，作为 `ramDump.bin`
- 按住<kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>下</kbd> + <kbd class="face">B</kbd> 两秒: 返回至TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>下</kbd> + <kbd>SELECT</kbd>: 打开游戏内菜单
   - <kbd class="r">R</kbd>: Advance by one frame
   - Screenshot
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Change VRAM bank
      - <kbd class="face">A</kbd>: Save screenshot
      - <kbd class="face">B</kbd>: Return to in-game menu
   - RAM Viewer
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="r">R</kbd> + <kbd>Down</kbd>/<kbd>Up</kbd>: Faster scroll
      - <kbd class="r">R</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Fastest scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM Editor
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
         - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- The in-game menu is not accessible in DSi-Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will do nothing
- 只有屏幕交换按钮组合才能在 B4DS 模式中工作，其他模式将无法工作
- 返回 TWiLight 菜单+ 可能无法在一些老3DS上工作
- The button combination for opening the in-game menu can be changed in the TWiLight Menu++ settings
- Screenshots are saved to `sd:/_nds/nds-bootstrap/screenshots.tar`. This file can be opened using an archive viewer such as [7-Zip](https://www.7-zip.org/)

#### 启动快捷方式
These should be pressed on the TWiLight Menu++ splash screen / right after the Nintendo DSi splash screen.

- <kbd>SELECT</kbd>: 打开设置
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: 重置所有 TWiLight Menu++ 设置
- <kbd class="face">B</kbd>: 启动上次运行的 ROM
