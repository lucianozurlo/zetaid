const fliebenNext = document.querySelector('#fliebenNext');

new fullpage('#zProject', {
    anchors: ['Intro', 'Interface', 'Charging', 'Speaker', 'Lens', 'ExplodedView', 'Ghost0', 'Ghost1', 'Ghost2', 'Ghost3', 'Ghost4', 'Strap', 'Warning', 'Turntable', 'ZetaID', 'NextProject', 'NewProject'],

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

    parallax: true,
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    },

    onLeave: function (origin, destination) {
        let leavingSection = this;

        /*********** NextProject *******/
        /*  ZetaID >>>  */
        if (origin.index <= 13 && destination.index == 14) {
            fullpage_api.setScrollingSpeed(700);
            fliebenNext.currentTime = 0;
        }

        /*********** NewProject *******/
        /*  NextProject >>>  */
        if (origin.index <= 15 && destination.index == 16) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log('1 sec delay')
                window.location.href = 'flieben.html';
                mouse.style.opacity = .25;
                clearInterval(timer);
            }, 1000);
        }
    },


    // onLeave: function (origin, destination) {
    //     let leavingSection = this;
    //     /*********** 15 *******/
    //     /*  14 >>>  */
    //     if (origin.index <= 14 && destination.index == 15) {
    //         fullpage_api.setScrollingSpeed(700);
    //         fliebenNext.currentTime = 0;
    //     }

    //     /*********** 16 *******/
    //     /*  15 >>>  */
    //     if (origin.index <= 15 && destination.index == 16) {
    //         fullpage_api.setScrollingSpeed(100000000);
    //         fullpage_api.setAllowScrolling(false);
    //         setTimeout(() => {
    //             console.log('1 sec delay')
    //             window.location.href = 'flieben.html';
    //             mouse.style.opacity = .25;
    //             clearInterval(timer);
    //         }, 1000);
    //     }
    // },

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
