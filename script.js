et botao = document.getElementById("likeButton");
        let contador = document.getElementById("contador");

        let likes = 0;

        botao.addEventListener("click", function() {

            likes++;

            contador.textContent = likes;

        });