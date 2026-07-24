# Portfólio Henrique Bezerra

![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)

Portfolio profissional de **Henrique Bezerra dos Santos** - Desenvolvedor Full-Stack. Este projeto apresenta um portfólio moderno, responsivo e com diversas funcionalidades interativas.

## 🎯 Funcionalidades

### ✨ Recursos Principais

- **🌐 Suporte a Múltiplos Idiomas** - Troca entre Português e Inglês com toggle
- **🌓 Tema Claro/Escuro** - Alternância manual de tema com persistência
- **📱 Design Responsivo** - Adaptado para desktop, tablet e mobile
- **🎨 Glass Morphism** - Design moderno com efeitos de vidro
- **⚡ Animações Suaves** - Fade-in, parallax, partículas e muito mais

### 🎠 Carrossel de Depoimentos

- Navegação automática (5s) e manual
- Indicadores de navegação (dots)
- Pausa ao passar o mouse
- Design responsivo

### ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `T` | Alternar tema claro/escuro |
| `M` | Ligar/desligar música |
| `H` | Ir para início |
| `P` | Ir para projetos |
| `C` | Ir para contato |
| `↑` / `U` | Rolar para cima |
| `↓` / `D` | Rolar para baixo |
| `L` | Alternar idioma |
| `?` | Mostrar lista de atalhos |

### 🔔 Sistema de Notificações (Toast)

- Notificações elegantes no rodapé
- 4 tipos: sucesso, erro, info, warning
- Animações suaves de entrada/saída
- Auto-dismiss configurável

### 📊 Contador de Tempo na Página

- Exibe tempo decorrido desde o carregamento
- Formato: `MM:SS`
- Posicionado discretamente no canto inferior esquerdo

### ✨ Efeitos Visuais

- **Partículas animadas** - Fundo com partículas flutuantes
- **Mouse trail** - Efeito de rastro ao mover o mouse
- **3D Tilt** - Efeito 3D nos cards de Stack
- **Parallax** - Shapes morphing com parallax
- **Confetti** - Animação de confete para celebrações

### 🦶 Efeitos de Cursor

- Cursor customizado para desktop
- Efeito hover em elementos interativos
- Efeito de clique

### 📋 Skeleton Loading

- Indicador visual de carregamento
- Efeito shimmer durante inicialização

### 📈 Animações de Scroll

- Fade-in suave ao entrar na viewport
- Animações stagger em listas/grades
- Scale animation em seções específicas
- Contadores animados

### 📧 Integração com Serviços

- **EmailJS** - Envio de mensagens via formulário
- **Supabase** - Contador de visitas e downloads de CV

### 🎵 Música de Fundo

- Player com toggle on/off
- Persistência de estado no localStorage
- Animação visual quando tocando

### 💬 Widget de WhatsApp

- Botão flutuante com animação de pulso
- Tooltip explicativo
- Link direto para conversa

### 📋 Formulário de Contato

- Validação de campos
- Feedback visual de envio
- Integração com EmailJS
- Confetti ao enviar com sucesso

## 🛠️ Tecnologias

### Frontend
- HTML5
- CSS3 (com variáveis CSS e custom properties)
- JavaScript ES6+ (modular)
- React.js
- Angular

### Backend/Serviços
- Node.js
- Express
- MongoDB
- Supabase (BaaS)
- Firebase

### Ferramentas
- Git/GitHub
- Vite
- Bootstrap
- Tailwind CSS
- Sass/SCSS

## 📁 Estrutura do Projeto

