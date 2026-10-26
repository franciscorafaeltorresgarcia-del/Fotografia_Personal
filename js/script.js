const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    respuesta.textContent = 'Formulario de ejemplo: el mensaje no se envía a ningún servidor.';
    formulario.reset();
});
