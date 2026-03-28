/**
 * ========================================
 * HTML LOADER - Carrega componentes dinamicamente
 * ========================================
 */

const COMPONENTS = {
  effects: {
    path: './src/html/components/effects.html',
    target: 'body',
    position: 'afterbegin'
  },
  widgets: {
    path: './src/html/components/widgets.html',
    target: 'body',
    position: 'beforeend'
  }
};

const SECTIONS = {
  hero: {
    path: './src/html/sections/hero.html',
    target: '#home'
  },
  counters: {
    path: './src/html/sections/counters.html',
    target: '#counters'
  },
  about: {
    path: './src/html/sections/about.html',
    target: '#about-me'
  },
  techs: {
    path: './src/html/sections/techs.html',
    target: '#techs'
  },
  projects: {
    path: './src/html/sections/projects.html',
    target: '#projects'
  },
  experience: {
    path: './src/html/sections/experience.html',
    target: '#experience'
  },
  certificates: {
    path: './src/html/sections/certificates.html',
    target: '#certificates'
  },
  contributions: {
    path: './src/html/sections/contributions.html',
    target: '#contributions'
  },
  testimonials: {
    path: './src/html/sections/testimonials.html',
    target: '#testimonials'
  },
  contact: {
    path: './src/html/sections/contact.html',
    target: '#contacts'
  }
};

const COMPONENT_TAGS = {
  header: {
    path: './src/html/components/header.html',
    target: 'header[component]'
  },
  footer: {
    path: './src/html/components/footer.html',
    target: 'footer[component]'
  }
};

async function loadHTML(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Erro ao carregar ${path}:`, error);
    return '';
  }
}

async function loadComponents(components) {
  for (const [name, config] of Object.entries(components)) {
    const html = await loadHTML(config.path);
    if (html) {
      const position = config.position || 'beforeend';
      const target = document.querySelector(config.target);
      if (target) {
        target.insertAdjacentHTML(position, html);
      }
    }
  }
}

async function loadSections(sections) {
  for (const [name, config] of Object.entries(sections)) {
    const target = document.querySelector(config.target);
    if (target) {
      const html = await loadHTML(config.path);
      if (html) {
        target.innerHTML = html;
      }
    } else {
      console.warn(`Target não encontrado: ${config.target}`);
    }
  }
}

async function loadComponentTags(components) {
  for (const [name, config] of Object.entries(components)) {
    const target = document.querySelector(config.target);
    if (target) {
      const html = await loadHTML(config.path);
      if (html) {
        target.outerHTML = html;
      }
    } else {
      console.warn(`Target não encontrado: ${config.target}`);
    }
  }
}

export async function initHTMLLoader() {
  await loadComponents(COMPONENTS);
  await loadComponentTags(COMPONENT_TAGS);
  await loadSections(SECTIONS);
}
