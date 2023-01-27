if(document.querySelector(".ideas__swiper")) {
    new Swiper(".ideas__swiper", {
        navigation: {
            nextEl: ".swiper-button-forward",
            prevEl: ".swiper-button-back"
        },
        keyboard: {
            enabled: true,
            pageUpDown: true,
        },
        loop: true
    });
}