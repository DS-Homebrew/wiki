---
lang: zh-CN
layout: wiki
section: twilightmenu
category: customization
title: 自定义字体
description: 如何在 TWiLight Menu++ 中使用自定义字体
---

TWiLight Menu++ 可以使用 NFTR（Nitro FonT Resource）格式的自定义字体。 它们将用于设置、菜单标题以及 Nintendo DSi、Nintendo 3DS、SEGA Saturn 和 Homebrew Launcher 主题。

### 目录结构
自定义字体从 `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` 加载，其中 `[font name]` 是您想要的任何名称， `[font file].nftr` 是以下内容之一：
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### 皮肤字体
您可以在 [自定义 DSi/3DS 主题皮肤](custom-dsi-3ds-skins)中添加字体，这将覆盖 TWiLight Menu++ 设置中的任何设置。 这些字体放在皮肤根目录下的 `font` 文件夹中。

自定义皮肤还可以使用 `date_time.nftr`来覆盖日期 & 时间的字体，并使用 `username.nftr`来覆盖主机用户名的字体。

### 生成自定义字体
您可以使用 Pk11 的 [nftr-editor](https://pk11.us/nftr-editor/) 等实用程序制作自己的字体。 使用它重新生成 TWiLight Menu++ 现有字体之一：
1. 在 nftr-editor 中加载 NFTR 文件
1. 在 `Input font`（输入字体）文本框中，按优先级从高到低键入要使用的字体名称，以逗号分隔。
   - 您可以在左上方的方框中看到输入字体的预览，在下方的方框中看到当前的 NFTR
1. 单击 `Generate from font`（从字体生成），然后选择 `OK` 重新生成现有字符，选择 `Cancel`（取消）重新生成特殊按钮字符（例如 &#xE000;）。
1. 单击 `Save`（保存），然后重复其他尺寸的操作
