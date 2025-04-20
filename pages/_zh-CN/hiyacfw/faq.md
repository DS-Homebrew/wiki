---
lang: zh-CN
layout: faq
section: hiyacfw
title: 常见问题 & 故障处理
long_title: hiyaCFW 常见问题 & 故障处理
description: hiyaCFW 的常见问题 & 故障处理
---

#### 如何在 hiyaCFW 的 SDNAND 上安装应用程序或 DSiWare？
你需要使用 [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) 来安装应用程序到 SDNAND, 但老旧的 DS 自制程序可能不兼容。
- 如果你想安装游戏卡带转储，你应该使用 [forwarder](../ds-index/forwarders)

#### 为什么出现了 #-2435-8325 错误代码？
如果你的任天堂 DSi 在启动时显示这种格式的错误 (#是一个数字)，这意味着bootstage 2 认为你的 SDNAND 出了问题。 这通常可以通过 [重新安装 hiyaCFW](installing) 来修复。

#### 为什么我在启动 hiyaCFW 时收到 "发生错误 / An error has occurred / エラーが発生しました" 的信息？
当任天堂 DSi 主菜单检测到问题时，通常会显示这个通用的错误信息，其中一些原因是：

##### 剩余空间的问题
任天堂 DSi 菜单在检查大型存储设备的可用空间时有一个错误。 虽然这不会发生在原装NAND上（因为芯片只有256 MB），但使用SD卡时可能会发生。

空闲空间在每个 2GB 范围组内将不会出现错误。 例如, 0-2GB 空闲空间时可以正常工作, 但如果是 2-4GB 它将不会正常工作。 4-6GB 与 6-8GB 也是如此，直到达到SD卡的最大容量。

We made the brand new launcher patches which fix the free space bug. To work around this, please ensure that you are running the latest TWLMagician when installing hiyaCFW. If not, please [reinstall hiyaCFW](installing).

##### 超过 39 个应用
任天堂 DSi 菜单有 39 个应用的硬性限制。 如果你超出了这个数量，从 `sd:/title` 的文件夹中删除一些，或者使用 [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) 来卸载它们。

##### DSiWare 占用了太多空间
`00030004` 文件夹中的 DSiWare 也有200格（25MB）的限制。 这可以通过使用 [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) 将 DSiWare 安装为系统应用程序来解决。

##### 无效的应用
在向 hiyaCFW 添加应用时，你需要考虑到几件事:
- 如果不使用 [forwarder](../ds-index/forwarders), 就不能运行游戏卡带转储。
- 自制软件需要使用现代工具正确构建，才能在任天堂 DSi 主菜单中工作。
