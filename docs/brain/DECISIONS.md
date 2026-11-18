# 🏛️ Histórico de Decisões Arquiteturais (ADRs)

> Registro formal das decisões tomadas para garantir estabilidade, clareza e manutenibilidade.

---

### ADR-001: Arquitetura Vanilla ES Modules sem Bundler
- **Status**: Ativo
- **Contexto**: O projeto é hospedado via GitHub Pages e foi projetado para execução direta sem overhead de ferramentas como Vite, Webpack ou rollup.
- **Decisão**: Usar ES6 Modules nativos com `<script type="module">` e separação rigorosa de concerns (`src/js/` modular, `css/` modular, `src/html/sections/` e `src/html/components/`).
- **Consequência**: Sem tempo de compilação; requer atenção especial com caminhos relativos e versionamento de query string (`?v=N`) para evitar cache antigo nos navegadores.

---

### ADR-002: Arquitetura Double-Gate (Git Master nos Portões 0 e 5)
- **Status**: Ativo
- **Contexto**: Desenvolvimento multi-máquina com risco de conflitos e esquecimento de validações finais.
- **Decisão**: 
  - **Portão 0**: Toda sessão inicia com `git fetch` e validação silenciosa de sincronização remota.
  - **Portão 5**: Toda entrega encerra com verificação rigorosa, commit convencional e push seguro.
- **Consequência**: Zero descompasso entre máquinas e integridade absoluta do repositório remoto.

---

### ADR-003: Integração Híbrida de Contribuições do GitHub (Stale-While-Revalidate)
- **Status**: Ativo
- **Contexto**: A contagem estática de 156 contribuições estava defasada em relação ao perfil real do GitHub (`@Henrique1601` com 648+ contribuições), e o gráfico antigo era gerado aleatoriamente (`Math.random`).
- **Decisão**:
  1. Criar snapshot local `src/data/github-contributions.json` para renderização imediata (0ms) e suporte offline/PWA.
  2. Implementar busca assíncrona em background via API pública de contribuições com timeout controlado.
  3. Salvar resposta no `localStorage` sob a chave `gh_contributions_Henrique1601`.
  4. Renderizar tooltips exatos por dia com formatação i18n (PT/EN).
- **Consequência**: Gráfico 100% fiel à realidade do perfil, sem lentidão inicial no carregamento.

---

### ADR-004: Instituição Obrigatória do Segundo Cérebro Perene (`docs/brain/`)
- **Status**: Ativo
- **Contexto**: Manter continuidade operacional, contexto técnico acumulado e prevenir amnésia entre sessões de IA.
- **Decisão**: Todo o ecossistema armazena índice, decisões e gotchas sob `docs/brain/` com integração nativa com o Obsidian Vault (`Meu_Portifolio`).
- **Consequência**: Qualquer agente consegue retomar o projeto com compreensão total de restrições e regras.

---

### ADR-005: Princípio Ponytail (Anti-Overengineering Mandatório)
- **Status**: Ativo
- **Contexto**: Risco de adicionar pacotes pesados ou scripts desnecessários que comprometam a nota do Lighthouse ou a simplicidade da stack.
- **Decisão**: Resolver qualquer problema com o mínimo absoluto de código, reutilizar utilitários existentes, preferir APIs nativas da web (ex: `IntersectionObserver`, `matchMedia`, `requestAnimationFrame`).
- **Consequência**: Portfólio leve, rápido (Lighthouse 100 em Acessibilidade, Boas Práticas e SEO).


---

### ADR-006: Expansão para 45 Projetos com Thumbnails WebP de Alta Resolução
- **Status**: Ativo
- **Contexto**: O perfil do GitHub de Henrique Bezerra (`@Henrique1601`) alcançou 88 repositórios públicos, incluindo novos projetos de alto impacto (SocialCraft, AppCraft, Brechó da Fátima, HackerCraft, PromoCraft, OmniPDF Studio, CheatCraft, ComgasCraft).
- **Decisão**: Adicionar os 8 novos projetos com tags, categorização, `data-problem` e `data-solution` para o modal de case study, atualizando contadores globais (`counters.html`, `about.html`, `translate.js`).
- **Consequência**: Demonstração evidente de profundidade técnica e consistência em projetos reais.

---

### ADR-007: Artigos Técnicos Sênior no Blog com I18n
- **Status**: Ativo
- **Contexto**: Seção de Blog precisava de artigos reais e profundos abordando a stack e os problemas superados nos projetos recentes.
- **Decisão**: Publicar 3 novos artigos em PT e EN cobrindo Engenharia de Agentes Autônomos (Rede Full-Mesh), PWAs Offline-First para Vistorias e Arquitetura de Micro-SaaS com Next.js 15 e Neon Postgres.
- **Consequência**: Posicionamento sênior com autoridade técnica para recrutadores e clientes.

---

### ADR-008: Teaser Programático em Vídeo (Remotion + Player no Portfólio)
- **Status**: Ativo
- **Contexto**: Necessidade de demonstrar os destaques do portfólio de forma dinâmica no LinkedIn, GitHub Profile README e na própria página.
- **Decisão**:
  1. Criar projeto Remotion em `video/` com composições landscape (16:9) e square (1:1) a 60fps.
  2. Implementar modal e player interativo direto no Hero do portfólio com botão "Assistir Teaser", timeline, controles e botão de cópia do post para LinkedIn.
  3. Disponibilizar snippet pronto para inclusão no README do perfil GitHub.
- **Consequência**: Aumento expressivo no engajamento social e facilidade para recrutadores absorverem o ecossistema em 25 segundos.
