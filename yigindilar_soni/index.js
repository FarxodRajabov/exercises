const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const input = +data

 function res(input) {
     if (input % 2 === 0) {
         return input / 2 + 1
     }
     return (input - 1) / 2 + 1
 }

fs.writeFileSync('output.txt', `${res(input)}`, 'utf8');

