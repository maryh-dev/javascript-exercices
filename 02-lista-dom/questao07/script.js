function enviarFormulario() {
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Mensagem enviada com sucesso!";

    mensagem.style.color = "red";

    alert("Obrigado pelo contato!");
}