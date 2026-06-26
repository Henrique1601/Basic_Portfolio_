export function initMenu() {
  const btnMenu = document.getElementById("menuCheckbox");
  if (!btnMenu) return;

  document.addEventListener("click", (event) => {
    if (event.target !== btnMenu) {
      btnMenu.checked = false;
    }

    const navLink = event.target.closest(".menu ul li a");
    if (navLink && window.innerWidth < 600) {
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
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1500);
  }
}
