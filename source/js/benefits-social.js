if(document.querySelector('.benefits__social')) {
    const social = document.querySelector(".benefits__social");
    const click = document.querySelector(".benefits__contact");

    click.addEventListener("click", openSocial);

    function openSocial() {
        social.classList.toggle("hidden");
    }
}