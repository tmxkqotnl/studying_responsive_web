$(document).ready(function(){
    // click js
    $('.trigger').click(function(){
        $(this).toggleClass('active');
        $('.gnb').toggleClass('active');
    });
    $('section, .menu a').click(function(){
        $('.gnb').removeClass('active');
        $('.trigger').removeClass('active');
    });
    
    // gnb menu scroll to section:id
    $('.menu a, .goToTop').click(function(e){
        e.preventDefault();
        $.scrollTo(this.hash||0,900); // window
    });

    // Change CSS with Scroll
    $(window).scroll(function(e){
        if($(window).scrollTop()>0){
            $('header, .goToTop').addClass('active');
        }else{  
            $('header, .goToTop').removeClass('active');
        }
    });
    // slick.js history-slider
    $('.history-slider').slick({
      dots: true,
      infinite: false,
      speed: 100,
      slidesToShow: 4,
      slidesToScroll: 3,
    });
});