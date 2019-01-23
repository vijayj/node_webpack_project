
// function component() {
//   let element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

//We should use dom ready event to start the video player
 import videojs from 'video.js';
 import overlay from 'videojs-overlay'
 import css from './index.css'
 

let player = videojs(
	document.querySelector('.video-js'), {
  controls: true,
  autoplay: false,
  preload: 'none',
  aspectRatio: "640:267",
  playbackRates: [1,2],
  poster: 'http://video-js.zencoder.com/oceans-clip.jpg'
});


player.ready(function(){
	console.log("player is ready");
	player.volume(0.5);
	// player.requestFullScreen();
	var whereYouAt = player.currentTime();
	console.log("current time", whereYouAt);
})

// player.overlay({
//   overlays: [{

//     // This overlay appears at 3 seconds and disappears at 15 seconds.
//     start: 3,
//     end: 10
//   }, {

//     // This overlay appears at 7 seconds and disappears at 22 seconds.
//     start: 7,
//     end: 22,
//     align: 'bottom'
//   }]
// });


player.overlay({
        content: 'Default overlay content',
        debug: true,
        overlays: [{
          content: 'The video is playing!',
          start: 'play',
          end: 'pause'
        }, {
          start: 0,
          end: 15,
          align: 'bottom-left'
        }, {
          start: 15,
          end: 30,
          align: 'bottom'
        }, {
          start: 30,
          end: 45,
          align: 'bottom-right'
        }, {
          start: 20,
          end: 'pause'
        }]
      });