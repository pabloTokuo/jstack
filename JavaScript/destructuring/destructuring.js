const user = {
  firstName: 'Pablo',
  lastName: 'Tokuo',
  full_name: 'Pablo Tokuo',
  age: 26,
  instagram: 'pabloTokuo',
  skills: ['Front-End', 'Back-End', 'UI/UX']
}

// Destructuring
const { firstName, lastName, age, instagram, skills, full_name: fullName } = user;
const [primary, secondary, tertiary, quartiary] = skills;

console.log(full_name);