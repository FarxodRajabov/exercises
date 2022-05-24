const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const a = +data

function steps(a) {
    let res = Math.floor(a / 2) + 1
    return res
}


fs.writeFileSync('output.txt', `${steps(a)}`, 'utf8');

