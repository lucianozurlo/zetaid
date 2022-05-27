new fullpage("#zHome", {
    anchors: ["Zeta-id", "WeDoIndustrialDesign", "EKO", "Sentry", "FlieBen", "Magma", "Qlic", "OurValues", "OurProcess", "OurTeam", "OurTeam", "ContactUs"],
    sectionsColor: ["#fff", "#fff", "#000", "#fff", "#000", "#000", "#000", "#fff", "#000", "#f7f7f7", "#000", "#000"],

    afterLoad: () => {
        document.querySelectorAll('video').forEach(video => video.currentTime = 0);
        document.querySelectorAll('video').forEach(video => video.pause());

        fullpage_api.setAllowScrolling(false);
        setTimeout(() => {
            fullpage_api.setAllowScrolling(true);
        }, 1000);
    },

    onLeave: function (origin, destination, direction) {

        //after leaving section 2
        if (origin.index == 0 && direction == "down") {
            let app = document.getElementById("wedo");

            let typewriter = new Typewriter(app, {
                loop: false,
                cursor: "",
                delay: 18,
            });
            typewriter.pauseFor(500).typeString("WE DO").typeString("<p>DESIGN</p>").pauseFor(500).deleteChars(6).pauseFor(200).typeString("<p>INDUSTRIAL</p>").typeString("<p>DESIGN</p>").start();
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
