---
lang: zh-CN
layout: wiki
section: twilightmenu
category: installing
title: 安装步骤（3DS）
long_title: 安装 TwiLight Menu++（3DS）
description: 如何在 Nintendo 3DS上安装 TWiLight Menu++
tabs:
  - 
    working-camera: 摄像头可用
    non-working-camera: 摄像头不可用
    manual: 手动安装
---

你首先需要在你的 3DS 安装好自定义固件（Custom Firmware，CFW），如果没有，请按照 [3ds.hacks.guide](https://3ds.hacks.guide) 的步骤来安装自定义固件。
{:.alert .alert-info}

{% capture tab-working-camera %}
1. 启动 FBI 并选择 `Remote Install(远程安装)`，再选择 `Scan QR Code(扫描二维码)`
1. 扫描这个二维码来安装最新版本的 [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater 二维码](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. 退出 FBI 并启动 Universal-Updater
   - 如果它没有出现在主菜单上，重启你的 3DS
1. 在应用列表中找到 TWiLight Menu++，如果找不到它，可以使用侧边栏上的第 3 个按钮进行搜索
   - 它的图标长这样：![TWiLight Menu++ 图标](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. 按 <kbd class="face">A</kbd> 键，或是点击侧边栏中的下载图标并选择 `TWiLight Menu++` 来安装它
   - 这需要一些时间
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. 下载最新的 [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. 将 `Universal-Updater.cia` 文件放置在你 SD 卡的任意位置
1. 在你的 Nintendo 3DS 上启动 FBI
1. 在 FBI 中，进入你刚才粘贴了 `Universal-Updater.cia` 文件的地方
1. 选择 `Universal-Updater.cia`，然后点击“Install & Delete”
1. 退出 FBI 并启动 Universal-Updater
   - 如果它没有出现在主菜单上，重启你的 3DS
1. 在应用列表中找到 TWiLight Menu++，如果找不到它，可以使用侧边栏上的第 3 个按钮进行搜索
   - 它的图标长这样：![TWiLight Menu++ 图标](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. 按 <kbd class="face">A</kbd> 键，或是点击侧边栏中的下载图标并选择 `TWiLight Menu++` 来安装它
   - 这将会需要一段时间
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. 下载最新的 [`TwiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. 解压 `TWiLightMenu-3DS.7z`
1. 将 `_nds` 文件夹复制到 SD 卡的根目录下
1. 将 `BOOT.NDS` 文件复制到 SD 卡的根目录下
1. 将 `roms` 文件夹复制到 SD 卡的根目录下
1. 将两个 `.cia` 文件复制到 SD 卡的根目录下
1. 打开你的 3DS，使用 FBI 安装两个 CIA 文件
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 安装

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
