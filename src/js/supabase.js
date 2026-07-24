import { getCurrentLang } from "./translate.js";

const VISITS_KEY = "portfolioVisits";
const CV_DOWNLOADS_KEY = "cvDownloads";

export function initSupabase() {
  let visitCount = parseInt(localStorage.getItem(VISITS_KEY) || "0");
  visitCount++;
  localStorage.setItem(VISITS_KEY, visitCount);
  displayVisitCount(visitCount);

  if (visitCount <= 3) {
    showWelcomeMessage();
  }
}

function displayVisitCount(count) {
  const visitorCounter = document.createElement("div");
  visitorCounter.className = "visitor-counter";
  const visitsText = getCurrentLang() === "pt" ? "visitas" : "visits";

  const visitBadge = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>`;

  visitorCounter.innerHTML = `
    <span class="visitor-counter__icon">${visitBadge}</span>
    <span class="visitor-counter__number">${count}</span>
    <span>${visitsText}</span>
  `;
  document.body.appendChild(visitorCounter);
}

function showWelcomeMessage() {
  const welcomeMsg = document.createElement("div");
  welcomeMsg.className = "visitor-counter";
  welcomeMsg.style.bottom = "10rem";
  welcomeMsg.style.fontSize = "0.8rem";

  const handWave = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>`;

  const msgText = getCurrentLang() === "pt" ? "Que bom ter você aqui!" : "Great to have you here!";
  welcomeMsg.innerHTML = `<span>${handWave} ${msgText}</span>`;
  document.body.appendChild(welcomeMsg);
  setTimeout(() => welcomeMsg.remove(), 5000);
}

export function initCVDownloadCounter() {
  let count = parseInt(localStorage.getItem(CV_DOWNLOADS_KEY) || "0");

  const downloadCVBtn = document.getElementById("downloadCVBtn");
  const cvDownloadCount = document.getElementById("cvDownloadCount");

  if (downloadCVBtn && cvDownloadCount) {
    cvDownloadCount.textContent = count;

    downloadCVBtn.addEventListener("click", () => {
      count++;
      cvDownloadCount.textContent = count;
      localStorage.setItem(CV_DOWNLOADS_KEY, count);
    });
  }
}
