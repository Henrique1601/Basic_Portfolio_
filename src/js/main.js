import { initPWA } from "./pwa.js";
import { initTranslate, getCurrentLang } from "./translate.js";
import { initTheme } from "./theme.js";
import { initMusic } from "./music.js";
import { initSupabase, initCVDownloadCounter } from "./supabase.js";
import { initEmailForm } from "./email.js";
import { 
  initAnimations, 
  initProgressBar, 
  initContributionGraph, 
  initLightbox
} from "./animations.js";
import { 
  initCursor,
  initParticles,
  init3DTilt,
  initParallax,
  initConfetti
} from "./effects.js";
import { initModal, initFiltersAndPagination, initNewsletter } from "./ui.js";
import { initMenu, initMaisProjetos, initPreloader } from "./utils.js";
import { initHTMLLoader } from "./loader.js";
import { initAllFeatures, showToast } from "./features.js";

async function initApp() {
  await initHTMLLoader();
  
  initPreloader();
  initPWA();
  initTranslate();
  initTheme();
  initMusic();
  initProgressBar();
  initContributionGraph();
  initLightbox();
  initAnimations();
  initCursor();
  initParticles();
  init3DTilt();
  initParallax();
  initConfetti();
  initModal();
  initFiltersAndPagination();
  initNewsletter();
  initMenu();
  initMaisProjetos();
  
  // New features
  initAllFeatures();
  
  initSupabase().then(() => {
    initCVDownloadCounter();
  });
  
  initEmailForm();
  
  // Show welcome toast after load
  setTimeout(() => {
    showToast(
      getCurrentLang() === "pt" 
        ? "Bem-vindo! Pressione ? para ver atalhos" 
        : "Welcome! Press ? to see shortcuts",
      "info",
      4000
    );
  }, 2000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

export { getCurrentLang, showToast };
