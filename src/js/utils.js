export function initMenu() {
  const btnMenu = document.getElementById("menuCheckbox");
  if (!btnMenu) return;

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu")) {
      btnMenu.checked = false;
    }

    const navLink = event.target.closest(".menu ul li a");
    if (navLink) {
      btnMenu.checked = false;
    }
  });
}

export function initMaisProjetos() {
  const Btn_avancar = document.getElementById("Mais-projetos");
  if (!Btn_avancar) return;

  Btn_avancar.addEventListener("click", () => {
    window.location.href = "./index.html#projects";
  });
}

export function initPreloader() {
  const preloaders = document.querySelectorAll(".preloader");
  if (preloaders.length > 0) {
    setTimeout(() => {
      preloaders.forEach(p => {
        p.classList.add("hidden");
      });
    }, 1000);
  }
}
