const scrollDownAnimationTime = 500;
const sectionsToScrollTo = ['third', 'fourth', 'sixth', 'eighth'];

$(document).ready(function (){
    sectionsToScrollTo.forEach(sectionName => {

        $(`#scroll-${sectionName}`).click(() => {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${sectionName}`).offset().top
            }, scrollDownAnimationTime);
        });

    });
});