---
lang: en-US
layout: wiki
section: gbarunner2
title: GBARunner2 Builds
description: Information on the various GBARunner2 Builds and their uses
---


There are a number of different GBARunner2 releases or "builds" which one can use. They come from different branches and forks of GBARunner2 and have different features targeting either different GBA games or some different functions. **For most users** using the build that comes with TWiLightMenu++ is enough.

## DS vs DSi vs 3DS Builds

GBARunner2 has had builds made that makes use of the extra hardware found inside the DSi and 3DS. Naturally, these DSi- and 3DS-specific builds will not work on a DS. However, they also will not work if you are running GBARunner2 from a flashcard on any of the systems, DSi and 3DS included. The details about this will not be covered here.

This means that you can use builds for the DS on both DSi and 3DS, but not vice-versa.

## Shared Builds Between the DS, DSi and 3DS

These are the builds that are present for all three lines of systems.

### Master

The Master builds or "main" builds are the proper releases of GBARunner2. This should generally be the most stable build. 
All other branches than this one are considered experimental and not stable enough to be included into the Master. 
The Master builds are divided into different builds for the DS, DSi and 3DS. They each have the name of the corresponding system appended at the end of the filename.

### Wi-Fi-Link

The Wi-Fi-Link branch adds the possibility to link up two systems wirelessly. Note that this does not go over the Internet, and this will never be possible. Currently your mileage will vary, and the only sure-fire game that will be able to keep a stable connection is Advance Guardian Heroes, and that is provided that you follow very specific instructions. Needless to say, consider this branch in its current state a novelty and a proof of concept, and not something to actually use. A few other games are able to connect, but they are very dependent on external factors like interference from other Wi-Fi signals, among many other things.

## DS-Specific Builds

### ARM7DLDI vs ARM9DLDI

**Normally use the ARM9DLDI**, and if that does not work then try the ARM7DLDI.
Some flashcards need either the ARM7DLDI or the ARM9DLDI, and some might work with both. There is no list of which flashcards work with which builds, but if you are running into issues getting GBARunner2 to run then you might want to try the other one.

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

## Finding the Build Info

GBARunner2 has an menu you can open by touching the touch screen and pressing the right shoulder button. Within this you can find the about menu which tells you what build you are on. However, the builds that come with TWiLightMenu++ do not report a build version because they are based on forks by other people. This means that if your About page shows blank for build, you are most likely using one of these.

This tells you if you are using an ARM7DLDI or ARM9DLDI build

Knowing what build to use is useful when checking the official compatibility list in case you are having issues with running a game. 

The release ID can be seen on the release page of the GBARunner2's github repository, where the last seven alphanumeric symbols represent the version. For example, the current latest Master release is "v20200812-131430_6e4ce45" and "6e4ce45" is used to represent its version.
