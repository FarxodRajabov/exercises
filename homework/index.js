const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b, c, d] = data.split(' ').map(item => parseInt(item));
const f = d*d
const number = a*f + b*d + c

function home(number) {
    if(number === 0 ) {
        return 'YES'
    }
    return 'NO'
}


fs.writeFileSync('output.txt', `${home(number)}`, 'utf8');

