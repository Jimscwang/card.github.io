let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
