const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split(' ').map(item => parseInt(item));

function devide(a,b) {
    let i = a
    for (;;) {
        if (i % b === 0) {
            return i
        }
        i++
    }
}

fs.writeFileSync('output.txt', `${devide(a,b)}`, 'utf8');

