const menuAnimationTime = 500;
const mobileMenuSelector = '#menu-mobile-expanded';

$(document).ready(function (){
     $('#menu-mobile-collapsed').click(() => {
        const displayValue = $(mobileMenuSelector).css('display');
        if (displayValue === 'none') {
            $(mobileMenuSelector).fadeIn();
            $(mobileMenuSelector).css('display', 'block');
        } else {
            $(mobileMenuSelector).fadeOut();
        }
    });
});