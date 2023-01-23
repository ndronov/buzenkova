import "./burger-menu.js";
import "./elements-appearance.js";
import "./intro-swiper.js";
import "./ideas-swiper.js";
import "./timeline.js";
import "./form-submit.js";
import "./benefits-social.js";
import "./reviews-slider.js";
import "./clamp.js";
// import "./form.js";
// import "./modal.js";
import "./to-top.js";
import { findVideos } from "./video.js";
import { setupButton } from "./showMorePhotos.js";
import { setupModal } from "./dialog.js";


window.addEventListener('DOMContentLoaded', () => {
    // Utils
    // ---------------------------------

    findVideos();
    setupButton();
    setupModal();

    // const photos = document.querySelectorAll('.album__item');
    // const dialog = document.querySelector('.dialog');
    // const dialogContent = document.querySelector('.dialog__content');

    // photos.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         const image = e.currentTarget.querySelectorAll('.album__image')[1];
    //         const element = `
    //         <picture class='dialog__image' >
    //             <source type="image/webp" srcset=${image.src.replace('.jpg', '.webp')}>
    //             <img class='dialog__image' src=${image.src} width="200" height="auto" alt=${image.alt} loading="lazy">
    //         </picture>
    //         <button class='dialog__button' type='button'>
    //             <span class="visually-hidden">Закрыть</span>
    //         </button>
    //         `
    //         dialogContent.innerHTML = element;
    //         dialog.showModal()
    //         dialog.addEventListener('click', (event) => {
    //             let rect = dialog.getBoundingClientRect();
    //             const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    //             && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    //             if (!isInDialog) {
    //                 dialog.close();
    //             }
    //         })

    //     })
    // })

    // Modules
    // ---------------------------------

    // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
    // в load следует добавить скрипты, не участвующие в работе первого экрана
    window.addEventListener('load', () => {

    });
  });
