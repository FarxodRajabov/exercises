const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

function ord(a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a.charCodeAt(i)
    }
    return sum
}

fs.writeFileSync('output.txt', `${ord(data)}`, 'utf8');
