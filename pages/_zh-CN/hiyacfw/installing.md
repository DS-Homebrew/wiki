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
1. Download the latest Windows version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Run the TWLMagician MSI package and extract it to anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. 如果 Python 3尚未安装，请使用软件包管理器安装
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. 如果你还没有安装 tkinter，请用以下命令为你的发行版安装它。
    - Debian-based: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Install requirements with the following command:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### 第二部分：将 hiyaCFW 文件复制到你的SD卡上
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. 在 "含有 No$GBA footer 的 NAND 备份文件" 框中点击 `...` 按钮。
1. 选择你的NAND备份，然后点击 `打开`
1. 按 `开始`
1. 在新的弹出窗口中，选择你的SD卡的根目录，然后按 `确定`。
    - 该过程可能需要几分钟
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### 第三部分：配置Unlaunch和hiyaCFW
1. 同时按住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd> 后，再按下 DSi 的电源键
    - 这将带您进入 Unlaunch 的文件菜单
1. 选择 `OPTIONS`，然后是 `NO BUTTON`
1. 选择 `hiyaCFW` 并按 <kbd class="face">A</kbd>
    - 这将使系统自动启动 hiyaCFW
1. 保存您的设置并重启机器
1. 按住 <kbd>SELECT</kbd> 开机来进入 hiyaCFW 设置
1. 按喜好更改设置, 然后按 <kbd>START</kbd> 继续

如果显示 `发生错误/An error has occurred`，请查看 [faq](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) 页面。
{: .alert .alert-warning}
