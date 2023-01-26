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
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}