$(function () {
    $('.profile_menu .item').click(function (e) {
        e.preventDefault();
        var elem = $(this);
            href = elem.attr('href').substr(1);
        $('.tabs .item_tab').addClass('hidden');
        $('.tabs .' + href).removeClass('hidden');
        $('.profile_menu .item').removeClass('active');
        elem.addClass('active');
    });

    $('.pay_list_item').click(function (e) {
        e.preventDefault();
        var elem = $(this),
             href = elem.attr('href').substr(1),
             left = elem.attr('data-left');
        $('.pay_mthd .item_pay').addClass('hidden');
        $('.pay_mthd .' + href).removeClass('hidden');
        $('.profile_point').css('left', left + 'px').removeClass('hidden');
    });

    /*add datepicker*/
    if ($('.birthday_day').datepicker) {
        $('.birthday_day').datepicker({
            dateFormat: "dd.mm.yy"
        });
    }
});