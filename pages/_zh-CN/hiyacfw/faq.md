---
lang: zh-CN
layout: faq
section: hiyacfw
title: 常见问题 & 故障处理
long_title: hiyaCFW 常见问题 & 故障处理
description: hiyaCFW 的常见问题 & 故障处理
---

#### 如何在 hiyaCFW 的SDNAND上安装应用程序或DSiWare？
You will need to use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to install apps to the SDNAND, but older DS homebrew may not be compatible.
- 如果你想安装游戏卡转储，你应该使用 [forwarder](../ds-index/forwarders)

#### 为什么出现了#-2435-8325错误代码？
如果你的任天堂DSi在启动时显示这种格式的错误，#是一个数字，这意味着bootstage 2认为你的SDNAND出了问题。 这通常可以通过[重新安装 hiyaCFW](installing) 来修复。

#### 为什么我在启动hiyaCFW时收到“发生错误 / An error has occurred / エラーが発生しました”的信息？
当任天堂DSi菜单检测到问题时，通常会显示这个通用的错误信息，其中一些原因是：

##### 剩余空间的问题
任天堂DSi菜单在检查大型存储设备的可用空间时有一个错误。 虽然这不会发生在原装NAND上（因为芯片只有128 MB），但使用SD卡时可能会发生。

空闲空间在每个2GiB范围组内将不会出现错误。 例如, 0-2GiB可以正常工作, 但如果是2-4GiB它将不会正常工作。 4-6GiB与6-8GiB也是如此，直到达到SD卡的最大容量。

最新版本的 hiyaCFW 可以创建虚拟文件， 所以请确保您下载最新版本的 [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) 并将 `hiya.dsi` 从“for SDNAND SD card”放到SD卡的根目录。

##### 超过39个应用
任天堂DSi菜单有39个应用的硬性限制。 If you have more than that, delete some from the folders in `sd:/title` or use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to uninstall them.

##### DSiWare 使用的空间太大
`00030004` 文件夹中的DSiWare也有200格（25MB）的限制。 This can be worked around by installing DSiWare as system apps using [NTM](https://github.com/Epicpkmn11/NTM/releases/latest).

##### 无效的应用
在向hiyaCFW添加应用时，你需要考虑到几件事。
- 如果不使用 [forwarder](../ds-index/forwarders), 就不能运行游戏卡转储。
- 自制软件需要使用现代工具正确构建，才能在任天堂DSi菜单中工作。
