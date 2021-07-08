---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Giocare in Widescreen
description: Come usare TWiLight Menu++ in widescreen su Nintendo 3DS
---

Richiede una console Nintendo 3DS o 2DS.
{:.alert .alert-info}

### Preparazione
- Assicurati che il `boot.firm` di Luma sia nella scheda SD per funzionare

### Installazione
1. Download [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) and copy `TWPatch.cia` to your SD card ([GBATemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installa `TWPatch.cia` usando FBI
   - È possibile utilizzare Universal-Updater per installare TWPatch invece dei due passaggi precedenti
1. Ritorna al menu home e avvia TWPatch
1. Tieni premuto <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> e abilita `Patch widescreen (384x240 16:10)`
1. (Facoltativo!) Per un widescreen meno pixellato, abilita anche il `GPU scale test (pericolo per la salute!)`
   - Il "pericolo per la salute!" è poiché ha dato allo sviluppatore un mal di testa a causa della sua sfocatura
1. Premi <kbd>START</kbd> per generare un file `TwlBg.cxi` con widescreen
   - Se la schermata superiore non indica che la patch wide è abilitata, ricomincia dal passaggio 3
   - Se il widescreen ancora non funziona, attendere che venga rilasciato il widescreen RTCom-activated
1. Riavvia il tuo 3DS tenendo premuto <kbd>SELECT</kbd> per aprire la configurazione di Luma3DS
1. Abilita `FIRM esterni e moduli` e premi <kbd>START</kbd> per salvare e uscire
1. Apri le impostazioni di TWiLight Menu++, passa alla pagina `Impostazioni Varie`e imposta `Rapporto Dimensioni Schermo` a `16:10`
   - Questo può essere fatto anche per gioco

Hai finito! Goditi i tuoi giochi del DS in widescreen!

**NOTA1**: Ogni gioco/app in modalità DS(i) verrà eseguito in widescreen, anche i giochi che non sono compatibili con il widescreen. Per far in modo che soltanto i giochi compatibili con il widescreen si avviino in widescreen, attendere che il widescreen RTCom-activated venga rilasciato.

**NOTA2:** Non tenere premuto <kbd>START</kbd> o <kbd>SELECT</kbd> quando si avvia TWLMenu++, se non vuoi che il widescreen sembri glitchato. Se non vedi l'impostazione delle proporzioni dello schermo, attendi che sia rilasciato il widescreen RTCom-actived.

Non tutti i giochi sono compatibili con il widescreen. [Abbiamo creato un elenco di giochi con il widescreen](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
