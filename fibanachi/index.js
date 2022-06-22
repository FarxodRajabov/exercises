const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const input = +data


function fiban (n) {
    let array = [1, 2]
    for (let i = 2; i < n; i++) {
        array.push(array[i - 1] + array[i - 2])
    }
    return array
}

const result = fiban(input).join(' ')

fs.writeFileSync('output.txt', `${result}`, 'utf8');