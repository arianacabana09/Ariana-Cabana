'use strict';

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 250) {
    $('nav').fadeIn("slow");
  } else {
    $('nav').fadeOut("slow");
  }
});
