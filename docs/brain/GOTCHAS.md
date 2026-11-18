# ⚠️ Armadilhas Conhecidas & Soluções (Gotchas)

> Lista de problemas técnicos superados e particularidades do ambiente para evitar regressões.

---

### 1. Cache Agressivo de Service Worker & ES Modules
- **Problema**: Ao atualizar arquivos `.js` ou `.css`, navegadores que registraram o Service Worker (`sw.js`) podem continuar servindo versões cacheadas antigas.
- **Solução**:
  - Sempre incrementar `CACHE_NAME` em `src/js/sw.js` (atualmente `portfolio-henrique-v9`).
  - Adicionar query string de versão nos imports e script tags quando houver alterações críticas (ex: `<script type="module" src="./src/js/main.js?v=2">`).

---

### 2. Contraste de Cores no Modo Claro vs. Modo Escuro
- **Problema**: Botões com fundo transparente ou bordas finas que funcionavam no tema escuro ficavam ilegíveis no tema claro (baixo contraste em relação ao fundo branco).
- **Solução**:
  - Utilizar variáveis semânticas como `var(--card-bg-solid)` e `var(--text-primary)`.
  - Para ícones SVG brancos externos/locais, aplicar `filter: invert(1)` dinamicamente no tema claro (`html[data-theme="light"]`).

---

### 3. Acessibilidade de Modais e Diálogos (WCAG 2.2)
- **Problema**: Modais de visualização (ex: artigos do blog) sem atributos ARIA geram alertas nos leitores de tela e derrubam a pontuação do Lighthouse.
- **Solução**:
  - Todo elemento de diálogo/modal deve conter: `role="dialog"`, `aria-modal="true"` e `aria-labelledby="<id-do-titulo>"`.
  - Capturar o foco ao abrir o modal e restaurar o foco para o elemento disparador ao fechar (`Escape` ou clique no botão de fechar).

---

### 4. Responsividade do Gráfico de Contribuições (52 semanas × 7 dias)
- **Problema**: A grade com 366 dias (52 colunas) quebra em telas móveis caso use `flex-wrap: wrap`, empilhando dias de forma errônea.
- **Solução**:
  - Usar `.contribution-graph__grid { overflow-x: auto; -webkit-overflow-scrolling: touch; }` com scrollbar sutil e `.contribution-graph__week { flex-shrink: 0; }`.

---

### 5. Contadores de Projetos e Traduções Sincronizados
- **Problema**: Ao adicionar novos projetos, se o total for atualizado apenas no HTML da seção, os contadores (`counters.html`), a seção "Sobre mim" e o arquivo `translate.js` (versões PT e EN) ficavam com números discrepantes.
- **Solução**:
  - Sempre atualizar em conjunto: `counters.html` (`data-target="24"`), `about.html`, `translate.js` (`about_summary` com "24 projects" / "24 projetos") e `projects.html`.
