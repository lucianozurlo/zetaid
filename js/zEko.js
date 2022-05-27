const sentryNext = document.querySelector('#sentryNext');

new fullpage('#zProject', {
    anchors: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],

    afterLoad: () => {
        fullpage_api.setAllowScrolling(false);
        setTimeout(() => {
            fullpage_api.setAllowScrolling(true);
        }, 1000);
    },

    onLeave: function (origin, destination) {
        let leavingSection = this;
        /*********** 7 *******/
        /*  6 >>>  */
        if (origin.index <= 6 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(700);
            sentryNext.currentTime = 0;
        }

        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index <= 7 && destination.index == 8) {
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
