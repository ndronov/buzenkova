const toggleButton = document.querySelector(".toggle-menu");
const nav = document.querySelector(".nav");
const content = document.querySelector(".nav__content");
const overlay = document.querySelector(".nav__overlay");
const contentItem = document.querySelectorAll(".nav__item");

export {toggleButton};

if(document.querySelector(".burger-menu")) {
    toggleButton.addEventListener("click", showMenu);

    function showMenu() {
        nav.classList.toggle("toggle");
        overlay.classList.toggle("overlay-visible");
        content.classList.toggle("nav__content--open");
        document.body.style.overflowY = "hidden";

        document.addEventListener("click", event => {
            const el = event.target;

            contentItem.forEach(el => {
                el.addEventListener("click", () => {
                    closeMenu();
                });
            });
        
            if(el === overlay) {
                closeMenu();
            }
        });
    };

    function closeMenu() {
        nav.classList.remove("toggle");
        overlay.classList.remove("overlay-visible");
        content.classList.remove("nav__content--open");
        document.body.style.overflowY = "unset";
    }
}
