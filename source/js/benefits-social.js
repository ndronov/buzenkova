if(document.querySelector('.benefits__social')) {
    const social = document.querySelector(".benefits__social-content");
    const click = document.querySelector(".benefits__contact");
    const socialContent = document.querySelector(".benefits__social-links");

    click.addEventListener("click", openSocial);

    function openSocial() {
        social.classList.toggle("overlay-visible");
        socialContent.classList.toggle("benefits__social-links--open");
    }
}