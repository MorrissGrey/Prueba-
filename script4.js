// Mostrar/ocultar detalles del proyecto
document.querySelectorAll('.ver-mas').forEach(boton => {
    boton.addEventListener('click', () => {
        const detalles = boton.nextElementSibling;
        detalles.classList.toggle('oculto');
        boton.textContent = detalles.classList.contains('oculto') ? 'Ver más' : 'Ver menos';
    });
});