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

#### ¿Cómo uso las versiones Nightly de GBARunner2 en TWiLight Menu++?
1. Descargar la versión nightly
1. Renómbrala como `GBARunner2_arm7dldi_3ds.nds` (o `GBARunner2_arm7dldi_dsi.nds` si estás en una DSi)
1. Colócala en `sd:_nds`

#### ¿Qué versión de GBARunner2 debería utilizar?
Usualmente, las versiones incluidas en TWiLight Menu++ son suficientes. Para más información sobre las diferentes versiones de GBARunner2, mire la [página wiki de versiones](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### ¿Cómo uso la función Wi-Fi Link?
Necesitarás la versión [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) de GBARunner2 para utilizar estas funciones. Puedes encontrar instrucciones detalladas sobre cómo configurar esta versión en su [página de GBAtemp Wiki](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### ¿Por qué el RTC (reloj en tiempo real) no funciona en ROM hacks?
RTC funciona dependiendo del juego. Deberás cambiar la ID de la ROM a la del juego original así GBARunner2 lo reconoce correctamente.

You can change the title ID using the following:
1. <label for="file-input" class="form-label">Select GBA ROM file:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Enter desired title ID:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Save updated file:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>
