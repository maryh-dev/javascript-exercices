// Uma loja oferece as seguintes condições: 
// Compras acima de R$ 500 recebem 15% de desconto. // Compras de R$ 200 até R$ 500 recebem 10%. 
// Compras abaixo de R$ 200 não recebem desconto.

let compra = 600;

if (compra > 500) { console.log("Desconto: 15%"); } else if (compra >= 200) { console.log("Desconto: 10%"); } else { console.log("Desconto: 0%"); }
