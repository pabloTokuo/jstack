const { log } = require('console');
const { printName, lastName } = require('./printName');

printName(`Pablo ${lastName}`);

const os = require('os');
console.log(os.arch());
