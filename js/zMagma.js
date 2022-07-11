const qlicNext = document.querySelector('#qlicNext');

new fullpage('#zProject', {
    anchors: ['Intro', 'Concept', 'Studio', 'Living', 'Living', 'Turntable', 'ZetaID', 'NextProject', 'NewProject'],

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

    // onLeave: function (origin, destination) {
    //     let leavingSection = this;

    //     /*********** NextProject *******/
    //     /*  ZetaID >>>  */
    //     if (origin.index <= 'ZetaID' && destination.index == 'NextProject') {
    //         fullpage_api.setScrollingSpeed(700);
    //         fliebenNext.currentTime = 0;
    //     }

    //     /*********** NewProject *******/
    //     /*  NextProject >>>  */
    //     if (origin.index <= 'NextProject' && destination.index == 'NewProject') {
    //         fullpage_api.setScrollingSpeed(100000000);
    //         fullpage_api.setAllowScrolling(false);
    //         setTimeout(() => {
    //             console.log('1 sec delay')
    //             window.location.href = 'qlic.html';
    //             mouse.style.opacity = .25;
    //             clearInterval(timer);
    //         }, 1000);
    //     }
    // },


    onLeave: function (origin, destination) {
        let leavingSection = this;
        /*********** 7 *******/
        /*  6 >>>  */
        if (origin.index <= 6 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(700);
            qlicNext.currentTime = 0;
        }

        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index <= 7 && destination.index == 8) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log('1 sec delay')
                window.location.href = 'qlic.html';
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
