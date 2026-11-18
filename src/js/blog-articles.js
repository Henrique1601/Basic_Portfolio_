/**
 * ========================================
 * BLOG ARTICLES - conteúdo real em PT/EN
 * ========================================
 */

export const blogArticles = {
  pt: {
    "service-worker": {
      title: "Otimizando SPAs com Service Worker",
      date: "20 Jun 2026",
      tag: "Tecnologia",
      readingTime: "6 min",
      intro:
        "Aplicações web modernas precisam carregar rápido e funcionar até offline. Neste artigo mostro como implementei um cache inteligente no meu portfólio usando Service Worker — e como você pode aplicar o mesmo padrão em qualquer projeto.",
      sections: [
        {
          heading: "O que é o Service Worker?",
          body: "É um script que o navegador executa em segundo plano, separado da página. Ele intercepta requisições de rede e pode responder a partir de um cache, permitindo que o app funcione offline e carregue muito mais rápido em conexões lentas.",
        },
        {
          heading: "O padrão cache-first",
          body: "No meu portfólio usei a estratégia cache-first: o Service Worker tenta responder com o que está no cache antes de ir à rede. Se o cache não tem o recurso, ele busca da rede e salva uma cópia para a próxima vez. O código fica assim: caches.match(requisição) primeiro, depois fetch com atualização do cache.",
        },
        {
          heading: "Versionando o cache",
          body: "Um ponto que muita gente esquece: quando você atualiza o site, o navegador pode continuar servindo a versão antiga do cache. A solução é versionar o nome do cache (ex: portfolio-v6) e, no evento activate, apagar todos os caches que não correspondem à versão atual. Foi exatamente isso que resolvi quando o site continuava mostrando conteúdo antigo após o deploy.",
        },
        {
          heading: "Resultados práticos",
          body: "Depois da implementação, o portfólio passou a carregar quase instantaneamente em visitas recorrentes, funciona completamente offline (incluindo o contador de visitas via fallback no localStorage) e ficou instalável como PWA no celular. Para o usuário, a diferença percebida foi enorme.",
        },
        {
          heading: "Quando usar?",
          body: "Service Worker é ideal para sites e apps que o usuário visita com frequência: dashboards, ferramentas de campo, e-commerce, blogs. Para landing pages simples de uma página só, o ganho pode não compensar a complexidade. Avalie sempre o caso de uso.",
        },
      ],
      conclusion:
        "Service Worker não é bicho de sete cabeças. Comece com cache-first, versione o cache, e teste com o DevTools simulando offline. Seu usuário agradece.",
    },
    "acessibilidade-wcag": {
      title: "Acessibilidade na Prática: WCAG 2.2",
      date: "15 Mai 2026",
      tag: "Dev",
      readingTime: "7 min",
      intro:
        "Acessibilidade web é requisito, não diferencial. Neste artigo trago um checklist prático dos critérios WCAG 2.2 que aplico em todos os projetos que entrego — do HTML à interação com JavaScript.",
      sections: [
        {
          heading: "1. Contraste de cores (critério 1.4.3)",
          body: "Texto e imagens de texto precisam de contraste de pelo menos 4.5:1 contra o fundo. No meu portfólio, que tem temas claro e escuro, validei cada cor usada. Ferramentas como WebAIM Contrast Checker ajudam a conferir antes de publicar.",
        },
        {
          heading: "2. Navegação por teclado (2.1.1)",
          body: "Todo o site deve ser operável apenas com teclado: Tab avança, Shift+Tab volta, Enter ativa. Teste o fluxo completo sem tocar no mouse. Elementos interativos precisam de focus visível — use outline, nunca apague com outline: none.",
        },
        {
          heading: "3. Textos alternativos e ARIA (1.1.1 / 4.1.2)",
          body: "Imagens informativas levam alt descritivo; imagens decorativas levam alt vazio. Para componentes complexos como modais e carrosséis, use roles e aria-label adequados. No meu carrossel de depoimentos, cada slide tem aria-label e os botões de navegação são acessíveis por teclado.",
        },
        {
          heading: "4. Formulários acessíveis (3.3.2 / 3.3.1)",
          body: "Todo campo precisa de label associado (não apenas placeholder). Mensagens de erro devem ser claras e vinculadas ao campo. No formulário de contato, usei label explícito e validação com mensagem em texto.",
        },
        {
          heading: "5. Movimento e animações (2.3.3)",
          body: "A nova WCAG 2.2 dá atenção especial a animações. Usuários com vestibular ou fotossensibilidade podem desativar animações. Respeite prefers-reduced-motion no CSS e evite animações infinitas que causam desconforto.",
        },
      ],
      conclusion:
        "Acessibilidade melhora o site para todo mundo: contraste ajuda em ambientes claros, teclado ajuda em tablets, e labels ajudam o SEO. Comece pelo checklist básico e evolua.",
    },
    "web-components": {
      title: "Começando com Web Components",
      date: "10 Abr 2026",
      tag: "Tutorial",
      readingTime: "5 min",
      intro:
        "Componentes reutilizáveis sem depender de framework? Sim, é possível com Web Components nativos. Neste tutorial mostro como criar um componente de card usando Custom Elements, Shadow DOM e HTML Templates.",
      sections: [
        {
          heading: "O que são Web Components?",
          body: "São APIs nativas do navegador que permitem criar elementos HTML reutilizáveis: Custom Elements (definir suas próprias tags), Shadow DOM (isolar estilos) e HTML Templates (marcação reutilizável). Funcionam em qualquer framework.",
        },
        {
          heading: "Criando um Custom Element",
          body: "Basta criar uma classe que estende HTMLElement, registrar com customElements.define('meu-card', MeuCard), e usar <meu-card> no HTML. O método connectedCallback dispara quando o elemento entra na página — o lugar ideal para renderizar o conteúdo.",
        },
        {
          heading: "Isolando com Shadow DOM",
          body: "O Shadow DOM encapsula o estilo: o que está dentro do shadow root não sofre interferência do CSS global, e vice-versa. Isso resolve o clássico problema de colisão de classes em projetos grandes.",
        },
        {
          heading: "Propriedades e atributos",
          body: "Componentes reativos recebem dados via atributos (acessados com getAttribute) e refletem mudanças observando mudanças com attributeChangedCallback e observedAttributes. É assim que o componente se mantém sincronizado com o resto da aplicação.",
        },
        {
          heading: "Onde eu uso na prática",
          body: "No meu portfólio, que é vanilla JS, a seção de techs, os cards de projeto e o carrossel de depoimentos seguem esse mesmo princípio de componentização — só que com funções. Web Components levam essa ideia ao padrão nativo do navegador.",
        },
      ],
      conclusion:
        "Web Components são ótimos para bibliotecas de UI e projetos com múltiplas equipes. Comece com um componente simples e veja como a reutilização deixa seu código mais limpo.",
    },
    "agentes-autonomos-ia": {
      title: "Engenharia de Agentes Autônomos & Redes Full-Mesh de IA",
      date: "14 Nov 2026",
      tag: "Inteligência Artificial",
      readingTime: "8 min",
      intro:
        "Como saí de prompts soltos para um ecossistema com 16 agentes especialistas em rede Full-Mesh, servidores MCP e execução determinística. Neste artigo compartilho as decisões de arquitetura e padrões de TypeSafe AI que apliquei no SkiilsToIAs e SocialCraft.",
      sections: [
        {
          heading: "1. O problema do 'Agente Faz-Tudo'",
          body: "Colocar um único prompt gigantesco tentando resolver design, banco de dados, testes e infraestrutura sempre leva a alucinações, esquecimento de requisitos e estouro de contexto. A solução escalável é dividir o trabalho entre agentes especialistas com papéis estritos e contratos claros entre si.",
        },
        {
          heading: "2. A arquitetura Full-Mesh com Skills Orchestrator",
          body: "Em vez de uma hierarquia rígida onde tudo passa por um único gargalo, conectamos os agentes em uma malha colaborativa. Um arquiteto de banco conversa diretamente com o auditor de segurança, enquanto o engenheiro de design alinha diretamente com o QA. O Skills Orchestrator atua como hub de roteamento de mais de 685 skills catalogadas.",
        },
        {
          heading: "3. TypeSafe AI e Schemas Estritos",
          body: "Nenhum agente entrega texto livre para outro componente do sistema. Todas as saídas de ferramentas passam por validação rigorosa com Zod e JSON Schemas determinísticos. Se o schema falha, um loop automático de recuperação corrige o payload antes que ele toque qualquer banco de dados ou API.",
        },
        {
          heading: "4. Integração com MCP (Model Context Protocol)",
          body: "O uso de 26 servidores MCP padronizou a comunicação com Git, bancos Neon/Supabase, navegadores Chrome DevTools e memória externa (ai-memory). Isso desacopla o modelo de linguagem da camada física de execução, permitindo trocar o motor de IA sem reescrever uma linha de integração.",
        },
        {
          heading: "5. Prevenção de Amnésia com Segundo Cérebro",
          body: "Agentes perdem contexto entre sessões. Resolvemos isso implementando um Segundo Cérebro perene com notas arquiteturais (docs/brain/) e indexação semântica. Toda sessão resgata decisões passadas e lições aprendidas antes de planejar novas tarefas.",
        },
      ],
      conclusion:
        "Engenharia de agentes não é apenas plugar uma API; é desenhar sistemas distribuídos tolerantes a falhas onde IAs colaboram como engenheiros sêniores coordenados.",
    },
    "pwa-offline-first-hidrometros": {
      title: "Construindo PWAs Offline-First para Vistorias e Hidrômetros",
      date: "28 Out 2026",
      tag: "Dev",
      readingTime: "7 min",
      intro:
        "Técnicos de campo enfrentam subsolos e poços de condomínios com sinal de internet zero. Veja como projetei PWAs resilientes com IndexedDB, captura e compressão de fotos na borda e exportação de relatórios sem depender de servidor.",
      sections: [
        {
          heading: "1. A realidade implacável do campo",
          body: "Durante inspeções de hidrômetros e vistorias de medidores (como no fotos-hidrometros e Vistoria-Cyble-App), a conexão 4G/5G cai constantemente. Se o app depender de requisições HTTP normais para salvar cada leitura, o operador perde dados e retrabalho se torna inevitável.",
        },
        {
          heading: "2. Arquitetura Offline-First com IndexedDB",
          body: "A regra de ouro: primeiro salva localmente no IndexedDB, depois notifica a interface, e apenas em segundo plano tenta sincronizar com a nuvem quando a conexão retornar. Nenhuma ação do operador fica bloqueada por falhas de rede.",
        },
        {
          heading: "3. Compressão de imagens no cliente (Client-Side Canvas)",
          body: "Fotos tiradas por câmeras modernas chegam a 8MB cada. Se armazenadas cruas, estouram a cota de armazenamento do navegador. Implementei um pipeline de compressão imediata em WebP via Canvas API antes da gravação no IndexedDB, reduzindo arquivos para menos de 150KB sem perder legibilidade nos números dos relógios.",
        },
        {
          heading: "4. Geração de relatórios (PDF e Excel) sem backend",
          body: "Em vez de enviar centenas de fotos para um servidor gerar um arquivo ZIP ou PDF, usamos bibliotecas como jsPDF e SheetJS diretamente no browser do operador. O download de relatórios completos é instantâneo e economiza custos astronômicos de servidores cloud.",
        },
        {
          heading: "5. Sincronização em segundo plano resiliente",
          body: "Com a API de Background Sync e Service Workers, o aplicativo detecta o retorno da internet e sincroniza o lote de vistorias com retry exponencial, garantindo consistência eventual sem que o técnico precise manter a tela aberta.",
        },
      ],
      conclusion:
        "Pensar offline-first transforma a experiência de quem está na ponta operacional. Apps rápidos, que não travam e respeitam o plano de dados do usuário são os que realmente vencem em produção.",
    },
    "microsaas-nextjs-neon": {
      title: "De Desafio a Micro-SaaS: Arquitetura com Next.js 15 e Neon Postgres",
      date: "18 Set 2026",
      tag: "Arquitetura",
      readingTime: "6 min",
      intro:
        "Como estruturei plataformas como AppCraft e DevQuest Pro combinando o ecossistema Next.js 15 com Postgres Serverless da Neon: pooling de conexões, Server Actions seguras e custo quase zero em repouso.",
      sections: [
        {
          heading: "1. O dilema das conexões de banco em Serverless",
          body: "Aplicações serverless tradicionais abrem uma nova conexão com o banco para cada requisição, esgotando o connection limit rapidamente. Com o Neon Postgres e seu connection pooling nativo via WebSockets, conseguimos manter latência ultrabaixa com milhares de acessos concorrentes sem sobrecarregar a instância.",
        },
        {
          heading: "2. Server Actions tipadas com validação Zod",
          body: "Substituímos rotas manuais de API por Server Actions nativas do Next.js 15. Combinadas com Zod, garantimos que qualquer dado submetido seja sanitizado no servidor antes de tocar o ORM ou queries SQL, eliminando vulnerabilidades de injeção e inconsistências de tipos.",
        },
        {
          heading: "3. Row-Level Security (RLS) e isolamento multi-tenant",
          body: "Em plataformas onde usuários gerenciam dados sensíveis, RLS no PostgreSQL garante que nenhum usuário consiga visualizar ou alterar registros de terceiros, mesmo se houvesse uma falha lógica na camada de aplicação. A segurança é aplicada na própria camada de dados.",
        },
        {
          heading: "4. Cache inteligente e renderização híbrida",
          body: "A combinação de rotas estáticas geradas em build time com revalidação sob demanda (ISR) permite que páginas de catálogo carreguem em milissegundos com nota 100 no Lighthouse, enquanto ações dinâmicas utilizam streaming e Suspense para feedback imediato.",
        },
      ],
      conclusion:
        "Construir micro-SaaS modernos hoje exige arquiteturas enxutas que escalem automaticamente do zero sem gerar faturas pesadas de infraestrutura. A combinação Next.js + Neon provou ser perfeita para essa meta.",
    },
  },
  en: {
    "service-worker": {
      title: "Optimizing SPAs with Service Worker",
      date: "Jun 20, 2026",
      tag: "Tech",
      readingTime: "6 min",
      intro:
        "Modern web apps need to load fast and even work offline. In this article I show how I implemented smart caching in my portfolio using Service Worker — and how you can apply the same pattern in any project.",
      sections: [
        {
          heading: "What is a Service Worker?",
          body: "It's a script the browser runs in the background, separate from the page. It intercepts network requests and can answer from a cache, letting the app work offline and load much faster on slow connections.",
        },
        {
          heading: "The cache-first pattern",
          body: "In my portfolio I used the cache-first strategy: the Service Worker tries to answer from cache before hitting the network. If the resource isn't cached, it fetches from the network and saves a copy for next time. The code is: caches.match(request) first, then fetch with cache update.",
        },
        {
          heading: "Versioning the cache",
          body: "One thing many people forget: when you update your site, the browser may keep serving the old cached version. The fix is versioning the cache name (e.g. portfolio-v6) and, in the activate event, deleting every cache that doesn't match the current version. That's exactly what I fixed when the site kept showing old content after deploy.",
        },
        {
          heading: "Practical results",
          body: "After the implementation, the portfolio loads almost instantly on repeat visits, works completely offline (including the visit counter via localStorage fallback) and became installable as a PWA on mobile. For the user, the perceived difference was huge.",
        },
        {
          heading: "When should you use it?",
          body: "Service Worker is ideal for sites and apps users visit frequently: dashboards, field tools, e-commerce, blogs. For simple one-page landing pages, the gain may not justify the complexity. Always evaluate the use case.",
        },
      ],
      conclusion:
        "Service Worker is not rocket science. Start with cache-first, version your cache, and test with DevTools simulating offline. Your users will thank you.",
    },
    "acessibilidade-wcag": {
      title: "Accessibility in Practice: WCAG 2.2",
      date: "May 15, 2026",
      tag: "Dev",
      readingTime: "7 min",
      intro:
        "Web accessibility is a requirement, not a differentiator. In this article I share a practical checklist of the WCAG 2.2 criteria I apply to every project I deliver — from HTML to JavaScript interaction.",
      sections: [
        {
          heading: "1. Color contrast (criterion 1.4.3)",
          body: "Text and images of text need at least 4.5:1 contrast against the background. In my portfolio, which has light and dark themes, I validated every color used. Tools like the WebAIM Contrast Checker help you verify before publishing.",
        },
        {
          heading: "2. Keyboard navigation (2.1.1)",
          body: "The entire site must be operable with only the keyboard: Tab moves forward, Shift+Tab goes back, Enter activates. Test the full flow without touching the mouse. Interactive elements need visible focus — use outline, never kill it with outline: none.",
        },
        {
          heading: "3. Alt text and ARIA (1.1.1 / 4.1.2)",
          body: "Informative images get descriptive alt text; decorative images get empty alt. For complex components like modals and carousels, use the right roles and aria-labels. In my testimonials carousel, every slide has an aria-label and the navigation buttons are keyboard accessible.",
        },
        {
          heading: "4. Accessible forms (3.3.2 / 3.3.1)",
          body: "Every field needs an associated label (not just placeholder). Error messages must be clear and tied to the field. In the contact form, I used explicit labels and validation with text feedback.",
        },
        {
          heading: "5. Motion and animations (2.3.3)",
          body: "The new WCAG 2.2 pays special attention to animations. Users with vestibular or photosensitivity issues may disable animations. Respect prefers-reduced-motion in CSS and avoid infinite animations that cause discomfort.",
        },
      ],
      conclusion:
        "Accessibility improves the site for everyone: contrast helps in bright environments, keyboard helps on tablets, and labels help SEO. Start with the basic checklist and evolve.",
    },
    "web-components": {
      title: "Getting Started with Web Components",
      date: "Apr 10, 2026",
      tag: "Tutorial",
      readingTime: "5 min",
      intro:
        "Reusable components without depending on a framework? Yes, it's possible with native Web Components. In this tutorial I show how to build a card component using Custom Elements, Shadow DOM and HTML Templates.",
      sections: [
        {
          heading: "What are Web Components?",
          body: "They are native browser APIs that let you create reusable HTML elements: Custom Elements (define your own tags), Shadow DOM (isolate styles) and HTML Templates (reusable markup). They work in any framework.",
        },
        {
          heading: "Creating a Custom Element",
          body: "Just create a class extending HTMLElement, register it with customElements.define('my-card', MyCard), and use <my-card> in your HTML. The connectedCallback method fires when the element enters the page — the ideal place to render content.",
        },
        {
          heading: "Isolating with Shadow DOM",
          body: "Shadow DOM encapsulates style: what's inside the shadow root doesn't suffer interference from global CSS, and vice versa. This solves the classic class collision problem in large projects.",
        },
        {
          heading: "Properties and attributes",
          body: "Reactive components receive data via attributes (accessed with getAttribute) and reflect changes by watching with attributeChangedCallback and observedAttributes. That's how the component stays in sync with the rest of the app.",
        },
        {
          heading: "Where I use it in practice",
          body: "In my portfolio, which is vanilla JS, the techs section, project cards and testimonials carousel follow the same componentization principle — just with functions. Web Components take that idea to the browser's native standard.",
        },
      ],
      conclusion:
        "Web Components are great for UI libraries and multi-team projects. Start with a simple component and see how reuse makes your code cleaner.",
    },
    "agentes-autonomos-ia": {
      title: "Autonomous AI Agent Engineering & Full-Mesh Networks",
      date: "Nov 14, 2026",
      tag: "Artificial Intelligence",
      readingTime: "8 min",
      intro:
        "How I evolved from standalone prompts to an ecosystem with 16 specialized agents in a Full-Mesh network, MCP servers, and deterministic execution. In this article I share architectural patterns and TypeSafe AI principles applied in SkiilsToIAs and SocialCraft.",
      sections: [
        {
          heading: "1. The flaw of the 'Do-It-All' Agent",
          body: "Feeding a single massive prompt trying to solve design, database, testing, and cloud infrastructure always leads to hallucinations and context bloat. The scalable solution is partitioning work into dedicated specialist agents with strict roles and clear inter-agent contracts.",
        },
        {
          heading: "2. Full-Mesh Architecture with Skills Orchestrator",
          body: "Instead of a rigid hierarchy where everything chokes at a single bottleneck, agents collaborate directly in a mesh. A database architect speaks directly with security auditors, while UI engineers align with QA. The Skills Orchestrator serves as a central router across 685 cataloged capabilities.",
        },
        {
          heading: "3. TypeSafe AI & Strict Schemas",
          body: "No agent outputs unconstrained prose to another system component. All tool outputs are validated against deterministic Zod and JSON Schemas. If a schema fails, an automated recovery loop fixes the payload before it touches any persistent database or API.",
        },
        {
          heading: "4. Standardization with MCP (Model Context Protocol)",
          body: "Using 26 MCP servers standardizes communication with Git, Neon/Supabase databases, Chrome DevTools, and external persistent memory (ai-memory). This decouples the LLM from the execution layer, allowing seamless engine upgrades without modifying integration code.",
        },
        {
          heading: "5. Mitigating Amnesia with a Persistent Second Brain",
          body: "Agents lose context between sessions. We solved this with a persistent Second Brain (docs/brain/) and semantic retrieval. Every session pulls past architectural decisions and lessons learned before planning new tasks.",
        },
      ],
      conclusion:
        "Agent engineering is not about simply calling an API; it is about designing resilient distributed systems where autonomous AIs collaborate like seasoned senior engineers.",
    },
    "pwa-offline-first-hidrometros": {
      title: "Building Offline-First PWAs for Field Inspections & Utility Meters",
      date: "Oct 28, 2026",
      tag: "Dev",
      readingTime: "7 min",
      intro:
        "Field technicians operate in basements and residential wells with zero cellular connectivity. Here is how I designed resilient PWAs with IndexedDB, edge image compression, and client-side report generation without relying on a live server.",
      sections: [
        {
          heading: "1. The Harsh Reality of the Field",
          body: "During utility meter inspections (such as in fotos-hidrometros and Vistoria-Cyble-App), 4G/5G signal drops constantly. If an app depends on conventional HTTP requests to persist every record, data is lost and rework becomes inevitable.",
        },
        {
          heading: "2. Offline-First Architecture with IndexedDB",
          body: "The golden rule: persist locally in IndexedDB first, update the UI immediately, and only attempt cloud sync in the background when network connectivity is restored. No user action is ever blocked by network drops.",
        },
        {
          heading: "3. Client-Side Image Compression (Canvas API)",
          body: "High-res mobile photos easily exceed 8MB each. Storing them raw rapidly breaches browser storage quotas. I built an immediate client-side WebP compression pipeline using the Canvas API before writing to IndexedDB, dropping file size to under 150KB while preserving crystal-clear meter digit readability.",
        },
        {
          heading: "4. Report Generation (PDF & Excel) Without a Backend",
          body: "Rather than dispatching hundreds of photos to a remote server to assemble a ZIP or PDF, we leverage libraries like jsPDF and SheetJS directly inside the operator's browser. Download is instantaneous and eliminates cloud processing costs.",
        },
        {
          heading: "5. Resilient Background Synchronization",
          body: "Using Background Sync and Service Workers, the app detects regained connectivity and synchronizes inspection batches with exponential backoff, ensuring eventual consistency without forcing technicians to keep the screen active.",
        },
      ],
      conclusion:
        "Adopting an offline-first mindset fundamentally elevates the operational user experience. Fast, resilient apps that respect battery and data limits are the ones that truly succeed in production.",
    },
    "microsaas-nextjs-neon": {
      title: "From Challenge to Micro-SaaS: Architecture with Next.js 15 & Neon Postgres",
      date: "Sep 18, 2026",
      tag: "Architecture",
      readingTime: "6 min",
      intro:
        "How I structured production platforms like AppCraft and DevQuest Pro combining Next.js 15 with Neon Serverless Postgres: connection pooling, secure Server Actions, and near-zero idle infrastructure cost.",
      sections: [
        {
          heading: "1. The Serverless Database Connection Dilemma",
          body: "Traditional serverless functions instantiate a new database connection per invocation, exhausting connection limits instantly. With Neon Postgres and native WebSocket connection pooling, we achieve ultra-low latency across thousands of concurrent visitors without overwhelming the database instance.",
        },
        {
          heading: "2. Typed Server Actions with Zod Validation",
          body: "We replaced manual API endpoints with native Next.js 15 Server Actions. Combined with Zod schemas, every payload is sanitized and validated on the server before touching the database or ORM, eliminating injection vectors and type mismatches.",
        },
        {
          heading: "3. Row-Level Security (RLS) & Multi-Tenant Isolation",
          body: "In applications where users manage private data, PostgreSQL RLS guarantees that no user can read or modify another tenant's records, even if application logic were flawed. Security is enforced at the database level.",
        },
        {
          heading: "4. Smart Caching & Hybrid Rendering",
          body: "Combining static pages generated at build time with On-Demand Incremental Static Regeneration (ISR) ensures catalog views load in milliseconds with a 100 Lighthouse score, while dynamic operations utilize React Streaming and Suspense.",
        },
      ],
      conclusion:
        "Building modern micro-SaaS requires lean architectures that scale from zero automatically without incurring steep monthly hosting bills. Next.js and Neon offer an unmatched combination for this goal.",
    },
  },
};
