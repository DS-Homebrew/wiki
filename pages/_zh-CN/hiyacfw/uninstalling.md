---
lang: zh-CN
layout: wiki
section: hiyacfw
title: 卸载
long_title: Uninstalling hiyaCFW
description: How to uninstall hiyaCFW from Nintendo DSi
---

hiyaCFW is only present on the SD card and has no presence on your NAND. Before proceeding, be sure to backup any save data from your SDNAND that you wish to keep. You can learn how to do that by following Section III of the [dsi.cfw.guide](https://dsi.cfw.guide)'s [DSiWare Backups](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional) guide.

### 卸载
1. Delete `hiya.dsi` from the SD card root
1. Delete the `hiya` folder
1. Delete the `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket`, and `tmp` folders

### Changing Unlaunch settings

If you had set Unlaunch to autoboot hiyaCFW, you may want to change these settings now that you no longer use it.

1. Insert your SD card into your Nintendo DSi and start the console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
   - This will open the Unlaunch Filemenu
1. Go to `OPTIONS`, and set `NO BUTTON` to your desired application
   - If you wish to autoboot the system NAND, set it to the application named `Launcher`
   - If you wish to autoboot TWiLight Menu++, choose the file named `BOOT.NDS`
1. Choose `SAVE & EXIT`
