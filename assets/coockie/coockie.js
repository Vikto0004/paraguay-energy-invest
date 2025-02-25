setTimeout(function () {
  const cookiePopup = document.getElementById("cookie-popup-saf32423dssadfd");
  cookiePopup.style.display = "flex";
}, 5000);

document.getElementById("accept-cookie").addEventListener("click", function () {
  const cookiePopup = document.getElementById("cookie-popup-saf32423dssadfd");
  cookiePopup.style.display = "none";

  document.cookie =
    "cookieAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 365;
});

if (document.cookie.indexOf("cookieAccepted=true") !== -1) {
  document.getElementById("cookie-popup-saf32423dssadfd").style.display =
    "none";
}
