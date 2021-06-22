---
lang: it-IT
layout: wiki
section: hiyacfw
title: Schermate d'avvio personalizzate
category: other
description: Come utilizzare schermate di avvio personalizzate con hiyaCFW
---

Con hiyaCFW puoi usare le schermate d'avvio personalizzate nei formati `.bmp` o `.gif`. Devono andare nella cartella `sd:/hiya` e devono essere chiamati `splashtop` per lo schermo superiore e `splashbottom` per quello inferiore, con l'estensione del file appropriata, poi assicurati che la schermata d'avvio sia abilitata nella configurazione. Le immagini non hanno bisogno di essere nello stesso formato, quindi una può essere BMP e l'altra GIF, le GIF hanno la priorità su i file BMP. Di seguito sono riportati alcuni dettagli sui requisiti per il funzionamento delle immagini:

### BMP
- 16 bit (RGBA 1555, RGB 1555 o RGB 565)
- 256 x 192 o più piccole

### GIF
- Risposta semplice: la maggior parte delle GIF 256 x 192 o più piccole funzionerà
- Possono essere animate, ma dovrebbero rimanere sotto 1 MiB per prestazioni ideali e devono essere sotto circa 10 MiB tra i due massimi assoluti
- Se entrambe vanno in loop all'infinito, saranno mostrate per 3 secondi, altrimenti saranno mostrate fino a quando entrambe non saranno completate
- Se un frame ha impostato il flag di input dell'utente, attenderà che il ritardo si esaurisca o che venga premuto qualsiasi pulsante, a seconda di quale sia il primo
- I quadri di testo semplici e interlacciati non ***sono*** supportati
- Le tabelle di colore locali sono supportate, ma sostituiranno l'intera palette, inclusa l'immagine residua dai frame precedenti, quindi le immagini che li usano avranno probabilmente problemi di palette
