const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split(' ').map(item => parseInt(item));

function res(a,b) {
    let sum = Math.floor(b / a)
    return sum 
}

fs.writeFileSync('output.txt', `${res(a,b)}`, 'utf8');

