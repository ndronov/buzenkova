if(document.querySelector('.arrow-up')) {
    arrowTop.onclick = function() {
        window.scrollTo(scrollX, 0);
    };
    
    window.addEventListener('scroll', function() {
        arrowTop.hidden = (this.scrollY < document.documentElement.clientHeight);
    });
}
