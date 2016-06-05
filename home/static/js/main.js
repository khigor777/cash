$(function () {
    /*modal window*/
    $('[data-open-modal]').click(function (e) {
        e.preventDefault();
        var modal = $(this).attr('data-open-modal');
        $("[data-modal=" + modal + "]").removeClass('hidden');
    });

    $('[data-modal-close]').click(function (e) {
        e.preventDefault();
        var modal = $(this).attr('data-modal-close');
        $("[data-modal=" + modal + "]").addClass('hidden');
    });

    /*top cupons block*/
    function show_baner() {
        e.preventDefault();
        $('.cupons_block').stop().animate({
            height: 60,
            paddingBottom: 5,
            opasity: 1
        }, 500, function () {
            $('.main_switch_banner').addClass('hidden');
        });
    }

    $('.cupons_block .close').click(function (e) {
        e.preventDefault();
        $('.cupons_block').stop().animate({
            height: 0,
            paddingBottom: 0,
            opasity: 0
        }, 500, function () {
            $('.main_switch_banner').removeClass('hidden');
        });
    });
        
    $('.main_switch_banner').click(function (e) {
        e.preventDefault();
        $('.cupons_block').stop().animate({
            height: 60,
            paddingBottom: 5,
            opasity: 1
        }, 500, function () {
            $('.main_switch_banner').addClass('hidden');
        });
    });

    /*change cupon banners*/
    var active_cupon = 0,
        count_cupon = $(".bnr_list li").size() - 1;

    setInterval(function () {
        if (active_cupon < count_cupon)
            ++active_cupon;
        else
            active_cupon = 0;
        $('.bnr_list li').css('opacity', 0);
        $('.bnr_list li').eq(active_cupon).css({ 'opacity': 1, 'z-index': '100'});
    }, 5000);

    /*copy to bufer*/
    var clipboard = new Clipboard('.bnr_list .copy_code');
    clipboard.on('success', function (e) {
        alert('Промокод скопирован в буфер обмена');
    });

    /*show more brand*/
    $('.brand_list .show_more .lnk').click(function (e) {
        e.preventDefault();
    });

    /*show video*/
    $('.advantage_video').hover(function () {
        var elem = $(this);
        if ($('.rolik', elem).hasClass('hidden'))
            $('.rolik iframe').attr('src', 'https://www.youtube.com/embed/I_SphnjTNEY?widget_referrer=http%3A%2F%2Fcash4brands.ru%2F%3Factionpay%3D41bacf93-92e3-df5f-e7c9-0152d1bb5c47.115210%26utm_source%3Dactionpay%26utm_medium%3Dcpa%26utm_campaign%3Dactionpay%26utm_content%3D115210&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcash4brands.ru');
        elem.addClass('onHover');
        $('.rolik', elem).stop().removeClass('hidden').animate({
            opacity: 1
        }, 500);
    }, function () {
        $(this).removeClass('onHover');
    });

    $('body').click(function () {
        if (!$('.rolik').hasClass('onHover')) {
            $('.rolik iframe').attr('src', '');
            $('.rolik').addClass('hidden');
        }
    });

    /*video modal window*/
    $('.header_panel .video').click(function (e) {
        e.preventDefault();
        $('.video_modal').removeClass('hidden');
        $('.video_modal iframe').attr('src', 'https://www.youtube.com/embed/I_SphnjTNEY?widget_referrer=http%3A%2F%2Fcash4brands.ru%2F%3Factionpay%3D41bacf93-92e3-df5f-e7c9-0152d1bb5c47.115210%26utm_source%3Dactionpay%26utm_medium%3Dcpa%26utm_campaign%3Dactionpay%26utm_content%3D115210&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcash4brands.ru');
    });

    $('.video_modal .close').click(function (e) {
        e.preventDefault();
        $('.video_modal').addClass('hidden');
        $('.video_modal iframe').attr('src', '');
    });

    /*checkbox element*/
    $('.checkbox_elem').click(function () {
        var elem = $(this),
            checkbox = $('input[type="checkbox"]', elem);
        if (checkbox.prop('checked')) {
            checkbox.prop('checked', false);
            $('.subs_checkbox', elem).removeClass('checked');
        }
        else {
            checkbox.prop('checked', true);
            $('.subs_checkbox', elem).addClass('checked');
        }
    });

    /*vertical align branr item*/
    $('.brand_list .list .item').each(function () {
        var h = parseInt($('.cash_back', this).outerHeight());
        if (h < 30)
            $('.text', this).css('margin-top', '20px');
    });
    
    /*autocomplite in search input*/
    $('.search_field_full .input').focus(function () {
        $(this).parents('.search_field').addClass('open');
    });

    $('.search_field_full .input').blur(function () {
        var parent = $(this).parents('.search_field');
        parent.removeClass('open');
        $('.input, .submit, .search_back', parent).css('display', 'none');
        $('.search_stub', parent).css('display', 'block');
    });

    $('.search_field_full').hover(function () {
        $('.input, .submit, .search_back', this).css('display', 'block');
        $('.search_stub', this).css('display', 'none');
    }, function () {
        if (!$(this).hasClass('open')) {
            $('.input, .submit, .search_back', this).css('display', 'none');
            $('.search_stub', this).css('display', 'block');
        }
    });

    var timerId;

    /*hover element*/
    $('.btn_hover').hover(function () {
        $('.green', this).stop().animate({
            opacity: 0
        }, 500, function () {
            clearInterval(timerId);
        });
    }, function () {
        $('.green', this).stop().animate({
            opacity: 1
        }, 500, function () {
            timerId = setInterval(function () {
                $('.store_info_lnk .green').stop().animate({
                    opacity: 0
                }, 500, function () {
                    $('.store_info_lnk .green').stop().animate({
                        opacity: 1
                    }, 500);
                });
            }, 3000);
        });
    });

    timerId = setInterval(function () {
        $('.store_info_lnk .green').stop().animate({
            opacity: 0
        }, 500, function () {
            $('.store_info_lnk .green').stop().animate({
                opacity: 1
            }, 500);
        });
    }, 3000);    

    /*add datepicker*/
    if ($('.promo_date_end').datepicker) {
        $('.promo_date_end').datepicker({
            dateFormat: "dd.mm.yy"
        });
    }

});