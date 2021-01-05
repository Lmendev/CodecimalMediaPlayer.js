import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.querySelector("#playPause");
button.onclick = () => player.play();

const muteButton = document.querySelector("#muteUnmute");
muteButton.onclick = () => player.mute();