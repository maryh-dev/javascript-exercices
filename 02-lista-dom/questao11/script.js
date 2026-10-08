function alterar() {
    const titulo = document.getElementById("titulo");
    const mensagem = document.getElementById("mensagem");

    titulo.textContent = "Página Modificada";
     titulo.style.color = "red";
    mensagem.textContent = "As informações foram alteradas.";
}

function restaurarPagina() {
    const titulo = document.getElementById("titulo");
    const mensagem = document.getElementById("mensagem");

    titulo.textContent = "Minha Página";
    titulo.style.color = "black";
    mensagem.textContent = "Página inicial do sistema.";
}