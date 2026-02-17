const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("menu-close");

function closeMenu() {
  burger.classList.remove("open");
  menu.classList.remove("active");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", closeMenu);

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
