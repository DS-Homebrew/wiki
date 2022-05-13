---
lang: es-ES
layout: faq
section: gbarunner2
title: Preguntas frecuentes y soluciones
long_title: Preguntas frecuentes y solución de errores de GBARunner2
description: Preguntas frecuentes y solución de errores de GBARunner2
---

#### ¿Cómo puedo crear y añadir bordes personalizados?
Puedes seguir [esta guía](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) de FrescoASF.

#### ¿Se pueden usar trucos?
Aún no. En cambio, puedes inyectar trucos en tu ROM de GBA de forma permanente con [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Which build of GBARunner2 should I use?
Usualmente, las versiones incluidas en TWiLight Menu++ son suficientes. Para más información sobre las diferentes versiones de GBARunner2, mire la [página wiki de versiones](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### How do I use Wi-Fi link features?
Necesitarás la versión [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) de GBARunner2 para utilizar estas funciones. You can find detailed instructions on how to setup the builds on its [WikiTemp page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Why isn't RTC (Real Time Clock) supported in a ROM hack?
RTC funciona dependiendo del juego. Deberás cambiar la ID de la ROM a la de un juego que soporte RTC, así GBARunner2 lo reconoce correctamente.

Puedes cambiar la ID utilizando algunos de los siguientes métodos:
1. <label for="file-input" class="form-label">Select GBA ROM file:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Enter desired title ID:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Save updated file:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Why is a ROM not working, even though the compatibility list says it works?
The GBARunner2 compatibility lists are primarily tested with the offical GBA BIOS, which improves compatibility. See [GBA BIOS Info](https://wiki.ds-homebrew.com/gbarunner2/bios) for information on obtaining the offical GBA BIOS.

#### How do I fix duplicated layers at the bottom of the screen on 3DS?
This is a bug in TWLBg that is rather prevalent in GBARunner2. The only way to temporarily fix this is to restart GBARunner2.
- If applicable, you may be better off using other options for running GBA ROMs on 3DS, such as VC injects, open_agb_firm, or mGBA on n3DS models
