$(function () {
        $('.nav-menu-state').click(function(e){
        e.preventDefault();
        $(this).children('.nav-menu-icon').toggleClass('d-none');
        $(this).children('.clear-icon').toggleClass('d-none');
        $(this).parents().siblings('.nav-menu').toggleClass('d-none');
        $('.back-to-the-top').toggleClass('d-none');
    });
})