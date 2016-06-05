$(function () {
    $('.catalog_list').each(function() {
        var list = $('li', this),
            count = list.size();
        list.last().css('border', 'none');
        if (((count % 2) == 0) || (count == 2)) {
            list.last().prev().css('border', 'none');
        }
    });

    $('.catalog_letter .item').click(function(e) {
        e.preventDefault();
        var scroll = $(this).attr('data-scroll');
        $('body, html').animate({
            scrollTop: $('.' + scroll).offset().top
        }, 1000);
    });
});