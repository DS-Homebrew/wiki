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
- Il flag per l'input dell'utente è supportato, quindi impostalo insieme a un ritardo prolungato su un fotogramma, se vuoi mostrare uno splash e attendere come nelle impostazioni predefinite
   - Solo la GIF che aspetta un input viene stoppata, così le altre possono continuare
- If using Local Color Tables the whole frame must be overwritten as it will replace the whole screen's palette, not just the current frame
- I fotogrammi interlacciati e di testo non funzionano
