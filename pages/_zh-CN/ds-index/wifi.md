---
lang: zh-CN
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: 在 Nintendo DS 上使用 Wi-Fi 的信息
---

- 在 Nintendo DS 应用程序中，您只能使用 WEP 和开放式 Wi-Fi 安全设置
- 在以 DSi 模式运行的Nintendo DSi-Enhanced/Exclusive 应用程序中，您还可以选择 WPA 和 WPA2 安全性
- If you're on DSi or 3DS, ensure you've accepted the network agreement first

个人热点是可用的，因此您无需更改路由器配置。

### 创建热点
GBAtemp 上有在 macOS 和 Linux 电脑上创建 DS 兼容的热点的指南。
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

设置为 "开放（无加密）"的 Android 移动热点也可以使用。

Windows 无法创建兼容的热点，因此 Windows 用户需要启动到 Linux 才能设置热点。
#### 其他方式
如果无法使用上述方法创建与 DS 兼容的热点，也可以使用其他方法。
- Nintendo Wi-Fi USB Connector
    - 虽然仍然可以使用，但不推荐使用，因为此软件需要 32 位版本的 Windows XP 或 Vista
    - 有关设置 Nintendo Wi-Fi USB Connector 的信息，请阅读本 [Wiimmfi 指南](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) 的第 3 节，由 [Mario Kart DS Network](https://discord.gg/pa9bea6)的成员撰写。
- 更改路由器设置以兼容 DS
    - 不建议这样做，因为这样会向入侵者开放网络，即使您使用的是 WEP 安全系统。 还有可能给网络的其他用户带来问题。 如果您选择这样做，建议您使用辅助路由器或访客网络（如果有的话）
    - 并非所有路由器都支持访客网络或关闭安全功能
- Wi-Fi 扩展器

#### 设置
如果你要设置一个与 DS 兼容的无线网络，它必须符合以下规格：
- WEP 或开放式（无安全性）
- 2.4 GHz 无线频率
- 802.11b 无线模式
    - 此选项可能会称为 "传统模式 "或类似表述

### Nintendo DS WFC 恢复
1. 启动 Nintendo Wi-Fi Connection 设置
1. 连接到您的无线网络
1. 根据您想要使用的服务，将您的主要 DNS 设置为下面的值之一：
    - **[Wiimmfi](https://wiimmfi.de)** - `167.86.108.126` or `178.62.43.212`
    - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([在线玩家列表](http://zwei.moe:9001))** - `172.104.88.237`
1. 将 `1.1.1.1` 设置为辅助 DNS
1. 您可能需要为游戏打上 NoSSL 补丁，具体取决于游戏

### 手动修改 DS ROM
如果您的 ISP 屏蔽了自定义 DNS 服务器，请按照下面的指南操作，否则 *强烈* 建议按照上面的指南操作。

- GNU/Linux 和 macOS 的用户可以遵循非常相似的指示，但必须使用 Mono
- WfcPatcher 目前不支持 DSiWare

1. 下载 [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. 将要修改的游戏 ROM 复制到保存 WfcPatcher 的同一文件夹中，然后打开该文件夹
1. 新建文本文件
1. 在文件中输入 `wfcpatcher.exe %1 --domain wiimmfi.de` ，然后将文本文件保存为 `patch.bat` ，并关闭窗口
    - 如果您希望使用不同的服务器，可以用其他 URL 替换 wiimmfi.de
    - 如果文件看起来仍是文本文档， [启用文件名扩展名](https://dsi.cfw.guide/file-extensions-%28windows%29) ，并从文件名中删除 `.txt`
1. 现在将所有要修改的 ROM 拖到 patch.bat 中
1. 完成！ 修改过的 ROM 将以 (wiimmfi) 结尾

在尝试使用打了补丁的 ROM 进行连接之前，不要忘记删除 Wi-Fi 设置中可能保存的任何 DNS。

### 故障排除和扩展阅读
如果收到任何错误，可以在 Wiimmfi 的[故障排除程序（英文）](https://wiimmfi.de/error)中输入错误代码，寻找修复方法。

有关更具体的故障排除和更多信息，例如如何在模拟器上联机或使用 Nintendo Wi-Fi USB Connector，您可以阅读 [Mario Kart DS Network](https://discord.gg/pa9bea6) 成员撰写的 [Wiimmfi 指南](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing)。
