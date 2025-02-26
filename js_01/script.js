document.addEventListener("DOMContentLoaded", function () {
    var mioBottone = document.getElementById("mioBottone");
    var messaggio = document.getElementById("messaggio");

    if (mioBottone && messaggio) {
        mioBottone.addEventListener("click", function () {
            // Se il messaggio è visibile, rimuovilo
            if (messaggio.textContent) {
                messaggio.textContent = "";
            } else {
                // Altrimenti, mostra il messaggio
                messaggio.textContent = "Hai cliccato il bottone!";

                // Imposta un timer per rimuovere il messaggio dopo 3 secondi
                setTimeout(function () {
                    messaggio.textContent = "";
                }, 3000); // 3000 millisecondi = 3 secondi
            }
        });
    }
});