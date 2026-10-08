// Uma pessoa pode receber um desconto se for estudante ou tiver mais de 60 anos. 
// Escreva uma condição utilizando o operador lógico ||.

let estudante = true;
let idade = 20;

let desconto = estudante || idade > 60;

console.log("Recebe desconto: " + desconto);
