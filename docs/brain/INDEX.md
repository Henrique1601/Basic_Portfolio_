# 🧠 Segundo Cérebro — Portfólio Henrique Bezerra

> Base de conhecimento perene e central de inteligência técnica do projeto [[Basic_Portfolio_]].
> Mantido e sincronizado pelo `memory-architect-agent` e orquestrado pelo `global-master-agent`.

---

## 📌 Índice de Navegação Rápida

- [[DECISIONS|Histórico de Decisões Arquiteturais (ADRs)]]
- [[GOTCHAS|Armadilhas Conhecidas & Soluções (Gotchas)]]
- [[Meu_Portifolio/Melhorias NewPortifolio|Melhorias & Otimizações Anteriores]]
- [[Meu_Portifolio/WCAG|Guia de Acessibilidade WCAG]]

---

## 🏛️ Visão Geral da Arquitetura

- **Paradigma**: Vanilla Moderno (HTML5 Modular + CSS3 Modular + ES6+ Modules sem bundler/build step).
- **Entrada Principal**: `index.html` → carrega `src/js/main.js?v=2` (com cache busting).
- **Carregador Dinâmico**: `src/js/loader.js` carrega componentes e seções assincronamente via `fetch`.
- **Estilos Modulares**: `css/main.css` centraliza 10 arquivos CSS especializados (`base`, `variables`, `animations`, `components`, `widgets`, `lightbox`, `effects`, `sections`, `medias`).
- **Persistência & Serviços**:
  - **Supabase**: Contadores de visitas e downloads de CV.
  - **EmailJS**: Formulário de contato com validação e feedback com confetti.
  - **GitHub API**: Contribuições ao vivo via endpoint público com fallback local em `src/data/github-contributions.json`.
  - **PWA**: `manifest.json` + `src/js/sw.js` (atualmente versão de cache `portfolio-henrique-v9`).

---

## 👥 Malha de Agentes & Papéis

| Agente | Responsabilidade Principal |
| :--- | :--- |
| `global-master-agent` | Comandante Supremo, ponto único de contato, orquestração e Double-Gate. |
| `planning-master-agent` | Estratégia, DAG de tarefas, `/grill-me`, riscos e especificações (PRD). |
| `memory-architect-agent` | Segundo Cérebro perene (`docs/brain/`, Obsidian Vault, zero amnésia). |
| `skills-orchestrator` | Hub conector das 685 skills, 20 universais e 9 fases de projeto. |
| `git-master-agent` | Portão 0 (pull/sync) e Portão 5 (validação, commits atômicos, push, tags). |
| `design-engineer-agent` | UI/UX Pro Max, microinterações, contraste e acessibilidade WCAG 2.2. |
| `qa-testing-agent` | TDD, Lighthouse audit (meta 90+), verificações funcionais e E2E. |
| `devops-cloud-agent` | GitHub Pages, CI/CD, PWA offline e Service Workers. |
