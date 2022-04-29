---
lang: id-ID
layout: wiki
section: gbarunner2
title: Binaan (Build) GBARunner2
description: Informasi tentang beragam Build GBARunner2 dan kegunaannya
---


Ada sejumlah lepasan (release) atau "build" GBARunner2 berbeda yang dapat digunakan. Asalnya dari cabang (branch) dan fork GBARunner2 yang juga mempunyai fitur berbeda baik untuk permainan GBA lain atau beberapa kegunaan lain. **Bagi kebanyakan pengguna**, menggunakan build yang disertakan di TWiLightMenu++ sudah cukup.

## Build DS vs DSi vs 3DS

GBARunner2 has had builds made that makes use of the extra hardware found inside the DSi and 3DS. Naturally, these DSi- and 3DS-specific builds will not work on a DS. However, they also will not work if you are running GBARunner2 from a flashcard on any of the systems, DSi and 3DS included. The details about this will not be covered here.

Ini artinya kamu dapat menggunakan build untuk DS di konsol DSi dan 3DS, tapi tidak sebaliknya.

## Build yang sebagi antara DS, DSi dan 3DS

Berikut adalah build yang terdapat pada ketiga deret sistem.

### Master

The Master builds or "main" builds are the proper releases of GBARunner2. This should generally be the most stable build. Semua cabang selain yang ini dianggap dicoba-coba dan tidak cukup stabil untuk dimasukkan ke bentuk Master. The Master builds are divided into different builds for the DS, DSi and 3DS. They each have the name of the corresponding system appended at the end of the filename.

### Wi-Fi-Link

The Wi-Fi-Link branch adds the possibility to link up two systems wirelessly. Note that this does not go over the Internet, and this will never be possible. Currently your mileage will vary, and the only sure-fire game that will be able to keep a stable connection is Advance Guardian Heroes, and that is provided that you follow very specific instructions. Needless to say, consider this branch in its current state a novelty and a proof of concept, and not something to actually use. A few other games are able to connect, but they are very dependent on external factors like interference from other Wi-Fi signals, among many other things.

## DS-Specific Builds

### ARM7DLDI vs ARM9DLDI

**Normally use the ARM9DLDI**, and if that does not work then try the ARM7DLDI. Some flashcards need either the ARM7DLDI or the ARM9DLDI, and some might work with both. There is no list of which flashcards work with which builds, but if you are running into issues getting GBARunner2 to run then you might want to try the other one.

There are no feature or performance differences between the two so there is no use in testing both to see if a game runs better or has less issues on the other.

See further down to find out what build you are currently using.

### ROM3M

If you are using TWiLightMenu++ then you are already using this feature in the GBARunner2 build that comes with it.

This branch might help if trying to run ROMs that are a bit larger on the DS, but there is a limit due to the limited amount of RAM present in the DS. This is basically the Pokémon Emerald branch for the DS.

Void Star made [a fork of GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) that combines this ROM3M branch with some other neat features, and this is the build that comes with TWiLightMenu++ if you are using a DS.

## DSi- and 3DS-Specific Builds

The DSi and 3DS can generally run the same builds, but due to the difference in amount of RAM between the DSi and 3DS the compatibility for games can differ. This generally means that the DSi might have trouble running larger ROMs that the 3DS can run fine.

The 3DS also has an accelerometer chip for gyro controls built-in, and this can be used in a 3DS-specific build.

### DSP

The DSP builds make use of an extra processor present in both DSi and 3DS. This helps to produce a lot better sound and give better performance. There are some regressions like a couple of ROMs that do not work in this branch.

### Hybrid Hicode

The Hybrid Hicode branch deals with ROMs that are large and have problems running on the Master branch. This is a very useful branch for the DSi since this mostly solves the issue with having less RAM than the 3DS.

### 3DS-Specific: Gyro

This branch makes use of the internal accelerometer in the 3DS so that GBA games that had this functionality can be played properly. There are several steps needed to take to make it work. Note that since there are different accelerometer chips between 3DS systems, this will not work on all 3DSes because all chips do not have code supporting them.

There is no consistency in what type of 3DS has what chip, at least as far as anyone knows.

## Memeriksa Info Build

GBARunner2 mempunyai menu yang dapat dibuka dengan menyentuh layar bawah dan menekan tombol R. Di dalam sini kamu dapat mencari menu About yang menjelaskan ada di build berapa. Namun, build yang disertakan di TWiLightMenu++ tidak menulis versi build karena sudah didasarkan pada fork dari orang lain. Ini artinya jika di halaman About hanya kosong saja tentang build, kemungkinan kamu menggunakan yang sudah disertakan.

Ini agar tahu jika yang digunakan build ARM7DLDI atau ARM9DLDI

Mengetahui build yang digunakan dapat berguna ketika memeriksa daftar kesesuaian (compatibility list) resmi jika saja mengalami isu menjalankan permainan.

Bilangan ID lepasan (release) dapat dilihat pada laman release repository github GBARunner2, tulisan versinya terdiri dari tujuh alfanumerik. Contohnya, lepasan Master terbaru saat ini "v20200812-131430_6e4ce45" dan "6e4ce45" yang mewakili bilangan versinya.
