const translations = {
  pt: {
    projects_title: "Projetos",
    about_title: "Sobre mim",
    techs_title: "Tecnologias",
    experience_title: "Experiência",
    certificates_title: "Certificados",
    testimonials_title: "Depoimentos",
    contacts_title: "Contatos",
    contributions_title: "Atividade no GitHub",
    download_cv: "Baixar CV",
    available: "Disponível para trabalho",
    visits: "visitas",
    send_message: "Enviar Mensagem",
    sending: "Enviando...",
    contributions_year: "contribuições no último ano",
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
    demo: "Demo"
  },
  en: {
    projects_title: "Projects",
    about_title: "About me",
    techs_title: "Technologies",
    experience_title: "Experience",
    certificates_title: "Certificates",
    testimonials_title: "Testimonials",
    contacts_title: "Contacts",
    contributions_title: "GitHub Activity",
    download_cv: "Download CV",
    available: "Available for work",
    visits: "visits",
    send_message: "Send Message",
    sending: "Sending...",
    contributions_year: "contributions in the last year",
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
    demo: "Demo"
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
