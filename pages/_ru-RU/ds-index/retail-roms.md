---
lang: ru-RU
layout: wiki
section: ds-index
category: reference
title: Розничные ROM-ы
description: Информация, связанная с розничными играми DS
---

### Anti-piracy
AP (Anti-Piracy) - это метод, используемый разработчиками для обеспечения законных покупок и предотвращения пиратства. Это можно обойти либо в загрузчике, либо в самом RОМ-е.

- nds-bootstrap может загрузить файл `.ips`, чтобы обойти указанные ограничения. Этот файл `.ips` будет применен nds-bootstrap в оперативной памяти, так что файлы ROM-а останутся нетронутыми. Пакет файлов `.ips` включен в TWiLight Menu++
- В Wood R4 эти патчи включены в само программное обеспечение, вам не нужно будет модифицировать ROM

Если для вашего ROM-a нет файла `.ips` или ваша программа не модифицирует этот ROM вы можете попробовать изменить его напрямую с помощью [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/).

### Cloneboot
Cloneboot - это когда игра отправляет свои собственные загруженные двоичные файлы ARM7 и ARM9 на другую консоль. Он используется в DS Download Play для многопользовательской игры использую лишь одну игровую карту. Однако не все игры с однокарточным мультиплеером используют cloneboot.

### Файлы сохранения
Картриджи Nintendo DS имеют 4 известных типа сохранений:

- EEPROM - Electrically Erasable Programmable Read-Only Memory(Электрически Стираемая Программируемая Память, Доступная Только для чтения)
- FLASH
- FRAM - Ferroelectric Random-Access Memory (Сегнетоэлектрическое запоминающее устройство с произвольным доступом)
- NAND - NOT-AND

В зависимости от загрузчика можно использовать разные форматы, но nds-bootstrap использует необработанный формат `.sav`. Если у вас есть сохранение в другом формате, вот сайт, который вы можете использовать для его конвертации: http://www.shunyweb.info/convert.php.

### Ассемблер
Язык ассемблера - это любой низкоуровневый язык программирования с сильной связью между инструкциями языка и инструкциями процессора. В DS ассемблерный код поставляется в виде инструкций ARM или THUMB, причем инструкции THUMB являются подмножеством инструкций ARM. THUMB используется для сакращение нагрузки на пропускноую способности памяти, поскольку он использует 16-разрядные инструкции вместо обычных 32-разрядных инструкций, используемых ARM.

Более подробные инструкции по сборке, а также много другой технической информации для DS и DSi можно найти на сайте [GBATEK](https://problemkaputt.de/gbatek.htm).

### Чтение карты DMA
DMA (прямой доступ к памяти) - это более эффективный способ считывания данных, чем использование центрального процессора. Когда данные передаются, код все еще может выполняться, поэтому это предпочтительный способ доступа к данным.

Вы можете найти игру, использующую DMA, в no$gba, включив журнал DMA на ARM9. При доступе DMA к карте в качестве третьего параметра используется AF000001.
- Например: `DMA2: 04100010 023C18C0 AF000001`

### Читы Action Replay
Читы Action Replay - это коды, позволяющие вносить низкоуровневые программируемые изменения в область памяти вашей любимой игры. Эти изменения варьируются от простых корректировок стоимости до чрезвычайно сложных корректировок ASM, причем и те, и другие могут полностью изменить впечатления от игры.

Флэш-картриджи могут дать воспользоваться преимуществами чит-кодов, используя базы данных. Функциональность чита интегрирована в ядро флэш-картриджа соответственно. Следующие ядра могут использовать читы:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/цифровые решения также могут использовать преимущества чит-баз данных, доступное в настоящее время программное обеспечение может использовать следующее:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax с флеш-картриджа позволяет вам использовать читы на настоящих игровых картах. Используемый здесь движок загружает всю базу данных cheats.xml в ограниченную оперативную память Nintendo DS и пытается управлять всем оттуда. Это накладывает серьезное ограничение на количество читов, поскольку NitroHax не будет загружать файл cheats.xml размером более 2,4 МБ
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat форк](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` или `usrcheat.dat`)
   - NitroHax3DS - это версия NitroHax, которая запускается с SD-карты на DSi или 3DS. Оригинальная версия использует файл cheats.xml с тем же ограничением в 2,4 МБ, что и оригинальный NitroHax, но есть также форк, который загружает читы из базы данных usrcheat.dat без ограничения размера
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ считывает `usrcheat.dat` и отправляет значения включенных читов в другой файл, который подхватывает nds-bootstrap
   - Чит-движок, используемый в nds-bootstrap, основан на движке, используемом в NitroHax. Однако из-за того, что файл с читами содержит только включенные читы для этой конкретной игры, есть ограничение только на количество читов, которые могут быть включены, но размер базы данных не ограничен

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


### Title Labels
Looking at the bottom of the title label shows the title ID along with other bits of information, for this example the following ID will be used:

- NTR-NTRJ-**XXX**

**XXX** represents the following:

- AUS - Australia
- CHN - China
- DEN - Denmark
- EUR - Europe (Multilingual)
- EUU - Europe (Dutch or Italian Only)
- FRA - France
- GER - Germany
- HOL - Netherlands
- ITA - Italian
- JPN - Japan
- KOR - Korea
- NOE - Europe (German Only)
- NOR - Norway
- RUS - Russia
- SPA - Spain
- UKV - United Kingdom
- USA - United States

The last letter of the title ID itself represents the language of the title. Using the last example's title ID:

- NTR-NTR**X**-JPN

**X** represents the following:

- A - World (doesn't count as only one thing used it)
- C - Chinese (Simplified)
- D - German
- E - American English
- F - French
- G - Greek
- H - Dutch
- I - Italian
- J - Japanese
- K - Korean
- M - Swedish
- N - Norwegian
- O - English (DSi Enhanced)
- P - European Multilingual
- Q - Danish
- R - Russian
- S - Spanish
- T - English (DSi Enhanced)
- U - Australian English
- V - British English
- W - Other languages (Varies)
- X - Other languages (Varies)
- Y - Other languages (Varies)
- Z - Other languages (Varies)

In terms of the system identifiers:

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### DSi Enhanced:

Games with "DSi Enhanced" functionality are games that take advantage of some aspect of the DSi's hardware while still remaining compatible with the DS Phat/Lite. These games are marked as `TWL` but still say "Nintendo DS" instead of "Nintendo DSi" on the label.
