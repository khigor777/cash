$(function () {
    var margin = 24,
        w = $('.resp_gallery .list li').outerWidth() + margin,
        count = $('.resp_gallery .list li').length - 1;

    function setInfo(i){
        var e = $('.resp_gallery .list li').eq(i);
        $('.resp_gallery .list li').removeClass('active');
        e.addClass('active');
        $('.lndng_resp .text').html($('.data_info', e).html());
        $('.lndng_resp .author').html($('.data_author', e).html());
    }

    var ind = 1,
        indent_left = 0;
    setInfo(ind);
    var full_w = w * count + ($('.resp_gallery .active').outerWidth() + margin);
    $('.resp_gallery .list').width(full_w);

    function moveGallery(left) {
        $('.resp_gallery .list').animate({
            marginLeft: left
        }, 800, function () {
            setInfo(ind);
        });
    }

    $('.resp_gallery .left_arrow').click(function (e) {        
        e.preventDefault();
        if (indent_left > -full_w + 3 * w) {
            ++ind;            
            indent_left -= w;
            moveGallery(indent_left);
        }
    });
    $('.resp_gallery .right_arrow').click(function (e) {
        e.preventDefault();
        if (indent_left < w) {
            --ind;            
            indent_left += w;
            moveGallery(indent_left);
        }
    });
});