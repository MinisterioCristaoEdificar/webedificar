const videosData = [
    {
      "title": "Venha e Veja",
      "speaker": "Pr. Edison Jr",
      "date": "Domingo 23 Fev, 2025",
      "description": "Estamos encerrando a série Restaurando a Visão e hoje é dia de revelar à todos aqueles que desejam ver, que basta vir, para poder estar no lugar aonde os nossos olhos são abertos. O convite para os incrédulos,  descrentes e desgastados é, se você não consegue ver com clareza o que Deus está fazendo entre nós nesses dias, é hora de ver com os seus próprios olhos, Venha e Veja!",
      "thumbnail": "./files/imagens/thumbnail/palavra23022025.jpg",
      "videoUrl": "https://www.youtube.com/live/5Kzeh3rEN8k?si=EoaUNu6PCG7mnNlN",
      "downloadUrl": "https://www.youtube.com/live/5Kzeh3rEN8k?si=EoaUNu6PCG7mnNlN",
      "order": 0
    },
    {
        "title": "A Nossa Visão é a Nossa Realidade",
        "speaker": "Pr. Edison Jr",
        "date": "Domingo 16 Fev, 2025",
        "description": "Hoje é o dia que o Senhor preparou para nós! Estamos no 3° Culto da Série Restaurando a Visão. É dia de avançarmos da Revelação para a Visão e da Visão para a Realidade.",
        "thumbnail": "./files/imagens/thumbnail/palavra16022025.jpg",
        "videoUrl": "https://www.youtube.com/live/JxSGSaGssCQ?si=VPecMjknwEdyL3Kr",
        "downloadUrl": "https://www.youtube.com/live/JxSGSaGssCQ?si=VPecMjknwEdyL3Kr",
        "order": 1
    },
    {
        "title": "Abertura da Série Restaurando a Visão",
        "speaker": "Pr. Edison Jr",
        "date": "Domingo 02 Fev, 2025",
        "description": "Hoje é o dia que o Senhor preparou para nós! Estamos no 3° Culto da Série Restaurando a Visão. É dia de avançarmos da Revelação para a Visão e da Visão para a Realidade.",
        "thumbnail": "./files/imagens/thumbnail/palavra02022025.jpg",
        "videoUrl": "https://www.youtube.com/live/JxSGSaGssCQ?si=VPecMjknwEdyL3Kr",
        "downloadUrl": "https://www.youtube.com/live/JxSGSaGssCQ?si=VPecMjknwEdyL3Kr",
        "order": 0
    },
    {
        "title": "Restaurando Nosso Altar Congregacional",
        "speaker": "Pr. Edison Jr",
        "date": "Domingo 26 Jan, 2025",
        "description": "Esse é o Culto de Encerramento da Série Restaurando os Altares.\nDepois de ouvirmos a importância de restaurar nossos altares pessoais e familiares, agora é a vez do nosso altar congregacional. A vida coletiva tem seus desafios, mas é indispensável para cada um de nós compreender o que o Senhor espera de nós, enquanto prestamos nosso culto a Ele.",
        "thumbnail": "./files/imagens/thumbnail/palavra26012025.jpg",
        "videoUrl": "https://www.youtube.com/live/JxSGSaGssCQ?si=VPecMjknwEdyL3Kr",
        "downloadUrl": "https://www.youtube.com/live/JxSGSaGssCQ?si=VPecMjknwEdyL3Kr",
        "order": 1
    },
    {
        "title": "A Restauração dos Altares Familiares",
        "speaker": "Pr. Filipe Nakazato",
        "date": "Domingo 19 Jan, 2025",
        "description": "Nesse mês estamos em uma série de mensagens sobre o poder da Restauração. No 3° Domingo é o momento da Palavra de Deus sobre a Restauração dos Altares Familiares. 'Voltem à sua fortaleza, ó prisioneiros da esperança; pois hoje mesmo anuncio que restaurarei tudo em dobro para vocês.' Zc 9:12. Se a promessa de Deus é uma restauração em dobro, que a nossa casa prove isso primeiro.",
        "thumbnail": "./files/imagens/thumbnail/palavra19012025.jpg",
        "videoUrl": "https://www.youtube.com/live/siCsRQ1bnOk?si=Q1H0woli8sWD4RVy",
        "downloadUrl": "https://www.youtube.com/live/siCsRQ1bnOk?si=Q1H0woli8sWD4RVy",
        "order": 0
    },
    {
        "title": "Restaurando Nossos Altares Pessoais",
        "speaker": "Pr. Edison Jr",
        "date": "Domingo 12 Jan, 2025",
        "description": "No início desse ano, Deus está nos dirigindo a caminhos de restauração na nossa vida devocional. Quando nossos planos não são frutos de um coração regado por orações, eles são apenas projetos humanos, que invariavelmente falham. Mas quando nosso altar pessoal é restaurado, essa vida devocional nos permite viver a plenitude e a abundância. Desfrute conosco dessa série de mensagens, que o Senhor está nos entregando nesse mês de janeiro na Edificar. Vamos restaurar os nossos altares pessoais.",
        "thumbnail": "./files/imagens/thumbnail/palavra12012025.jpg",
        "videoUrl": "https://www.youtube.com/live/9RYViJPAgdQ?si=Betnk1VI_zMqQ1Kk",
        "downloadUrl": "https://www.youtube.com/live/9RYViJPAgdQ?si=Betnk1VI_zMqQ1Kk",
        "order": 1
    }
];

// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('video-list');

    videosData.forEach(event => {
        const reverseClass = event.order == 1 ? 'order-md-last' : '';
        const eventHTML = `
        <div class="row no-gutters d-flex sermon-wrap ftco-animate bg-light fadeInUp ftco-animated">
          <div class="col-md-6 d-flex align-items-stretch js-fullheight ftco-animate fadeInUp ftco-animated ${reverseClass}" style="height: 785px;">
                <a href="${event.downloadUrl}" class="img" style="display: flex; background-image: url(${event.thumbnail});"></a>
           </div>
           <div class="col-md-6 py-4 py-md-5 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
            <div class="text p-md-5">
                <h2 class="mb-4">${event.title}</h2>
                <div class="meta">
                    <p>
                        <span>Ministro: <a href="#" class="ptr">${event.speaker}</a></span>
                        <span><a href="#">On ${event.date}</a></span>
                    </p>
                </div>
                    <p>${event.description}</p>
                    <p class="mt-6 btn-customize">
                        <a href="${event.videoUrl}" class="btn btn-primary px-4 py-3 mr-md-2"><span class="fa fa-play"></span> Ver Ministração</a>
                        <a href="${event.downloadUrl}" class="btn btn-primary btn-outline-primary px-4 py-3 ml-lg-2"><span class="fa fa-download"></span> Download Ministração</a>
                    </p>
            </div>
          </div>
        </div>`;
        eventList.innerHTML += eventHTML;
    });
});