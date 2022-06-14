function play1() {
    mouse.style.opacity = .05;

    fliebenPlay.style.opacity = 1;
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 2.167) {
            fliebenRev.style.opacity = 0;
            fliebenPlay.pause();
            fliebenRev.currentTime = 5.933;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);
};
function play2() {
    mouse.style.opacity = .05;

    fliebenPlay.style.opacity = 1;
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 3.165) {
            fliebenRev.style.opacity = 0;
            fliebenLoopHot.play();
            fliebenPlay.pause();
            fliebenRev.currentTime = 4.933;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            fliebenPlay.style.opacity = 1;
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);
};
function play3() {
    mouse.style.opacity = .05;

    fliebenPlay.style.opacity = 1;
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 4.433) {
            fliebenRev.style.opacity = 0;
            fliebenLoopHot.play();
            fliebenPlay.pause();
            fliebenLoopHot.style.opacity = 0;
            fliebenLoopHot.style.opacity = 1;
            fliebenRev.currentTime = 3.667;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);
};
function play4() {
    mouse.style.opacity = .05;

    fliebenPlay.style.opacity = 1;
    fliebenLoopHot.style.opacity = 0;
    fliebenLoopHot.pause();
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 6.5) {
            fliebenRev.style.opacity = 0;
            fliebenLoopCold.play();
            fliebenPlay.pause();
            fliebenLoopCold.style.opacity = 1;
            fliebenRev.currentTime = 1.6;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);
};
// function play5() {

//     fliebenPlay.style.opacity = 1;
//     fliebenLoopCold.style.opacity = 0;
//     fliebenLoopCold.pause();
//     fliebenPlay.play();

//     let timer = setInterval(function () {
//         if (fliebenPlay.currentTime >= 8.067) {
//             fliebenRev.style.opacity = 0;
//             fliebenPlay.pause();
//             fliebenRev.currentTime = 0;
//             console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
//             console.log(`fliebenRev: ${fliebenRev.currentTime}`);
//             mouse.style.opacity = .25;
//             setTimeout(() => {
//                 zProject.style.opacity = 1;
//             }, 250);

//             clearInterval(timer);
//             fliebenPlay.playbackRate = 1;
//             fliebenRev.playbackRate = 1;
//         }
//     }, 1);
// };

function rev1() {
    mouse.style.opacity = .05;
    //fliebenRev.currentTime = 5.933;

    fliebenLoopHot.style.opacity = 0;
    fliebenLoopHot.pause();
    fliebenLoopCold.style.opacity = 0;
    fliebenLoopCold.pause();
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();
    projectVideos.style.transform = "translateY(0vh)";
    projectVideos.style.transitionDuration = "700ms";

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 8.067) {
            fliebenRev.pause();
            fliebenPlay.currentTime = 0;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);
};
function rev2() {
    mouse.style.opacity = .05;
    //fliebenRev.currentTime = 4.933;

    fliebenLoopHot.style.opacity = 0;
    fliebenLoopHot.pause();
    fliebenLoopCold.style.opacity = 0;
    fliebenLoopCold.pause();
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();
    projectVideos.style.transform = "translateY(0vh)";
    projectVideos.style.transitionDuration = "700ms";

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 5.933) {
            fliebenRev.pause();
            fliebenPlay.currentTime = 2.167;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);
};
function rev3() {
    mouse.style.opacity = .05;
    //fliebenRev.currentTime = 3.667;

    fliebenLoopHot.style.opacity = 0;
    fliebenLoopHot.pause();
    fliebenLoopCold.style.opacity = 0;
    fliebenLoopCold.pause();
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();
    projectVideos.style.transform = "translateY(0vh)";
    projectVideos.style.transitionDuration = "700ms";

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 4.933) {
            fliebenRev.pause();
            fliebenPlay.currentTime = 3.167;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);
};
function rev4() {
    mouse.style.opacity = .05;
    //fliebenRev.currentTime = 1.6;

    fliebenLoopHot.style.opacity = 0;
    fliebenLoopHot.pause();
    fliebenLoopCold.style.opacity = 0;
    fliebenLoopCold.pause();
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();
    projectVideos.style.transform = "translateY(0vh)";
    projectVideos.style.transitionDuration = "700ms";

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 3.667) {
            fliebenRev.pause();
            fliebenLoopHot.play();
            fliebenLoopHot.style.opacity = 1;
            fliebenPlay.currentTime = 4.433;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
            fliebenPlay.playbackRate = 1;
            fliebenRev.playbackRate = 1;
        }
    }, 1);

};
// function rev5() {
//     //fliebenRev.currentTime = 0;
//     fliebenLoopHot.style.opacity = 0;
//     fliebenLoopHot.pause();
//     fliebenLoopCold.style.opacity = 0;
//     fliebenLoopCold.pause();
//     projectVideos.style.opacity = 1;
//     fliebenPlay.style.opacity = 0;
//     fliebenRev.style.opacity = 1;
//     fliebenPlay.style.opacity = 0;
//     fliebenRev.play();

//     let timer = setInterval(function () {
//         if (fliebenRev.currentTime >= 1.6) {
//             fliebenRev.pause();
//             fliebenLoopCold.style.opacity = 0;
//             fliebenLoopCold.play();
//             fliebenLoopCold.style.opacity = 1;
//             fliebenPlay.currentTime = 6.5;
//             console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
//             console.log(`fliebenRev: ${fliebenRev.currentTime}`);
//             mouse.style.opacity = .25;
//             clearInterval(timer);
//             fliebenPlay.playbackRate = 1;
//             fliebenRev.playbackRate = 1;
//         }
//     }, 1);
// };
