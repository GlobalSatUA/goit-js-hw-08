import Player from '@vimeo/player';

import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}

const updateTime = throttle(() => {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
  });
}, 1000);

player.on('timeupdate', updateTime);


