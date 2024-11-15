---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: RAM 디스크 생성하기
description: TWiLight Menu++가 설치된 오래된 버전의 DS Homebrew를 이용해 RAM 디스크를 만드는 방법
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](https://web.archive.org/web/20240923165935/https://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. RAMDisk를 실행합니다.
1. **View** -> **Advanced** 순으로 클릭합니다.
1. **Disk Size**는, DSi일 때 type `12`, 3DS일 때 `28`, **최대 1023MB**까지 올릴 수 있습니다.
1. **Create TEMP Directory**에 체크가 되어있다면, 체크를 해제합니다.
1. **Load/Save**를 클릭합니다.
1. `Start RAMDisk`를 클릭하면, 사용자의 .img파일을 위한 새로운 창이 뜰 것입니다.
1. Homebrew가 원하는 파일이나 폴더 그리고, 사용자가 쓸 파일을 넣습니다.
1. RAMDisk 프로그램에서, `Save Disk Image Now`를 클릭합니다.
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. 작업이 다 끝났으면, `Stop RAMDisk`를 클릭합니다.
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. RAM 디스크를 0으로 설정합니다.
1. 홈브류를 실행하면, 사용자의 RAM 디스크를 읽을것입니다.

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
