---
lang: ja-JP
layout: wiki
section: hiyacfw
title: カスタムスプラッシュ画面
category: other
description: hiyaCFWとカスタムスプラッシュ画面を使う方法
---

hiyaCFWを使用すると、`.bmp`または`.gif`形式のカスタムスプラッシュ画面を使用できます。 `sd:/hiya`フォルダに入れる必要があり、上部画面では `splashtop`、下部画面では`splashbottom`という名前を付け、適切なファイル拡張子を付けます。そして、設定でスプラッシュ画面が有効になっていることを確認します。 画像は同じフォーマットである必要がありませんので、1つはBMPであり、他はGIFでも構いません。GIFの方がBMPよりも優先されます。 以下には画像を動作させるための要件の詳細があります：

### BMP
- 16ビット（RGBA 1555、RGB 1555またはRGR565）
- 256×192以下

### GIF
- 簡単な答え：ほとんどの256×192以下のGIFは動作します
- They can be animated, but should stay under 1 MiB for ideal performance and must be under around 10 MiB between the two absolute maximum
- If both loop infinitely then they will be shown for 3 seconds, otherwise they will be shown until both are complete
- If a frame has the user input flag set it will wait until the delay runs out or any button is pressed, whichever comes first
- Interlaced and plain text frames are ***not*** supported
- Local color tables are supported, but will replace the whole palette, including residual image from previous frames, so images using them will likely have palette problems
