---
lang: zh-CN
layout: wiki
section: hiyacfw
title: 卸载
long_title: 卸载 hiyaCFW
description: 如何为 Nintendo DSi 卸载 hiyaCFW
---

hiyaCFW 只存在于 SD 卡中，并不存在于 NAND 中。 在继续之前，请务必备份 SDNAND 中您希望保留的任何保存数据。 You can learn how to do that by following [dsi.cfw.guide](https://dsi.cfw.guide)'s [DSiWare Backups](https://dsi.cfw.guide/dsiware-backups.html) guide.

### 卸载
1. 从 SD 卡根目录删除 `hiya.dsi`
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
