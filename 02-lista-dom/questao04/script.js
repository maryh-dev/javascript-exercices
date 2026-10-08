function modoEscuro() {
    document.body.classList.add("modo-escuro");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function modoClaro() {
    document.body.classList.remove("modo-escuro");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}