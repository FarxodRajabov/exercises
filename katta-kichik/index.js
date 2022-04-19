const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split(' ').map(elem => parseFloat(elem))
const res = a == b ? '=' : a < b ? '<' : '>'

fs.writeFileSync('output.txt', `${res}`, 'utf8');

