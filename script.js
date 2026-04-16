const boton = document.getElementById('boton-musical');
const inicial = document.getElementById('mensaje-inicial');
const contenido = document.getElementById('contenido-flor');
const audio = document.getElementById('musica');

boton.addEventListener('click', () => {
    inicial.classList.add('hidden');
    contenido.classList.remove('hidden');
    
    // Reproducir música
    if (audio) {
        audio.play();
    }

    // Iniciar fuegos artificiales
    iniciarFuegos();
});

// Función básica de fuegos artificiales (Pólvora)
function iniciarFuegos() {
    const canvas = document.getElementById('canvas-fuegos');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let partículas = [];

    function crearParticula(x, y) {
        for (let i = 0; i < 30; i++) {
            partículas.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                vida: 100
            });
        }
    }

    function animar() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.2)'; // Rastro negro
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        partículas.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vida--;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, 3, 3);
            if (p.vida <= 0) partículas.splice(index, 1);
        });

        if (Math.random() < 0.05) { // Probabilidad de explosión
            crearParticula(Math.random() * canvas.width, Math.random() * canvas.height);
        }

        requestAnimationFrame(animar);
    }
    animar();
}