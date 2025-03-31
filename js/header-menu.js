const burgerBtn = document.querySelector(".burgerBtn");
const headerMenu = document.querySelector(".mobileMenu");
const closeBtn = document.querySelector(".closeBtn");

function openMenu() {
  headerMenu.classList.add("mobile-menu-active");
}

function closeMenu() {
  headerMenu.classList.remove("mobile-menu-active");
}

burgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
headerMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-nav-link")) {
    closeMenu();
  }
});
