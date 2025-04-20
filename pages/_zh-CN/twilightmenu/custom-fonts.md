---
lang: zh-CN
layout: wiki
section: twilightmenu
category: customization
title: 自定义字体
description: 如何在 TWiLight Menu++ 中使用自定义字体
---

TWiLight Menu++ 可以使用 NFTR（Nitro FonT Resource）格式的自定义字体。 They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### 目录结构
自定义字体从 `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` 加载，其中 `[font name]` 是您想要的任何名称， `[font file].nftr` 是以下内容之一：
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### 生成自定义字体
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). 使用它重新生成 TWiLight Menu++ 现有字体之一：
1. 在 nftr-editor 中加载 NFTR 文件
1. 在 `Input font`（输入字体）文本框中，按优先级从高到低键入要使用的字体名称，以逗号分隔。
    - 您可以在左上方的方框中看到输入字体的预览，在下方的方框中看到当前的 NFTR
1. 单击 `Generate from font`（从字体生成），然后选择 `OK` 重新生成现有字符，选择 `Cancel`（取消）重新生成特殊按钮字符（例如 &#xE000;）。
1. 单击 `Save`（保存），然后重复其他尺寸的操作
