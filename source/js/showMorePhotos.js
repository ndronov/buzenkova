const isMorePhotos = () => {
    return document.querySelectorAll('.album__item--hidden').length === 0
}

const setupButton = () => {
    const showMorePhotosButton = document.querySelector('.album__button');

    if (showMorePhotosButton) {
        const hiddenPhotos = document.querySelectorAll('.album__item--hidden');
        if (hiddenPhotos.length > 0) {
            showMorePhotosButton.addEventListener('click', () => {
                hiddenPhotos.forEach((el) => el.classList.remove('album__item--hidden'))
                if (isMorePhotos) showMorePhotosButton.classList.add('visually-hidden')
            })
        } else {
            showMorePhotosButton.classList.add('visually-hidden')
        }
    }
}

export { setupButton }
