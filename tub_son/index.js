const fs = require('fs');
const n = +fs.readFileSync('input.txt', 'utf8');

function res(n) {
    let arrPrime = [2]
    let sqrt = 3
    for (let i = 3; i <= n; i++) {
        let isPrime = true
        if (sqrt * sqrt <= i) {
            sqrt += 1
        }
        for (let a = 2; a < sqrt; a++) {
            if (i % a === 0 ) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            arrPrime.push(i)
        }
    }
    return arrPrime
}

fs.writeFileSync('output.txt', `${res(n)}`, 'utf8');





