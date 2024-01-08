---
lang: zh-CN
layout: wiki
section: ds-index
category: guides
title: BIOS/固件转储
description: 如何从您的控制台中提取任天堂DS或DSi的BIOS/固件
tabs:
  - 
    dsi-sd-card: 带有Unlaunch的DSi
    flashcard: 烧录卡
---

一些模拟器，如melonDS，需要DS模式或DSi模式的BIOS和固件，可以通过从您的主机中提取获得。 有两种不同的方法来实现这一点，使用：
- 带有Unlaunch的DSi，或者
- 带有适用于主机的DS/DS Lite/3DS或不带Unlaunch的DSi以及与主机兼容的闪存卡

DSi方法将提取DS模式和DSi模式的BIOS和固件文件。 闪存卡方法只会提取DS模式的文件。

{% capture tab-dsi-sd-card %}

本页假设您正在从[dsi.cfw.guide](https://dsi.cfw.guide)运行现代的CFW环境。
{:.alert .alert-warning}

### 第一部分：获取所需文件

1. 下载[dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. 将`dsibiosdumper.nds`从dsibiosdumper`.7z`文件复制到您的SD卡的根目录
1. 重新将您的SD卡插入设备

### 第二部分：dsibiosdumper
1. 在您的设备仍然关闭的情况下，按住以下按钮：<kbd class="face">A</kbd> + <kbd class="face">B</kbd>，同时按住这些按钮，然后打开您的设备
1. 您的设备应该已经启动到Unlaunch菜单
1. 从应用程序列表中启动dsibiosdumper
1. 按下<kbd class="face">A</kbd>键以转储所有内容
1. 等待过程完成
    - 这可能需要一段时间
1. 在过程完成后，按<kbd>SELECT</kbd>退出dsibiosdumper
1. 关闭您的设备
1. 将您的SD卡插入电脑中

所有必要的文件都将位于您的SD卡根目录下的`dsidump`文件夹中。
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### 第一部分：获取所需文件

1. 下载[dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest)（`.nds`文件）
1. 将`dsbf_dump.nds`复制到您SD卡的根目录
1. 将SD卡重新插入到您的闪存卡中

### 第二部分：dsbf_dump
1. 打开您的设备
1. 启动您的闪存卡
1. 导航到您SD卡的根目录，然后启动dsbf_dump
1. 等待过程完成
1. 在过程完成后，按<kbd>START</kbd>关闭您的设备
  - 在3DS系列系统上，它将显示“软件已关闭”而不是。 从此屏幕关机您的设备
1. 将您的SD卡插入电脑中

所有必要的文件将位于设备顶部屏幕上指定的文件夹中。
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
