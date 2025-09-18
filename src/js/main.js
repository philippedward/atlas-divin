document.querySelector("html").setAttribute("data-theme", "light");

const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

toggleDarkModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});

function toggleMenu() {
  var menu = document.getElementById("header-hidden-links");
  menu.classList.toggle("active");
}

window.toggleMenu = toggleMenu;
