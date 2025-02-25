document.addEventListener('DOMContentLoaded', () => {
    const wrapData = {
        address: 'R. Monte Carmelo, 393 - Martins | Uberlândia - MG',
        instagramLink: 'hhttps://www.instagram.com/ministeriocristaoedificar/',
        youtubeLink: 'https://www.youtube.com/@ministeriocristaoedificar2099'
    };

    document.getElementById('wrap-address').textContent = wrapData.address;
    document.getElementById('wrap-instagram').href = wrapData.instagramLink;
    document.getElementById('wrap-youtube').href = wrapData.youtubeLink;
});