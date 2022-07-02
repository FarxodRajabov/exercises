const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const str = data.split(',')

function isPrime(str) {
    let sum = 0
    let nums = 0

    for (let i = 0; i < str.length; i++) {
        nums = +str[i]
        if (nums % 2 === 0) {
            sum += nums
        }
    }

    return sum
}

fs.writeFileSync('output.txt', `${isPrime(str)}`, 'utf8');

