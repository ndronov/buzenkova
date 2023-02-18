if(document.querySelector(".ideas__swiper")) {
    new Swiper(".ideas__swiper", {
        navigation: {
            nextEl: ".swiper-button-forward",
            prevEl: ".swiper-button-back"
        },
        pagination: {
            el: '.swiper-pag',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            pageUpDown: true,
        },
        loop: true
    });
}
