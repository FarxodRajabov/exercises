const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const [a, b] = data.split(' ').map(item => parseInt(item));

function EkEb(a,b) {
    return a * b
}

fs.writeFileSync('output.txt', `${EkEb(a,b)}`, 'utf8');

