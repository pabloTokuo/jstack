const user = {
  firstName: 'Pablo',
  lastName: 'Tokuo',
  full_name: 'Pablo Tokuo',
  age: 26,
  instagram: 'pabloTokuo',
  skills: ['Front-End', 'Back-End', 'UI/UX']
}

// Rest Operator
const { firstName, skills, ...rest } = user;
const [primary ] = skills;

console.log(firstName, primary, rest);