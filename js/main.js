$(document).ready(function() {
  "use strict";

  // SMOOTH SCROLLING
  $('.jump').on('click', function(e) {
    var target = $(this).attr('href');
    var targetElem = $(target);

    $('body').animate({
      scrollTop : targetElem.offset().top + 20
    }, 1000, 'swing');

    e.preventDefault();
  });

  // PARALLAX SCROLING
  $(window).scroll(function(){
    var wscroll = $(this).scrollTop();

    // NAVBAR
    if (wscroll >= 200 ) {
      $('.navbar').css('background', 'black')
    } else {
      $('.navbar').css('background', 'transparent')
    }

    // BANNER
    $('.banner').css('background-position', 'center ' + -(wscroll / 10) + 'px');

    // CALL T0 ACTION
    $('#call-to-action').css('background-position', 'center ' + -(wscroll / 20) + 'px');

    // GIFT REGISTRY
    $('#gift-registry').css('background-position', 'center ' + -(wscroll / 30) + 'px');

  });

});
