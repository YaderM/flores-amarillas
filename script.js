const boton = document.getElementById('boton-musical');
const inicial = document.getElementById('mensaje-inicial');
const contenido = document.getElementById('contenido-flor');

boton.addEventListener('click', () => {
    inicial.style.display = 'none';
    contenido.classList.remove('hidden');
    
    // Si tenés el audio
    const audio = document.getElementById('musica');
    if (audio) audio.play();

    // Iniciar los fuegos
    iniciarFuegos();
});

// Función de pólvora rápida
function iniciarFuegos() {
    const canvas = document.getElementById('canvas-fuegos');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // ... aquí va el código de partículas que te pasé antes ...
}