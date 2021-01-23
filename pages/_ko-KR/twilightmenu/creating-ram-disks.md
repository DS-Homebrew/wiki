---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: RAM 디스크 생성하기
description: How to create RAM disks for using old DS homebrew with TWiLight Menu++
---

Flashcard를 사용중이라면 하지 않아도 됩니다.
{:.alert .alert-info}

RAM 디스크를 만들기 위해, [이 도구](http://memory.dataram.com/products-and-services/software/ramdisk#freeware)를 받아주세요.(`Download Software`를 클릭하세요.)

설명: @Dakkon7, 수정: RocketRobz:

1. RAMDisk를 실행합니다.
1. **View** -> **Advanced** 순으로 클릭합니다.
1. For **Disk Size**, type `12` for DSi, or `28` for 3DS, above **Max 1023 MB**
1. Un-mark **Create TEMP Directory**, if it's already marked
1. Click **Load/Save**
1. Click `Start RAMDisk`, and a new window for your .img should appear
1. Place any file and/or folder the homebrew expects there, and/or file(s) you want to use
1. In the RAMDisk program, click `Save Disk Image Now`
1. Save `romname.img` to a folder called `ramdisks` in the .nds file location
1. Click `Stop RAMDisk` when you're done
1. In TWiLight Menu++, open per-game settings for your homebrew
1. Set RAM disk to 0
1. Launch your homebrew, and it should read your RAM disk
