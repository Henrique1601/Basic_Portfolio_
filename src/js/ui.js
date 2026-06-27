import { getCurrentLang } from "./translate.js";
import { launchConfetti } from "./effects.js";
import { showToast } from "./features.js";

export function initModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
    modal.innerHTML = `
    <div class="modal__content">
      <button class="modal__close" aria-label="Fechar">&times;</button>
      <img class="modal__image" src="" alt="" id="modalMainImage">
      <div class="gallery" id="modalGallery"></div>
      <div class="modal__body">
        <h2 class="modal__title"></h2>
        <p class="modal__description"></p>
        <div class="modal__techs"></div>
        <div class="modal__links"></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalClose = modal.querySelector(".modal__close");
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", (e) => {
      if (e.target.tagName === "A") return;

      const title = project.querySelector("h4").textContent;
      const desc = project.querySelector(".project__description p:first-of-type").textContent;
      const techs = Array.from(project.querySelectorAll(".tag")).map(tag => tag.textContent);
      const imgSrc = project.querySelector("img").src;
      const repoLink = project.querySelector('.links a[href*="github"]')?.href || "#";
      const demoLink = project.querySelector('.links a:last-child')?.href || "#";

      modal.querySelector(".modal__title").textContent = title;
      modal.querySelector(".modal__description").textContent = desc;
      modal.querySelector(".modal__image").src = imgSrc;
      modal.querySelector(".modal__image").alt = title;

      const techsContainer = modal.querySelector(".modal__techs");
      techsContainer.innerHTML = techs.map(tech => `<span class="modal__tech">${tech}</span>`).join("");

      const linksContainer = modal.querySelector(".modal__links");
      const repoText = getCurrentLang() === "pt" ? "Repositório" : "Repository";
      const demoText = "Demo";
      linksContainer.innerHTML = `
        <a href="${repoLink}" target="_blank" class="modal__link">${repoText}</a>
        ${demoLink !== "#" ? `<a href="${demoLink}" target="_blank" class="modal__link">${demoText}</a>` : ""}
      `;

      modal.classList.add("active");
    });
  });
}

export function initFiltersAndPagination() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");
  const pagination = document.getElementById("pagination");
  const projectsPerPage = 6;
  let currentPage = 1;

  function changePage(page) {
    const visibleProjects = Array.from(projects).filter(p => !p.classList.contains("hidden"));
    const totalPages = Math.ceil(visibleProjects.length / projectsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    
    const startIndex = (page - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    
    visibleProjects.forEach((project, index) => {
      if (index >= startIndex && index < endIndex) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
    
    updatePagination();
  }

  function updatePagination() {
    const visibleProjects = Array.from(projects).filter(p => !p.classList.contains("hidden"));
    const totalPages = Math.ceil(visibleProjects.length / projectsPerPage);
    
    if (totalPages <= 1 || !pagination) {
      if (pagination) pagination.innerHTML = "";
      return;
    }

    const prevText = getCurrentLang() === "pt" ? "← Anterior" : "← Previous";
    const nextText = getCurrentLang() === "pt" ? "Próxima →" : "Next →";

    let paginationHTML = "";

    const prevLabel = getCurrentLang() === "pt" ? "Página anterior" : "Previous page";
    const nextLabel = getCurrentLang() === "pt" ? "Próxima página" : "Next page";
    const pageLabel = getCurrentLang() === "pt" ? "Página" : "Page";

    paginationHTML += `<button class="pagination__btn" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""} aria-label="${prevLabel}">
      ${prevText}
    </button>`;

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="pagination__btn ${i === currentPage ? "active" : ""}" data-page="${i}" aria-label="${pageLabel} ${i}">
        ${i}
      </button>`;
    }

    paginationHTML += `<button class="pagination__btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""} aria-label="${nextLabel}">
      ${nextText}
    </button>`;

    pagination.innerHTML = paginationHTML;
  }

  pagination?.addEventListener("click", (e) => {
    const btn = e.target.closest(".pagination__btn");
    if (btn && !btn.disabled) {
      const page = parseInt(btn.getAttribute("data-page"));
      if (!isNaN(page)) changePage(page);
    }
  });

  function filterProjects(filter) {
    currentPage = 1;
    
    projects.forEach(project => {
      if (filter === "all") {
        project.classList.remove("hidden");
      } else {
        const categories = project.getAttribute("data-category");
        if (categories && categories.includes(filter)) {
          project.classList.remove("hidden");
        } else {
          project.classList.add("hidden");
        }
      }
    });
    
    changePage(1);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterProjects(btn.getAttribute("data-filter"));
    });
  });

  filterProjects("all");
}

export function initNewsletter() {
  const popup = document.getElementById("newsletterPopup");
  const popupClose = document.getElementById("popupClose");
  const newsletterForm = document.getElementById("newsletterForm");
  
  if (!popup) return;
  
  const popupShown = sessionStorage.getItem("popupShown");
  if (!popupShown) {
    setTimeout(() => {
      popup.classList.add("active");
      sessionStorage.setItem("popupShown", "true");
    }, 5000);
  }
  
  popupClose?.addEventListener("click", () => {
    popup.classList.remove("active");
  });
  
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
  
  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input[type=email]")?.value;
    if (email) {
      localStorage.setItem("newsletter_email", email);
      showToast(getCurrentLang() === "pt" ? "Inscrição realizada com sucesso!" : "Successfully subscribed!", "success");
    }
    launchConfetti();
    popup.classList.remove("active");
    newsletterForm.reset();
  });
}
