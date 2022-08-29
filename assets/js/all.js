"use strict";

$(function () {
  $('.search').click(function (e) {
    e.preventDefault();

    if (jQuery(window).width() < 768) {
      $('h1').addClass('d-none');
      $('.navbar-toggler').addClass('d-none');
      $('.search-bar').removeClass('d-none');
      $('.search-back').removeClass('d-none');
      $('.search-form').removeClass('ms-auto');
      $('.search-form').addClass('p-1');
    }
  });
  $('.search-back').click(function (e) {
    $('h1').removeClass('d-none');
    $('.navbar-toggler').removeClass('d-none');
    $('.search-bar').addClass('d-none');
    $('.search-back').addClass('d-none');
    $('.search-form').addClass('ms-auto');
    $('.search-form').removeClass('p-1');
  });
});
"use strict";

var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  centeredSlides: true,
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});
//# sourceMappingURL=all.js.map
