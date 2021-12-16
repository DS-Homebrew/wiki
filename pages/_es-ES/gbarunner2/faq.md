---
lang: es-ES
layout: faq
section: gbarunner2
title: Preguntas frecuentes y soluciones
long_title: Preguntas frecuentes y solución de errores de GBARunner2
description: Preguntas frecuentes y solución de errores de GBARunner2
---

#### ¿Cómo puedo crear y añadir marcos personalizados?
Puedes seguir [esta guía](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) de FrescoASF.

#### ¿Se pueden usar trucos?
Aún no. En cambio, puedes inyectar trucos en tu ROM de GBA de forma permanente con [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### ¿Cómo uso las versiones Nightly de GBARunner2 en TWiLight Menu++?
1. Descargar la versión nightly
1. Renómbrala como `GBARunner2_arm7dldi_3ds.nds` (o `GBARunner2_arm7dldi_dsi.nds` si estás en una DSi)
1. Colócala en `sd:_nds`

### Which build of GBARunner2 should I use?
Usually, the builds that are included with TWiLight Menu++ is enough. For more information on the various builds of GBARunner, see the [Builds wiki page](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### ¿Cómo uso las funciones Wifi Link?
You will need a build from the [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) branch to use the features. You can find detailed instructions on how to setup the builds on its [GBAtemp Wiki page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Why isn't RTC (Real Time Clock) supported in a ROM hack?
RTC is supported on a per-game basis. You will have to change the ROM's game code to that of the original game so that GBARunner2 will recognize it.
