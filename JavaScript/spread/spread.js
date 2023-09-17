const user = {
  firstName: 'Pablo',
  lastName: 'Tokuo',
  age: 26,
  instagram: 'pabloTokuo',
  skills: ['Front-End', 'Back-End', 'UI/UX'],
  active: false,
}

// Spread Operator
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Mobile'],
  active: true,
}


console.log({user});
console.log({updatedUser});