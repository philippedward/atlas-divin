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

let activeFilter = null;

document.querySelectorAll(".filtre-button").forEach((button) => {
  button.addEventListener("click", function () {
    const filterCategory = this.dataset.filter;
    const cards = document.querySelectorAll(".god-card");

    if (activeFilter === filterCategory) {
      // Désactiver le filtre
      activeFilter = null;
      this.classList.remove("active");
      cards.forEach((card) => {
        card.classList.remove("hidden");
      });
    } else {
      // Désactiver l'ancien bouton
      document.querySelectorAll(".filtre-button").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Activer le nouveau filtre
      activeFilter = filterCategory;
      this.classList.add("active");

      cards.forEach((card) => {
        if (card.dataset.category === filterCategory) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    }
  });
});
