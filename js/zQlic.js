const sentryNext = document.querySelector('#sentryNext');

new fullpage('#zProject', {
    anchors: ['Intro', 'AdjustablePower', 'Context', 'Working', 'ExplodedView', 'Pedernal', 'PedernalAction', 'Turntable', 'ZetaID', 'NextProject', 'Sentry'],

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
        /*********** 7 *******/
        /*  6 >>>  */
        if (origin.index <= 9 && destination.index == 10) {
            fullpage_api.setScrollingSpeed(700);
            sentryNext.currentTime = 0;
        }

        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index <= 10 && destination.index == 11) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log('1 sec delay')
                window.location.href = 'eko.html';
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
