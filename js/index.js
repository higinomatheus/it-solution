const currentYearSpan = document.querySelector("#current-year");
currentYearSpan.innerHTML = new Date().getFullYear();

// Função para animação de rolar para a seção alvo
function scrollToTarget(hash) {
    const targetElement = document.querySelector(hash);
    const targetOffsetTop = targetElement.offsetTop - 100;
  
    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth'
    });
  }
  
  // Adiciona o evento de clique aos elementos do menu e botões
  document.querySelectorAll("#navbar a, .btn").forEach(function (element) {
    element.addEventListener("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        scrollToTarget(this.hash);
      }
    });
  });
  
  // Adiciona o evento de rolagem à janela
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("#navbar");
    
    if (window.scrollY > 150) {
      navbar.style.opacity = 0.9;
    } else {
      navbar.style.opacity = 1;
    }
  });  
