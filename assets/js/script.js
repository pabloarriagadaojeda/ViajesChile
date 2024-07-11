$(document).ready(function () {

    /* Alerta al enviar el mensaje */
    $("#enviarCorreo").click(function () {
        alert("Mensaje enviado correctamente, te estaremos contactando pronto. ¡Buen día!");
    });
    
    /* Mostrar los textos en la sección de presentación */
    $(".icono").on("click", function () {
        $(this).siblings(".texto-presentacion").slideToggle();
    });

    /* Despliega los tooltip */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});