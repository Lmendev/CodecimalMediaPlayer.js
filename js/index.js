
function MediaPlayer (config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function() {
  if(this.media.paused){          
    this.media.play();
  }else{
    this.media.pause();
  }
};

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video });

const button = document.querySelector("button");
button.onclick = () => player.play();



