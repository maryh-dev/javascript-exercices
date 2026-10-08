function atendimento(id) {
    const mensagem = document.getElementById("mensagem");

    switch(id) {
        case 1:
            mensagem.textContent = "Você selecionou atendimento para problemas de computador.";
            mensagem.style.color = "blue";
            alert("Computador");
            break;
        case 2:
            mensagem.textContent = "Você selecionou atendimento para problemas de rede.";
            mensagem.style.color = "green";
            alert("Rede");
            break;
        case 3:
            mensagem.textContent = "Você selecionou atendimento para problemas de software.";
            mensagem.style.color = "red";
            alert("Software");
            break;
    }
}