---
lang: he-IL
layout: wiki
section: hiyacfw
title: התקנה
long_title: Installing hiyaCFW
description: How to install hiyaCFW on the Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Do not system update after installing hiyaCFW. Doing so will remove hiyaCFW's SD patches.
{: .alert .alert-danger}

### דרישות
- A Nintendo DSi with [Unlaunch installed](https://dsi.cfw.guide/installing-unlaunch)
- A NAND Backup taken from your device using dumpTool
   - If you don't have one, follow the [Dumping NAND](https://dsi.cfw.guide/dumping-nand) guide on dsi.cfw.guide
- A Windows, macOS, or Linux device

### Part 1: Preparing your PC for installing hiyaCFW
{% capture tab-windows %}
The hiyaCFW Helper is known to cause false positives with Windows Defender and other antivirus programs, please temporarity disable such programs if you have trouble downloading or running it.
{: .alert .alert-info}

1. Download & install the latest version of [7-Zip](https://www.7-zip.org/download.html)
   - This will not work with any other archive extractor tool, such as WinRAR, the hiyaCFW helper relies on 7-Zip itself, and not a general archive extractor
1. Download the latest Windows version of the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Install Python 3 using your package manager if its not already installed
1. Download the latest Python version of the [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extract the hiyaCFW Helper archive anywhere on your PC
1. Install tkinter with the following command for your distro if you don't already have it:
   - Debian-based: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Part 2: Adding hiyaCFW files to your SD card
![Screenshot of the hiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Launch the hiyaCFW Helper
  - **Windows:** Launch the `HiyaCFW_Helper.exe` file extracted from the hiyaCFW Helper archive (you may need to temporarily disable your antivirus)
  - **macOS:** Right click the `HiyaCFW_Helper` file extracted from the hiyaCFW Helper archive and choose `Open`
  - **Linux:** Launch the `HiyaCFW_Helper.py` extracted from the hiyaCFW Helper archive
1. Click the `...` button in the "NAND file with No$GBA footer" box
1. Navigate to your NAND backup, and click `Open`
1. Press `Start`
1. In the new pop-up window, navigate to the root of your SD card, and press `OK`.
   - The process may take several minutes
1. When the application says `Done!`, close out of the hiyaCFW Helper
1. Close the terminal window

### Part 3: Configuring Unlaunch and hiyaCFW
1. Power on your Nintendo DSi console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
   - This should take you to Unlaunch's file menu
1. Navigate to `OPTIONS`, then `NO BUTTON`
1. Select `hiyaCFW` and press <kbd class="face">A</kbd>
   - This will make the system launch hiyaCFW automatically
1. Save your settings and restart your console
1. Hold <kbd>SELECT</kbd> while powering on your Nintendo DSi console to access the hiyaCFW settings
1. Change the settings to your liking, then press <kbd>START</kbd> to continue

If it shows `An error has occurred`, please see the [troubleshooting](troubleshooting#an-error-has-occurred) page.
{: .alert .alert-warning}
