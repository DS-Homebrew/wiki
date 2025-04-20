---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Jenis konsol DS mana yang terbaik?
description: Melihat fitur dari tiap konsol untuk menyesuaikan keperluan bermain DS(i) terbaik
---

Konsol Nintendo DS, Nintendo DSi, Nintendo 3DS, dan Nintendo 2DS mampu membaca permainan DS(i) dan juga permainan GBA. Untuk menentukan konsol mana yang terbaik untuk Anda, baca laman ini.

| Fitur                           | Nintendo DS                                       | Nintendo DSi                                               | Nintendo 3DS/2DS                                  |
| ------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| Maks. RAM       | 4MB (+penambah RAM, bisa 36MB) | 16MB                                                       | 32MB                                              |
| Maks. Cepat CPU | 67mhz                                             | 133mhz[^1]                                                 | 133mhz[^1]                                        |
| Kamera                          | Tidak                                             | Iya                                                        | Iya                                               |
| Jenis layar                     | TN Transflektif[^2] (Phat), TN (Lite)             | TN (Biasa), IPS (XL) | TN atau IPS (tergantung model) |
| Kepekaan sentuh                 | Iya                                               | Hanya mode DSi                                             | Tidak                                             |
| Penskalaan                      | Tidak                                             | Tidak                                                      | Iya[^3]                                           |
| Tingkat kecerahan               | 2 (Nyala/Mati di Phat), 4 (Lite)[^4]              | 5                                                          | 5                                                 |
| Kompatibilitas GBA              | Lokal, Hampir Sempurna[^5]                        | Bagus                                                      | Lokal, Hampir Sempurna[^6]                        |
| Dukungan DSiWare                | Iya, Sebagian [^7]                                | Iya[^8]                                                    | Iya[^8]                                           |

[^1]: Permainan DS berjalan di 67mhz, tapi hampir semua bisa disetel ke 133mhz, sayangnya beberapa akan muncul isu.

[^2]: Layar tampilan DS Phat pada awalnya dikira TN cahaya depan, namun kemudian diketahui ternyata TN transflektif cahaya belakang. Lihat [video ini oleh makho](https://www.youtube.com/watch?v=84H5SJFJRlU) untuk penjelasan perinci.

[^3]: Saat dimuat di mode DS(i), layar akan diperlebar tidak rapih, dan tidak piksel sempurna. Menahan START atau SELECT akan menonaktifkan penskalaan layar, tapi akan ada tepian hitam di sekeliling layar.

[^4]: DS Phat model baru terdapat tingkat kecerahan yang sama dengan DS Lite, tapi perlu dipasang FlashMe agar empat tingkatnya bisa digunakan (setidaknya di menu asli).

[^5]: Ada satu permainan dengan isu kompatibilitas, yaitu _MegaMan Battle Network 4: Blue Moon_ yang mogok selesai tempur di bagian tertentu level WoodMan. Ini hanya terjadi di DS Phat dan bukan DS Lite. Lihat [perincian isunya di sini](https://mgba.io/2017/05/29/holy-grail-bugs/#mega-man-battle-network-4) oleh enddrift, pengembang mGBA.

[^6]: ROM Video GBA besar (di atas 32MB) tidak bisa. Fitur getar dan <i>gyro</i> juga tidak berfungsi.

[^7]: Sebagian besar permainan tidak perlu kamera. Lihat [laman ini](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/universal/include/compatibleDSiWareMap.h) untuk apa saja yang didukung. Perlu pasang **TW**i**L**ight Menu++ dulu di <i>flashcart</i>.

[^8]: Jika menjalankan **TW**i**L**ight Menu++ di konsol 3DS/2DS atau setelan `Pemulai DSiWare` diatur ke `nds-bootstrap`, kompatibilitas akan hampir sempurna.
