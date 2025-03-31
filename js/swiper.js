let swiperInstance;

function initSwiper() {
  if (window.innerWidth <= 1240 && !swiperInstance) {
    swiperInstance = new Swiper(".mySwiper", {
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  } else if (window.innerWidth > 1240 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

// Викликати при завантаженні сторінки
initSwiper();

// Перевіряти при зміні розміру вікна
window.addEventListener("resize", initSwiper);
