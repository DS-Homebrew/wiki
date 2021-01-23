---
lang: zh-CN
layout: wiki
section: twilightmenu
category: installing
title: 安装步骤（3DS）
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

你首先需要在你的 3DS 安装好自定义固件，请按照 [3ds.hacks.guide](https://3ds.hacks.guide) 的步骤来操作
{:.alert .alert-info}

{% capture tab-working-camera %}
1. 启动 FBI 并选择 `Remote Install`，再选择 `Scan QR Code`
1. 扫描这个二维码来安装最新版本的 [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. 退出 FBI 并启动 Universal-Updater
   - 如果它没有出现在主菜单上，重启你的 3DS
1. 在应用列表中找到 TWiLight Menu++，如果找不到它，可以使用侧边栏上的第 3 个按钮进行搜索
   - 它的图标长这样：![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. 按 <kbd class="face">A</kbd> 键，或是点击侧边栏中的下载图标并选择 `TWiLight Menu++` 来安装它
   - This will take a while
{% endcapture %}

{% capture tab-non-working-camera %}
1. 从 [ Universal-Updater 发布页](https://github.com/Universal-Team/Universal-Updater/releases) 下载 `Universal-Updater.cia` 文件
1. 将 `Universal-Updater.cia` 文件放置在你 SD 卡的任意位置
1. 在你的 Nintendo 3DS 上启动 FBI
1. 在 FBI 中，进入你刚才粘贴了 `Universal-Updater.cia` 文件的地方
1. 选择 `Universal-Updater.cia`，然后点击“Install & Delete”
1. 退出 FBI 并启动 Universal-Updater
   - 如果它没有出现在主菜单上，重启你的 3DS
1. 在应用列表中找到 TWiLight Menu++，如果找不到它，可以使用侧边栏上的第 3 个按钮进行搜索
   - 它的图标长这样：![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. 按 <kbd class="face">A</kbd> 键，或是点击侧边栏中的下载图标并选择 `TWiLight Menu++` 来安装它
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Installing

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Non-Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Working Camera</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Non-Working Camera</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
