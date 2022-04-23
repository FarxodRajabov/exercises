const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const input = +data

const res = Math.floor(input/2) + 1

fs.writeFileSync('output.txt', `${res}`, 'utf8');

