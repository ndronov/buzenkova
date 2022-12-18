const button = document.querySelector(".nav__button");
const nav = document.querySelector(".nav");
const content = document.querySelector(".nav__content");
const overlay = document.querySelector(".nav__overlay");
const contentItem = document.querySelectorAll(".nav__item");

if(document.querySelector(".burger-menu")) {
    button.addEventListener("click", () => {
        
        button.classList.toggle("active");
        button.classList.contains("active") ? showMenu() : closeMenu();
    });

    function showMenu() {
        
        nav.classList.toggle("toggle");
        overlay.classList.toggle("overlay-visible");
        content.classList.toggle("nav__content--open");
        document.body.style.overflowY = "hidden";
    };

    function closeMenu() {
        console.log(document.body.style.overflowY);
        document.body.style.overflowY = "scroll";
        nav.classList.remove("toggle");
        overlay.classList.remove("overlay-visible");
        content.classList.remove("nav__content--open");
    }

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
}