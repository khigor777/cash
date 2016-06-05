$(function () {
    /*open rule on store page*/
    $('.list_rule .txt, .list_rule .btn').click(function () {
        var parent = $(this).parents('.item'),
            text_height = $('.wrap', parent).height();
        $('.title', parent).stop().animate({
            height: 0
        }, 500);
        $('.text', parent).stop().animate({
            height: text_height + 20
        }, 500);
    });

    $('.list_rule .close').click(function () {
        var parent = $(this).parents('.item');
        $('.title', parent).stop().animate({
            height: 50
        }, 500);
        $('.text', parent).stop().animate({
            height: 0
        }, 500);
    });
});