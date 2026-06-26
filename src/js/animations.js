const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

export function initAnimations() {
  // Fade in
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach(el => {
    fadeObserver.observe(el);
  });

  // Tech icons
  const techObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll("figure").forEach((figure) => {
    techObserver.observe(figure);
  });

  // Counters
  initCounters();

  // Section observer
  initSectionObserver();

  // Back to top
  initBackToTop();
}

function initCounters() {
  const counters = document.querySelectorAll(".counter__number");
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute("data-target"));
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();
        });
      }
    });
  }, { threshold: 0.5 });

  const countersSection = document.querySelector(".section__counters");
  if (countersSection) {
    counterObserver.observe(countersSection);
  }
}

function initSectionObserver() {
  const sections = document.querySelectorAll(".scroll-section");
  const navLinks = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("data-section") === id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

function initBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

export function initProgressBar() {
  const progressBar = document.getElementById("progressBar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  }, { passive: true });
}

export function initContributionGraph() {
  const contributionGrid = document.getElementById("contributionGrid");
  if (!contributionGrid) return;

  const levels = ["", "level-1", "level-2", "level-3", "level-4"];

  function generateContributions() {
    const weeks = 52;
    const daysPerWeek = 7;
    let html = "";

    for (let w = 0; w < weeks; w++) {
      html += '<div class="contribution-graph__week">';
      for (let d = 0; d < daysPerWeek; d++) {
        const level = Math.floor(Math.random() * 5);
        html += `<div class="contribution-graph__day ${levels[level]}"></div>`;
      }
      html += '</div>';
    }

    contributionGrid.innerHTML = html;
  }

  generateContributions();
}

export function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = lightbox.querySelector(".lightbox__close");
  const lightboxPrev = lightbox.querySelector(".lightbox__prev");
  const lightboxNext = lightbox.querySelector(".lightbox__next");

  let currentGalleryImages = [];
  let currentImageIndex = 0;

  window.openLightbox = function(images, index) {
    currentGalleryImages = images;
    currentImageIndex = index;
    lightboxImage.src = images[index];
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function navigateLightbox(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = currentGalleryImages.length - 1;
    if (currentImageIndex >= currentGalleryImages.length) currentImageIndex = 0;
    lightboxImage.src = currentGalleryImages[currentImageIndex];
  }

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrev?.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext?.addEventListener("click", () => navigateLightbox(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}
