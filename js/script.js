

let btnMenu = document.getElementById('menuCheckbox');

/*projetoJson.map((projeto, index) => {
	let projetoItem = document.querySelector('.models .project').cloneNode(true);

	projetoItem.querySelector('.project img').src = projeto.img;
	projetoItem.querySelector('.project__description h4').textContent = projeto.name;
	//projetoItem.querySelector('.project__description p').textContent = projeto.description;
	projetoItem.querySelector('.project__description .links a').href = projeto.repositorio;
	projetoItem.querySelector('.project__description .links a:last-child').href = projeto.url;

	projetoItem.querySelector('.project__description .links a').textContent = 'Repositório';
	projetoItem.querySelector('.project__description .links a:last-child').textContent = 'Demo';

	projetoItem.querySelector('.project__description .links a').target = '_blank'
	projetoItem.querySelector('.project__description .links a:last-child').target = '_blank'

	document.querySelector('.projects__container').append(projetoItem);
})
*/
document.addEventListener('click', event => {
	if (event.target  != btnMenu) {
		btnMenu.checked = false;
	}
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