document.addEventListener('DOMContentLoaded', () => {
    

    const whatsappNumber = '573144222492'; 

    // 2. MENSAJE PREDEFINIDO QUE TE LLEGARÁ
    const whatsappMessage = 'Hola Maestra Martha Molina, necesito ayuda urgente con un trabajo. Vengo de su página web.';

    // ----------------------

    // Lógica para crear el enlace
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Selecciona TODOS los botones (los gigantes y el flotante) y les pone el link
    const buttons = document.querySelectorAll('.whatsapp-link-dynamic');
    
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.href = whatsappLink;
            // Opcional: abrir en nueva pestaña
            // button.target = "_blank"; 
        });
    } else {
        console.error('No se encontraron botones de WhatsApp');
    }
});
