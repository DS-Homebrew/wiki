---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Pantallas de Inicio Personalizadas
description: Cómo usar pantallas de inicio personalizadas en TWiLight Menu++
---

Puedes usar tus propios GIF como pantalla de inicio de TWiLight Menu++. Tienen que llamarse `splashtop.gif` y `splashbottom.gif` y encontrarse en `sd:/_nds/TWiLightMenu/extras`, después poner `DSi Splash Screen` en `Custom` en las opciones de TWiLight Menu++.

La mayoría de GIFs de 256x192 funcionan, con algunas excepciones:
- GIFs de más de 1 MiB (Modo DSi) o 256 KiB (Modo DS) pueden ir lentos al estar siendo descomprimidos en el momento
- Entre los dos, los GIFs deben pesar menos de 10 MB (Modo DSi) o rondar los 2 MB (Modo DS)
- Si ambos GIFs están puestos en bucle se mostrarán durante 3 segundos, así que pon un contador de ciclos en al menos uno de ellos para controlar el tiempo
- Puedes usar la señal de input del usuario y un tiempo de espera en un frame si quieres mostrar la imagen y esperar como las predeterminadas
    - Solo el GIF que espera el input se parará, por lo que el otro puede seguir moviéndose
- Si usas Local Color Tables el frame entero debe sobreescribirse ya que reemplazará la paleta de toda la pantalla, no solo de ese frame
- No funcionarán frames entrelazados y de texto
