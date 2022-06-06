const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split(' ').map(item => parseInt(item));

function devide(a,b) {
    for (let i = a; i < 10 ** 18; i++) {
        if (i % b === 0) {
            return i
        }
    }
}

fs.writeFileSync('output.txt', `${devide(a,b)}`, 'utf8');

