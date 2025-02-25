
const eventsData = [
    {
        title: 'Mutirão',
        date: '15/02/2025',
        location: 'Ministério Cristão Edificar',
        link: './mutirao.html',
        image: 'SEU_BASE64_AQUI'
    },
    {
        title: 'Escola de Vencedores',
        date: '18/02/2025',
        location: 'Ministério Cristão Edificar',
        link: './escola-vencedores.html',
        image: 'SEU_BASE64_AQUI'
    },
    {
        title: 'Holy Fest',
        date: '28/02 à 04/03/2025',
        location: 'Ministério Cristão Edificar',
        link: './holy-fest.html',
        image: 'SEU_BASE64_AQUI'
    },
    {
        title: 'Jejum Vinha',
        date: '09/03 à 30/03/2025',
        location: 'Ministério Cristão Edificar',
        link: './jejum-vinha.html',
        image: 'SEU_BASE64_AQUI'
    },
    {
        title: 'Encontro com Deus',
        date: '21/03 à 23/03/2025',
        location: 'Retiro Espiritual',
        link: './encontro-com-deus.html',
        image: 'SEU_BASE64_AQUI'
    },
    {
        title: 'Encontro Mundial Rede Kids',
        date: '12/04/2025',
        location: 'Ministério Cristão Edificar',
        link: './rede-kids.html',
        image: 'SEU_BASE64_AQUI'
    },
    {
        title: '1° Conferência Edificar',
        date: '25/04 à 26/04/2025',
        location: 'EMinistério Cristão Edificar',
        link: './conferencia-edificar.html',
        image: 'SEU_BASE64_AQUI'
    },
    {
        title: 'Conferência Vinha BH',
        date: '09/05 à 10/05/2025',
        location: 'Vinha BH',
        link: './vinha-bh.html',
        image: 'SEU_BASE64_AQUI'
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');

    eventsData.forEach(event => {
        const eventHTML = `
            <div class="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
                <div class="img" style="background-image: url('data:image/jpeg;base64,${event.image}');"></div>
                <div class="text p-4 px-md-5 d-flex align-items-center">
                    <div class="desc">
                        <h2 class="mb-4">${event.title}</h2>
                        <div class="meta">
                            <p>
                                <span><i class="fa fa-calendar mr-2"></i> ${event.date}</span>
                                <span><i class="fa fa-map-marker mr-2"></i> ${event.location}</span>
                            </p>
                        </div>
                        <p><a href="${event.link}" class="btn btn-primary">Mais Detalhes</a></p>
                    </div>
                </div>
            </div>
        `;
        eventList.innerHTML += eventHTML;
    });
});