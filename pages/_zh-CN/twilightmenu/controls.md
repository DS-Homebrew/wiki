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
   - RAM 查看器
      - <kbd>上</kbd>/<kbd>下</kbd>: 滚动
      - <kbd>左</kbd>/<kbd>右</kbd>: 快速滚动
      - <kbd class="face">A</kbd>: 进入RAM编辑器
      - <kbd class="face">B</kbd>: 返回游戏内菜单
      - <kbd class="face">Y</kbd>: 指定要跳转到的地址
        - <kbd>上</kbd>/<kbd>下</kbd>: 增加/减少选定的值
        - <kbd>左</kbd>/<kbd>右</kbd>: 选择值
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: 返回到指定地址的 RAM 查看器/编辑器
   - RAM 编辑器
      - <kbd>上</kbd>/<kbd>下</kbd>/<kbd>左</kbd>/<kbd>右</kbd>: 选择一个值
      - <kbd class="face">A</kbd>: 修改选中的值
         - <kbd>上</kbd>/<kbd>下</kbd>: 增加/减少选定的值一个十六进制数
         - <kbd>左</kbd>/<kbd>右</kbd>: 增加/减少选定的值十个十六进制数
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: 完成值的修改
      - <kbd class="face">B</kbd>: 返回RAM查看器
      - <kbd class="face">Y</kbd>: 指定要跳转到的地址
        - <kbd>上</kbd>/<kbd>下</kbd>: 增加/减少选定的值
        - <kbd>左</kbd>/<kbd>右</kbd>: 选择值
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: 返回到指定地址的 RAM 查看器/编辑器
- The in-game menu is not accessible in DSi Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will instead exit the game
- 只有屏幕交换按钮组合才能在 B4DS 模式中工作，其他模式将无法工作
- 返回 TWiLight 菜单+ 可能无法在一些老3DS上工作

#### 启动快捷方式
These should be pressed on the TWiLight Menu++ splash screen / right after the Nintendo DSi splash screen.

- <kbd>SELECT</kbd>: 打开设置
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: 重置所有 TWiLight Menu++ 设置
- <kbd class="face">B</kbd>: 启动上次运行的 ROM
