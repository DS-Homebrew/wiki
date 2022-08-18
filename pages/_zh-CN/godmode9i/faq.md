---
lang: zh-CN
layout: faq
section: godmode9i
title: 常见问题 & 故障处理
long_title: Godmode9i 常见问题 & 故障处理
description: GodMode9i 的常见问题 & 故障处理
---

#### 启动时如何跳过"挂载驱动器"屏幕？
当你从 [hiyaCFW](../hiyacfw)启动GodMode9i时，就会发生这种情况。 你可以在启动GodMode9i时按住 <kbd class="face">X</kbd> ，以跳过NAND挂载。 或者，你可以直接从 Unlaunch 启动 GodMode9i，以便能够挂载NAND。

#### 为什么我不能在 NAND 上添加、删除或编辑文件？
在DSi NAND上编辑文件是不安全的，很容易导致变砖，所以GodMode9i故意缺少这种功能。

#### 为什么我不能查看某些 DSiWare 的 NDS 文件信息？
一些DSiWare，特别是位于 `0003000f` 文件夹中的DSiWare，包含系统数据，且没有有效的banner.

#### 我应该使用NDS版本还是DSi版本？ 有什么区别？
这些版本在功能上是一样的，但有特定的目的。
- 如果你在烧录卡运行GodMode9i，使用NDS版本
- 如果你要安装GodMode9i到你的 hiyaCFW SDNAND，使用DSi版本
- 如果你是通过 TWiLight Menu++ 启动GodMode9i，两个版本的工作原理相同
- 如果你要将GodMode9i安装到你的3DS HOME菜单，使用CIA版本

#### 我该如何更改语言？
你可以通过按 <kbd>START</kbd>，选择该菜单中的最后一个选项，并选择你要使用的语言来改变GodMode9i的语言。

请注意，只有当GodMode9i从 TWiLight Menu++ 运行时，或者在你的SD卡根目录有一份 `GodMode9i.nds`/`GodMode9i.dsi` 才会有效。

你也可以修改配置文件 `sd:/gm9i/config.ini` 的 `LANGUAGE_INI_PATH` 项目指定SD卡上的翻译文件的路径。

#### 我该如何更改字体？
你可以通过选择一个 `.frf` 字体文件并选择  `载入字体`  来改变GodMode9i的字体。 要把不同的字体设置为默认字体，可以把它放在 `sd:/gm9i/font.frf` ，或者编辑配置文件(`sd:/gm9i/config.ini`)，把 `FONT_PATH` 设置为你的字体文件所在位置。

你可以在GitHub仓库的 [resources](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) 文件夹中找到一些预转换的字体，你也可以使用GodMode9的 [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) 脚本从PBM图片和包含Unicode映射的TXT文件中转换为自己的字体。

#### 如何使用 GBA 保存数据转储 DS 存档？
GodMode9i能够使用GBA卡带的保存数据来转储大多数DS游戏卡的保存数据。 ROM文件和超过1 MiB的保存文件不能以这种方式转储，因为这些文件过大。 如果你有其他方法来转储GBA的保存文件，也可以用 Haxxstation 代替DS烧录卡来完成，然后可以在电脑上重新组合和解压。

1. 在你的烧录卡上加载 GodMode9i
1. 备份您的 GBA 存档！！
   - 没有备份的任何保存数据将会丢失
   - 检查文件并找到较大的文件，使用512b的卡带不会有多大帮助，而64KiB或128KiB的卡带可以满足大多数DS游戏转储1或2个存档
1. 在驱动器菜单上，按 <kbd class="r">R</kbd> + <kbd class="face">B</kbd> 来卸载烧录卡
1. 弹出烧录卡，插入DS游戏卡和GBA卡带
1. 选择 `NDS GAMECARD` - `Save`
1. 询问时，按 <kbd class="face">A</kbd> 将数据写入GBA卡带
   - 更换不同的GBA卡带并重复，直到整个存档被复制
1. 用你的Slot-1烧录卡重新启动你的DS，并重新打开GodMode9i
1. 插入你用过的第一个GBA卡带，选择 `GBA GAMECART`
1. 选择 `DS Save`
1. 按顺序更换你所有转储过的卡带
1. 你的DS游戏存档现在将在 `fat:/gm9i/out`，你现在可以将你备份的GBA保存文件恢复到原来的卡带中

如果你想把保存文件写回游戏卡上，只需选择 `.sav` 文件，并选择 `Restore save (Slot-1)`，然后在提示下把烧录卡换成DS游戏卡。
