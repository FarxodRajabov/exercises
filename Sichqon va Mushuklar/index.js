const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b, c] = data.split(' ').map(item => parseInt(item));

function Cats(a, b, c) {
    let cat1 = Math.abs( c - b )
    let cat2 = Math.abs( c - a )

    if (cat1 === cat2) {
        return 'sichqon'
    } else if (cat1 > cat2) {
        return '1-mushuk'
    }
    return '2-mushuk'
}

fs.writeFileSync('output.txt', `${Cats(a, b, c)}`, 'utf8');
