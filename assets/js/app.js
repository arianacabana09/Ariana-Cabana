'use strict';
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 250) {
    $('nav').fadeIn("slow");
  } else {
    $('nav').fadeOut("slow");
  }
});

var typing = new Typed(".type",{
     strings: [" ","UI Developer","Coder","Front-end Web Developer"," "],
     typeSpeed: 100,
     backSpeed:80,
     loop:true
});
