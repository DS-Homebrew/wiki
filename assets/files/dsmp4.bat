ffmpeg -i %1 -f mp4 -vf "fps=24000/1001, colorspace=space=ycgco:primaries=bt709:trc=bt709:range=pc:iprimaries=bt709:iall=bt709, scale=256:144" -dst_range 1 -color_range 2 -vcodec mpeg4 -profile:v 0 -level 8 -q:v 2 -maxrate 500k -acodec aac -ar 32k -b:a 64000 -ac 1 -slices 1 -g 50 %1_ds.mp4
pause
