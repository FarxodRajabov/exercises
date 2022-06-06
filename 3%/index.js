const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const a = data.split(' ').map(item => parseInt(item));
function res (a) {
    if (a % 4 === 0) {
        return a / 2
    }else {
        return -1
    }
}

fs.writeFileSync('output.txt', `${res(a)}`, 'utf8');

