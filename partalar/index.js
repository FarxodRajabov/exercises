const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b, c] = data.split(' ').map(item => parseInt(item));



function parta(a, b, c) {
    let res = Math.ceil(a / 2 ) + Math.ceil(b / 2 ) + Math.ceil(c / 2 )
    return res
}

fs.writeFileSync('output.txt', `${parta(a, b, c)}`, 'utf8');

