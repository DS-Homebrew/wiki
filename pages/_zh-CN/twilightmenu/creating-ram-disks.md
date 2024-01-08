---
lang: zh-CN
layout: wiki
section: twilightmenu
category: other
title: 创建 RAM 磁盘
description: 如何使用 TWiLight Menu++ 创建 RAM 磁盘以使用旧版 DS 自制软件
---

某些 DS 自制软件无法正常访问 SD 卡文件系统。 因此，可能需要在 RAM 中加载一个独立的文件系统，其中包含自制软件所需的文件，这样才能正常运行。

这里使用的软件需要 Windows 操作系统。
{:.alert .alert-info}

如果您使用的是烧录卡，则无需遵循此步骤。
{:.alert .alert-info}

要制作 RAM 磁盘，请下载 [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware)（单击 `Download Software`），并按照以下说明操作。

由 Dakkon7 编写，由 Rocket Robz 修改：

1. 运行 RAMDisk
1. 点击 **View**（查看） -> **Advanced**（高级）
1. 在 **Disk Size**（磁盘大小）中，对于 DSi 输入 `12`，对于 3DS 输入 `28`，最大值 **Max 1023 MB**
1. 若 **Create TEMP Directory**（创建临时目录）已勾选，则取消勾选
1. 单击 **Load/Save**（载入/保存）
1. 单击 `Start RAMDisk`（启动 RAMDisk），应该会出现一个新窗口来显示 .img
1. 将自制软件所需的任何文件和/或文件夹和/或您想使用的文件放在此处
1. 在 RAMDisk 程序中，单击 `Save Disk Image Now`（立即保存磁盘映像）
1. 将 `romname.img` 保存到 `ramdisks` 文件夹中的 .nds 文件位置。 如果还不存在，请创建
1. 完成后单击 `Stop RAMDisk`（结束 RAMDisk）
1. 在 TWiLight Menu++ 中，打开自制游戏的游戏设置
1. 将 RAM 磁盘设置为 0
1. 启动自制软件，它应该会读取 RAM 磁盘

如果您希望将其他 RAM 磁盘插槽用于单个自制应用程序，请使用 `.img1` 扩展名来指定 RAM 磁盘插槽 1，以此类推。
{:.alert .alert-info}
