$('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
});

$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});


 
jQuery(window).on('scroll', function () {
 
 if (jQuery('.cp_fullscreenmenu').height() < jQuery(this).scrollTop()) { 
jQuery('.cp_fullscreenmenu').addClass('change-color'); }
 else {
 jQuery('.cp_fullscreenmenu').removeClass('change-color'); } });
 

 jQuery(window).on('scroll', function () {
 if (jQuery('.hamburger span').height() < jQuery(this).scrollTop()) { 
jQuery('.hamburger span').css("background-color","#000000"); }
 else {
 jQuery('.hamburger span').css("background-color","#FFFFFF"); } });



jQuery( window ).on( 'scroll', function() {
 if ( 650 < jQuery( this ).scrollTop() ) { 
  jQuery( '.hamburger span' ).css("background-color","#000000"); } 
else {  
 jQuery( '.hamburger span').css("background-color","#FFFFFF"); } });
 
 $(window).on('load resize',function(){
  //ウィンドウの高さを取得する
  var targetY = $(window).height();
  
  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.js-scroll a').on('click',function(){
    $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing');
    return false;
  });
});
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
  $('.toggle').prop('checked', false);
    return false;
  });
});




$(function(){
    var effect_pos = 150; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

$(function(){

    var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    //親要素と子要素のcssを定義
    $('.scroll-fade-row').css({
        opacity: 0
    });
    $('.scroll-fade-row').children().each(function(){
        $(this).css({
            opacity: 0,
            transform: 'translateY('+ effect_move +'px)',
            transition: effect_time + 'ms'
        });
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        //エフェクトが発動したとき、子要素をずらしてフェードさせる
        $('.scroll-fade-row').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i){
                    $(this).delay(100 + i*200).queue(function(){
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });

});
$(this).children().each(function(i){
    $(this).delay(100 + i*200).queue(function(){
        $(this).css({
            opacity: 1,
            transform: 'translateY(0)'
        }).dequeue();
    });
});

$(function() {
    var menu = $('.menu3');    
    //スクロールしてページトップから100に達したらクラスを付与する
    $(window).on('load scroll',function () {
        if ($(this).scrollTop() > 100) {
            menu.addClass('active');
        } else {
            menu.removeClass('active');
        }
    });
});


jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
  $('a[href^="#"]').click(function(){
    var time = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });
});


$('.slick01').on('beforeChange', function () {
    $('.slick-current').removeClass('is--active');
  });
  $('.slick01').on('afterChange', function () {
    $('.slick-current').addClass('is--active');
  });

  $('.slick01').slick({

    responsive: [
      {
        breakpoint: 2000,
        settings: {
          autoplay: true, //「オプション名: 値」の形式で書く

          centerMode: true,
          centerPadding: '25%',

          autoplaySpeed: 2000,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          focusOnSelect: true,

          prevArrow: '<div class="prev">PREV</div>',
          nextArrow: '<div class="next">NEXT</div>'

        }
      },
      {
        breakpoint: 550,
        settings: {
          autoplay: true, //「オプション名: 値」の形式で書く

          centerMode: true,
          centerPadding: '10%',

          autoplaySpeed: 2000,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          focusOnSelect: true,

          prevArrow: '<div class="prev">PREV</div>',
          nextArrow: '<div class="next">NEXT</div>'

        }
      },
    ]
  });
