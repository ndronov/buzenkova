const popup = document.querySelector('.modal');
const close = document.querySelector('.modal__close-button');
const popupContent = document.querySelector('.modal__text')
const reviewsParent = document.querySelector(".reviews-swiper__wrapper");

if (popup) {
    reviewsParent.addEventListener("click", (e) => {
        const el = e.target;

        if(el.classList.contains("reviews-slide__more")) {
            const content = el.closest(".reviews-slide").querySelector('.reviews-slide__text').textContent;
            popupContent.textContent = content;
            showReview();
        }
    })

    function showReview() {
        popup.classList.add('modal--open');
        popup.classList.remove('modal--close');
        popup.addEventListener('click', onOutsideModalClick);
        close.addEventListener('click', closeReview);
        document.body.classList.add('scroll-lock');
        popup.classList.add('scroll-lock-ios');
    }

    function closeReview() {
        document.body.classList.remove('scroll-lock');
        popup.classList.remove('scroll-lock-ios');
        setTimeout(() => popup.classList.remove('modal--open'), 1000);
        popup.classList.add('modal--close');
        close.removeEventListener('click', closeReview);
    }

    function onOutsideModalClick(e) {
        if (!e.target.classList.contains('modal--open')) {
            closeReview();
        }
    }
}

export { popup };
