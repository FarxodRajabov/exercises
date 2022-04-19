const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const input = +data
const res = (input * 100)/10000

fs.writeFileSync('output.txt', `${res}`, 'utf8');

