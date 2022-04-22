const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const res = data.split(' ').reduce((sum, elem) => +elem.charCodeAt() -64  + sum, 0)
fs.writeFileSync('output.txt', `${res}`, 'utf8');

