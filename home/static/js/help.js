$(function () {
    $('.answer').hide();
    $('.quest').click(function(e) {
        e.preventDefault();
        $('.answer', $(this).parent()).slideToggle();
    });
});