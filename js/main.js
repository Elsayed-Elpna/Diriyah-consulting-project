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
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  on: {
    init: function (swiper) {
      lazyLoad();
    },
  },
});
