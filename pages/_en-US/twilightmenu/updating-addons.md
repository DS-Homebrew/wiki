---
lang: en-US
layout: wiki
section: twilightmenu
category: updating
title: Updating Add-ons
long_title: Updating TWiLight Menu++ Add-ons
description: How to update TWiLight Menu++ Add-ons
tabs:
  - universal-updater: Universal-Updater (3DS)
    manual: Manual
---

If you have installed any add-ons, it is required to follow these steps.

{% capture tab-universal-updater %}
1. Launch Universal-Updater if you have not done so yet
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
    - It has this icon: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select an option starting with `(Add-on)` to install it
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
	- Repeat this step for each installed add-on
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Open the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Scroll down to the `Assets` section
1. Download the add-on(s) you have installed
1. Extract the downloaded `AddOn-???.7z` file(s)
1. Copy the `_nds` folder to your SD card root from each add-on, replacing any existing files
    - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Updating

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
