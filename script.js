// Contador de curtidas

let contador = 0;

function curtir() {
    contador++;
    document.getElementById("likes").innerHTML = contador;
}