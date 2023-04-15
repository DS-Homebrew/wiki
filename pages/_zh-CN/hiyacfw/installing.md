---
lang: zh-CN
layout: wiki
section: hiyacfw
title: 安装步骤
long_title: 安装 hiyaCFW
description: 如何在 Nintendo DSi上安装 hiyaCFW
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

安装 hiyaCFW 后不要进行系统更新。 这将会移除 hiyaCFW 的SD卡补丁。
{: .alert .alert-danger}

### 安装要求
- 一个安装了 [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) 的任天堂DSi
- 使用 [dumpTool](https://dsi.cfw.guide/dumping-nand) 从你的设备上获取的NAND备份
- 一台Windows、macOS 或 Linux 设备

### 第一部分：准备您的电脑以安装 hiyaCFW
{% capture tab-windows %}
hiyaCFW Helper 可能会导致 Windows Defender 和其他防病毒程序出现误报，如果你在下载或运行该程序时遇到困难，请暂时禁用此类程序。
{: .alert .alert-info}

1. 下载并安装最新版本的 [7-Zip](https://www.7-zip.org/download.html)
   - 这不会与任何其他的压缩文件提取工具，如WinRAR一起工作，hiyaCFW Helper 依赖于7-Zip本身，而不是一般的档案提取工具。
1. 下载最新Windows版本的 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. 解压 hiyaCFW Helper 到你计算机上的任意位置
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. 下载最新macOS版本的 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. 解压 hiyaCFW Helper 到你计算机上的任意位置
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. 如果 Python 3尚未安装，请使用软件包管理器安装
1. 下载最新Python版本的 [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. 解压 hiyaCFW Helper 到你计算机上的任意位置
1. 如果你还没有tkinter，请用以下命令为你的发行版安装它。
   - （基于）Debian： `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### 第二部分：将hiyaCFW文件复制到你的SD卡上
![HiyaCFW Helper 的截图](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. 启动 hiyaCFW Helper
  - **Windows:** 启动从hiyaCFW Helper解压的文件`HiyaCFW_Helper.exe` (您可能需要暂时关闭杀毒软件)
  - **macOS:** 右键点击从hiyaCFW Helper中解压出来的`HiyaCFW_Helper` 然后选择 `打开`
  - **Linux:** 启动从hiyaCFW Helper中解压出来的`HiyaCFW_Helper.py`
1. 在 "NAND file with No$GBA footer"框中点击 `...` 按钮。
1. 选择你的NAND备份，然后点击 `打开`
1. 按 `Start`
1. 在新的弹出窗口中，选择你的SD卡的根目录，然后按 `确定`。
   - 进程可能需要几分钟时间
1. 当应用程序说`Done!`时，关闭hiyaCFW Helper
1. 关闭终端窗口

### 第三部分：配置Unlaunch和hiyaCFW
1. 同时按住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd> 后，再按下 DSi 的电源键
   - 这应该能启动到Unlaunch的文件菜单
1. 选择 `OPTIONS`，然后是 `NO BUTTON`
1. 选择 `hiyaCFW` 并按 <kbd class="face">A</kbd>
   - 这将使系统自动启动 hiyaCFW
1. 保存您的设置并重启机器
1. 按住 <kbd>SELECT</kbd> 开机来进入hiyaCFW设置
1. 按喜好更改设置, 然后按 <kbd>START</kbd> 继续

如果显示 `发生错误/An error has occurred`，请看 [faq](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) 页面。
{: .alert .alert-warning}
