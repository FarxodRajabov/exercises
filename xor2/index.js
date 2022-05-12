const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a,...arr] = data.split('\n')

const [b,c] = arr.map(elem => elem.split(' '))



function xor(a,b,c) {
    let array = []
    for (let i = 0; i < +a; i++) {
        array.push(Math.abs(b[i] - c[i]))           
    } 

    return array.join(' ')
}

fs.writeFileSync('output.txt', `${xor(a,b,c)}`, 'utf8');

