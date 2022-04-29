---
lang: pl-PL
layout: wiki
section: hiyacfw
title: Niestandardowe splash screeny
description: How to use custom splash screens with hiyaCFW
---

Dzięki hiyaCFW możesz używać niestandardowych splashy w formatach `.bmp` lub `.gif`. Muszą one znaleźć się w folderze `sd:/hiya` i muszą mieć nazwy `splashtop` dla górnego ekranu i `splashbottom` dla dolnego, z odpowiednim rozszerzeniem pliku, a następnie upewnij się, że splash screen jest włączony w konfiguracji. Obrazy nie muszą być w tym samym formacie, więc jeden może być BMP a drugi GIF, GIFy mają pierwszeństwo przed BMP. Poniżej znajduje się kilka szczegółów dotyczących wymagań, jakie muszą spełniać Twoje zdjęcia, aby działały:

### BMP
- 16-bitowe (RGBA 1555, RGB 1555, lub RGB 565)
- 256 x 192 lub mniejsze

### GIFy
- Prosta odpowiedź: Większość GIF-ów 256 x 192 lub mniejszych będzie działać
- Mogą być animowane, ale powinny pozostać poniżej 1 MiB dla idealnej wydajności i muszą być poniżej około 10 MiB pomiędzy dwoma absolutnymi maksimami
- Jeśli obie pętle zapętlają się w nieskończoność, to będą pokazywane przez 3 sekundy, w przeciwnym razie będą pokazywane do momentu, aż obie zostaną zakończone
- Jeśli ramka ma ustawioną flagę wprowadzania danych przez użytkownika, będzie czekać aż upłynie opóźnienie lub zostanie naciśnięty dowolny przycisk, w zależności od tego, co nastąpi wcześniej
- Ramki z przeplotem i zwykłe ramki tekstowe ***nie są*** obsługiwane
- Lokalne tablice kolorów są obsługiwane, ale zastąpią całą paletę, łącznie z obrazem szczątkowym z poprzednich klatek, więc obrazy używające ich prawdopodobnie będą miały problemy z paletą
