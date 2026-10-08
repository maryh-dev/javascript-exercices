// Um sistema permite acesso somente quando o usuário está cadastrado e a senha está correta. 
// Crie duas variáveis booleanas e utilize o operador && para representar a condição de acesso.

let cadastrado = true; 

let senhaCorreta = true;

let acesso = cadastrado && senhaCorreta;

console.log("Acesso permitido: " + acesso);
