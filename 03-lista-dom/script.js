function questao1() {
// Boas-vindas personalizadas
let nome = "Maria Machado";

console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!");
}

function questao2() {
//Cálculo de idade
let anoAtual = 2026;
let anoNascimento = 2008;
let idade = anoAtual - anoNascimento;

console.log("Você tem " + idade + " anos.");
}

function questao3() {
//Mensagem de localização
let cidade = "Feira de Santana";
let estado = "Bahia";
let pais = "Brasil";

console.log("Você está em " + cidade + " - " + estado + " - " + pais + ".");
}

function questao4() {
//Tipo da variável
let temCarteira = true||false;

console.log("O tipo da variável é: " + typeof temCarteira);

}

function questao5() {
//Simulação bancária simples
let saldo = 0;

saldo += 200;

saldo -= 50;

console.log("O saldo final é: R$" + saldo);
console.log("O saldo iniciou em 0, houve um deposito de 200 e um saque de 50, resultando em um saldo final de R$" + saldo);
}

function questao6() {
//Média de notas
let matematica = 8;
let portugues = 7;
let ciencias = 9;

let media = (matematica + portugues + ciencias) / 3;

console.log("A média das notas é: " + media);
}

function questao7() {
//Reajuste de salário

let salario = 3000;

salario*= 1.10;

console.log("O valor do salário inicial era R$3000, multiplicando esse valor por 1.10, temos o novo salário de R$" + salario.toFixed(0));
}

function questao8() {
//Contador de cliques

let cliques = 0;

function simularClique() {
    cliques++;
}

simularClique();
simularClique();
simularClique();

console.log("Número de cliques: " + cliques);
}

function questao9() {
//Constantes não podem ser alteradas

const PI = 3.14;

PI = 3.14159; // Tentativa de alterar o valor da constante

console.log("O erro é gerado pois uma constante não pode ser reatribuída ou alterada, o JavaScript mostra uma mensagem de erro.");
}

function questao10() {
//Concatenando tipos diferentes

let string = "texto";

let numero = 10;

let juncao = string + numero;

console.log("A concatenação resultou em: " + juncao);
console.log("O tipo da variável é: " + typeof juncao);
}
