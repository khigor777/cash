$(function () {
    /*copy to bufer*/
    var clipboard = new Clipboard('.promo .lnk');
    clipboard.on('success', function (e) {
        alert('Промокод скопирован в буфер обмена')
    });
});