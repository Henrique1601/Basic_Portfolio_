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
  },
};
