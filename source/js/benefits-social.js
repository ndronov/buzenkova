if(document.querySelector('.benefits__social')) {
    const social = document.querySelector(".benefits__social-content");
    const click = document.querySelector(".benefits__contact");
    const socialContent = document.querySelector(".benefits__social-links");
    const socialClose = document.querySelector(".benefits__social-close");

    click.addEventListener("click", openSocial);
    socialClose.addEventListener("click", closeSocial);

    function openSocial() {
        social.classList.toggle("overlay-visible");
        socialContent.classList.toggle("benefits__social-links--open");
    }

    function closeSocial() {
        social.classList.remove("overlay-visible");
        socialContent.classList.remove("benefits__social-links--open");
    }
}