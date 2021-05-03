---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Immagini d'avvio personalizzate
description: Come utilizzare schermate di avvio personalizzate per TWiLight Menu++
---

È possibile utilizzare i file GIF personalizzati per avere schermate di avvio personalizzate durante l'avvio di TWiLight Menu++. Devono essere chiamati `splashtop.gif` e `splashbottom.gif` e devono stare in `sd:/_nds/TWiLightMenu/extras`, quindi imposta `Schermata di avvio DSi` a `Personalizzata` nelle impostazioni del menu TWiLight ++.

La maggior parte dei file GIF fino a 256x192 dovrebbe funzionare, con alcune eccezioni:
- I file GIF sopra 1 MiB (Modalità DSi) o 256 KiB (Modalità DS) potrebbero non essere riprodotti a piena velocità in quanto saranno decompressi al volo
- Tra i due, le GIF devono essere inferiori a circa 10 MB (Modalità DSI) o circa 2 MB (Modalità DS)
- Se entrambe le GIF sono impostate su loop per sempre, verranno mostrate per 3 secondi, quindi imposta un conteggio del loop su almeno uno per controllare il tempo
- The user input flag is supported so set it and a long delay on a frame if you want to show a splash and wait like the defaults
   - Only the GIF waiting for input will be paused, so the other can continue animating
- If using Local Color Tables the whole frame must be overwritten as it will replace the whole screen's palette, not just the current frame
- Interlaced and text frames will not work
