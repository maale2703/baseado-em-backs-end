// Exemplo de declaração de 5 variaveis para um funcionario

let nomeFuncionario = "João Silva";
let idadeFuncionario = 30;
let salrioFuncionario = 4500.50
let cargoFuncionario = "analista";
let estaAtivo = true; 

console.log(`O funcionário ${nomeFuncionario} tem ${idadeFuncionario} anos. Ele trabalha como ${cargoFuncionario}`);
console.log(`O funcionário ${estaAtivo} o salario ${salrioFuncionario}`);

const salarioBase = 4500.50;
const bonusMensal = 500;

console.log(`O funcionário recebe um salário base de R$ ${salarioBase} e um bônus de R$ ${bonusMensal}.`);

// Cálculos
let valorINSS = salrioFuncionario * 0.10;
let salarioTotal = salrioFuncionario - valorINSS;
