---
lang: sv-SE
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: Hur man hardmoddar en Nintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Hardmodding can easily damage your DSi. If you're trying to unbrick your DSi, then you should try [ntrboot](ntrboot) first.
{:.alert .alert-danger}

Hardmodding är när du fysiskt lödar moderkortet till en SD-kortsadapter för att läsas på en dator. Detta är användbart för att återställa NAND-säkerhetskopior, visa NAND på din dator, etc...

### Nintendo DS
[![Original DS moderkort med touch-points märkta](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

To hardmod a Nintendo DSi/DSi XL (LL) you will need:
    - [Blyertspetsad lödkolv](https://www.amazon.com/dp/B01N4571Q6)
    - [Mycket fin koppartråd](https://www.amazon.com/dp/B01MXGNTA4), 28AWG eller mindre, helst 30AWG+
    - SD till microSD-adapter
    - En SD-kortläsare som kan läsa eMMC-chips. [T.ex den här läsaren.](https://www.amazon.com/dp/B006T9B6R2)
    - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) och [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) om du använder Windows
    - En giltig NAND-säkerhetskopiering av DSi:n som du hardmoddar
    - Att vara bekväm med att lödda till ytor som är så små som 0,5 mm i diameter

#### DSi sida A pinouts
[![DSi sida A pinouts](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### DSi sida B pinouts
[![DSi sida B pinouts](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### DSi XL sida B pinouts
[![DSi XL sida B pinouts](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Du måste löda punkterna på moderkortet till microSD-kortets adapter
    - CMD till pin 2
    - GND till pin 3 och 6
    - CLK till pin 5
    - DAT0 till pin 7

#### Exempel på löddad microSD-adapter
[![microSD exempel](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Sätt in microSD-kortadaptern i datorn
    - **VARNING** - Windows kommer att be dig formatera den: **FORMATERA INTE** - detta kan orsaka oreparerbara skador

#### Att ta bort no$gba sidfot
Du kommer först behöva ta bort NOCASH sidfoten från säkerhetskopian du flashar till din DSi. This can be done using the [hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Ladda ner versionen för operativsystemet du använder
1. Kör skriptet genom att välja den säkerhetskopia av NAND som du vill flasha till din DSi
1. Växla till NAND-läge med knappen till vänster om sökvägen
1. Klicka på `Start` för att skapa NAND-säkerhetskopian utan no$gba sidfot

- När skriptet är klart bör det finnas en fil med ett långt namn som slutar i `-no-footer.bin` i mappen där din terminal är öppen
    - Använd denna fil som NAND bilden du flashar på din DSi

{% capture tab-windows %}
1. Öppna Win32DiskImager
1. Klicka på mappikonen och bläddra till skrivbordet. I textrutan, skriv `NAND_0.bin`. När du väljer typ, välj `All types *.*`
1. Välj den enhet som är din DSi och klicka på read
1. När den är klar, klicka på mapp-ikonen, ändra namnet till `NAND_1.bin` och läs igen
1. Öppna HxD och dra båda filerna till redigeraren. Gå till det övre fältet, klicka på "Analysis", klicka på "File compare" från rullgardinsmenyn och klicka sedan på "Compare".
1. Välj att jämföra båda filerna och klicka sedan på OK när du är klar
    - Om det står "The chosen files are identical.", du är redå att gå till nästa avsnitt
    - If it doesn't say that, and both NANDs aren't around 240 MB, dump NAND_1/NAND_0 again
1. Öppna Win32DiskImager, klicka på mappikonen och välj din befintliga NAND-backup som du skapade innan
1. Flasha den med `Write` -knappen
1. Koppla ur SD-kortadaptern och försök att sätta på din DSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Kontrollera vart SD-kortet är monterat
    - Linux:
        1. Koppla ur SD-kortadaptern
        1. Run `lsblk` in a terminal
        1. Koppla in SD-kortadaptern
        1. Run `lsblk` again
        1. This time a new device should appear
            - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

    - macOS:
        1. Koppla ur SD-kortadaptern
        1. Kör `df` i en terminal
        1. Koppla in SD-kortadaptern
        1. Kör `df` igen
        1. A new device should appear in the list
            - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* computer

1. Dumpa NAND
    - Kör följande kommando i en terminal:
        - `cat {device-name} > nand0.bin`
        - Ersätt `{device-name}` med monteringsplatsen för SD-kortet
        - t.ex `cat /dev/sdb > nand0.bin`
        - Kör sedan `cat {device-name} > nand1.bin`


1. Jämför NAND-dumpar
    1. Kör följande kommando:
        - Linux: `md5sum nand0.bin nand1.bin`
        - macOS: `md5 -r nand0.bin nand1.bin`
    1. Kontrollera att hashen matchar varandra
    1. Om inte, dumpa om NAND, justera ledningarna om nödvändigt
    1. Fortsätt att dumpa NAND:en tills hasherna är identiska

1. Flasha NAND
    1. Leta reda på den säkerhetskopia av NAND som du skapade tidigare på konsolen
    1. Kör följande kommando:
        - `cat {existing-nand-backup} > {device-name}`
        - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
        - Replace `{device-name}` with the mount point of the SD card

Här kan du koppla ur SD-kortadaptern och försök att sätta på din DSi. Om allt gick bra skulle din DSi ha startat till det tillstånd det var när säkerhetskopian skapades!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flashing av en säkerhetskopia av NAND
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
