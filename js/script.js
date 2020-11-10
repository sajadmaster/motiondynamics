var swiper = new Swiper('.header-swiper-container', {
  loop: true,
  pagination: {
    el: '.header-swiper-pagination',
    clickable: true,
  },
});

var swiper2 = new Swiper('.middle-swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.middle-swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.middle-swiper-button-next',
    prevEl: '.middle-swiper-button-prev',
  },
});

$(document).ready(function() {
  $('.responsive-menu-icon .menu-icon').click(function() {
    $('.responsive-menu-section').toggle();
  });
});
