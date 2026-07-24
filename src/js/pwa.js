let deferredPrompt;

export function initPWA() {
  const pwaBanner = document.getElementById("pwaInstallBanner");
  const pwaInstallBtn = document.getElementById("pwaInstallBtn");
  const pwaDismissBtn = document.getElementById("pwaDismissBtn");

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  // Install Prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    setTimeout(() => {
      if (!localStorage.getItem("pwaDismissed")) {
        pwaBanner?.classList.add("show");
      }
    }, 10000);
  });

  if (pwaInstallBtn) {
    pwaInstallBtn.addEventListener("click", async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          localStorage.setItem("pwaInstalled", "true");
        }
        deferredPrompt = null;
        pwaBanner?.classList.remove("show");
      }
    });
  }

  if (pwaDismissBtn) {
    pwaDismissBtn.addEventListener("click", () => {
      pwaBanner?.classList.remove("show");
      localStorage.setItem("pwaDismissed", "true");
    });
  }

  // Offline Indicator
  const offlineIndicator = document.createElement("div");
  offlineIndicator.className = "offline-indicator";
  offlineIndicator.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
    <line x1="1" y1="1" x2="23" y2="23"/>
    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
    <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg> Você está offline`;
  document.body.appendChild(offlineIndicator);

  window.addEventListener("offline", () => {
    offlineIndicator.classList.add("show");
  });

  window.addEventListener("online", () => {
    offlineIndicator.classList.remove("show");
  });
}
