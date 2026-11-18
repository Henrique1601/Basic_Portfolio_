/**
 * ========================================
 * TEASER MODAL & PROGRAMMATIC PLAYER
 * ========================================
 */
import { getCurrentLang, showToast } from "./main.js";

const LINKEDIN_POST_TEXT = `🚀 De 0 a 45+ projetos entregues: como estruturei meu ecossistema de engenharia full-stack e IA.

Nos últimos meses foquei em resolver problemas práticos do mundo real, combinando arquitetura limpa, alta performance e inteligência artificial autônoma:

🔹 +45 Projetos completos em produção (micro-SaaS, PWAs de campo, ferramentas corporativas e CTF labs)
🔹 648 Contribuições reais no GitHub no último ano (@Henrique1601)
🔹 Rede Full-Mesh com 16 Agentes Especialistas de IA conectados via 26 servidores MCP e TypeSafe AI
🔹 PWAs Offline-First com IndexedDB e processamento client-side para vistorias técnicas

Confira o teaser do meu portfólio e explore os projetos ao vivo:
🌐 Portfólio: https://henrique1601.github.io/Basic_Portfolio_/
🐙 GitHub: https://github.com/Henrique1601

#FullStack #ArtificialIntelligence #NextJS #React #WebDevelopment #TypeScript #SoftwareEngineering #Portfolio`;

