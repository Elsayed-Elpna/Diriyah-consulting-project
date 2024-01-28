var counselorSlider = new Swiper(".counselor-section .swiper-container", {
  loop: true,
  autoplay: true,
  preloadImages: false,
  pagination: {
    el: ".counselor-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".counselor-slider .swiper-btn-next",
    prevEl: ".counselor-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

new WOW().init();
