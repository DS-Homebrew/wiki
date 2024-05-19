---
lang: zh-CN
layout: wiki
section: twilightmenu
category: other
title: 如何获得封面图
description: 如何在 TWiLight Menu++ 中获取盒装封面/游戏封面
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: 手动安装
---

{% capture tab-windows %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-GUI.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. **Optional:** Change the size, border, etc options to your liking
1. Click `Start`
1. 确保在 TWiLight Menu++ 设置中开启了显示封面图
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract the MacOS or Linux `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Use the arrow and enter keys to select `Yes` if it shows your SD path correctly
1. 确保在 TWiLight Menu++ 设置中开启了显示封面图
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), under the **S Covers (png)** category
1. 将 .png 文件解压到 `sd:/_nds/TWiLightMenu/boxart`
1. 确保在 TWiLight Menu++ 设置中开启了显示封面图
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**要添加自己的封面图：** 将它们放入 `sd:/_nds/TWiLightMenu/boxart`。
- 文件名可以是游戏的 TID（例如 `ASME.png`），也可以是 ROM 的文件名（例如 `SM64DS.nds.png`）
- 必须是 `.png` 格式，建议大小为 128x115，最大为 208x143
- 如果您的 **TW**i**L**ight Menu++ 设置将查看封面图设置为 `Cached`（缓存），则图像大小必须为 44 KiB 或以下。 您可以使用 [tinypng](https://tinypng.com/) 等工具将图像压缩到可接受的大小

也可从 GameTDB 的 **S Covers (png)** 分类下载单个封面图。
