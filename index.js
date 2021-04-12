var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 1500 },
    { value: 100, duration: 2000 }
  ],
  translateY: [
    { value: 200, duration: 1500 },
    { value: 100, duration: 2000 }
  ],
 
  rotate:{
    value: '4turn',
    easing : 'easeInOutSine'
  },
  delay: function(el, i, l){ return i * 100},
  autoplay:false,
  loop:true
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;