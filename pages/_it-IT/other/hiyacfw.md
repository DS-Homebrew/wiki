---
lang: it-IT
layout: wiki
section: other
title: hiyaCFW
description: Informazioni su hiyaCFW
---

Informazioni per [hiyaCFW](https://github.com/RocketRobz/hiyaCFW), il primo CFW al mondo per DSi.

### Schermate di avvio personalizzate
Con hiyaCFW puoi usare le schermate d'avvio personalizzate nei formati `.bmp` o `.gif`. Devono andare nella cartella `sd:/hiya` e devono essere chiamati `splashtop` per lo schermo superiore e `splashbottom` per quello inferiore, con l'estensione del file appropriata, quindi assicurarsi che la schermata di avvio sia abilitata nella configurazione. Le immagini non hanno bisogno di essere nello stesso formato, quindi una può essere BMP e l'altra GIF, le GIF hanno la priorità su i file BMP. Di seguito sono riportati alcuni dettagli sui requisiti per il funzionamento delle immagini:

#### BMP
- 16 bit (RGBA 1555, RGB 1555 o RGB 565)
- 256 x 192 o più piccole

#### GIF
- Risposta semplice: la maggior parte delle GIF 256 x 192 o più piccole funzionerà
- Possono essere animate, ma dovrebbero rimanere sotto 1 MiB per prestazioni ideali e devono essere sotto circa 10 MiB tra i due massimi assoluti
- Se entrambe vanno in loop all'infinito, saranno mostrati per 3 secondi, altrimenti saranno mostrati fino a quando entrambi non saranno completati
- If a frame has the user input flag set it will wait until the delay runs out or any button is pressed, whichever comes first
- I quadri di testo semplici e interlacciati non ***sono*** supportati
- Local color tables are supported, but will replace the whole palette, including residual image from previous frames, so images using them will likely have palette problems
