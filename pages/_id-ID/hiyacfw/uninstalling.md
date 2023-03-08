---
lang: id-ID
layout: wiki
section: hiyacfw
title: Pencopotan
long_title: Pencopotan hiyaCFW
description: Cara mencopot hiyaCFW dari Nintendo DSi
---

hiyaCFW hanya ada di kartu SD card dan tidak boleh ada di NAND. Sebelum melanjutkan, pastikan kamu sudah mencadangkan data simpanan (save) dari SDNAND yang ingin disimpan. Caranya dapat dipelajari di Bagian III dari panduan [Pencadangan DSiWare](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional) [dsi.cfw.guide](https://dsi.cfw.guide).

### Pencopotan
1. Hapus `hiya.dsi` dari root kartu SD
1. Hapus folder `hiya`
1. Hapus folder `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket`, dan juga `tmp`

### Mengubah pengaturan Unlaunch

Jika Unlaunch telah diatur untuk memuat langsung (autoboot) hiyaCFW, lebih baik diubah lagi jika sudah tidak digunakan.

1. Sisipkan kartu SD ke Nintendo DSi dan hidupkan konsol sambil menekan <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
   - Ini akan membuka Filemenu di Unlaunch
1. Masuk ke `OPTIONS`, dan ubah `NO BUTTON` ke aplikasi yang diinginkan
   - Jika ingin muat langsung ke system NAND, atur ke aplikasi bernama `Launcher`
   - Jika ingin muat langsung ke TWiLight Menu++, pilih berkas bernama `BOOT.NDS`
1. Lalu pilih `SAVE & EXIT`
