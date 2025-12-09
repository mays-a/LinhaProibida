document.addEventListener('DOMContentLoaded', function(){
  // Slider
  const slidesEl = document.querySelector('.slides');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slideTitle = document.getElementById('slideTitle'); // título do slide
  let index = 0;
  const total = slides.length;

  function update(){
    slidesEl.style.transform = `translateX(-${index * 100}%)`;

    // Atualiza o título do slide
    if(slideTitle && slides[index]){
      const currentTitle = slides[index].getAttribute('data-title');
      slideTitle.textContent = currentTitle;
    }
  }

  // Botões
  if(prevBtn){
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      update();
    });
  }

  if(nextBtn){
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % total;
      update();
    });
  }

  // Inicializa com o título do primeiro slide
  update();

  // Atualiza ano no footer
  const yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }

  // (Opcional) autoplay:
  // setInterval(() => { index = (index + 1) % total; update(); }, 6000);
});

// Barra de pesquisa
document.addEventListener('DOMContentLoaded', function(){
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn && searchInput) {
    function doSearch(){
      const term = searchInput.value.trim();
      if (!term) {
        alert('Digite algo para pesquisar.');
        return;
      }
      alert('Você pesquisou por: ' + term);
    }

    searchBtn.addEventListener('click', doSearch);

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        doSearch();
      }
    });
  }
});
