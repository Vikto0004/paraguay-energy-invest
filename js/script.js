const phoneInput = document.querySelector("#phone");
const faqTitles = document.querySelectorAll(".faq-title");

intlTelInput(phoneInput, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
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
