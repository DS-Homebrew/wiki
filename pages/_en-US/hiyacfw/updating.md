---
lang: en-US
layout: wiki
section: hiyacfw
title: Updating
long_title: Updating hiyaCFW
description: How to update hiyaCFW on the Nintendo DSi
tabs:
  - windows: Windows
    macos: macOS
    other: Linux
---

### Requirements
- A Nintendo DSi with [hiyaCFW installed](installing)
- A Windows, macOS, or Linux device

### Part 1: Preparing your PC for updating hiyaCFW
{% capture tab-windows %}
1. Download and install the latest version of [vcredist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version)
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
1. Install Python 3 using your package manager if its not already installed
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. Install tkinter with the following command for your distro if you don't already have it:
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

### Part 2: Updating hiyaCFW using TWLMagician
![Screenshot of TWLMagician's Advanced Mode](https://i.ibb.co/Pz4Gbzz3/03b42861-19f4-47e4-b971-a94a6ce588b3.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Click the `Advanced` button
1. Click the `...` button in the "The root of SD card" box
1. Navigate to the root of your SD card, and click `OK`
1. Click the `Update hiyaCFW` checkbox 
1. Press `Start`. Note that `Advanced Mode` will also update TWiLight Menu++ on your SD card
    - The process may take several minutes
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)
