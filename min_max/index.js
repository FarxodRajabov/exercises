const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const [a, b, c, d, f] = data.split(' ').map(item => parseInt(item));

const sum = a + b + c + d + f

let min = sum - Math.max(a, b, c, d, f)
let max = sum - Math.min(a, b, c, d, f)

fs.writeFileSync('output.txt', `${min} ${max}`, 'utf8');

