const video = document.querySelector(".video video");
const playBtn = document.querySelector(".video__container .video__play");
let videoStatus = false;

playBtn.addEventListener("click", () => {
    turnVideo();
});

video.addEventListener("click", () => {
    turnVideo();
})

function turnVideo() {
    if (videoStatus) {
        video.pause();
    } else {
        video.play();
    }
    hidePlayBtn();
    videoStatus = !videoStatus;
}

function hidePlayBtn() {
    if (videoStatus) {
        playBtn.style.display = "block";
    } else {
        playBtn.style.display = "none";
    }
}
