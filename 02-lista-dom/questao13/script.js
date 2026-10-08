function sistema(id) {
    const status = document.getElementById("status");

    switch(id) {
        case 1:
            status.textContent = "Verificado";
            break;
        case 2:
            status.textContent = "Sistema reiniciado com sucesso!";
            break;
        case 3:
            status.textContent = "Operacional";
            break;
    }
}