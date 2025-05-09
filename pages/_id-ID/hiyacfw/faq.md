---
lang: id-ID
layout: faq
section: hiyacfw
title: Pertanyaan Umum & Sidik Gangguan
long_title: Pertanyaan Umum & Sidik Gangguan hiyaCFW
description: Pertanyaan umum dan sidik gangguan terkait hiyaCFW
---

#### Bagaimana memasang aplikasi atau DSiWare ke SDNAND hiyaCFW?
Perlu [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) untuk memasang aplikasi ke SDNAND, tapi *homebrew* DS lawas mungkin tidak kompatibel.
- Jika ingin memasang *dump* ROM Kartrid, gunakan [*forwarder*](../ds-index/forwarders)

#### Kenapa muncul kode galat #-2435-8325?
Jika konsol Nintendo DSi muncul galat ini saat dinyalakan (tanda # mewakili nomor), berarti *bootstage 2* mengira ada yang salah dengan SDNAND. Ini bisa diperbaiki dengan [memasang ulang hiyaCFW](installing).

#### Kenapa ada pesan "An error has occurred" saat menyala ke hiyaCFW?
Saat Nintendo DSi Menu sadar ada masalah, biasanya akan muncul pesan galat umum ini, beberapa sebabnya yaitu:

##### Kutu memori sisa ruang
Nintendo DSi Menu terdapat *bug* (kutu) saat memeriksa sisa ruang di penyimpanan besar. Walaupun ini mustahil terjadi di cip NAND aslinya (karena hanya 256 MiB), tapi ini bisa terjadi di kartu SD.

Berfungsi dan tidaknya ini terjadi setiap rentang dua gibibita. Contoh, sisa ruang 0-2 GiB akan berfungsi, tapi 2-4 GiB tidak. Begitu juga 4-6 GiB lalu 6-8 GiB, ini terus sampai sebesar ukuran kartu SD.

Kami membuat penambal *launcher* baru untuk mengatasi kutu memori. Pastikan menjalankan TWLMagician yang versi terkini saat memasang hiyaCFW. Jika tidak, [pasang ulang hiyaCFW](installing).

##### Melebihi 39 judul
Nintendo DSi Menu punya batas 39 judul. Jika ada lebih, hapus beberapa isi folder di `sd:/title` atau gunakan [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) untuk mencopotnya.

##### DSiWare memakan banyak ruang
Jumlah DSiWare dibatasi 200 *blocks* (25MB) di folder `00030004`. Ini bisa diatasi dengan memasang DSiWare sebagai aplikasi sistem dengan [NTM](https://github.com/Epicpkmn11/NTM/releases/latest).

##### Judul tidak absah
Ada beberapa hal yang perlu dipertimbangkan saat memasang judul ke hiyaCFW:
- *Dump* ROM Kartrid tidak bisa dijalankan kecuali dengan [*forwarder*](../ds-index/forwarders)
- *Homebrew* perlu dibuat dengan alat modern agar berfungsi dari menu Nintendo DSi
