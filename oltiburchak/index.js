const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const a = +data

function res(a) {
    let sum = ((a - 1) + a) * a
    return sum
}





fs.writeFileSync('output.txt', `${res(a)}`, 'utf8');

