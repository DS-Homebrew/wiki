---
lang: id-ID
layout: wiki
section: hiyacfw
title: Pencopotan
long_title: Pencopotan hiyaCFW
description: Cara mencopot hiyaCFW dari Nintendo DSi
---

hiyaCFW hanya boleh ada di kartu SD dan tidak boleh di NAND. Sebelum lanjut, pastikan data simpanan yang ingin disimpan sudah dicadangkan dari SDNAND. Untuk caranya bisa dilihat di Bagian III panduan [Mencadang DSiWare](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional) dari [dsi.cfw.guide](https://dsi.cfw.guide).

### Pencopotan
1. Hapus `hiya.dsi` dari akar kartu SD
1. Hapus folder `hiya`
1. Hapus folder `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket`, dan juga `tmp`

### Mengubah pengaturan Unlaunch

Jika Unlaunch sudah diatur *autoboot* (memuat langsung) hiyaCFW, lebih baik ubah lagi jika sudah tidak digunakan.

1. Sisipkan kartu SD ke Nintendo DSi dan nyalakan konsol sambil menekan <kbd class="face">A</kbd> dan <kbd class="face">B</kbd>
    - Ini akan membuka "Filemenu" Unlaunch
1. Masuk ke `OPTIONS`, dan atur `NO BUTTON` ke aplikasi yang diinginkan
    - Jika ingin muat langsung ke *system NAND*, atur ke aplikasi bernama `Launcher`
    - Jika ingin muat langsung ke TWiLight Menu++, pilih berkas bernama `BOOT.NDS`
1. Lalu pilih `SAVE & EXIT`
