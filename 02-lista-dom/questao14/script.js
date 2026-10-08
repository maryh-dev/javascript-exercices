function painel(id) {
    const mensagem = document.getElementById("mensagem");

    switch(id) {
        case 1:
            mensagem.textContent = "Mensagem alterada!";
            break;
        case 2:
            mensagem.style.color = "blue";
            break;
        case 3:
            document.body.classList.add("modo-escuro");
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            break;
        case 4:
            document.body.classList.remove("modo-escuro");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            break;
        case 5:
            mensagem.textContent = "Bem-vindo(a) ao painel!";
            mensagem.style.color = "black";
            document.body.classList.remove("modo-escuro");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            alert("Restaurado com sucesso!");
            break;
    }
}