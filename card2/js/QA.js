$(function () {
    $('.answer').hide();
    $('.QA-column').click(function(e){
        e.preventDefault();
        $(this).children('.answer').slideToggle(250);
        $(this).children().children('.add-icon').toggle().siblings('.remove-icon').toggleClass('d-none');
    });
})

