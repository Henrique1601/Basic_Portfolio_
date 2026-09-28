export const observerOptions = {
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
          link.removeAttribute("aria-current");
          if (link.getAttribute("data-section") === id) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
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

export async function initContributionGraph() {
  const contributionGrid = document.getElementById("contributionGrid");
  const totalEl = document.getElementById("totalContributions");
  if (!contributionGrid) return;

  const levels = ["", "level-1", "level-2", "level-3", "level-4"];
  const CACHE_KEY = "gh_contributions_Henrique1601";

  function formatDate(dateStr, isPt) {
    try {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        return d.toLocaleDateString(isPt ? "pt-BR" : "en-US", {
          day: "numeric",
          month: "short",
          year: "numeric"
        });
      }
    } catch (_) {}
    return dateStr;
  }

  function renderGrid(contributions, total) {
    if (totalEl && total !== undefined && total !== null) {
      totalEl.textContent = total;
    }

    if (!Array.isArray(contributions) || contributions.length === 0) return;

    const isPt = (document.documentElement.lang || "pt").toLowerCase().startsWith("pt");
    let html = "";

    for (let i = 0; i < contributions.length; i += 7) {
      const week = contributions.slice(i, i + 7);
      html += '<div class="contribution-graph__week">';
      for (const day of week) {
        const levelClass = levels[day.level] || "";
        const formattedDate = formatDate(day.date, isPt);
        let tip = "";
        if (!day.count || day.count === 0) {
          tip = isPt ? `Nenhuma contribuição em ${formattedDate}` : `No contributions on ${formattedDate}`;
        } else if (day.count === 1) {
          tip = isPt ? `1 contribuição em ${formattedDate}` : `1 contribution on ${formattedDate}`;
        } else {
          tip = isPt ? `${day.count} contribuições em ${formattedDate}` : `${day.count} contributions on ${formattedDate}`;
        }

        html += `<div class="contribution-graph__day ${levelClass}" title="${tip}" data-date="${day.date}" data-count="${day.count || 0}"></div>`;
      }
      html += '</div>';
    }

    contributionGrid.innerHTML = html;
  }

  // 1. Try local cache first for instant render
  let rendered = false;
  try {
    const rawCache = localStorage.getItem(CACHE_KEY);
    if (rawCache) {
      const parsed = JSON.parse(rawCache);
      if (parsed && parsed.data && Array.isArray(parsed.data.contributions)) {
        renderGrid(parsed.data.contributions, parsed.data.total?.lastYear);
        rendered = true;
      }
    }
  } catch (_) {}

  // 2. Fallback to local snapshot JSON if cache didn't render
  if (!rendered) {
    try {
      const res = await fetch("src/data/github-contributions.json");
      if (res.ok) {
        const localData = await res.json();
        if (localData && Array.isArray(localData.contributions)) {
          renderGrid(localData.contributions, localData.total?.lastYear);
          rendered = true;
        }
      }
    } catch (_) {}
  }

  // 3. Fetch latest live data from public GitHub API in background
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const apiRes = await fetch("https://github-contributions-api.jogruber.de/v4/Henrique1601?y=last", {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (apiRes.ok) {
      const liveData = await apiRes.json();
      if (liveData && Array.isArray(liveData.contributions)) {
        renderGrid(liveData.contributions, liveData.total?.lastYear);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: liveData
          }));
        } catch (_) {}
      }
    }
  } catch (_) {
    // Graceful fallback
  }
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

  function openLightbox(images, index) {
    currentGalleryImages = images;
    currentImageIndex = index;
    lightboxImage.src = images[index];
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

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
