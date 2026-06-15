//criar um objeto que represente o mundo real
const animal = {
    nome: "Thor", //string
    especie: "cachorro", //string
    idade: 4, //number
    tutor: true, //boolean
    vacinado: false //boolean
};

console.log(animal.nome);
console.log(animal.tutor);

const camiseta = {
    tamanho: 14, //number
    tecido: "Algodão",
    design: true,
    cor: "vermelho",
    marca: "maravila"
};

//console.log(camiseta);
console.log(`A camiseta da ${camiseta.marca} é feita de ${camiseta.tecido},`);