export function initTeaserModal() {
  let modal = document.getElementById("teaserModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "teaser-modal";
    modal.id = "teaserModal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "teaserModalTitle");

    modal.innerHTML = `
      <div class="teaser-modal__container">
        <div class="teaser-modal__header">
          <div class="teaser-modal__title" id="teaserModalTitle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #818cf8;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Portfólio Teaser &bull; Henrique Bezerra</span>
          </div>
          <button class="teaser-modal__close" id="closeTeaserBtn" aria-label="Fechar teaser">&times;</button>
        </div>

        <div class="teaser-player" id="teaserPlayer">
          <!-- Stage 1: Intro -->
          <div class="teaser-player__stage active" data-stage="0">
            <span class="teaser-badge">PORTFÓLIO &bull; FULL-STACK &bull; IA</span>
            <h2 class="teaser-heading">Henrique Bezerra</h2>
            <p class="teaser-subheading">Desenvolvedor Full-Stack &bull; Pós-graduado em Inteligência Artificial &bull; 45+ Projetos Entregues</p>
          </div>

          <!-- Stage 2: GitHub -->
          <div class="teaser-player__stage" data-stage="1">
            <span class="teaser-badge" style="color:#34d399; border-color: rgba(52,211,153,0.4); background: rgba(52,211,153,0.15);">CONSISTÊNCIA &bull; GITHUB ACTIVITY</span>
            <div class="teaser-stat-number" id="teaserGithubCount">648</div>
            <p class="teaser-subheading">contribuições reais no último ano &bull; @Henrique1601</p>
            <div style="margin-top: 15px; font-size: 0.95rem; color: #818cf8;">Picos de 113 contribuições/dia &bull; 88 Repositórios</div>
          </div>

          <!-- Stage 3: AI & Full-Mesh -->
          <div class="teaser-player__stage" data-stage="2">
            <span class="teaser-badge" style="color:#c084fc; border-color: rgba(192,132,252,0.4); background: rgba(192,132,252,0.15);">ENGENHARIA DE IA</span>
            <h2 class="teaser-heading" style="font-size: 2rem;">Rede Full-Mesh com 16 Agentes</h2>
            <div class="teaser-grid">
              <div class="teaser-card" style="border-color: rgba(56,189,248,0.4);"><strong style="color:#38bdf8;">TypeSafe AI</strong><div style="font-size: 0.85rem; color:#cbd5e1; margin-top:4px;">Schemas Zod e zero alucinação</div></div>
              <div class="teaser-card" style="border-color: rgba(192,132,252,0.4);"><strong style="color:#c084fc;">26 Servidores MCP</strong><div style="font-size: 0.85rem; color:#cbd5e1; margin-top:4px;">Model Context Protocol ativo</div></div>
              <div class="teaser-card" style="border-color: rgba(52,211,153,0.4);"><strong style="color:#34d399;">Segundo Cérebro</strong><div style="font-size: 0.85rem; color:#cbd5e1; margin-top:4px;">Zero amnésia &amp; Obsidian</div></div>
              <div class="teaser-card" style="border-color: rgba(244,63,94,0.4);"><strong style="color:#f43f5e;">Lighthouse 100</strong><div style="font-size: 0.85rem; color:#cbd5e1; margin-top:4px;">Acessibilidade, SEO e Práticas</div></div>
            </div>
          </div>

          <!-- Stage 4: Projects Showcase -->
          <div class="teaser-player__stage" data-stage="3">
            <span class="teaser-badge" style="color:#38bdf8; border-color: rgba(56,189,248,0.4); background: rgba(56,189,248,0.15);">PRODUÇÃO &bull; 45+ PROJETOS</span>
            <h2 class="teaser-heading" style="font-size: 2rem;">Projetos em Destaque</h2>
            <div class="teaser-grid">
              <div class="teaser-card"><strong style="color:#fff;">SocialCraft Studio</strong><div style="font-size:0.85rem; color:#a855f7;">Remotion + GSAP + IA</div></div>
              <div class="teaser-card"><strong style="color:#fff;">AppCraft</strong><div style="font-size:0.85rem; color:#06b6d4;">Next.js 15 + Neon Postgres</div></div>
              <div class="teaser-card"><strong style="color:#fff;">HackerCraft</strong><div style="font-size:0.85rem; color:#10b981;">CTF Labs &amp; AI Tutor</div></div>
              <div class="teaser-card"><strong style="color:#fff;">Fotos Hidrômetros</strong><div style="font-size:0.85rem; color:#3b82f6;">PWA Offline-First de Campo</div></div>
            </div>
          </div>

          <!-- Stage 5: Outro & CTA -->
          <div class="teaser-player__stage" data-stage="4">
            <h2 class="teaser-heading" style="font-size: 2.2rem;">Construindo Soluções Reais</h2>
            <p class="teaser-subheading">Disponível para novos desafios, contratações e projetos de alto impacto.</p>
            <div style="display: flex; gap: 15px; margin-top: 25px; flex-wrap: wrap; justify-content: center;">
              <a href="https://www.linkedin.com/in/henrique-bezerra-dos-santos-9802321a3/" target="_blank" rel="noopener noreferrer" class="teaser-action-btn teaser-action-btn--primary">
                Conectar no LinkedIn
              </a>
              <a href="https://github.com/Henrique1601" target="_blank" rel="noopener noreferrer" class="teaser-action-btn teaser-action-btn--secondary">
                GitHub @Henrique1601
              </a>
            </div>
          </div>
        </div>

        <div class="teaser-controls">
          <button class="teaser-play-btn" id="teaserPlayBtn" aria-label="Pausar / Reproduzir">❚❚</button>
          <div class="teaser-progress-bar" id="teaserProgressBar">
            <div class="teaser-progress-fill" id="teaserProgressFill"></div>
          </div>
          <span class="teaser-time" id="teaserTime">0:00 / 0:25</span>
        </div>

        <div class="teaser-actions">
          <button class="teaser-action-btn teaser-action-btn--primary" id="copyLinkedinPostBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>Copiar Texto do Post para LinkedIn</span>
          </button>
          <a href="https://github.com/Henrique1601/Basic_Portfolio_" target="_blank" rel="noopener noreferrer" class="teaser-action-btn teaser-action-btn--secondary">
            Código do Portfólio no GitHub &rarr;
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  const stages = modal.querySelectorAll(".teaser-player__stage");
  const progressFill = modal.querySelector("#teaserProgressFill");
  const progressBar = modal.querySelector("#teaserProgressBar");
  const timeDisplay = modal.querySelector("#teaserTime");
  const playBtn = modal.querySelector("#teaserPlayBtn");
  const closeBtn = modal.querySelector("#closeTeaserBtn");
  const copyLinkedinBtn = modal.querySelector("#copyLinkedinPostBtn");

  const TOTAL_DURATION_SEC = 25;
  const STAGE_DURATION_SEC = TOTAL_DURATION_SEC / stages.length; // 5s each
  let currentTime = 0;
  let isPlaying = false;
  let animationFrameId = null;
  let lastTimestamp = null;
  let triggerButton = null;

  function setStage(index) {
    stages.forEach((s, idx) => {
      s.classList.toggle("active", idx === index);
    });
  }

  function updateDisplay() {
    const stageIdx = Math.min(stages.length - 1, Math.floor(currentTime / STAGE_DURATION_SEC));
    setStage(stageIdx);

    const percent = Math.min(100, (currentTime / TOTAL_DURATION_SEC) * 100);
    if (progressFill) progressFill.style.width = percent + "%";

    const curSec = Math.floor(currentTime);
    const curMin = Math.floor(curSec / 60);
    const curSecMod = curSec % 60;
    const timeStr = `${curMin}:${curSecMod < 10 ? '0' : ''}${curSecMod} / 0:25`;
    if (timeDisplay) timeDisplay.textContent = timeStr;
  }

  function loop(timestamp) {
    if (!isPlaying) return;
    if (lastTimestamp === null) lastTimestamp = timestamp;
    const delta = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    currentTime += delta;
    if (currentTime >= TOTAL_DURATION_SEC) {
      currentTime = 0; // loop
    }

    updateDisplay();
    animationFrameId = requestAnimationFrame(loop);
  }

  function play() {
    isPlaying = true;
    lastTimestamp = null;
    if (playBtn) playBtn.textContent = "❚❚";
    animationFrameId = requestAnimationFrame(loop);
  }

  function pause() {
    isPlaying = false;
    if (playBtn) playBtn.textContent = "▶";
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function openModal() {
    modal.classList.add("active");
    currentTime = 0;
    updateDisplay();
    play();
  }

  function closeModal() {
    pause();
    modal.classList.remove("active");
    if (triggerButton) triggerButton.focus();
  }

  // Event Listeners
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      isPlaying ? pause() : play();
    }
  });

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      isPlaying ? pause() : play();
    });
  }

  if (progressBar) {
    progressBar.addEventListener("click", (e) => {
      const rect = progressBar.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      currentTime = pos * TOTAL_DURATION_SEC;
      lastTimestamp = null;
      updateDisplay();
    });
  }

  if (copyLinkedinBtn) {
    copyLinkedinBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(LINKEDIN_POST_TEXT);
        showToast(
          getCurrentLang() === "pt"
            ? "Texto do post para LinkedIn copiado com sucesso!"
            : "LinkedIn post text copied to clipboard!",
          "success",
          4000
        );
      } catch (_) {
        showToast("Erro ao copiar. Selecione o texto manualmente.", "error");
      }
    });
  }

  // Delegate click for #openTeaserBtn (in hero section)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("#openTeaserBtn");
    if (btn) {
      triggerButton = btn;
      openModal();
    }
  });
}
