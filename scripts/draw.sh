# https://j2r2b.github.io/2019/08/06/drawio-cli.html

# /Applications/draw.io.app/Contents/MacOS/draw.io \
# ./static/diagrams \
# -x -f png --scale 2.5 --crop \
# --recursive --transparent


rm -rf ./static/diagrams/dark
rm -rf ./static/diagrams/light

mkdir ./static/diagrams/light
mkdir ./static/diagrams/dark


/Applications/draw.io.app/Contents/MacOS/draw.io \
./static/diagrams/source \
-x -f svg --crop \
--recursive --transparent \
--svg-theme dark \
--embed-svg-images \
-o ./static/diagrams/dark


/Applications/draw.io.app/Contents/MacOS/draw.io \
./static/diagrams/source \
-x -f svg --crop \
--recursive \
--svg-theme light \
--embed-svg-images \
-o ./static/diagrams/light




# inkscape -g --actions="FitCanvasToDrawing;FileSave;FileQuit" *.svg