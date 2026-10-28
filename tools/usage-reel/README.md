# Usage reel (free, code-made animation)

- anim.html: canvas animation (1080x1920). Scenes in `S`, captions in `META`, product photos = green.jpg, abnama.jpg, blue.jpg, gray.jpg next to it, fonts Vazirmatn-FD-Black/Bold.ttf next to it.
- shot.js <t1> <t2>...: render test frames.
- all.js: renders every frame at 30fps into fr/.
- Encode: ffmpeg -framerate 30 -i fr/%04d.jpg -f lavfi -t 25.5 -i anullsrc=r=44100:cl=stereo -c:v libx264 -preset veryfast -crf 18 -pix_fmt yuv420p -c:a aac -shortest -movflags +faststart out.mp4
