import "./burger-menu.js";
import "./elements-appearance.js";
import "./intro-swiper.js";
import "./ideas-swiper.js";
import "./timeline.js";
import "./benefits-social.js";
import "./reviews-slider.js";
import "./form.js";
import "./modal.js";
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

    // Modules
    // ---------------------------------

    // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
    // в load следует добавить скрипты, не участвующие в работе первого экрана
    window.addEventListener('load', () => {

    });
  });
