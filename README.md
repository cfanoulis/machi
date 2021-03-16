# Machi - download YouTube playlists effortlessly

Multi-threaded CLI playlist downloader. Continuation of [cargador](https://github.com/cfanoulis/cargador). Very, very much WIP

### Notice for copyright holders: This tool is provided in good faith. The author of this tool may not held liable for its use, as per the MIT licence

Things that need to be done before v0.1

-   yknow, the cli interface
-   handling ffmpeg errors correctly
-   typescript rewrite
-   creating the out folder automatically
-   confirming overwrites

**How to use it**
If you really have to use it, you'll need Node.js, ffmpeg & yarn installed

1. Run `yarn --production`
1. Set the ffmpeg path in worker.js
1. Set your playlist url in index.js
1. Create an out folder
1. Run index.js - it should hopefully work

THIS IS VERY MUCH WORK IN PROGRESS AND IT _WILL_ BREAK!
