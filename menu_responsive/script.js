document.addEventListener("DOMContentLoaded", function () {
    // Seleziona il bottone "Cambia Sfondo"
    var changeBackgroundButton = document.getElementById("changeBackground");

    // Aggiungi un evento al click
    changeBackgroundButton.addEventListener("click", function () {
        // Cambia il background del body a un gradiente dinamico
        document.body.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
    });
});