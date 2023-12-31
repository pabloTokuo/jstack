const array = [
  { name: 'Iphone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];

// find
// Sempre retorna o primeiro elemento que a condicao for true
const find = array.find((product) => product.price > 5000);
// console.log({find});

// findIndex
// Retorna a posicao que o elemento da condicao true esta
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
// console.log({findIndex});

// some
// Retorna true ou false se algum item bate com a condicao
const some = array.some((product) => product.price < 1000);
// console.log({some});

// every
// Verifica se todos os items do array bate com a condicao
const every = array.every((product) => product.price > 900);
// console.log({every});

// map
// Retorna um novo array com as mudancas necessarias
const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.price * product.quantity,
  }
});
// console.log({map});

// filter
// Filtra e retorna um array com a condicao especifica
const filter = array.filter((product) => product.quantity > 1);
// console.log(filter);

// reduce
// Reduce recebe 2 argumentos
// 
const reduce = array.reduce((acc, product) => {
  return acc + (product.price * product.quantity);
}, 0);

console.log({ reduce });