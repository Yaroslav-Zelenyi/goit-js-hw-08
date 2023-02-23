import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
  //  console.log(data.seconds);
};
player.on("timeupdate", throttle(onPlay, 1000));

const localStorTime = localStorage.getItem("videoplayer-current-time");
if (localStorTime) {
  player.setCurrentTime(localStorTime);
}
