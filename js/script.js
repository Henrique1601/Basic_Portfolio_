const Btn_avancar = document.getElementById("Mais-projetos");
let btnMenu = document.getElementById("menuCheckbox");

document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll("figure");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log("Elemento visivel:", entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Adiciona a classe para disparar a animação
          observer.unobserve(entry.target); // Para de observar o elemento após a animação (opcional)
        }
      });
    },
    {
      threshold: 0.2, // A animação dispara quando 10% firme estiver visível (ajuste conforme necessário)
    }
  );

  figures.forEach((figure) => {
    observer.observe(figure); // Observa cada elemento figure
  });
});
document.addEventListener("click", (event) => {
  if (event.target != btnMenu) {
    btnMenu.checked = false;
  }
});

Btn_avancar.addEventListener("click", () => {
  window.location.href = "../MoreProjects/index.html";
});

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("black");
}

(function () {
  emailjs.init("qm-LMfAJhwP21QQeK"); // Substitua pelo seu User ID do EmailJS
})();

window.onload = function () {
  // Lista de IPs que não devem receber emails - carregada de forma segura
  const excludedIPs = [];

  // Tenta carregar o IP de uma variável de ambiente ou localStorage
  const savedIP = localStorage.getItem("myIP");
  if (savedIP) {
    excludedIPs.push(savedIP);
  }

  // Função para verificar se deve enviar o email
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      const visitorIP = data.ip;

      // Se o IP não estiver na lista de exclusão, envia o email
      if (!excludedIPs.includes(visitorIP)) {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();

        emailjs
          .send("Gmail_to_me", "template_bni0kyh", {
            date: date,
            time: time,
            ip: visitorIP,
          })
          .then(
            function (response) {
              console.log("E-mail enviado com sucesso!", response);
            },
            function (error) {
              console.log("Erro ao enviar o e-mail:", error);
            }
          );
      } else {
        console.log("Email não enviado - IP na lista de exclusão");
      }
    })
    .catch((error) => {
      console.error("Erro ao obter IP:", error);
    });
};

// Função para configurar seu IP (você pode chamar isso no console do navegador)
function setMyIP() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("myIP", data.ip);
      console.log("IP salvo com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao obter IP:", error);
    });
}
