const phoneInput = document.querySelector("#phone");
const faqTitles = document.querySelectorAll(".faq-title");

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: "auto",
  speed: 1000,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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
  if (!localStorage.getItem("cookieAccepted")) {
    const cookiePopup = document.getElementById("cookie-popup");
    cookiePopup.style.display = "flex";
  }
}, 5000);

document.getElementById("accept-cookie").addEventListener("click", function () {
  const cookiePopup = document.getElementById("cookie-popup");
  cookiePopup.style.display = "none";
  localStorage.setItem("cookieAccepted", true);

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
