---
lang: ko-KR
layout: wiki
section: ds-index
title: 닌텐도 DSi / 닌텐도 3DS TWL_FIRM
category: Reference
description: An explanation of all things DS modding
---

### 커스텀 펌웨어 준비
커스텀 펌웨어의 대부분의 이점은 닌텐도 DSi와 닌텐도 3DS 제품군에 적용되며, 여러분이 갖고있는 게임기의 가능성을 열어줄 수 있습니다. 커스텀 펌웨어를 설치하는 것은 꽤 쉬우며, 대부분의 경우 (마이크로)SD 카드만 있으면 됩니다. 여러분이 따라오기 쉽도록 순서에 따라 쓰여진 가장 좋은 강좌를 아래 써두었습니다.

- [3DS 해킹 가이드](https://3ds.hacks.guide)
  - Lightning command: `mod 3ds`
  - Kuriisu command: `guide 3ds`
- [DSi 해킹 가이드](https://dsi.cfw.guide)
  - Lightning command: `mod dsi cfw`
  - Kuriisu command: `guide dsi`

### CPU 속도
2004년, 닌텐도 DS는 67MHz 프로세서를 탑재하여 출시되었습니다. 2009년에는, 닌텐도 DSi는 133MHz 프로세서를 탑재하여 출시되었습니다. 닌텐도 DS 라이브러리에 있는 대부분의 게임들은 DSi가 출시되기 전에 만들어졌고, 이 때문에 그 게임에 맞는 유일한 프로세서는 67MHz밖에 없었습니다. 몇몇 응용 프로그램들은 그 클럭 속도에만 대응 되었고, 결과적으로 더 높은 클럭 속도에서는 잘 작동하지 못했습니다. 그러나, 대부분의 게임들은 더 높은 클럭 속도로 기존의 퍼포먼스를 능가할 것입니다.

nds-bootstrap은 TWL Clock Speed를 옵션으로 갖고있는데, 이게 있다고 해서 ROM이 더 높은 클럭 속도에서 잘 작동하도록 조절하지는 않을것입니다. That's on the application itself, and applications not working with a higher clock speed is NOT a bug on the nds-bootstrap end.

### 닌텐도 DSi 본체 메뉴
닌텐도 DSi 본체의 메뉴는 서명된 32비트 정수를 사용하여 NAND의 여유 공간을 결정해줍니다. 실제 NAND를 사용할 때는, 128MB를 넘지 않으므로 안전했습니다. 그러나, NAND를 SD카드에 리다이렉트 시키게 되면, 32비트 정수 제한을 넘겨버려서, 음수로 오버플로가 생겨버립니다. The negative number of free space will unfortunately cause an "An error has occurred" error message, not letting you boot into the menu. Fortunately, this can be fixed by making a dummy file to put it in a positive number.

The positive and negative numbers are determined by pairs of two. For example, 1-2 GB of free space is allowed while 3-4 isn't. 5-6 GB of free space is allowed while 7-8 isn't.

In version 1.4.0, RSA signatures in the DS Cart Whitelist aren't verified. There is an exploit regarding a vulnerability in the Nintendo DSi flashcard whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

### 닌텐도 DSi Slot-1 접근 & 차단
Slot-1 access is blocked when launching applications from the System Menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

The flashcard white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcards that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. Also, the exploit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

### 닌텐도 DSi 카메라
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi Bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.
