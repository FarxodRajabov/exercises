const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const n = data.split('\r')

const [a, b] = n

function res(a,b) {
    if(b === undefined) {
        return a.split(' ').reduce((sum,elem) => (sum + +elem), 0)
    } else {
        return a * b
    }
}

fs.writeFileSync('output.txt', `${res(a,b)}`, 'utf8');
