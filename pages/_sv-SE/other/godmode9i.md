---
lang: sv-SE
layout: wiki
section: other
title: GodMode9i
description: Information om GodMode9i
---

[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/) is an open source file browser for the Nintendo DS ecosystem, taking inspiration from GodMode9 for the Nintendo 3DS. GodMode9i has the ability to dump game cartridges, manage SD card files, browse NitroFS, calculate the SHA1 hash of files, edit binary files with a hex editor, and more.

## Dumping functionality

To dump game cartridges, select the drive in the drives list and follow the on-screen prompts.
- On the Nintendo DS and Nintendo DS Lite, GodMode9i can dump Slot-2/Game Boy Advance cartridges if running from Slot-1 flashcard, or Slot-1/Nintendo DS cartridges if GodMode9i is running from a Slot-2 flashcard
- On the Nintendo DSi family of systems, Unlaunch is required for access to Slot-1
   - Follow [dsi.cfw.guide](https://dsi.cfw.guide/) for instructions on how to install Unlaunch
- On the Nintendo 3DS family of systems, a modern CFW environment is required to launch GodMode9i
   - Follow [3ds.hacks.guide](https://3ds.hacks.guide/) for instructions on how to install Luma3DS + boot9strap

### Troubleshooting

#### How do I get past the "mounting drive(s)" screen while starting it up?
This happens when you launch GodMode9i from [hiyaCFW](../hiyacfw). You can hold <kbd class="face">X</kbd> while launching GodMode9i to skip NAND mounting. Alternatively, you can launch GodMode9i directly from Unlaunch to be able to mount the NAND.