```
NewPortifolio/
├── index.html                 # Página principal (modular)
├── manifest.json             # PWA manifest
├── README.md                 # Este arquivo
├── css/
│   ├── main.css             # Arquivo principal (imports)
│   ├── variables.css        # Reset + variáveis de tema
│   ├── base.css            # Estilos base
│   ├── animations.css       # Keyframes e animações
│   ├── components.css      # Componentes reutilizáveis
│   ├── widgets.css         # Widgets flutuantes
│   ├── lightbox.css        # Galeria e lightbox
│   ├── effects.css         # Efeitos visuais
│   ├── sections.css        # Estilos das seções
│   └── medias.css          # Responsivo
├── src/
│   ├── html/
│   │   ├── components/     # Componentes HTML
│   │   │   ├── effects.html
│   │   │   ├── widgets.html
│   │   │   ├── header.html
│   │   │   └── footer.html
│   │   └── sections/       # Seções da página
│   │       ├── hero.html
│   │       ├── about.html
│   │       ├── techs.html
│   │       ├── projects.html
│   │       ├── experience.html
│   │       ├── certificates.html
│   │       ├── contributions.html
│   │       ├── testimonials.html
│   │       └── contact.html
│   ├── js/
│   │   ├── main.js         # Entry point
│   │   ├── loader.js      # Carregador de HTML modular
│   │   ├── config.js      # Configurações
│   │   ├── animations.js   # Animações
│   │   ├── effects.js      # Efeitos visuais
│   │   ├── email.js        # Formulário de contato
│   │   ├── features.js     # Novas funcionalidades
│   │   ├── music.js        # Música de fundo
│   │   ├── pwa.js          # PWA
│   │   ├── supabase.js    # Backend as a Service
│   │   ├── theme.js        # Tema claro/escuro
│   │   ├── translate.js    # Tradução PT/EN
│   │   ├── ui.js           # Interface
│   │   ├── utils.js        # Utilitários
│   │   └── sw.js           # Service Worker
│   ├── icons/              # Ícones do app
│   ├── images/             # Imagens dos projetos
│   └── svg/                # SVGs de tecnologias
├── MoreProjects/           # Página de mais projetos
└── pdf/                    # Currículo
```

## 🚀 Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Henrique1601/NewPortifolio.git
```

2. Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve
```

### Configuração

#### Supabase (Contador de Visitas)

1. Crie uma conta em [Supabase](https://supabase.com)
2. Crie um projeto
3. Copie a URL e a chave pública (anon key)
4. Atualize `src/js/config.js`:

```javascript
export const CONFIG = {
  SUPABASE_URL: "sua-url-do-supabase",
  SUPABASE_KEY: "sua-chave-publica",
  // ...
};
```

5. Crie as tabelas no Supabase:
   - `page_visits` (page_slug, visit_count, last_visited)
   - `cv_downloads` (id, download_count)

#### EmailJS (Formulário de Contato)

1. Crie uma conta em [EmailJS](https://www.emailjs.com)
2. Crie um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Copie o User ID e atualize `src/js/config.js`:

```javascript
EMAILJS_USER_ID: "seu-user-id",
EMAILJS_SERVICE_ID: "seu-service-id",
EMAILJS_TEMPLATE_ID: "seu-template-id"
```

## 🎨 Customização

### Cores do Tema

Edite as variáveis CSS em `css/variables.css`:

```css
[data-theme="dark"] {
  --bg-primary: #0a0a1a;
  --accent-color: #6366f1;
  --accent-secondary: #8b5cf6;
  /* ... */
}
```

### Conteúdo dos Projetos

Edite `src/html/sections/projects.html` para adicionar/remover projetos.

### Depoimentos

Edite `src/html/sections/testimonials.html` para adicionar novos depoimentos.

### Tecnologias

Edite `src/html/sections/techs.html` para adicionar ou remover tecnologias.

## 📱 Recursos PWA

O portfólio suporta instalação como Progressive Web App:

- Ícone customizado
- Tema colorido
- Modo standalone
- Shortcuts para seções

Para ativar o Service Worker em produção, descomente a seção em `src/js/pwa.js`:

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(reg => console.log("SW registered"))
    .catch(err => console.log("SW error:", err));
}
```

## 🌐 SEO

O portfólio inclui meta tags otimizadas para SEO:

- Description
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Theme color
- PWA manifest

## ⚡ Performance

- CSS modular com imports
- JavaScript modular (ES6)
- Lazy loading de imagens
- Animações otimizadas com requestAnimationFrame
- Partículas em canvas para melhor performance

## 📝 Licença

Este projeto é livre para uso pessoal e educacional. Credite se usar como referência.

## 👤 Autor

**Henrique Bezerra dos Santos**

- GitHub: [@Henrique1601](https://github.com/Henrique1601)
- LinkedIn: [Henrique Bezerra](https://www.linkedin.com/in/henrique-bezerra-dos-santos-9802321a3/)
- Email: henriquebs1601@gmail.com

---

⭐️ Se este portfólio foi útil para você, deixe uma estrela!
