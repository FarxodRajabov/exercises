const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b, c] = data.split(' ').map(item => parseInt(item));

function devide(a, b, c) {
    if (b === 1) {
        return 0
    }else if (a < b && a === c) {
        return 1
    }else if (b < c) {
        return 0
    } else if (a % b === 0) {
        return a / b
    }else if (a % b < c) {
        let res = Math.floor(a / b)
        return res
    }else {
        let res = Math.floor(a / b) + 1
        return res
    }
}

fs.writeFileSync('output.txt', `${devide(a,b,c)}`, 'utf8');

