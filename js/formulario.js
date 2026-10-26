// Ejemplo de formulario: funciona localmente y no envía ni guarda datos.
const formulario = document.getElementById('formularioOpinion');
if (formulario) {
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        formulario.classList.add('was-validated');
        if (!formulario.checkValidity()) return;
        const aviso = document.getElementById('mensajeFormulario');
        aviso.classList.add('mostrar');
        aviso.textContent = 'Formulario completado correctamente. Es una demostración: los datos no se enviaron ni se guardaron.';
        formulario.reset();
        formulario.classList.remove('was-validated');
    });
}
