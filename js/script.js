const phoneInput = document.querySelector("#phone");
const faqTitles = document.querySelectorAll(".faq-title");

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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "thank-you.html";
  });

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

faqTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
