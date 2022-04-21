const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const n = +data

function name(n) {
    let sum = Math.floor(Math.floor((Math.sqrt(n*8 + 1) + 1))/2 - 1)
    return sum
}


fs.writeFileSync('output.txt', `${name(n)}`, 'utf8');

