$(function() {
/*change city*/
    var active_geo_point = null;

    function setGeo(elem) {
        $('.set_point').html(elem.html());
        active_geo_point = elem.attr('data-id');
    }

//получить алфавит
//$.ajax({
//    method: "POST",
//    url: ""
//}).done(function (data) {
//    var str = "";
//    for (var i = 0; i < data.length; i++) {
//        str += '<li><a data-simbol="' + data[i].id + '" href="">' + data[i].name + '</a></li>';
//    }
//    $('.change_city .alfbt').html(str);
//});

//прокрутка по алфавитному указателю
    $('.change_city .alfbt a').click(function(e) {
        e.preventDefault();
        var elem = $(this),
            result = elem.parents('.alfbt').attr('data-result'),
            simbol = elem.attr('data-simbol');

        if ($('[data-simbol="' + simbol + '"]', '.' + result).position() !== undefined) {
            $('.' + result).stop().animate({
                scrollTop: $('[data-simbol="' + simbol + '"]', '.' + result).position().top
            }, 500);
        }
    });

//function getResult(url, box_result) {
//    $.ajax({
//        method: "POST",
//        url: url,
//        data: { simbol: active_geo_point }
//    }).done(function (data) {
//        var str = "";
//        for (var i = 0; i < data.length; i++) {
//            str += '<div class="simbol" data-simbol="' + data[i].symbolId + '">' + data[i].symbol + '</div><ul>';
//            for (var j = 0; j < data[i].list.length; j++) {
//                str += '<li><a href="" data-id="' + data[i].list[j].itemId + '">' + data[i].list[j].itemName + '</a></li>';
//            }
//            str += '</ul>';
//        }
//        box_result.html(str);
//    });
//}

//выбор страны
    $('.result_country a').click(function(e) {
        e.preventDefault();
        setGeo($(this));

        //получаем регионы
        //getResult("", $('.result_region'));

        //получаем города
        //getResult("", $('.result_city'));

        $('[data-show="country"]').addClass('hidden');
        $('[data-show="region"], [data-show="city"]').removeClass('hidden');
    });

//выбор региона
    $('.result_region a').click(function(e) {
        e.preventDefault();
        setGeo($(this));

        //отфильтровываем города
        //getResult("", $('.result_city'));

        $('[data-show="region"]').addClass('hidden');
        $('[data-show="city"]').addClass('active_block');
        $('[data-show="city_lnk"]').removeClass('hidden');
    });

//выбор города
    $('.result_city a').click(function(e) {
        e.preventDefault();
        setGeo($(this));
    });

//возврат к выбору региона
    $('.back_region').click(function(e) {
        e.preventDefault();
        $('[data-show="region"]').removeClass('hidden');
        $('[data-show="city"]').removeClass('active_block');
        $('[data-show="city_lnk"]').addClass('hidden');
    });

//возврат к выбору страны
    $('.back_country').click(function(e) {
        e.preventDefault();
        $('[data-show="country"]').removeClass('hidden');
        $('[data-show="region"], [data-show="city_lnk"]').addClass('hidden');
        $(this).addClass('hidden');
        $('[data-show="city"]').removeClass('active_block').addClass('hidden');
    });
});