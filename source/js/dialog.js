import Swiper from './swiper-bundle.esm.browser.js';

const PHOTOS_IN_ALBUMS = {
    1: 91,
    2: 70,
    3: 73,
    4: 51,
    5: 45,
    6: 50,
    7: 44,
    8: 58,
    9: 39,
    10: 60,
    11: 42,
    12: 13,
    13: 44,
    14: 28,
    15: 18,
    16: 5,
    17: 8,
}
const dialog = document.querySelector('.dialog');
const dialogContent = document.querySelector('.dialog__content');

const onDialogOutsideClick = (e) => {
    const dialog = document.querySelector('.dialog');
    let rect = dialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
    && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
        document.body.classList.remove('scroll-lock');
        dialog.close();
    }
}

const createSlide = (albumNumber, photoNumber) => (`
    <div class="swiper-slide">
        <picture class='gallery__image' >
            <source type="image/webp" srcset="img/pics/albums/${albumNumber}/${photoNumber}.webp">
            <img class='gallery__image swiper-lazy' src="img/pics/albums/${albumNumber}/${photoNumber}.jpg" width="200" height="auto" loading="lazy">
        </picture>
    </div>
`)

const createSlides = (albumNumber, photosCount) => {
    let string = '';
    for (let i = 1; i < photosCount; i++) {
        string += createSlide(albumNumber, i)
    }
    return string
}

const onPhotoClick = (e) => {
    if (e.target.closest('.album__item')) {
        document.body.classList.add('scroll-lock')
        const initialSlide = e.target.src.split('/')[7].replace('.jpg', '') - 1;
        const albumNumber = e.target.src.split('/')[6];
        console.log(e.target.src.split)
        const photosCount = PHOTOS_IN_ALBUMS[albumNumber];
        const dialogInnerContent = `
            <div class="swiper gallery__photos">
                <div class="swiper-wrapper">
                    ${createSlides(albumNumber, photosCount)}
                </div>
                <div class="gallery__controls">
                    <div class="gallery__button swiper-button-prev"></div>
                    <div class="gallery__button swiper-button-next"></div>
                </div>
            </div>
            <div class="swiper gallery__thumbs">
                <div class="swiper-wrapper">
                ${createSlides(albumNumber, photosCount)}
                </div>
            </div>
        `
        dialogContent.innerHTML = dialogInnerContent;
        dialog.showModal()
        dialog.addEventListener('click', onDialogOutsideClick)
        dialog.addEventListener('close', () => {
            document.body.classList.remove('scroll-lock')
        });

        const thumbs = new Swiper('.gallery__thumbs', {
            direction: 'horizontal',
            slidesPerView: 5,
            spaceBetween: 10,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            freeMode: true,
        });

        const gallery = new Swiper('.gallery__photos', {
            initialSlide: initialSlide,
            direction: 'horizontal',
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: thumbs
              }
        });
    }
}

const setupModal = () => {
    const albumList = document.querySelector('.album__list');

    if (albumList) {
        albumList.addEventListener('click', onPhotoClick)
    }
}

export { setupModal }
