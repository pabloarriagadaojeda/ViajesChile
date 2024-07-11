$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
    
    
    $(".icono").on("click", function () {
        $(this).siblings(".texto-presentacion").slideToggle();
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});