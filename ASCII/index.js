const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const input = data

const res = input.charCodeAt(0)

fs.writeFileSync('output.txt', `${res}`, 'utf8');

