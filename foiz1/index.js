const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const [a, b] = data.split(' ').map(item => parseInt(item));

function res(a,b) {
    let num = b/a * 100
    let number = num.toFixed(2)

    return (number + '%')
}

fs.writeFileSync('output.txt', `${res(a,b)}`, 'utf8');
