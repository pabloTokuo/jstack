function minhaFunction() {
  // Tem seu proprio objeto this
  this.name = 'Pablo';
}

console.log(new minhaFunction());

const minhaArrowFunction = () => {
  // Herda o this da onde foi criada
  this.name = 'Pablo';
};

minhaArrowFunction();
console.log(this);

const soma = () => {
  console.log(arguments);
}

soma(1, 2, 3 ,4 , 5, 6, 7, 'Pablo');

const getUser = () => ({
  id: 123,
  name: 'Pablo',
})

console.log(getUser());

const algumNumero = 10;

const somaTotal = () => (
  algumNumero >= 10 
  ? 'Maior que 10' 
  : 'Menor que 10'
);

console.log(somaTotal());