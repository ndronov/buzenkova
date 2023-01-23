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

const onPhotoClick = (e) => {
    const dialog = document.querySelector('.dialog');
    const dialogContent = document.querySelector('.dialog__content');
    if (e.target.closest('.album__item')) {
        document.body.classList.add('scroll-lock')
        const image = e.target.closest('.album__item').querySelectorAll('.album__image')[1];
        const element = `
            <picture class='dialog__image' >
                <source type="image/webp" srcset=${image.src.replace('.jpg', '.webp')}>
                <img class='dialog__image' src=${image.src} width="200" height="auto" alt=${image.alt} loading="lazy">
            </picture>
            `
        dialogContent.innerHTML = element;
        dialog.showModal()
        dialog.addEventListener('click', onDialogOutsideClick)
        dialog.addEventListener('close', () => {
            document.body.classList.remove('scroll-lock')
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
