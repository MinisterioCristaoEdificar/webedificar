document.addEventListener('DOMContentLoaded', () => {
    const footerData = {
        title: 'Edificar',
        description: 'Uma comunidade comprometida com a fé, amor e edificação.',
        youtubeLink: 'https://www.youtube.com/@ministeriocristaoedificar2099',
        instagramLink: 'https://www.instagram.com/ministeriocristaoedificar/',
        address: 'R. Monte Carmelo, 393 - Martins | Uberlândia - MG',
        phone: '+55 (34) 99217-6055',
        phoneLink: 'https://api.whatsapp.com/send/?phone=5534992176055&text&type=phone_number&app_absent=0',
        email: 'contato@edificar.com.br',
        emailLink: 'mailto:contato@edificar.com.br'
    };

    document.getElementById('footer-title').textContent = footerData.title;
    document.getElementById('footer-description').textContent = footerData.description;
    document.getElementById('footer-youtube').href = footerData.youtubeLink;
    document.getElementById('footer-instagram').href = footerData.instagramLink;
    document.getElementById('footer-address').textContent = footerData.address;
    document.getElementById('footer-phone').textContent = footerData.phone;
    document.getElementById('footer-phone-link').href = footerData.phoneLink;
    document.getElementById('footer-email').textContent = footerData.email;
    document.getElementById('footer-email-link').href = footerData.emailLink;
});
