/**
 * ========================================
 * FEATURES - Carousel, Toast, Time Counter, etc.
 * ========================================
 */

import { getCurrentLang } from "./translate.js";

/* ========================================
   TESTIMONIALS CAROUSEL
   ======================================== */
export function initTestimonialsCarousel() {
  const track = document.getElementById("testimonialsTrack");
  const wrapper = track?.parentElement;
  const dotsContainer = document.getElementById("testimonialDots");
  const prevBtn = document.getElementById("testimonialPrev");
  const nextBtn = document.getElementById("testimonialNext");
  
  if (!track || !dotsContainer) return;
  
  const testimonials = track.querySelectorAll(".testimonial");
  let currentIndex = 0;
  const totalSlides = testimonials.length;
  let autoplayInterval;
  let touchStartX = 0;
  let touchEndX = 0;
  
  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = `testimonials-carousel__dot ${i === 0 ? "active" : ""}`;
    dot.setAttribute("role", "button");
    dot.setAttribute("aria-label", `Depoimento ${i + 1}`);
    dot.setAttribute("tabindex", "0");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  
  function updateCarousel() {
    const offset = currentIndex * 100;
    track.style.transform = `translateX(-${offset}%)`;
    
    // Update dots
    dotsContainer.querySelectorAll(".testimonials-carousel__dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
    
    // Update button states
    if (prevBtn) {
      prevBtn.disabled = false;
    }
    if (nextBtn) {
      nextBtn.disabled = false;
    }
  }
  
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    updateCarousel();
  }
  
  function startAutoplay() {
    autoplayInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  prevBtn?.addEventListener("click", () => {
    stopAutoplay();
    goToSlide(currentIndex - 1);
    startAutoplay();
  });
  
  nextBtn?.addEventListener("click", () => {
    stopAutoplay();
    goToSlide(currentIndex + 1);
    startAutoplay();
  });
  
  // Touch support for mobile
  track.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });
  
  track.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoplay();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }
  }
  
  // Pause on hover (desktop)
  wrapper?.addEventListener("mouseenter", stopAutoplay);
  wrapper?.addEventListener("mouseleave", startAutoplay);
  
  // Start autoplay
  startAutoplay();
}

/* ========================================
   TOAST NOTIFICATIONS
   ======================================== */
let toastContainer = null;

export function showToast(message, type = "info", duration = 3000) {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  
  const icons = {
    success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  };
  
  toast.innerHTML = `${icons[type] || icons.info}<span>${message}</span>`;
  toastContainer.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);
  
  // Remove after duration
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ========================================
   TIME ON PAGE COUNTER
   ======================================== */
export function initTimeOnPage() {
  const timeBadge = document.createElement("div");
  timeBadge.className = "time-on-page";
  timeBadge.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
    <span id="timeCounter">0:00</span>
  `;
  document.body.appendChild(timeBadge);
  
  let seconds = 0;
  setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeStr = `${mins}:${secs.toString().padStart(2, "0")}`;
    const timeCounter = document.getElementById("timeCounter");
    if (timeCounter) timeCounter.textContent = timeStr;
  }, 1000);
}

/* ========================================
   KEYBOARD SHORTCUTS
   ======================================== */
export function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    
    switch (e.key.toLowerCase()) {
      case "t":
        // Toggle theme
        const themeToggle = document.getElementById("themeToggle");
        themeToggle?.click();
        showToast(getCurrentLang() === "pt" ? "Tema alternado!" : "Theme toggled!", "info");
        break;
      case "m":
        // Toggle music
        const musicToggle = document.getElementById("musicToggle");
        musicToggle?.click();
        break;
      case "arrowup":
      case "u":
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "arrowdown":
      case "d":
        // Scroll to bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        break;
      case "p":
        // Projects section
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "c":
        // Contact section
        document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "h":
        // Home section
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "l":
        // Toggle language
        const langToggle = document.getElementById("languageToggle");
        langToggle?.click();
        break;
      case "?":
        // Show shortcuts help
        showShortcutsHelp();
        break;
    }
  });
}

function showShortcutsHelp() {
  const shortcuts = [
    ["T", "Alternar tema"],
    ["M", "Ligar/desligar música"],
    ["H", "Ir para início"],
    ["P", "Ir para projetos"],
    ["C", "Ir para contato"],
    ["↑/U", "Rolar para cima"],
    ["↓/D", "Rolar para baixo"],
    ["L", "Alternar idioma"],
    ["?", "Mostrar atalhos"]
  ];
  
  const modal = document.createElement("div");
  modal.className = "shortcuts-modal";
  modal.innerHTML = `
    <div class="shortcuts-modal__content">
      <button class="shortcuts-modal__close" aria-label="Fechar">&times;</button>
      <h3>⌨️ Atalhos de Teclado</h3>
      <div class="shortcuts-modal__list">
        ${shortcuts.map(([key, desc]) => `
          <div class="shortcuts-modal__item">
            <kbd>${key}</kbd>
            <span>${desc}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const closeModal = () => {
    modal.classList.remove("show");
    setTimeout(() => modal.remove(), 300);
  };
  
  modal.querySelector(".shortcuts-modal__close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  
  setTimeout(() => modal.classList.add("show"), 10);
}

/* ========================================
   ENHANCED SCROLL ANIMATIONS
   ======================================== */
export function initEnhancedScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  // Stagger animation for grid items
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, index) => {
          child.style.animationDelay = `${index * 0.1}s`;
          child.classList.add("stagger-animate");
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll(".certificates__container, .testimonials-carousel, .projects__container").forEach(el => {
    staggerObserver.observe(el);
  });
  
  // Scale animation for sections
  const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scale-animate");
        scaleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll(".section__counters, .contribution-graph").forEach(el => {
    scaleObserver.observe(el);
  });
}

/* ========================================
   MOUSE TRAIL EFFECT
   ======================================== */
export function initMouseTrail() {
  if (window.matchMedia("(max-width: 1023px)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  
  const trailContainer = document.createElement("div");
  trailContainer.className = "mouse-trail";
  document.body.appendChild(trailContainer);
  
  let particles = [];
  const maxParticles = 20;
  
  document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 2; i++) {
      if (particles.length >= maxParticles) {
        const oldest = particles.shift();
        oldest.remove();
      }
      
      const particle = document.createElement("div");
      particle.className = "mouse-trail__particle";
      particle.style.left = `${e.clientX + (Math.random() - 0.5) * 10}px`;
      particle.style.top = `${e.clientY + (Math.random() - 0.5) * 10}px`;
      trailContainer.appendChild(particle);
      particles.push(particle);
      
      setTimeout(() => {
        particle.classList.add("fade");
        setTimeout(() => {
          const idx = particles.indexOf(particle);
          if (idx > -1) particles.splice(idx, 1);
          particle.remove();
        }, 500);
      }, 100);
    }
  });
}

/* ========================================
   SKELETON LOADING
   ======================================== */
export function initSkeletonLoading() {
  // Add skeleton class during initial load
  const main = document.querySelector("main");
  if (main) {
    main.classList.add("skeleton-loading");
    
    // Remove skeleton after animations complete
    setTimeout(() => {
      main.classList.remove("skeleton-loading");
    }, 2000);
  }
}

/* ========================================
   INIT ALL FEATURES
   ======================================== */
export function initAllFeatures() {
  initTestimonialsCarousel();
  initTimeOnPage();
  initKeyboardShortcuts();
  initEnhancedScrollAnimations();
  initMouseTrail();
  initSkeletonLoading();
}
