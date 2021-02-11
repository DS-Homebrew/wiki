---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Playing in Widescreen
description: How to use TWiLight Menu++ in widescreen on the Nintendo 3DS
---

Richiede una console Vecchia/New Nintendo 3DS o 2DS.

**Preparazione**
- Assicurati che il `boot.firm` di Luma sia nella scheda SD per funzionare
- Se hai usato TWiLight Menu++ Updater o Universal-Updater per gli aggiornamenti, installare l'ultimo CIA di TWiLight Menu++ utilizzando FBI

1. Download [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) ([GBATemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Nella configurazione Luma, abilitare FIRM e moduli esterni
1. Installa il file CIA di TWPatch
1. Avvia TWPatch
1. (Optional!) For a less pixelated widescreen, hold Y+B, and enable `GPU scale test (health hazard!)`
1. Press <kbd class="face">X</kbd> + <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 4 again
   - If widescreen still doesn't work, wait for RTCom-activated widescreen to be released
1. In the TWiLight Menu++ settings, switch the page to `Misc settings`, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

"Hai fatto tutto!"! Goditi i tuoi giochi del DS in widescreen!

**NOTA1**: Ogni gioco/app in modalità DS(i) verrà eseguito in widescreen, anche i giochi che non sono compatibili con il widescreen. Per far in modo che soltanto i giochi compatibili con il widescreen si avviino in widescreen, attendere che il widescreen RTCom-activated venga rilasciato.

**NOTA2:** Non tenere premuto <kbd>START</kbd> o <kbd>SELECT</kbd> quando si avvia TWLMenu++, se non vuoi che il widescreen sembri glitchato. Se non vedi l'impostazione delle proporzioni dello schermo, attendi che sia rilasciato il widescreen RTCom-actived.

Non tutti i giochi sono compatibili con il widescreen. [Abbiamo creato un elenco di giochi con il widescreen](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
