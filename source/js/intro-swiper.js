if (document.querySelector(".video-swiper")) {
    let swiper = new Swiper(".video-swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        keyboard: {
            enabled: true,
            pageUpDown: true,
        },
        loop: true,
    });

    swiper.on("slideChange", () => {
        let iframes = document.querySelectorAll("iframe");

        Array.from(iframes).forEach(iframe => {
            iframe.contentWindow.postMessage(JSON.stringify({
                event: "command",
                func: "stopVideo"
            }), '*');
        });
    });
}
