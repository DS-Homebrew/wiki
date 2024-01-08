---
lang: zh-CN
layout: wiki
section: twilightmenu
category: customization
title: 自定义字体
description: 如何在 TWiLight Menu++ 中使用自定义字体
---

TWiLight Menu++ 可以使用 NFTR（Nitro FonT Resource）格式的自定义字体。 它们将用于设置、菜单标题以及 Nintendo DSi、Nintendo 3DS、SEGA Saturn 和 Homebrew Launcher 主题。

### 包含字体信息
TWiLight Menu++ 包含三种字体。 当 TWiLight Menu++ 在 DSi 模式下运行时，它们都包含 TWiLight 翻译成的所有语言所需的所有字符，但在 DS 模式下运行时，由于 RAM 的限制，它们会受到更多限制。 字体包括：
- 默认：它使用官方的 DSi 字体作为主要字体，并支持 DS 模式下 TWiLight Menu++ 本身在所有语言中使用的所有字符。
- 中文（简体）：该版本使用 Noto Sans CS 作为主要字体，在 DS 模式中大幅增加了中文（简体）字符，但其他语言的字符则有所减少
- 韩语：这与 DSi 模式中的默认设置相同，但在 DS 模式中，韩文字符集更完整，但其他语言的字符则有所减少

### 目录结构
自定义字体从 `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` 加载，其中 `[font name]` 是您想要的任何名称， `[font file].nftr` 是以下内容之一：
- `large-ds.nftr`、`large-dsi.nftr` 或 `large.nftr`：标题使用的较大字体
- `small-ds.nftr`、`small-dsi.nftr` 或 `small.nftr`：用于大多数其他文本的较小字体

`-ds` 和 `-dsi` 文件的优先级高于普通文件，如果找到，将分别在 TWiLight Menu++ 以 DS 或 DSi 模式运行时使用。

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
