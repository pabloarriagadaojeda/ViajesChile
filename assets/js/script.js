$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("Mensaje enviado correctamente, te estaremos contactando pronto. ¡Buen día!");
    });
    
    
    $(".icono").on("click", function () {
        $(this).siblings(".texto-presentacion").slideToggle();
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});