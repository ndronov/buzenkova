const popup = document.querySelector('.reviews-popup');
const close = document.querySelector('.reviews-popup-close');
const reviewsParent = document.querySelector(".reviews-swiper__wrapper");

reviewsParent.addEventListener("click", (e) => {
    const el = e.target;

    if(el.classList.contains("reviews-slide__more")) {
        const reviewContent = document.querySelector(".modal-card__text");
        const content = el.closest(".reviews-slide").querySelector('.reviews-slide__text').textContent;
        reviewContent.textContent = content;
        showReview();
    }
})

close.addEventListener("click", closeReview);

function showReview() {
    popup.classList.remove("hidden");
    popup.classList.add("modal-card--open");

    if(popup.classList.contains("modal-card--close")) {
        popup.classList.remove('modal-card--close');
    };
}

function closeReview() {
    popup.classList.remove("modal-card--open");
    popup.classList.add('modal-card--close');
}