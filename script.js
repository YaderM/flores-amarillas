const boton = document.getElementById('boton-musical');
const flor = document.querySelector('.flower');
const texto = document.getElementById('texto');

boton.addEventListener('click', () => {
    // Activa la animación
    flor.classList.add('animar-flor');
    
    // Muestra el texto suavemente
    texto.style.opacity = '1';
    
    // Oculta el botón para no estorbar
    boton.style.display = 'none';
});