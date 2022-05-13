---
lang: es-ES
layout: wiki
section: gbarunner2
title: Versiones de GBARunner2
description: Información sobre las diferentes versiones de GBARunner2 y sus usos
---


There are a number of different GBARunner2 releases, or "builds," which one can use. Provienen de diferentes ramas y forks de GBARunner2 que tienen características diseñadas para diferentes juegos de GBA u otras funciones. **For most users**, using the build that comes with **TW**i**L**ight Menu++ is enough.

## Versiones de DS, DSi y 3DS

GBARunner2 has had builds made that make use of the extra hardware found inside the DSi and 3DS. Naturally, these DSi and 3DS-specific builds will not work on a DS. Sin embargo, estas versiones tampoco funcionarán si estás ejecutando GBARunner2 desde una flashcard en cualquiera de los sistemas, DSi y 3DS incluidos. Detalles sobre esto no serán explicados aquí.

Esto significa que puedes utilizar versiones para DS en consolas DSi y 3DS, pero no viceversa.

## Versiones compartidas entre DS, DSi y 3DS

Estas son versiones que están presentes para las tres líneas de sistemas.

### [Master](https://github.com/Gericom/GBARunner2/releases)

The Master builds, or "main" builds, are the proper releases of GBARunner2. Éstas deberían ser generalmente las versiones más estables. El resto de ramas son consideradas experimentales y no son lo suficientemente estables para ser incluidas dentro de Master. Las versiones Master están divididas entre DS, DSi y 3DS. Cada una indica su sistema correspondiente al final del nombre del archivo.

### [Wi-Fi-Link](https://github.com/Gericom/GBARunner2/releases/tag/v20200217-194452_0b8bbe3)

La rama Wi-Fi-Link permite la posibilidad de conectar dos sistemas inalámbricamente. Note that this does not go over the Internet, and this will never be possible due to latency. Actualmente su experiencia puede variar, y el único juego que llega a mantener una conexión estable es Advance Guardian Heroes, teniendo en cuenta que debe seguir una serie de instrucciones. No hace falta aclarar que esta rama se considera, en su estado actual, como una novedad y una prueba de concepto, no algo realmente para usar. Es posible conectar otros juegos, pero depende mucho de factores externos tales como interferencia de otras señales Wi-Fi, entre otras cosas. To setup Wi-Fi liking, please see the [WikiTemp page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

## Versiones sólo para DS

### ARM7DLDI vs ARM9DLDI

**Se recomienda utilizar la versión ARM9DLDI**, y si esta no funciona entonces intentar con la versión ARM7DLDI. Algunas flashcards necesitan la versión ARM7DLDI o la ARM9DLDI, y otras pueden funcionar con ambas. No existe una lista de qué flashcards funcionan con cuáles versiones, pero si está teniendo problemas ejecutando GBARunner2 podría intentar cambiando la versión.

If you are using **TW**i**L**ight Menu++ on your flashcard, you can switch between ARM7DLDI and ARM9DLDI in the **TW**i**L**ight Menu++ settings.

There are no feature or performance differences between the two so there is no use in testing both to see if a game runs better or has less issues on the other.

See further down to find out what build you are currently using.

### [rom3M](https://github.com/Gericom/GBARunner2/releases/tag/v20190911-201047_371815e)

Esta rama puede ayudar si intenta correr ROMs un poco más grandes en la DS, aunque hay un límite debido a la limitada cantidad de RAM presente en la consola. Esta es básicamente la rama Pokémon Esmeralda para la DS.

Void Star made [a fork of GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) that merges the rom3M branch into the latest Master with some other neat features, and this is the build that comes with **TW**i**L**ight Menu++ if you are using a DS.

## Versiones para DSi y 3DS

La DSi y la 3DS generalmente corren las mismas versiones, pero debido a la diferencia de memoria RAM entre ambas consolas la compatibilidad en juegos puede diferir. This means that the DSi might have trouble running larger ROMs that the 3DS can run fine.

La 3DS también tiene un chip acelerómetro con un giroscopio, y esto puede ser utilizado en una versión de GBARunner2 específica para 3DS.

### [DSP](https://github.com/Gericom/GBARunner2/releases/tag/v20200809-113646_551ae99_dsp-audio)

If you are using **TW**i**L**ight Menu++, then you are already using this feature in the GBARunner2 build that comes with it.

The DSP builds make use of the digital sound processor present in both DSi and 3DS. This helps to produce a lot better sound and give better performance. There are some regressions, like a couple of ROMs that do not work in this branch.

### [Hybrid Hicode](https://github.com/Gericom/GBARunner2/releases/tag/v20200812-130512_d5dc8d8)

If you are using **TW**i**L**ight Menu++, then you are already using this feature in the GBARunner2 build that comes with it.

The Hybrid Hicode branch deals with ROMs that are large and have problems running on the Master branch. This is a very useful branch for the DSi since this mostly solves the issue with having less RAM than the 3DS.

### [Hicode/DSP merge](https://github.com/therealteamplayer/GBARunner2/releases/tag/v20210911-merges-and-tweaks)

This fork by therealteamplayer merges the Hicode and DSP branches into one build, along with some other tweaks listed in the release notes. This build is currently used by **TW**i**L**ight Menu++ for the DSi/3DS SD card.

### 3DS-Specific: [Gyro](https://github.com/Gericom/GBARunner2/releases/tag/v20191228-021638_ee7f6a0)

This branch makes use of the internal accelerometer in the 3DS so that GBA games that had this functionality can be played properly. There are several steps needed to take to make it work. Note that since there are different accelerometer chips between 3DS systems, this will not work on all 3DSes because all chips do not have code supporting them.

There is no consistency in what type of 3DS has what chip, at least as far as anyone knows.

## Encontrar información de la versión

GBARunner2 has a menu that you can open by touching the touchscreen and pressing the right shoulder button. Within this you can find the About menu, which tells you which build you are on. However, the builds that currently come with **TW**i**L**ight Menu++ do not report a build version because they are based on forks by other people. This means that if your About page shows blank for build, you are most likely using one of these.

The About page also tells you if you are using an ARM7DLDI or ARM9DLDI build.

Knowing which build to use is useful when checking the official compatibility list, in case you are having issues with running a game.

The release ID can be seen on the release page of the GBARunner2's github repository, where the last seven alphanumeric symbols represent the version. For example, the current latest Master release is "v20200812-131430_6e4ce45" and "6e4ce45" is used to represent its version.
