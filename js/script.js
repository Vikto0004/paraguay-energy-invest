const phoneInput = document.querySelector("#phone");

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperHero = new Swiper(".mySwiperHero", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-swiper-pagination",
    clickable: true,
  },
  speed: 1600,
});

intlTelInput(phoneInput, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipinfo.io/json")
      .then((res) => res.json())
      .then((data) => callback(data.country))
      .catch(() => callback("us"));
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
});
phoneInput.classList.add("iti");

setTimeout(function () {
  const cookiePopup = document.getElementById("cookie-popup");
  cookiePopup.style.display = "flex";
}, 5000);

document.getElementById("accept-cookie").addEventListener("click", function () {
  const cookiePopup = document.getElementById("cookie-popup");
  cookiePopup.style.display = "none";

  document.cookie =
    "cookieAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 365;
});

if (document.cookie.indexOf("cookieAccepted=true") !== -1) {
  document.getElementById("cookie-popup").style.display = "none";
}
