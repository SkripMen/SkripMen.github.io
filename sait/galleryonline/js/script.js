$('[data-fancybox="gallery"]').fancybox({
    transitionEffect: "slide",
    animationEffect: "zoom",
    buttons: [
        "zoom",
        //"share",
        // "slideShow",
        //"fullScreen",
        "download",
        "thumbs",
        "close"
    ]
});

function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
            );
        }, 1000);

    });
}

preloader();

function backToTop() {
    let but = $('.back');

    $(window).on(`scroll`, () => {
        if ($(this).scrollTop() >= 150) {
            but.fadeIn();
        } else {
            but.fadeOut();
        }
    })

    but.on(`click`, (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    })
}

backToTop();