---
lang: zh-CN
layout: wiki
section: ds-index
category: reference
title: 零售 ROM
description: 与零售 DS 游戏相关的信息
---

### 反盗版
AP（反盗版）是开发商用来执行合法购买和防止盗版的一种方法。 这可以通过加载程序或 ROM 本身来规避。

- 对于 nds-bootstrap，它可以加载 `.ips` 文件，以规避上述补丁。 `.ips` 文件将由 nds-bootstrap 在 RAM 中应用，因此可以保持 ROM 文件完好无损。 TWiLight Menu++ 包含一个 `.ips` 文件包。
- 对于 Wood R4，这些补丁包含在软件本身中，您无需修改 ROM 本身

如果您的 ROM 没有 `.ips` 文件，或者您的软件没有为 ROM 打补丁，您可以尝试使用 [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/) 直接修改 ROM 本身。

### Cloneboot
Cloneboot 是指游戏将自己加载的 ARM7 和 ARM9 二进制文件发送到另一个主机。 它被 DS Download Play 用于单卡多人游戏。 不过，并非所有单卡多人游戏都使用 cloneboot。

### 存档文件
任天堂 DS 卡带有 4 种已知的存档类型：

- EEPROM - 电可擦除可编程只读存储器
- FLASH - 闪存
- FRAM - 铁电随机存取存储器
- NAND - 非易失性闪存

根据加载器的不同，可以使用不同的格式，但 nds-bootstrap 使用原始 `.sav` 格式。 如果您有不同格式的保存文件，可以通过以下网站进行转换： http://www.shunyweb.info/convert.php。

### 汇编
汇编语言是语言指令与处理器指令之间存在紧密联系的低级编程语言。 在 DS 上，汇编代码以 ARM 或 THUMB 指令的形式出现，THUMB 指令是 ARM 指令的子集。 由于 THUMB 使用的是 16 位指令，而不是 ARM 使用的普通 32 位指令，因此有助于节省内存带宽。

您可以在 [GBATEK](https://problemkaputt.de/gbatek.htm)上找到有关汇编的更多信息，以及有关 DS 和 DSi 的更多技术信息。

### 卡带读取 DMA
与使用 CPU 相比，DMA（直接内存访问）是一种更高效的数据读取方式。 数据传输时，代码仍可执行，因此这是访问数据的首选方式。

只要在 no$gba 上启用 ARM9 的 DMA 日志，就能发现使用 DMA 的游戏。 卡的 DMA 访问使用 AF000001 作为第三个参数。
- 例如：`DMA2: 04100010 023C18C0 AF000001`

### Action Replay 金手指
Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax lets you use cheats with real Game Cards from a flashcard. The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and tries to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
   - NitroHax3DS is a version of NitroHax that runs from the system's SD card on DSi or 3DS. The original version uses cheats.xml with the same 2.4 MB limit as the original NitroHax, but there is also a fork that loads cheats from a usrcheat.dat database with no size limitation
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
   - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, there is only a limit to how many cheats can be enabled, not a limit on the database size

For the most complete cheat database, using [DeadSkullzJr's NDS Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711) is recomended.

Cheat codes generally have types 0 through F, and here is an (unfinished) description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job
  - It is known that cheat codes of this type usually do not work with nds-bootstrap currently
- DeadSkullzJr is working on a more comprehensive list of cheat code descriptions, this section will link to that once it is ready

### Demonstration and Distribution Titles:
Demonstration (Demo) titles are different from their retail counterparts in various ways. The obvious indicator being that the title at hand is a demo of what the retail version will be like, essentially it's a sneak peek at what is coming in the future when the full retail release comes. In the case of the Nintendo DS line, these titles often are marked as "Not for Resale" on the title labels, each demo also sports a different title ID compared to their retail counterparts, and on the back of the title's cartridge, a "Not for Resale" sticker is also present. These titles are usually just kiosk demos in promotional places in stores and what not.

Distribution titles are a slightly different situation in most cases, however demos can also fit the distribution label for a few titles in the library. Most cases distribution titles are just retail versions of the title(s) that are for display only or come from a promotional packaging of some sort. You can see "Not for Resale" labeled on these types of titles like you can with the demonstration titles. These can sometimes also be used in kiosks for the sake of letting other players test out the title. However knowing that these are essentially the same as their retail counterparts in most cases, they tend to have an extra identifier in the title ID on the label.

Example ID: `DIS-NTR-NTRJ-JPN`

`DIS` - Distribution


### 游戏标签
游戏标签底部显示 title ID 和其他信息，本例将使用以下 ID：

- NTR-NTRJ-**XXX**

**XXX** 代表以下内容：

- AUS - 澳大利亚
- CHN - 中国
- DEN - 丹麦
- EUR - 欧洲（多种语言）
- EUU - 欧洲（仅限荷兰语或意大利语）
- FRA - 法国
- GER - 德国
- HOL - 荷兰
- ITA - 意大利语
- JPN - 日本
- KOR - 韩国
- NOE - 欧洲（仅限德语）
- NOR - 挪威
- RUS - 俄罗斯
- SPA - 西班牙
- UKV - 英国
- USA - 美国

title ID 的最后一个字母本身代表游戏的语言。 使用上一个示例的 title ID：

- NTR-NTR**X**-JPN

**X** 代表以下内容：

- A - 世界（仅有一个游戏使用）
- C - 中文（简体）
- D - 德语
- E - 美式英语
- F - 法语
- G - 希腊语
- H - 荷兰语
- I - 意大利语
- J - 日语
- K - 韩语
- M - 瑞典语
- N - 挪威语
- O - 英语（DSi 增强版）
- P - 欧洲多种语言
- Q - 丹麦语
- R - 俄语
- S - 西班牙语
- T - 英语（DSi 增强版）
- U - 澳大利亚英语
- V - 英式英语
- W - 其他语言（各不相同）
- X - 其他语言（各不相同）
- Y - 其他语言（各不相同）
- Z - 其他语言（各不相同）

在系统标识符方面：

- NTR - Nitro - 任天堂 DS
- TWL - Twilight - 任天堂 DSi

### DSi Enhanced:

Games with "DSi Enhanced" functionality are games that take advantage of some aspect of the DSi's hardware while still remaining compatible with the DS Phat/Lite. These games are marked as `TWL` but still say "Nintendo DS" instead of "Nintendo DSi" on the label.
