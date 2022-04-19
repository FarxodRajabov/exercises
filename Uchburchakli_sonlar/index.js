const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const input = +data

function add(input) {
    let sum = ((1 + input) * input)/2
    return sum
}


fs.writeFileSync('output.txt', `${add(input)}`, 'utf8');

