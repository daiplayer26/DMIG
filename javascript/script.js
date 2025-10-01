document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video-promocional');
    const soundBtn = document.getElementById('toggle-sound-btn');
    const soundIcon = soundBtn.querySelector('i');

    // 1. Aseguramos el inicio de la reproducción
    // Esto es un "polyfill" para navegadores muy estrictos, aunque 'muted' suele bastar.
    video.play().catch(error => {
        // En caso de que falle el autoplay, podríamos mostrar un botón de "Play"
        console.log("El video está listo para reproducirse, pero la promesa falló (generalmente ignorado si está silenciado).");
    });
    
    // 2. Lógica del botón de sonido: la interacción del usuario
    soundBtn.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false; // ¡El sonido se activa!
            soundIcon.classList.remove('fa-volume-xmark');
            soundIcon.classList.add('fa-volume-high'); // Cambia a ícono de sonido alto
        } else {
            video.muted = true; // Silencia de nuevo
            soundIcon.classList.remove('fa-volume-high');
            soundIcon.classList.add('fa-volume-xmark'); // Cambia a ícono de silenciado
        }
    });
});