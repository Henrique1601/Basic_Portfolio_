import { CONFIG } from "./config.js";
import { getCurrentLang } from "./translate.js";

let supabase = null;

export async function initSupabase() {
  try {
    supabase = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);
    
    let { data: existing, error } = await supabase
      .from("page_visits")
      .select("visit_count")
      .eq("page_slug", CONFIG.PAGE_SLUG)
      .maybeSingle();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    if (existing) {
      const newCount = existing.visit_count + 1;
      await supabase
        .from("page_visits")
        .update({ 
          visit_count: newCount,
          last_visited: new Date().toISOString()
        })
        .eq("page_slug", CONFIG.PAGE_SLUG);
      
      displayVisitCount(newCount);
    } else {
      await supabase
        .from("page_visits")
        .insert({ 
          page_slug: CONFIG.PAGE_SLUG,
          visit_count: 1 
        });
      displayVisitCount(1);
    }

  } catch (err) {
    console.warn("Supabase não disponível:", err.message);
    displayVisitCountLocal();
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

  if (count <= 3) {
    showWelcomeMessage();
  }
}

function displayVisitCountLocal() {
  let visitCount = parseInt(localStorage.getItem("portfolioVisits") || "0");
  visitCount++;
  localStorage.setItem("portfolioVisits", visitCount);
  displayVisitCount(visitCount);
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

export async function initCVDownloadCounter() {
  if (!supabase) return;

  const downloadCVBtn = document.getElementById("downloadCVBtn");
  const cvDownloadCount = document.getElementById("cvDownloadCount");

  try {
    const { data, error } = await supabase
      .from("cv_downloads")
      .select("download_count")
      .eq("id", 1)
      .maybeSingle();

    if (error) throw error;

    let count = data?.download_count || 0;

    if (downloadCVBtn && cvDownloadCount) {
      cvDownloadCount.textContent = count;

      downloadCVBtn.addEventListener("click", async () => {
        count++;
        cvDownloadCount.textContent = count;

        try {
          await supabase
            .from("cv_downloads")
            .update({ download_count: count })
            .eq("id", 1);
        } catch (err) {
          console.warn("CV counter update error:", err);
        }
      });
    }
  } catch (err) {
    console.warn("CV counter init error:", err);
    if (cvDownloadCount) cvDownloadCount.textContent = "";
  }
}


