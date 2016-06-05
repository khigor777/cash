$(function () {
    $('.brand_alfbt a').click(function(e) {
        e.preventDefault();
        var smbl = $(this).attr('data-smbl');
        $('.brand_alfbt_block').stop().animate({
            scrollTop: $('[data-point="' + smbl + '"]').position().top
        }, 500);
    });

    $('.brand_alfbt_block .list a').click(function(e) {
        e.preventDefault();
        var top = $(this).offset().top - $('.modal_window').offset().top,
            left = $(this).offset().left;
        $('.back_modal .srch_count').css({ 'top': top + 67, 'left': left + 20 }).removeClass('hidden');
    });

    $('[data-modal-close]').click(function (e) {
        e.preventDefault();
        var modal = $(this).attr('data-modal-close');
        $("[data-modal=" + modal + "]").addClass('hidden');
        $('.srch_count').addClass('hidden');
    });

    $('.column_left .brand_list_ch input[type="checkbox"]').change(function() {
        var top = $(this).offset().top - $('.column_left').offset().top + 25,
            left = $(this).offset().left - $('.column_left').offset().left + 50;
        $('.column_left .srch_count').css({ 'top': top, 'left': left }).removeClass('hidden');
    });

    $('body').click(function () {
        $('.column_left .srch_count').each(function() {
            if(!$(this).hasClass('on_hover'))
                $(this).addClass('hidden');
        });
    });

    $('.column_left .srch_count').hover(function() {
        $(this).addClass('on_hover');
    }, function() {
        $(this).removeClass('on_hover');
    });
});