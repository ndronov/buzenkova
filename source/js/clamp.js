const texts = document.querySelectorAll(".reviews-slide__text");

texts.forEach(item => {
    $clamp(item, {
        clamp: 23,
        useNativeClamp: false
    })
});