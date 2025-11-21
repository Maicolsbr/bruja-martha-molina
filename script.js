document.addEventListener('DOMContentLoaded', () => {
    // 1. **CONFIGURA AQUÍ TU NÚMERO DE WHATSAPP Y MENSAJE**
    const whatsappNumber = '+573144222492'; // Reemplaza con tu código de país y número. Ejemplo: 57 (Colombia)
    const whatsappMessage = 'Hola Martha Molina, vengo de tu página web y quiero una consulta sobre Amarres de Amor.';

    // Codifica el mensaje para la URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Crea el link de WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Asigna el link al botón
    const button = document.getElementById('whatsapp-link');
    if (button) {
        button.href = whatsappLink;
    }
});