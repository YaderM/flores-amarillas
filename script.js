const boton = document.getElementById('boton-musical');
const inicial = document.getElementById('mensaje-inicial');
const contenido = document.getElementById('contenido-flor');

boton.addEventListener('click', () => {
    inicial.classList.add('hidden');
    contenido.classList.remove('hidden');
});