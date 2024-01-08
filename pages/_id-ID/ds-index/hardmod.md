---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Oprek Keras
description: Cara mengoprek keras Nintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Oprek keras atau *hardmod* adalah tindakan menyolder papan induk Nintendo DSi ke adaptor kartu SD agar terbaca di komputer. Ini berguna untuk memulihkan cadangan NAND, melihat NAND di komputer, dll...

### Nintendo DS
[![Papan induk DS Orisinal dengan titik-sentuh berlabel](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

Untuk mengoprek keras Nintendo DSi/DSi XL (LL) diperlukan:
   - [Solder bermata runcing](https://www.amazon.com/dp/B01N4571Q6)
   - [Kawat email tipis](https://www.amazon.com/dp/B01MXGNTA4), 28AWG atau kecil lagi, bagusnya 30AWG+
   - Adaptor kartu SD ke microSD
   - Pembaca kartu SD yang mampu membaca cip eMMC di mode *single data-line*. [Berikut yang berfungsi baik](https://www.amazon.com/dp/B006T9B6R2)
   - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) dan [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) jika di Windows
   - Cadangan NAND absah dari DSi yang sedang dioprek
   - Kemampuan menyolder di bantalan PCB sekecil 0.5mm

#### Pin solder DSi sisi A
[![Pin solder DSi sisi A](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### Pin solder DSi sisi B
[![Pin solder DSi sisi B](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### Pin solder DSi XL sisi B
[![Pin solder DSi XL sisi B](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Diharuskan mampu menyolder titik pada papan induk ke adaptor kartu microSD
   - CMD ke pin 2
   - GND ke pin 3 dan 6
   - CLK ke pin 5
   - DAT0 ke pin 7

#### Contoh adaptor microSD tersolder
[![Contoh microSD](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Sisipkan adaptor kartu microSD ke komputer
   - **PERINGATAN** - Jika Windows meminta format: **JANGAN format** - nanti terjadi kerusakan tak bisa diperbaiki

#### Membuang *footer* no$gba
Pertama-tama harus menghapus *footer* NOCASH dari cadangan yang akan di-*flash* ke DSi. Caranya dengan [hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Unduh versi aplikasi untuk sistem operasi yang digunakan
1. Jalankan naskah, pilih cadangan NAND yang ingin di-*flash* ke DSi
1. Ganti ke mode NAND dengan tombol di sebelah kiri jalur berkas
1. Pencet `Start` untuk mencadang NAND tanpa *footer* no$gba

- Setelah naskahnya selesai, akan ada berkas dengan nama panjang berakhiran `-no-footer.bin` di folder tempat membuka terminal
   - Berkas citra NAND ini digunakan untuk di-*flash* ke DSi

{% capture tab-windows %}
1. Buka Win32DiskImager
1. Pencet ikon folder dan telusur ke desktop. Pada kotak teks, tulis `NAND_0.bin`. Untuk jenisnya, pilih `All types *.*`
1. Pilih perangkat yang DSi dan pencet `Read`
1. Setelah selesai, pencet ikon folder, ubah nama menjadi `NAND_1.bin` dan pencet `Read` lagi
1. Buka HxD dan seret keduanya ke penyunting. Di bilah atas, pencet "Analysis", pencet "File compare" dari menu tarik-turun, lalu pencet "Compare".
1. Pilih bandingkan kedua berkas, lalu pencet OK jika sudah
   - Jika muncul "The chosen files are identical.", berarti boleh ke bagian berikutnya
   - Jika tidak begitu, dan kedua NAND tidak sekitar 240 MB, buat *dump* NAND_1/NAND_0 lagi
1. Buka Win32DiskImager, pencet ikon folder dan pilih cadangan NAND yang telah dibuat sebelumnya
1. *Flash*-kan dengan tombol `Write`
1. Cabut adaptor kartu SD dan coba nyalakan konsol DSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Cari tahu kartu SD di-*mount* di mana
   - Linux:
      1. Cabut adaptor kartu SD
      1. Jalankan `lsblk` di terminal
      1. Colok adaptor kartu SD
      1. Jalankan `lsblk` lagi
      1. Sekarang akan muncul perangkat baru
         - Mungkin tertulis `/dev/sdb`, jangan lupa catat apa namanya di *komputer Anda*

   - macOS:
      1. Cabut adaptor kartu SD
      1. Jalankan `df` di terminal
      1. Colok adaptor kartu SD
      1. Jalankan `df` lagi
      1. Di daftar akan muncul perangkat baru
         - Mungkin tertulis `/dev/disk1s1`, jangan lupa catat apa namanya di *komputer Anda*

1. Menyalin NAND
   - Jalankan perintah berikut di terminal:
      - `cat {nama-perangkat} > nand0.bin`
      - Ganti `{nama-perangkat}` dengan letak *mount* kartu SD
      - Misalnya `cat /dev/sdb > nand0.bin`
      - Lalu jalankan `cat {nama-perangkat} > nand1.bin`


1. Membandingkan *dump* NAND
   1. Jalankan perintah berikut:
      - Linux: `md5sum nand0.bin nand1.bin`
      - macOS: `md5 -r nand0.bin nand1.bin`
   1. Periksa apakah hasil *hash* keduanya cocok
   1. Jika tidak, *dump* ulang NAND, kabelnya rapikan jika perlu
   1. Teruskan membuat *dump* NAND sampai *hash*-nya identik

1. Mem-*flash* NAND
   1. Cari letak cadangan NAND yang tadi dibuat di konsol
   1. Jalankan perintah berikut:
      - `cat {cadangan-nand} > {nama-perangkat}`
      - Ganti `{cadangan-nand}` dengan letak dan nama cadangan NAND lama Anda
      - Ganti `{nama-perangkat}` dengan letak titik *mount* kartu SD

Sesudah itu, adaptor kartu SD boleh dicabut dan coba nyalakan konsol DSi. Jika semua lancar, DSi seharusnya menyala ke keadaan semula seperti saat cadangan dibuat!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Mem-*flash* cadangan NAND
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
