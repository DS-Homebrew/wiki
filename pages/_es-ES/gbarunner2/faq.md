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
Aún no. Sin embargo, puedes inyectar trucos en tu ROM de GBA de forma permanente usando [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### ¿Qué versión de GBARunner2 debería utilizar?
Usualmente, las versiones incluidas en TWiLight Menu++ son suficientes. Para más información sobre las diferentes versiones de GBARunner2, mire la [página de la wiki acerca de las versiones](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### ¿Cómo uso la función Wi-Fi Link?
Necesitarás la versión [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) de GBARunner2 para utilizar estas funciones. Encontrarás instrucciones detalladas para configurar estas versiones en su [página en WikiTemp (en inglés)](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### ¿Por qué no funciona el reloj interno (RTC) en este romhack?
El reloj interno funciona solo en ciertos juegos. Deberás cambiar la ID de la ROM a la de un juego compatible para que GBARunner2 la reconozca correctamente.

Puedes cambiar la ID de tu ROM usando esta herramienta:
1. <label for="file-input" class="form-label">Selecciona el archivo ROM de GBA:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Introduce la ID deseada</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Guarda el archivo resultante:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Why is a ROM not working, even though the compatibility list says it works?
The GBARunner2 compatibility lists are primarily tested with the offical GBA BIOS, which improves compatibility. See [GBA BIOS Info](https://wiki.ds-homebrew.com/gbarunner2/bios) for information on obtaining the offical GBA BIOS.

#### How do I fix duplicated layers at the bottom of the screen on 3DS?
This is a bug in TWLBg that is rather prevalent in GBARunner2. The only way to temporarily fix this is to restart GBARunner2.
- If applicable, you may be better off using other options for running GBA ROMs on 3DS, such as VC injects, open_agb_firm, or mGBA on n3DS models
