// Seleciona todos os botões de like
let botoes = document.querySelectorAll(".like-btn");

// Adiciona o evento de clique em cada botão
botoes.forEach(function(botao) {
    botao.addEventListener("click", botaoClicado);
});

// Função executada ao clicar
function botaoClicado() {
    console.log("fui clicado");

    let texto = this.querySelector("span");
    texto.textContent++;
}