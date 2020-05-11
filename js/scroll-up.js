const scrollUpanimationTime = 1000;

$(document).ready(function (){
    $('#scroll-to-top-arrow').click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`header`).offset().top
        }, scrollUpanimationTime);
    });
});