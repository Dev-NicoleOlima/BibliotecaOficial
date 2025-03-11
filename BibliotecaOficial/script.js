// Aguarda até que o conteúdo do DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os itens de relato
  const relatoItems = document.querySelectorAll('.relato-item');

  // Seleciona todos os cartões de frase
  const fraseItems = document.querySelectorAll('.frase-item');

  // Seleciona o menu lateral e o botão de abrir/fechar
  const sideMenu = document.getElementById('side-menu');
  const menuButton = document.querySelector('.menu-icon');
  const closeButton = document.querySelector('.close-btn');

  // ---------------------------------------------
  // 1. Abre e fecha o menu lateral
  // ---------------------------------------------
  // Função para alternar a visibilidade do menu
  function toggleMenu() {
    // Verifica a posição atual do menu
    if (sideMenu.style.right === '-300px') {
      sideMenu.style.right = '0'; // Mostra o menu
    } else {
      sideMenu.style.right = '-300px'; // Esconde o menu
    }
  }

  // Adiciona os eventos de clique nos botões
  menuButton.addEventListener('click', toggleMenu); // Abre o menu
  closeButton.addEventListener('click', toggleMenu); // Fecha o menu

  // ---------------------------------------------
  // 2. Animação ao rolar para itens de relato
  // ---------------------------------------------
  const observerRelatos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Ativa a classe de animação
      }
    });
  });

  // Adiciona os relatos para o observador
  relatoItems.forEach((item) => observerRelatos.observe(item));

  // ---------------------------------------------
  // 3. Animação ao rolar para itens de frases
  // ---------------------------------------------
  const observerFrases = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Ativa a classe de animação
      }
    });
  });

  // Adiciona os cartões de frase para o observador
  fraseItems.forEach((item) => observerFrases.observe(item));

  // ---------------------------------------------
  // 4. Scroll suave para links de navegação
  // ---------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link

      // Obtém o destino do link
      const target = document.querySelector(this.getAttribute('href'));

      // Calcula a posição do destino ajustada para o header fixo
      const offset = 80;
      const position = target.offsetTop - offset;

      // Faz o scroll suave até o destino
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  });
});

// Inicializa o Swiper(botões)
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Faz o carrossel ser infinito
    navigation: {
      // não funciona os botões//
      nextEl: '.swiper-button-next', // Botão para avançar
      prevEl: '.swiper-button-prev', // Botão para retroceder
    },
    slidesPerView: 4, // Mostra quatro slides por vez
    spaceBetween: 100, // Espaço entre os slides
    autoplay: {
      delay: 4000, // Troca os slides automaticamente a cada 4 segundos
    },
  });
});
