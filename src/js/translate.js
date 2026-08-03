const translations = {
  pt: {
    projects_title: "Projetos",
    about_title: "Sobre mim",
    about_intro: "Desenvolvedor Full-Stack com experiência em HTML5, CSS3, JavaScript, Bootstrap, React, Angular e Node.js. Formado em Análise e Desenvolvimento de Sistemas pela Unisanta, com pós-graduação em Inteligência Artificial. Possuo conhecimento em versionamento de código com Git/GitHub, bancos de dados MySQL, SQLite, MongoDB e PostgreSQL, e metodologias ágeis. Busco constantemente aprender novas tecnologias e desenvolver projetos inovadores.",
    about_summary: "Já entreguei 19 projetos — desde PWAs offline-first para vistorias de campo até sistemas de estoque com autenticação e dashboards. Tenho foco em transformar problemas do mundo real em soluções funcionais, com código limpo, testado e documentado.",
    about_languages_label: "Idiomas:",
    about_languages_value: "Português (Nativo), Inglês (Fluente)",
    about_focus_label: "Foco atual:",
    about_focus_value: "Desenvolvimento Full-Stack e Inteligência Artificial",
    about_objective_label: "Objetivo:",
    about_objective_value: "Crescer como desenvolvedor em uma equipe que valorize qualidade, aprendizado contínuo e impacto real no produto.",
    techs_title: "Tecnologias",
    experience_title: "Experiência",
    certificates_title: "Certificados",
    testimonials_title: "Depoimentos",
    contacts_title: "Contatos",
    contributions_title: "Atividade no GitHub",
    download_cv: "Baixar CV",
    available: "Disponível para trabalho",
    hero_tagline: "Construo aplicações web completas que resolvem problemas reais — do frontend ao banco de dados.",
    hero_cta_projects: "Ver projetos",
    visits: "visitas",
    send_message: "Enviar Mensagem",
    sending: "Enviando...",
    contributions_year: "contribuições no último ano",
    counter_projects: "Projetos",
    counter_techs: "Tecnologias",
    counter_years: "Anos de Experiência",
    counter_dedication: "Dedicação",
    name_label: "Nome",
    email_label: "E-mail",
    subject_label: "Assunto",
    message_label: "Mensagem",
    name_placeholder: "Seu nome",
    email_placeholder: "seu@email.com",
    subject_placeholder: "Assunto da mensagem",
    message_placeholder: "Sua mensagem...",
    footer_copyright: "© 2024 Henrique Bezerra dos Santos. Todos os direitos reservados.",
    all: "Todos",
    frontend: "Frontend",
    fullstack: "Full-Stack",
    api: "API",
    previous: "← Anterior",
    next: "Próxima →",
    repository: "Repositório",
    demo: "Demo",
    blog_title: "Blog",
    blog_tag_tech: "Tecnologia",
    blog_tag_dev: "Dev",
    blog_tag_tutorial: "Tutorial",
    blog_read_more: "Ler mais",
    experience_job_1: "Desenvolvedor Front-End - Freelas",
    experience_desc_1: "Desenvolvimento de landing pages responsivas, integração com APIs, componentização com React e criação de interfaces modernas e otimizadas.",
    experience_job_2: "Desenvolvedor - Unisanta (Projeto Acadêmico)",
    experience_desc_2: "Desenvolvimento de aplicação web full-stack com Angular, Node.js e MongoDB. Trabalho em equipe com metodologia ágil.",
    experience_edu: "Tecnólogo Analise e desenvolvimento de Sistemas",
    experience_edu_desc: "Unisanta - Universidade Santa Cecília",
    experience_postgrad_ai: "Pós-graduação em Inteligência Artificial",
    experience_postgrad_ai_desc: "Unisanta (EaD) — 600h. Fundamentos de IA, Python, Machine Learning, Deep Learning, PLN, Visão Computacional e Agentes com IA."
  },
  en: {
    projects_title: "Projects",
    about_title: "About me",
    about_intro: "Full-Stack Developer experienced in HTML5, CSS3, JavaScript, Bootstrap, React, Angular and Node.js. Graduated in Systems Analysis and Development from Unisanta, with a postgraduate degree in Artificial Intelligence. Skilled in version control with Git/GitHub, MySQL, SQLite, MongoDB and PostgreSQL databases, and agile methodologies. I constantly seek to learn new technologies and build innovative projects.",
    about_summary: "I've delivered 19 projects — from offline-first PWAs for field inspections to inventory systems with authentication and dashboards. I focus on turning real-world problems into functional solutions with clean, tested and documented code.",
    about_languages_label: "Languages:",
    about_languages_value: "Portuguese (Native), English (Fluent)",
    about_focus_label: "Current focus:",
    about_focus_value: "Full-Stack Development and Artificial Intelligence",
    about_objective_label: "Objective:",
    about_objective_value: "Grow as a developer in a team that values quality, continuous learning and real product impact.",
    techs_title: "Technologies",
    experience_title: "Experience",
    certificates_title: "Certificates",
    testimonials_title: "Testimonials",
    contacts_title: "Contacts",
    contributions_title: "GitHub Activity",
    download_cv: "Download CV",
    available: "Available for work",
    hero_tagline: "I build complete web applications that solve real problems — from frontend to database.",
    hero_cta_projects: "View projects",
    visits: "visits",
    send_message: "Send Message",
    sending: "Sending...",
    contributions_year: "contributions in the last year",
    counter_projects: "Projects",
    counter_techs: "Technologies",
    counter_years: "Years of Experience",
    counter_dedication: "Dedication",
    name_label: "Name",
    email_label: "E-mail",
    subject_label: "Subject",
    message_label: "Message",
    name_placeholder: "Your name",
    email_placeholder: "your@email.com",
    subject_placeholder: "Message subject",
    message_placeholder: "Your message...",
    footer_copyright: "© 2024 Henrique Bezerra dos Santos. All rights reserved.",
    all: "All",
    frontend: "Frontend",
    fullstack: "Full-Stack",
    api: "API",
    previous: "← Previous",
    next: "Next →",
    repository: "Repository",
    demo: "Demo",
    blog_title: "Blog",
    blog_tag_tech: "Tech",
    blog_tag_dev: "Dev",
    blog_tag_tutorial: "Tutorial",
    blog_read_more: "Read more",
    experience_job_1: "Front-End Developer - Freelance",
    experience_desc_1: "Building responsive landing pages, API integrations, React componentization, and modern optimized interfaces.",
    experience_job_2: "Developer - Unisanta (Academic Project)",
    experience_desc_2: "Full-stack web application with Angular, Node.js and MongoDB. Teamwork with agile methodology.",
    experience_edu: "Technologist in Systems Analysis and Development",
    experience_edu_desc: "Unisanta - Santa Cecília University",
    experience_postgrad_ai: "Postgraduate in Artificial Intelligence",
    experience_postgrad_ai_desc: "Unisanta (Online) — 600h. AI fundamentals, Python, Machine Learning, Deep Learning, NLP, Computer Vision and AI Agents."
  }
};

