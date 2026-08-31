let botao = document.getElementById("likeButton");

botao.addEventListener("click", botaoClicado);

function botaoClicado() {
    console.log("fui clicado");

    let texto = document.getElementById("contador");

    texto.textContent++;
}