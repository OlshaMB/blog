#!/usr/bin/env fish
basename $argv[1]
set IMAGE_PATH src/pages/photos/$(basename $argv[1])
set IMAGE_PREVIEW_PATH public/photos/preview/$(basename -s .JPG $argv[1])@250.jpeg
set IMAGE_META_PATH src/pages/photos/$(basename -s .JPG $argv[1]).toml
echo $IMAGE_PATH "\n" $IMAGE_PREVIEW_PATH
cp $argv[1] $IMAGE_PATH
magick $IMAGE_PATH -resize 250 $IMAGE_PREVIEW_PATH
touch $IMAGE_META_PATH
toml set $IMAGE_META_PATH name $argv[2] > $IMAGE_META_PATH