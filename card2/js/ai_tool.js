$(function () {
    $('.item-menu').hide();
    $('.btn-item').click(function(e){
        e.preventDefault();
        $(this).siblings('.item-menu').slideToggle(500);
    });

    $('.new-to-old').click(function(e){
    e.preventDefault();
    $(this).parent().siblings().children('.btn-item-text').text($(this).text());
    });
    $('.old-to-new').click(function(e){
        e.preventDefault();
        $(this).parent().siblings().children('.btn-item-text').text($(this).text());
    });


    $('.page').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().children('.page').removeClass('active');
    })

})


// $(document).ready(function(){

//     // FAQ
//     $('.answer').hide();
//     $('.FAQ-column').click(function(e){
//         e.preventDefault();
//         $(this).children('.answer').slideToggle(250);
//         $(this).children().children('.add-icon').toggle().siblings('.remove-icon').toggleClass('d-none');
//     });
// });