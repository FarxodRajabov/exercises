const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const n = +data

function elem(n) {
    let res = (n ** 3) - 1
    return res
}




fs.writeFileSync('output.txt', `${elem(n)}`, 'utf8');

