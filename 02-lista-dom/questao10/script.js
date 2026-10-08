function ativar() {
    const status = document.getElementById("status");
    const mensagem = document.getElementById("mensagem");

    status.textContent = " Ativo";
    mensagem.textContent = "Sistema ativado com sucesso!";
    mensagem.style.color = "green";
}

function desativar() {
    const status = document.getElementById("status");
    const mensagem = document.getElementById("mensagem");

    status.textContent = " Inativo";
    mensagem.textContent = "Sistema desativado!";
    mensagem.style.color = "red";
}