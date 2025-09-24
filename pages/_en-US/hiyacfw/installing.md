---
lang: en-US
layout: wiki
section: hiyacfw
title: Installing
long_title: Installing hiyaCFW
description: How to install hiyaCFW on the Nintendo DSi
tabs:
  - windows: Windows
    macos: macOS
    other: Linux
---

Do not system update after installing hiyaCFW. Doing so will remove hiyaCFW's SD patches.
{: .alert .alert-danger}

### Requirements
- A Nintendo DSi with [Unlaunch installed](https://dsi.cfw.guide/installing-unlaunch)
- A NAND Backup taken from your device [using dumpTool](https://dsi.cfw.guide/dumping-nand)
- A Windows, macOS, or Linux device

### Part 1: Preparing your PC for installing hiyaCFW
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

### Part 2: Adding hiyaCFW files to your SD card
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Click the `...` button in the "NAND file with No$GBA footer" box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`, and a new pop-up window should appear
1. Navigate to the root of your SD card
1. Press `OK`
    - The process may take several minutes
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### Part 3: Configuring Unlaunch and hiyaCFW
1. Power on your Nintendo DSi console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
    - This should take you to Unlaunch's file menu
1. Navigate to `OPTIONS`, then `NO BUTTON`
1. Select `hiyaCFW` and press <kbd class="face">A</kbd>
    - This will make the system launch hiyaCFW automatically
1. Save your settings and restart your console
1. Hold <kbd>SELECT</kbd> while powering on your Nintendo DSi console to access the hiyaCFW settings
1. Change the settings to your liking, then press <kbd>START</kbd> to continue

If it shows `An error has occurred`, please see the [faq](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) page.
{: .alert .alert-warning}
