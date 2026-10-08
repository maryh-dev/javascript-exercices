function clique() {
    const contador = document.getElementById("contador");
    
    contador.textContent = parseInt(contador.textContent) + 1;
}

function zerar() {
    let contador = document.getElementById("contador");
    
    contador.textContent = 0;
}