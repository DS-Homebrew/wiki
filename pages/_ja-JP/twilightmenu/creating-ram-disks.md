---
lang: ja-JP
layout: wiki
section: twilightmenu
category: other
title: RAMディスクの作成
description: TWiLight Menu++で古いDS Homebrewを使うためのRAM ディスクを作成する方法
---

一部のDS HomebrewはSDカード ファイルシステムに正しくアクセスできません。 スタンドアロンのファイルシステムをRAMに読み込んで、そこにHomebrewの動作に用いられるファイルを置けば正しく動くかもしれません。

この手順で使うソフトには、Windowsが必要です。
{:.alert .alert-info}

マジコンをお使いの場合、このガイドは必要ありません。
{:.alert .alert-info}

RAMディスクを作成するには、[Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware)をダウンロード（`Download Software`をクリック）し、以下の手順に従ってください。

Dakkon7考案（Rocket Robz修正）の手順：

1. RAMDiskを実行します
1. **View** -> **Advanced**をクリックします
1. **Disk Size**には`12`（DSi）・`28`（3DS）・**最大1023MB**を指定します
1. もしマークされていたら**Create TEMP Directory**のマークを外します
1. **Load/Save**をクリックします
1. `Start RAMDisk`をクリックします。.img用のウィンドウが開きます
1. Homebrewが必要とするファイルやフォルダ、使用したいファイルを配置します
1. RAMDiskで`Save Disk Image Now`をクリックします
1. `romname.img`を.ndsファイルと同じ場所の`ramdisks`フォルダに保存します。 まだ存在しない場合は作成します
1. 完了したら`Stop RAMDisk`をクリックします
1. TWiLight Menu++上でHomebrewの「ゲームごとの設定」を開きます
1. RAMディスクを0に設定します
1. これでHomebrewを起動すると、RAMディスクが読み込まるはずです

一つのHomebrewアプリで複数のRAMディスクを使いたい場合は、RAMディスク スロット1には拡張子`.img1`で用意する、のように追加してください。
{:.alert .alert-info}
