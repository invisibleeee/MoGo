$(document).ready(function() {
    $('.spoiler__title').click(function(event) {
        if ($('.service-2__block').hasClass('one')) {
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text-wrapper').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});