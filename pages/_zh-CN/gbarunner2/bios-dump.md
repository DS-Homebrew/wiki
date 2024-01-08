---
lang: zh-CN
layout: wiki
section: gbarunner2
title: GBA BIOS提取
description: 如何从您的游戏机中提取任天堂GBA BIOS
tabs:
  - 
    3ds-sd-card: 带有open_agb_firm的3DS
    gba-flashcart: 带有GBA模式闪存卡的GBA/DS/DS Lite
---

虽然大多数GBA模拟器本身没有播放GBA游戏的问题，但一些模拟器和超级监视程序，如GBARunner2，可能需要BIOS文件才能正确播放某些游戏。

有两种不同的方法来实现这一点，使用：
- 带有自定义固件的3DS，或者
- 带有GBA模式闪存卡的GBA/DS/DS Lite

{% capture tab-3ds-sd-card %}
### 第一部分：获取所需文件
1. 下载[open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest)（`.7z`文件）
1. 下载[Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. 如果不存在，创建一个名为`payloads`的文件夹，放入`/luma`文件夹内
1. 从`.7z`文件中复制`open_agb_firm.firm`到`/luma/payloads`文件夹中
1. 将`Bios_Dumper.gba`复制到您的SD卡的根目录
1. 重新将您的SD卡插入设备

### 第二部分：Bios_Dumper
1. 按住<kbd>START</kbd>不放，同时打开您的设备电源
    - 这将启动open_agb_firm
    - 如果加载了`Luma3DS Chainloader`，请从该菜单中选择`open_agb_firm`
    - 如果加载其他内容，说明您没有将`open_agb_firm.firm`复制到SD卡上的正确文件夹
1. 从open_agb_firm启动`Bios_Dumper.gba`
1. 屏幕将会闪烁红色，然后闪烁绿色
1. 等待大约五秒钟
1. 关闭您的设备

{% capture upload-bios-text %}
从您的SD卡，将`/3ds/open_agb_firm/saves/Bios_Dumper.sav`上传到这里：
{% endcapture %}

### 第三部分：从生成的保存文件中解压BIOS
1. 将您的SD卡插入电脑中
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### 第一部分：获取所需文件
1. 下载[Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. 将`Bios_Dumper.gba`复制到您的闪存卡SD卡的根目录
1. 重新将您的SD卡插入到闪存卡中
1. 将您的GBA闪存卡重新插入到卡匣中

### 第二部分：Bios_Dumper
1. 启动您的闪存卡匣，然后启动`Bios_Dumper.gba`
1. 屏幕将会闪烁红色，然后闪烁绿色
1. 等待大约五秒钟
1. 关闭您的设备

{% capture upload-bios-text %}
从您的SD卡，将`Bios_Dumper.sav`上传到这里：
{% endcapture %}

### 第三部分：从生成的保存文件中解压BIOS
1. 将您的SD卡插入电脑中
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

`bios.bin`文件将会自动下载。 这是最终的GBA BIOS文件。
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
