const fliebenPlay = document.querySelector('#fliebenPlay');
const fliebenRev = document.querySelector('#fliebenRev');
const fliebenLoopHot = document.querySelector('#fliebenLoopHot');
const fliebenLoopCold = document.querySelector('#fliebenLoopCold');
// const fliebenLoopHotRev = document.querySelector('#fliebenLoopHotRev');
// const fliebenLoopColdRev = document.querySelector('#fliebenLoopColdRev');
const projectVideos = document.querySelector('#projectVideos');
const zProject = document.querySelector('#zProject');

const magmaNext = document.querySelector('#magmaNext');
const mouse = document.querySelector('#mouse');

fliebenPlay.pause();
fliebenRev.pause();
console.log(fliebenRev.currentTime);
console.log(fliebenPlay.currentTime);

new fullpage('#zProject', {
    anchors: ['Intro', 'PortableAirConditioner', 'CompactDualSystem', 'CompactDualSystemHeat', 'CompactDualSystemCool', 'TemperatureControl', 'RemovableBattery', 'Turntable', 'ZetaID', 'NextProject', 'NewProject'],

    afterLoad: () => {
        document.querySelectorAll('video').forEach(video => video.currentTime = 0);
        document.querySelectorAll('video').forEach(video => video.pause());
        if (isNaN(document.querySelector("body.fp-viewing-Intro #section0 video"))) {
            document.querySelector("body.fp-viewing-Intro #section0 video").play();
        }
        fullpage_api.setAllowScrolling(false);
        setTimeout(() => {
            fullpage_api.setAllowScrolling(true);
        }, 1000);
    },

    afterRender: function () {
        fullpage_api.setAllowScrolling(false);
        setTimeout(() => {
            console.log('6 sec delay');
            fullpage_api.setAllowScrolling(true);
        }, 6000);
    },
    afterLoad: function (origin, destination, direction) {
        var loadedSection = this;

        if (isNaN(document.querySelector('body.fp-viewing-Intro'))) {
            fliebenPlay.currentTime = 0;
            fliebenRev.currentTime = 8.067;
            // fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-PortableAirConditioner'))) {
            // fliebenPlay.currentTime = 2.167;
            // fliebenRev.currentTime = 5.933;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-CompactDualSystem'))) {
            fliebenPlay.currentTime = 3.165;
            fliebenRev.currentTime = 4.933;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-CompactDualSystemHeat'))) {
            fliebenPlay.currentTime = 4.433;
            fliebenRev.currentTime = 3.667;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopHot.style.opacity = 1;
            // fliebenLoopHot.play();
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-CompactDualSystemCool'))) {
            fliebenPlay.currentTime = 6.5;
            fliebenRev.currentTime = 1.6;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 1;
            // fliebenLoopCold.play();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else {
            fliebenPlay.currentTime = 8.067;
            //fliebenRev.currentTime = 0;
            //fliebenRev.style.opacity = 0;
            //fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        }
    },


    onLeave: function (origin, destination) {
        let leavingSection = this;

        /*********** 0 ***********/
        /*  <<<  */
        if (origin.index == 1 && destination.index == 0) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2500);
            rev1();
        } else if (origin.index > 1 && destination.index == 0) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1667);
            rev1();
        } else if (origin.index > 2 && destination.index == 0) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1250);
            rev1();
        }

        /*********** 1 *******/
        /*  0 >>>  */
        if (origin.index == 0 && destination.index == 1) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2500);
            play1();
        } else if (origin.index < 1 && destination.index == 1) {
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1250);
            play1();
        }

        /*  <<< 1  */
        if (origin.index == 2 && destination.index == 1) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1200);
            rev2();
        } else if (origin.index > 2 && destination.index == 1) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(800);
            rev2();
        } else if (origin.index > 3 && destination.index == 1) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(600);
            rev2();
        }

        /*********** 2 *******/
        /*  1 >>>  */
        if (origin.index <= 1 && destination.index == 2) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1200);
            play2();
        } else if (origin.index <= 1 && destination.index == 2) {
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(800);
            play2();
        }

        /*  <<< 3  */
        if (origin.index == 3 && destination.index == 2) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1600);
            rev3();
        } else if (origin.index >= 3 && destination.index == 2) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1067);
            rev3();
        } else if (origin.index >= 4 && destination.index == 2) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(800);
            rev3();
        }

        /*********** 3 *******/
        /*  2 >>>  */
        if (origin.index == 2 && destination.index == 3) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1600);
            play3();
        } else if (origin.index <= 2 && destination.index == 3) {
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1067);
            play3();
        } else if (origin.index <= 1 && destination.index == 3) {
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(800);
            play3();
        }

        /*  <<< 4  */
        if (origin.index == 4 && destination.index == 3) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2600);
            rev4();
        } else if (origin.index >= 4 && destination.index == 3) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1733);
            rev4();
        } else if (origin.index >= 5 && destination.index == 3) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1300);
            rev4();
        }

        /*********** 4 *******/
        /*  3 >>>  */
        if (origin.index == 3 && destination.index == 4) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2600);
            play4();
        } else if (origin.index <= 3 && destination.index == 4) {
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1733);
            play4();
        } else if (origin.index <= 3 && destination.index == 4) {
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1300);
            play4();
        }

        /*  <<< 5  */
        if (origin.index == 5 && destination.index == 4) {
            zProject.style.opacity = 1;
            fliebenPlay.style.opacity = 1;
            fliebenRev.style.opacity = 0;
            fliebenPlay.pause();
            fliebenLoopCold.style.opacity = 1;
            fliebenLoopCold.play();
            projectVideos.style.transform = "translateY(0vh)";
            projectVideos.style.transitionDuration = "700ms";
        } else if (origin.index >= 5 && destination.index == 4) {
            fullpage_api.setScrollingSpeed(350);
            zProject.style.opacity = 1;
            fliebenPlay.style.opacity = 1;
            fliebenRev.style.opacity = 0;
            fliebenPlay.pause();
            fliebenLoopCold.style.opacity = 1;
            fliebenLoopCold.play();
            projectVideos.style.transform = "translateY(0vh)";
            projectVideos.style.transitionDuration = "700ms";
        }

        // /*********** 5 *******/
        // /*  4 >>>  */
        // if (origin.index <= 4 && destination.index == 5) {
        //     elementsProject.style.opacity = 1;
        //     fliebenPlay.playbackRate = 1;
        //     fullpage_api.setScrollingSpeed(2400);
        //     mouse.style.opacity = .05;
        //     play5();
        // } else if (origin.index <= 4 && destination.index == 5) {
        //     elementsProject.style.opacity = 1;
        //     fliebenPlay.playbackRate = 1.5;
        //     fullpage_api.setScrollingSpeed(2400);
        //     mouse.style.opacity = .05;
        //     play5();
        // } else if (origin.index <= 4 && destination.index == 5) {
        //     elementsProject.style.opacity = 1;
        //     fliebenPlay.playbackRate = 2;
        //     fullpage_api.setScrollingSpeed(2400);
        //     mouse.style.opacity = .05;
        //     play5();
        // }

        // /*  <<< 6  */
        // if (origin.index >= 6 && destination.index == 5) {
        //     fullpage_api.setScrollingSpeed(700);
        //     elementsProject.style.opacity = 0;
        //     fliebenRev.style.opacity = 1;
        //     fliebenRev.currentTime = 0
        //     fliebenRev.pause();
        //     fliebenPlay.style.opacity = 0;
        //     setTimeout(() => {
        //         projectVideos.style.opacity = 1;
        //         setTimeout(() => {
        //             zProject.style.opacity = 0;
        //         }, 200);
        //     }, 700);

        // }

        /*********** 5 *******/
        /*  4 >>>  */
        if (origin.index == 4 && destination.index == 5) {
            fullpage_api.setScrollingSpeed(700);
            fliebenPlay.style.opacity = 0;
            fliebenRev.style.opacity = 0;
            mouse.style.opacity = .25;
            zProject.style.opacity = 1;
            projectVideos.style.transform = "translateY(-100vh)";
            projectVideos.style.transitionDuration = "700ms";
        }

        /*  <<< 6  */
        if (origin.index == 6 && destination.index == 5) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*********** 6 *******/
        /*  5 >>>  */
        if (origin.index == 5 && destination.index == 6) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*  <<< 7  */
        if (origin.index == 7 && destination.index == 6) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*********** 7 *******/
        /*  6 >>>  */
        if (origin.index == 6 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*  <<< 8  */
        if (origin.index == 8 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index == 7 && destination.index == 8) {
            fullpage_api.setScrollingSpeed(700);
        }

        /*  <<< 9  */
        if (origin.index == 9 && destination.index == 8) {
            fullpage_api.setScrollingSpeed(700);
        }

        /*********** 9 *******/
        /*  8 >>>  */
        if (origin.index == 8 && destination.index == 9) {
            fullpage_api.setScrollingSpeed(700);
            magmaNext.currentTime = 0;
        }

        /*********** 10 *******/
        /*  9 >>>  */
        if (origin.index == 9 && destination.index == 10) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log('1 sec delay')
                window.location.href = 'magma.html';
                mouse.style.opacity = .25;
                clearInterval(timer);
            }, 1000);
        }
    },

    afterRender: () => {
        preloadLoading = () => {
            fullpage_api.setAllowScrolling(false);
        }
        preloadLoaded = () => {
            fullpage_api.setAllowScrolling(true);
        }
    },

    parallax: true,
    parallaxOptions: {
        type: "reveal",
        percentage: 82,
        property: "translate",
    },

});
