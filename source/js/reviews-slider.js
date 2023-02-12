if(document.querySelector(".reviews-swiper")) {
    new Swiper(".reviews-swiper", {
        effect: 'coverflow',
        grabCursor: true,
        initialSlide: 4,
        centeredSlides: true,
        loop: false,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
        },
        keyboard: {
            enabled: true,
            pageUpDown: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-go",
            prevEl: ".swiper-button-previous"
        },
    });
}