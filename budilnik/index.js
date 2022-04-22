const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split(' ').map(item => parseInt(item));

function watch(a, b) {
    let res = b - a + 24
    return res
}


fs.writeFileSync('output.txt', `${watch(a,b)}`, 'utf8');

