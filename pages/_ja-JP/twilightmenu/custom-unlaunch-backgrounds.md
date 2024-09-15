---
lang: ja-JP
layout: wiki
section: twilightmenu
category: customization
title: Unlaunchの背景をカスタマイズ
description: Unlaunchのカスタム背景を作成し、TWiLight Menu++でインストールする方法
---

[TWiLight Menu++ スキンサイト](https://skins.ds-homebrew.com/unlaunch/)で、既製の背景を探せます。
{:.alert .alert-info}

TWiLight Menu++を使ってUnlaunchインストーラにパッチを適用すると、好みの背景画像とテキストカラーパレットが利用可能になります。 背景は256×192のGIFである必要があり、さらにいくつかの制約があります。
- 表示されるのは最初のフレームのみ。アニメGIFは再生されない。
- ファイルは15472バイト以下でなければならない。
- 31色以上のGIFには、テキストを壊さないために特別なパレットを作成する必要がある。

### インストール
1. GIFファイルを `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`にコピーします。
1. [最新のUnlaunchインストーラ](https://problemkaputt.de/unlaunch.zip) をダウンロードし、 `UNLAUNCH.DSI` をSDカードに解凍します。
1. TWiLight Menu++ 設定 を開き、 `Unlaunch設定` ページに切り替え、 `背景画像`で<kbd class="face">A</kbd>を押し、好みのものを選びます。
1. 設定を終了し、`Unlaunch DSi Installer`を起動します。
    - 選んだ画像が表示されているはずです。もしそうでない場合は本体の電源を切り、GIFが上記の要件に適合しているか確認してください。
1. `Install Now`を選びます。

### 31色以上のGIFを使う
As the GIF's palette is loaded to the same area of VRAM as the text palettes it will overwrite them if the palette gets too large, however this can be worked around by including the text palettes in the GIF's palettes. Using this with different colors would also let you have different text colors, should you want that. These instructions will be for [GIMP](https://gimp.org), but any image editor capable of rearranging the palette of an image will work.
1. Open your image in GIMP and make sure it's 256 x 192 pixels
1. In the menu bar at the top, select `Image` -> `Mode` -> `Indexed...`
1. Select `Generate optimum palette` and set the maximum colors to anything up to 226 colors
1. Select a dithering pattern from the `Color dithering` dropdown
    - Images without dithering generally compress best, but with it will generally look better, try and see which looks best for the size
1. Click `Convert`
1. In the menu bar at the top, select `File` -> `Export As...`, give it a name with the extension `.gif`, and click `Export`
    - If it gives any warnings, click the accept button
1. In the next popup, disable the `GIF comment` and click `Export`
1. Check the size of the exported file, if it's 15,472 bytes or less, then skip to step 13
1. If your GIF is too large, then using either [gifsicle](http://www.lcdf.org/gifsicle/) or [ezgif.com](https://ezgif.com/optimize) you can try optimizing it
    - These instructions will use ezgif as its simpler, being a website
1. Open https://ezgif.com/optimize, and upload your GIF
1. Try different compression levels until you find the best one under 15,472 bytes (15.11 KiB), ideally a bit under as GIMP may increase the size a bit
1. Save the optimized GIF and open it in GIMP
1. In the menu bar at the top, select `Windows` -> `Dockable Dialogs` -> `Colormap`
1. Change your current `Foreground color` to #080808 and add 14 new colors with the `+` button
    - If your image doesn't have at least 133 colors you will need to keep adding colors until the last is index 146
1. Right click a color in the Colormap and select `Rearrange Colormap...`
1. Arrange your new colors so they match the ones outlined in red: (The 2nd and 3rd columns starting on the 4th row)<br> ![文字色が正しく表示されるパレット](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Use the color picker to make your new colors match those in the above image
1. In the menu bar at the top, select `File` -> `Export As...`, give it a name with the extension `.gif`, and click `Export`
1. In the next popup, make sure `GIF comment` is off and click `Export`
1. Ensure the image is still under 15,472 bytes, if it's gotten too big then repeat from step 10 using a higher compression level
1. You're done! Follow the [installing](#installing) section above to use your image!
