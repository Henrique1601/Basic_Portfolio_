<!-- new-portfolio -->
# NewPortifolio - Henrique Bezerra

Portfólio profissional full-stack, single-page, com HTML/CSS/JS vanilla (sem build step).

## Stack
- **Frontend**: HTML5, CSS3 (modular, 10 CSS files), JavaScript ES6+ (ES modules, sem bundler)
- **Serviços**: Supabase (contador de visitas + downloads de CV), EmailJS (formulário de contato)
- **PWA**: manifest.json + service worker
- **Deploy**: GitHub Pages (abrir `index.html` direto ou servidor local)

## Arquitetura
- `index.html` → carrega `src/js/main.js` (entry point)
- `main.js` → initLoader (carrega HTMLs modulares nas seções) → init de todos os módulos
- Seções HTML em `src/html/sections/`, componentes em `src/html/components/`
- CSS modular em `css/` com `main.css` como central que importa os demais
- Configurações sensíveis em `src/js/config.js` (Supabase URL/key, EmailJS IDs)

## Funcionalidades principais
- Tema claro/escuro com persistência (localStorage)
- Tradução PT/EN com toggle
- Animações: partículas (canvas), parallax, 3D tilt, confetti, cursor customizado
- Contador de visitas (via Supabase com fallback localStorage)
- Formulário de contato (EmailJS com confetti no sucesso)
- PWA installável
- Atalhos de teclado (T=tema, M=música, L=idioma, ?=atalhos)
- Widget WhatsApp flutuante com tooltip
- Carrossel de depoimentos
- Sistema de notificações toast (4 tipos)
- Skeleton loading na inicialização

## Comandos
- Servir local: `python -m http.server 8000` ou `npx serve`
- Sem build step, sem package.json, sem test runner

## Skills relevantes
- `redesign-existing-projects` - Upgrade visual para alta qualidade
- `high-end-visual-design` - Design premium (fonts, shadows, cards)
- `performance` - Otimizar animações e carregamento
- `fixing-accessibility` - Acessibilidade WCAG
- `fixing-motion-performance` - Performance de animações
- `lighthouse` - Auditar SEO, a11y, performance
- `supabase-postgres-best-practices` - Banco Supabase
- `context7-mcp` - Docs de APIs (Supabase, EmailJS, PWA)
<!-- new-portfolio -->
