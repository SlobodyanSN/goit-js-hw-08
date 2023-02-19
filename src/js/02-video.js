import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector(`#vimeo-player`)

const player = new Player(iframe,);

const currentTime = throttle(function(data) {
   
    localStorage.setItem("videoplayer-current-time",
        JSON.stringify(data.seconds));
},1000 );

player.on('timeupdate', currentTime);

let startTime = Number(localStorage.getItem("videoplayer-current-time"))

player.setCurrentTime(startTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});