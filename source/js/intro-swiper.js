if(document.querySelector(".video-swiper")) {
    new Swiper(".video-swiper", {
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
}