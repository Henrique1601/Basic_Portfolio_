const Btn_avancar = document.getElementById('Mais-projetos')
let btnMenu = document.getElementById('menuCheckbox');

document.addEventListener('DOMContentLoaded', () => {
const figures = document.querySelectorAll('figure');

const observer = new IntersectionObserver((entries,  observer) => {
    entries.forEach(entry => {
        console.log('Elemento visivel:', entry.target);
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Adiciona a classe para disparar a animação
            observer.unobserve(entry.target);// Para de observar o elemento após a animação (opcional)
            }
        });
    
    },{
        threshold: 0.2 // A animação dispara quando 10% firme estiver visível (ajuste conforme necessário)
    });

    figures.forEach(figure => {
        observer.observe(figure);  // Observa cada elemento figure
    });	    
})
document.addEventListener('click', event => {
	if (event.target  != btnMenu) {
		btnMenu.checked = false;
	}
})

Btn_avancar.addEventListener('click', () => {
	window.location.href="../MoreProjects/index.html"
})

function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('black')
}

(function() {
    emailjs.init("qm-LMfAJhwP21QQeK"); // Substitua pelo seu User ID do EmailJS
})();


window.onload = function() {
	// to:"henriquebs1601@gmail.com"
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    emailjs.send("Gmail_to_me", "template_bni0kyh", {
        date: date,
        time: time
    })
    .then(function(response) {
        console.log("E-mail enviado com sucesso!", response);
    }, function(error) {
        console.log("Erro ao enviar o e-mail:", error);
    });
};