const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "./thank-you.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookiePopup");
  const acceptCookies = document.getElementById("acceptCookies");

  if (!localStorage.getItem("cookiesAcceptedAxonIA")) {
    cookiePopup.style.display = "block";
  }

  acceptCookies &&
    acceptCookies.addEventListener("click", function () {
      localStorage.setItem("cookiesAcceptedAxonIA", "true");
      cookiePopup.style.display = "none";
    });
});
