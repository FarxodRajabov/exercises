const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const n = +data

function num(n) {
    let a = 2*n + 1
    let b = n + 1
     if (a % 4 === 1 && b % 4 === 3 || a % 4 === 3 && b % 4 === 2) {
         return 'A'
     }
     return 'B'
}


fs.writeFileSync('output.txt', `${num(n)}`, 'utf8');

