$(".btn-popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$(".politic").fancybox({
    'padding' : 0
});


//  слайдер

$('.slider').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.portfolio-nav .prev').click(function(){
    $('.slider').slick('slickPrev');
});

$('.portfolio-nav .next').click(function(){
    $('.slider').slick('slickNext');

});

// Показ слайдов при наведении

// 1

$('.skills li.item1').mouseover(function() {
    var box = $(this).closest('.slider-item');
    var check = box.find('.portfolio-item01');
    console.log(check);
    check.show();
    $('.portfolio-nav').hide();
});

// 2

$('.skills li.item2').mouseover(function() {
    var box = $(this).closest('.slider-item');
    var check = box.find('.portfolio-item03');
    console.log(check);
    check.show();
    $('.portfolio-nav').hide();
});


// 3

$('.skills li.item3').mouseover(function() {
    var box = $(this).closest('.slider-item');
    var check = box.find('.portfolio-item03');
    console.log(check);
    check.show();
    $('.portfolio-nav').hide();
});

// 4

$('.skills li.item4').mouseover(function() {
    var box = $(this).closest('.slider-item');
    var check = box.find('.portfolio-item04');
    console.log(check);
    check.show();
    $('.portfolio-nav').hide();
});

// 4

$('.skills li.item5').mouseover(function() {
    var box = $(this).closest('.slider-item');
    var check = box.find('.portfolio-item05');
    console.log(check);
    check.show();
    $('.portfolio-nav').hide();
});

$('.skills li').mouseout(function() {
    var box = $(this).closest('.slider-item');
    var check = box.find('.portfolio-item');
    check.hide();
    $('.portfolio-nav').show();
});



/* Анимация  */

document.body.onmousemove=function(e) {
    // Получить событие
    var e = e || window.event;

    var doc = document.documentElement;
    var body = document.body;

    // Получить текущие координаты мыши
    if ("\v" == "v") {
        var mouse_x = e.clientX;
        if (doc.clientLeft) { mouse_x -= doc.clientLeft; }
        if (doc && doc.scrollLeft) { mouse_x += doc.scrollLeft; }
        if (body && body.scrollLeft) { mouse_x += body.scrollLeft; }
        var mouse_y = e.clientY;
        if (doc.clientTop) { mouse_y -=doc.clientTop; }
        if (doc && doc.scrollTop) { mouse_y += doc.scrollTop; }
        if (body && body.scrollTop) { mouse_y += body.scrollTop; }
    }
    else {
        var mouse_x=e.pageX;
        var mouse_y=e.pageY;
    }
    // Параллакс
    do_parallax(mouse_x, mouse_y);
};



function do_parallax(mouse_x, mouse_y) {
    var body = document.body;
    var shift1, shift2, elem;

    // Пропорциональные коэффициенты сдвига для слоев
    var sh_1=10;
    var sh_2=50;


    // Вертикальный и горизонтальный сдвиг для первого слоя
    shift1=Math.round(sh_1*mouse_x*2/body.clientWidth);
    shift2=Math.round(10*mouse_y*20/body.clientHeight);

    elem=document.getElementById('polygon01');
    elem.style.left=shift1+'px';
    elem.style.top=shift2+'px';

    // Вертикальный и горизонтальный сдвиг для второго слоя
    shift1=-Math.round(sh_2*mouse_x/body.clientWidth);
    shift2=Math.round(mouse_y*10/body.clientHeight);

    elem=document.getElementById('polygon02');
    elem.style.left=shift1+'px';
    elem.style.top=shift2+'px';


    // Вертикальный и горизонтальный сдвиг для третьего слоя
    shift1=Math.round(80*mouse_x/body.clientWidth);
    shift2=Math.round(5*mouse_y*10/body.clientHeight);

    elem=document.getElementById('polygon03');
    elem.style.left=shift1+'px';
    elem.style.top=shift2+'px';

}
