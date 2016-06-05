$(function () {
    $('.list_resp .hide').hide();
    $('.full_resp').click(function(e) {
        e.preventDefault();
        var parent = $(this).parent();
        $('.dots', parent).empty();
        $('.hide', parent).show();
    });
});