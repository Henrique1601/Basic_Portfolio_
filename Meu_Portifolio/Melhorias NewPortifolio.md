---
title: "Melhorias & Otimizações — NewPortifolio"
tags:
  - portifolio
  - todo
  - performance
  - acessibilidade
  - seo
date: 2026-06-26
aliases:
  - "Melhorias"
  - "Otimizações"
  - "Auditoria"
---

# Melhorias & Otimizações — NewPortifolio

> [!abstract] Visão Geral
> Auditoria completa no portfólio (~40 oportunidades encontradas). Organizadas por impacto e esforço.
> [[Bem-vindo|← Voltar ao início]]

---

## 🔴 Alto Impacto

### 1. ✅ Remover `user-scalable=no`
- **Arquivo:** `index.html:6`
- **Motivo:** Falha [[WCAG]] 1.4.4 — impede pinch-zoom no mobile.
- **Solução:** Trocar `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">` por `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### 2. ✅ Otimizar hero image (3MB → 35KB WebP)
- **Arquivo:** `src/images/IMG_20231010_155423.png`
- **Atual:** 3488×4640 PNG (~3MB)
- **Solução:** Redimensionar para ~400×500 e converter para WebP.

### 3. ✅ Remover arquivos órfãos (~1.8MB)
- `src/images/Captura de tela.png` (375KB)
- `src/images/image1.png` (99KB)
- `src/svg/database.gif` (658KB)
- `src/svg/database-table.gif` (672KB)
- `src/svg/database.png` (12KB)
- `src/svg/nodejs.png` (29KB)
- `src/icons/index1.html` (~5KB)

### 4. ✅ Adicionar `prefers-reduced-motion`
- **Onde:** `effects.js`, `animations.css`, `features.js`, `widgets.css`
- **Afeta:** confetti, cursor customizado, parallax, morph shapes, 3D tilt, mouse trail
- **Solução:** Envolver animações com `@media (prefers-reduced-motion: reduce)` no CSS e `window.matchMedia("(prefers-reduced-motion: reduce)").matches` no JS.

### 5. ✅ Adicionar `preconnect` para CDNs
- **Adicionar em** `index.html`:
  - `<link rel="preconnect" href="https://cdn.jsdelivr.net">`
  - `<link rel="preconnect" href="https://supabase.co">`
  - `<link rel="preconnect" href="https://api.emailjs.com">`

---

## 🟡 Médio Impacto

### 6. ✅ Corrigir Service Worker (offline)
- `src/js/pwa.js:8-13` — registro do SW está **comentado**
- `src/js/sw.js:2-8` — cache list minimal, faltam todos CSS, JS, imagens, SVGs, HTML sections
- `src/js/sw.js` — sem fallback offline, sem versionamento de cache

### 7. ✅ Adicionar structured data (JSON-LD)
- Schema `Person` (name, jobTitle, url, sameAs)
- Schema `WebSite`
- Schema `ItemList` para projetos

### 8. ✅ CSS duplicado: `.time-on-page`
- `css/components.css:339` e `css/widgets.css:363` — mesma classe definida 2×
- **Solução:** Manter apenas uma.

### 9. ✅ Render-blocking scripts no `<head>`
- `index.html:26` — EmailJS CDN sem `defer`
- `index.html:29` — Supabase CDN sem `defer`

### 10. ✅ Broken link `MoreProjects`
- `utils.js:22` — redireciona para `./MoreProjects/index.html` que **não existe**

### 11. ✅ Alt text vazios em imagens
- `techs.html` — 17 imagens com `alt=""`
- `contact.html` — 4 ícones com `alt=""`
- `header.html` — 3 ícones sociais com `alt=""`

### 12. ⬜ Imagens de projetos duplicadas (sem replacements)
- 3 projetos diferentes (QR Code, Conversor Moedas, Blog+Vite) usam o **mesmo** `image.png`
- Cada projeto deveria ter sua própria screenshot

---

## 🟢 Esforço Maior

### 13. ✅ SEO Essentials
- `robots.txt` — instruções para crawlers
- `sitemap.xml` — lista todas as páginas (mesmo SPA, ajuda indexação)
- Twitter Cards (`twitter:card`, `twitter:title`, etc.)
- `og:url`, `og:type`, `og:locale`
- Tag `<link rel="canonical">`

### 14. ✅ Remover `console.log` de produção
- `sw.js`, `pwa.js`, `supabase.js`, `music.js` — 200+ logs
- Manter apenas logs de erro com condicional (`if (import.meta.env.DEV)` ou flag)

### 15. ✅ Skip navigation link
- Adicionar `<a href="#main" class="skip-link">Ir para conteúdo</a>` no início do `<body>`

### 16. ✅ Focus indicators
- `base.css:131` — `:focus-visible` sem fallback `:focus` para browsers antigos

### 17. ✅ Tradução incompleta
- `projects.html:10-13` — Filtros "Todos"/"Frontend"/"Full-Stack"/"API" sem `data-translate`
- `contact.html:42` — Input `subject` sem `data-translate-placeholder`
- Footer `© 2024` hardcoded

### 18. ✅ Config não utilizado (PATHS removido)
- `config.js:11-17` — Objeto `PATHS` definido mas **nunca importado** em nenhum módulo

### 19. ✅ Carregamento sequencial de HTML (Promise.all)
- `loader.js:128-131` — Components → Tags → Sections carregam um após o outro com `await`
- **Solução:** Usar `Promise.all` para paralelizar

### 20. ✅ DRY violations
- `getCurrentLang()` — duplicado em `translate.js` e `supabase.js`
- `observerOptions` — duplicado em `animations.js` e `features.js`

### 21. ✅ Newsletter sem backend (localStorage + toast)
- `ui.js:158-189` — Form submit só reseta e dispara confetti, sem enviar para lugar nenhum

### 22. ✅ Touch targets < 44px
- `sections.css:647` — Carrossel dots com 10×10px (mínimo WCAG 2.5.8: 44×44px)

### 23. ✅ Poluição do escopo global
- `window.changePage` (ui.js), `window.openLightbox` (animations.js), `window.launchConfetti` (effects.js)

---

## 📊 Resumo por Categoria

| Categoria | Qtd | Prioridade | Status |
|-----------|-----|------------|--------|
| Performance | 7 | 🔴 | 7/7 ✅ |
| Acessibilidade (WCAG) | 8 | 🔴 | 8/8 ✅ |
| SEO | 6 | 🟡 | 6/6 ✅ |
| Best Practices | 5 | 🟡 | 5/5 ✅ |
| Code Quality | 8 | 🟢 | 8/8 ✅ |
| UX | 4 | 🟢 | 4/4 ✅ |
| Maintainability | 4 | 🟢 | 4/4 ✅ |

---

> [!todo] Próximos passos sugeridos
> 1. ✅ Remover `user-scalable=no`
> 2. ✅ Hero image: 3MB PNG → 35KB WebP (400×533)
> 3. ✅ Todas as 9 screenshots de projetos: PNG → WebP (1.55MB economizados)
> 4. ✅ Remover arquivos órfãos (~1.8MB)
> 5. ✅ Adicionar `preconnect` para CDNs
> 6. ✅ Reativar Service Worker (HTTPS only)
> 7. ✅ Corrigir broken link MoreProjects
> 8. ✅ Remover console.log de SW/PWA (produção)
> 9. ✅ Unificar CSS duplicado (`.time-on-page`)
> 10. ✅ `prefers-reduced-motion` — CSS (4 arquivos) + JS (6 funções)
> 11. ⬜ Rodar Lighthouse (bloqueado por firewall local; roda no GitHub Pages)

**Total freed:** ~4.3MB em imagens (3MB hero + 1.55MB projetos - 300KB WebP)
**prefers-reduced-motion:** 4 arquivos CSS (animations.css, effects.css, widgets.css, components.css) com `@media (prefers-reduced-motion: reduce)` + 6 funções JS (confetti, cursor, particles, 3Dtilt, parallax, mouse trail) com early return
