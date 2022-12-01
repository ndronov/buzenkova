const quads = Array.from(document.querySelectorAll(".timeline__quad"));
const arrPos = Array.from(document.querySelectorAll(".pos"));

window.addEventListener("scroll", () => {
    quads.map(item => item.style.backgroundColor = "transparent");

    for(let i = 0; i < arrPos.length; i++) {
        if(arrPos[i].offsetTop - 180 < window.pageYOffset && arrPos[i + 1] && arrPos[i + 1].offsetTop > window.pageYOffset) {
            quads.map(item => item.style.backgroundColor = "transparent");
            quads[i].style.backgroundColor = "black";
        } else if (arrPos[arrPos.length - 1].offsetTop < window.pageYOffset) {
            quads.map(item => item.style.backgroundColor = "transparent");
            quads[i].style.backgroundColor = "black";
        }
    }
});
