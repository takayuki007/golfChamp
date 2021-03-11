//ハンバーガーメニュー
$(function (){
    $('.js-burger-ul').hide();
    $('.js-burger-line').click(function (){
        $('.js-burger-ul').toggle(300);
    })
})