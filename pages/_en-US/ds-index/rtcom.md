---
lang: en-US
layout: wiki
section: ds-index
category: guides
title: Widescreen + RTCom
description: How to use widescreen and some other Nintendo 3DS features within DSi homebrew
tabs:
  - twilight-menu: TWiLight Menu++
    forwarders: Forwarders
---

**RTCom** is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support.

A few examples of this includes nds-bootstrap (to use the circle pad's analog input and widescreen), and GBARunner2 (for gyro support).

This section requires a 3DS family console, running a modern CFW environment from [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

If you're currently using Luma v13, please update to the latest version before following this guide.
{:.alert .alert-info}

### Installing
1. Open FBI and select `Remote Install`, then `Scan QR Code`
1. Scan this QR code to install the latest version of [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br>
   ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Open Universal Updater from your HOME Menu
1. Install the TWPatch package
    - If your console is unable to access the Internet, you can download [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) directly, then install it with FBI
1. Return to the HOME menu and launch TWPatch
    - If you get a message which says `Can't open /luma/exeTWL.bin`, then use [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/) to fix broken TWL mode
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> to open the patch menu and enable `Widescreen patch (384x240 16:10)`
    - Make sure the Redshift patch is disabled, otherwise the widescreen patch will not work
1. (Optional!) For a less pixelated widescreen, also enable `GPU scaling (blurry, no filters)`
1. Press <kbd class="face">B</kbd> to exit the patch menu
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen + RTCom
    - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
1. Move `TwlBg.cxi` from `sd:/luma/sysmodules/` to `sd:/_nds/TWiLightMenu/TwlBg/` (create `TwlBg` folder, if it doesn't exist), and rename the file to `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Launch TWPatch
1. Select your screen filter
    - If unsure, select `Nintendo default`
1. Press <kbd>START</kbd> to generate a standalone `TwlBg.cxi` file with RTCom

#### Playing DS games in Widescreen

Select one of the following methods to launch your DS game:

{% capture tab-twilight-menu %}

Launch TWiLight Menu++, then follow either method.

Activating it per-game:
1. Press <kbd class="face">Y</kbd> on your desired game to bring up the per-game settings
1. Set `Screen Aspect Ratio` to `16:10`
1. Press <kbd class="face">B</kbd> to exit the per-game settings
1. Press <kbd class="face">A</kbd> to launch the game

Activating it for every (compatible) game:
1. Open TWLMenu++ Settings
1. Switch to the Misc. settings page
1. Set `Screen Aspect Ratio` to `16:10`
1. Press <kbd class="face">B</kbd> or touch the bottom `TWiLight Menu++` button to exit TWLMenu++ Settings
1. Press <kbd class="face">A</kbd> to launch the game

{% endcapture tab-twilight-menu %}
{% assign tab-twilight-menu = tab-twilight-menu | split: "////////" %}


{% capture tab-forwarders %}


1. From the HOME menu, hold <kbd class="face">Y</kbd>, and while holding <kbd class="face">Y</kbd>, launch the forwarded game that you wish to enable widescreen for
1. Use the D-Pad to scroll to `Widescreen`
1. Press <kbd class="face">A</kbd> to switch it to `On`
1. Press <kbd>START</kbd> to save

{% endcapture tab-forwarders %}
{% assign tab-forwarders = tab-forwarders | split: "////////" %}

{% assign tabs = tab-twilight-menu | concat: tab-forwarders %}
{% include tabs.html index=0 tabs=tabs %}

#### Playing with Circle Pad
1. See [this GBATemp thread](https://gbatemp.net/threads/circle-pad-patches-for-super-mario-64-ds-and-other-games-in-twilightmenu-with-twpatcher-and-rtcom.623267/) for which games are supported
1. Download `MODS.zip` from the above page
1. Open `MODS.zip`, then put `usrcheat.dat` in `sd:/_nds/TWiLightMenu/extras/`
    - If you already have a `usrcheat.dat` file in said folder, rename the existing one to `usrcheat.dat.bak` first
1. Launch TWiLight Menu++
1. Press <kbd class="face">Y</kbd> on your desired game to bring up the per-game settings
1. Press <kbd class="face">X</kbd> to open the cheat menu
1. Activate the C-Pad patch
1. Press <kbd>START</kbd> to save
1. Press <kbd class="face">B</kbd> to exit the per-game settings
1. Press <kbd class="face">A</kbd> to launch the game

**NOTES:**
1. Do not hold <kbd>START</kbd> or <kbd>SELECT</kbd> when launching TWLMenu++, if you don't want widescreen to look glitched
1. Not every game is widescreen compatible. [Here is a list of games with widescreen support](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`.
    - If the problem persists, [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide, as well as using the original build of Luma
1. Most widescreen patches will only adjust 3D elements for widescreen, 2D elements (such as menus) will only be stretched
1. Luma3DS **must** be loaded from the SD card, if widescreen isn't working ensure that you have `boot.firm` in the root of your SD
