const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

let [a, b] = data.split(' ').map(item => parseInt(item));

console.log(`${a} ${b}`);

a = a + b  
b = a - b
a = a - b

console.log(`${a} ${b}`);


fs.writeFileSync('output.txt', `${b} ${a}`, 'utf8');

