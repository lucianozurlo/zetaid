const sentryNext = document.querySelector('#sentryNext');

new fullpage('#zProject', {
    anchors: ['Intro', 'Headphone', 'Headphone2', 'Charging', 'LowBat', 'Speaker', 'Sketch', 'Turntable', 'ZetaID', 'NextProject', 'NewProject'],

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

    onLeave: function (origin, destination) {
        let leavingSection = this;
        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index <= 8 && destination.index == 9) {
            fullpage_api.setScrollingSpeed(700);
            sentryNext.currentTime = 0;
        }

        /*********** 9 *******/
        /*  8 >>>  */
        if (origin.index <= 9 && destination.index == 10) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log('1 sec delay')
                window.location.href = 'sentry.html';
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
