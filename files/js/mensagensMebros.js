const testimonies = [
    {
      name: 'João Silva',
      message: 'Essa igreja tem sido uma bênção na minha vida, sempre com palavras edificantes.',
      image: 'images/person_1.jpg'
    },
    {
      name: 'Maria Souza',
      message: 'Aqui encontrei uma família espiritual que me acolheu e me ajudou a crescer na fé.',
      image: 'images/person_2.jpg'
    },
    {
      name: 'Carlos Pereira',
      message: 'Sou muito grato pelos ensinamentos e pelo amor que recebo nessa comunidade.',
      image: 'images/person_3.jpg'
    }
  ];

  const carousel = document.querySelector('.carousel-testimony');

  testimonies.forEach(testimony => {
    const item = `
      <div class="item">
        <div class="testimony-wrap d-md-flex">
          <div class="user-img" style="background-image: url(${testimony.image})"></div>
          <div class="text pl-md-4">
            <span class="quote d-flex align-items-center justify-content-center">
              <i class="fa fa-quote-left"></i>
            </span>
            <p>${testimony.message}</p>
            <p class="name">${testimony.name}</p>
          </div>
        </div>
      </div>
    `;
    carousel.innerHTML += item;
  });

  // Iniciar o carrossel (caso necessário)
  $(document).ready(function() {
    $('.carousel-testimony').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  });