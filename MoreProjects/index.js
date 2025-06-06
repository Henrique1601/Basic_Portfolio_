const BtnVoltar = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function () {
  
  const Voltar = () => {
    window.location.href = "../index.html";
    console.log("Voltar");
  }
  
  BtnVoltar.addEventListener("click", Voltar);

})

 

