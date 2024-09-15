---
lang: id-ID
layout: wiki
section: twilightmenu
category: customization
title: Latar Belakang Unlaunch Kustom
description: Cara membuat latar belakang Unlaunch kustom dan dipasang dengan TWiLight Menu++
---

Latar belakang Unlaunch prajadi bisa dicari di [situs skin TWiLight Menu++](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

Dengan TWiLight Menu++, latar belakang dan palet warna teks Unlaunch bisa diganti dengan menambal pemasang Unlaunch. Ini harus berupa GIF 256 x 192, dengan beberapa batasan:
- Hanya bingkai pertama yang muncul, tidak ada animasi latar belakang
- Berkas harus kurang dari atau seukuran 15.472 bita
- GIF dengan lebih dari 31 warna perlu palet yang dibuat khusus agar tidak mengacau teks

### Pemasangan
1. Salin berkas GIF ke `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Unduh [pemasang Unlaunch terkini](https://problemkaputt.de/unlaunch.zip) dan ekstrak `UNLAUNCH.DSI` ke kartu SD
1. Buka Pengaturan TWiLight Menu++, pindah ke halaman `Pengaturan Unlaunch`, dan pencet `Latar Belakang`, lalu pilih salah satu gambar
1. Keluar pengaturan dan luncurkan `Unlaunch DSi Installer`
    - Seharusnya gambar kustom digunakan, jika tidak, matikan daya konsol dan pastikan lagi GIF sudah sesuai persyaratan di atas
1. Pilih `Install Now`

### Menggunakan GIF lebih dari 31 warna
Karena palet GIF dimuat ke area VRAM yang sama dengan palet teks, palet GIF akan menimpakan palet teks jika terlalu besar, namun ini bisa diatasi dengan menaruh palet teks dalam palet GIF. Jika digunakan dengan warna lain maka akan punya warna teks lain juga, jika diinginkan. Arahan ini ditujukan untuk [GIMP](https://gimp.org), tapi penyunting gambar lain yang mampu menyusun ulang palet gambar juga boleh.
1. Buka gambarnya di GIMP dan pastikan berukuran 256 x 192 piksel
1. Di bilah menu bagian atas, pilih `Image` -> `Mode` -> `Indexed...`
1. Pilih `Generate optimum palette` dan atur maksimum warna berapa saja sampai 226 warna
1. Pilih pola *dither* (baur galat) dari menu tarik-turun `Color dithering`
    - Coba dulu mana yang bagus untuk ukurannya. Gambar tanpa baur galat biasanya dipampat bagus, tapi ada baur galat juga masih bagus
1. Pencet `Convert`
1. Di bilah menu bagian atas, pilih `File` -> `Export As...`, tulis namanya dengan ekstensi `.gif`, dan pencet `Export`
    - Jika ada peringatan, pencet tombol terima
1. Di sembulan berikutnya, nonaktifkan `GIF comment` dan pencet `Export`
1. Periksa ukuran ekspor berkas, jika berukuran 15.472 bita atau kurang, langsung ke no. 13
1. Jika GIF terlalu besar, gunakan [gifsicle](http://www.lcdf.org/gifsicle/) atau [ezgif.com](https://ezgif.com/optimize) untuk mengoptimalkannya
    - Arahan ini akan lanjut dengan ezgif karena sederhana, berbentuk web
1. Buka https://ezgif.com/optimize, dan unggah GIF
1. Coba tingkat pampat yang lain sampai yang bagus serendah 15.472 bita (15,11 KiB), bagusnya agak rendah karena GIMP suka menambah ukurannya sedikit
1. Simpan GIF optimalnya dan buka di GIMP
1. Di bilah menu bagian atas, pilih `Windows` -> `Dockable Dialogs` -> `Colormap`
1. Ubah `Foreground color` saat ini ke #080808 dan tambah 14 warna baru dengan tombol `+`
    - Jika gambar Anda kurang dari 133 warna, maka tambah lagi warnanya sampai yang terakhir indeks 146
1. Pencet kanan warna di *Colormap* dan pilih `Rearrange Colormap...`
1. Susun warna barunya agar cocok dengan warna yang digarisi warna merah: (Kolom ke-2 dan ke-3 mulai dari baris ke-4)<br> ![Palet dengan warna teks benar](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Gunakan pemilih warna agar warna barunya cocok dengan warna gambar di atas
1. Di bilah menu bagian atas, pilih `File` -> `Export As...`, tulis namanya dengan ekstensi `.gif`, dan pencet `Export`
1. Di sembulan berikutnya, pastikan `GIF comment` tidak aktif dan pencet `Export`
1. Pastikan gambar masih di bawah 15.472 bita, jika terlalu besar maka ulangi dari nomor 10 dengan tingkat pampat lebih tinggi
1. Selesai dah! Ikuti bagian [pemasangan](#installing) di atas untuk memasang gambar!
