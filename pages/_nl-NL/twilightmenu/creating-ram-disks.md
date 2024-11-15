---
lang: nl-NL
layout: wiki
section: twilightmenu
category: other
title: Maak RAM-schijven
description: Hoe maak je RAM-schijven voor het gebruik van oude DS homebrew met TWiLight Menu++
---

Sommige DS homebrew kunnen het bestandssysteem van de SD-kaart niet goed gebruiken. Hierdoor kan het nodig zijn om een standalone bestandssysteem in het RAM te laden dat de nodige bestanden voor je homebrew bevat om het te laten werken.

De hier gebruikte software vereist het Windows-besturingssysteem.
{:.alert .alert-info}

Je hoeft dit niet te volgen als je een flashkaart gebruikt.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](https://web.archive.org/web/20240923165935/https://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructies door Dakkon7, gewijzigd door Rocket Robz:

1. Voer RAMDisk uit
1. Klik op **View** -> **Advanced**
1. Voor **Disk Size**, typ `12` voor DSi, of `28` voor 3DS, boven **Max 1023 MB**
1. Deselecteer **Create TEMP Directory**, als deze al geselecteerd is
1. Klik op **Load/Save**
1. Klik op `Start RAMDisk`, en een nieuw venster voor je .img zou moeten verschijnen
1. Plaats daar elk bestand en/of map die de homebrew verwacht, en/of bestand(en) die je wilt gebruiken
1. Klik in het RAMDisk-programma op `Save Disk Image Now`
1. Sla `romname.img` op in de map `ramdisks` in de locatie van het .nds-bestand. Als het nog niet bestaat, maak het dan aan
1. Klik op `Stop RAMDisk` als je klaar bent
1. Open in TWiLight Menu++ de instellingen per spel voor je homebrew
1. Zet RAM-disk op 0
1. Voer je homebrew uit, het zou je RAM-disk moeten lezen

Als je de andere RAM-disks voor een enkele homebrew-applicatie wilt gebruiken, gebruik dan de extensie `.mg1` voor RAM-disk 1, enzovoort.
{:.alert .alert-info}
