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

function cookies() {
    let teams = $.cookie('teams');
    let d = $('.black');
    let w = $('.white');

    if (teams == 'black') {
        $('html').css('background', 'black');
        d.fadeOut();
        w.fadeIn();
    }
}

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

function dark() {
    let d = $('.black');
    let w = $('.white');

    d.on('click', () => {
        location.reload();
        d.fadeOut();
        $('html').css('background', 'black');
        w.fadeIn();
        $.cookie('teams', 'black');
    })
}

function write() {
    let d = $('.black');
    let w = $('.white');

    w.on('click', () => {
        location.reload();
        w.fadeOut();
        $('html').css('background', 'white');
        d.fadeIn();
        $.cookie('teams', 'white');
    })
}

cookies();
preloader();
backToTop();
write();
dark();