let currentLang = localStorage.getItem("lang") || "pt";
let langToggle, langFlag, langLabel;

export function initTranslate() {
  langToggle = document.getElementById("languageToggle");
  langFlag = document.getElementById("langFlag");
  langLabel = document.getElementById("langLabel");

  function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
      const key = el.getAttribute("data-translate-placeholder");
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    localStorage.setItem("lang", lang);
  }

  function updateLangUI() {
    if (!langFlag || !langLabel) return;
    
    if (currentLang === "pt") {
      langFlag.innerHTML = `<svg width="20" height="14" viewBox="0 0 20 14" fill="none">
        <rect width="20" height="14" fill="#009B3A"/>
        <circle cx="10" cy="7" r="3.5" fill="#FEDF00"/>
        <path d="M10 3.5C10 3.5 8.5 5 8.5 7C8.5 9 10 10.5 10 10.5C10 10.5 11.5 9 11.5 7C11.5 5 10 3.5 10 3.5Z" fill="#002776"/>
      </svg>`;
    } else {
      langFlag.innerHTML = `<svg width="20" height="14" viewBox="0 0 20 14" fill="none">
        <rect width="20" height="14" fill="#B22234"/>
        <path d="M0 0L20 14M20 0L0 14" stroke="white" stroke-width="2"/>
        <rect width="10" height="14" fill="#3C3B6E"/>
      </svg>`;
    }
    langLabel.textContent = currentLang.toUpperCase();
    if (langToggle) {
      langToggle.setAttribute("aria-label", (currentLang === "pt" ? "Mudar idioma: " : "Change language: ") + currentLang.toUpperCase());
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "pt" ? "en" : "pt";
      translatePage(currentLang);
      updateLangUI();
    });
  }

  translatePage(currentLang);
  updateLangUI();
}

export function getCurrentLang() {
  return currentLang;
}
