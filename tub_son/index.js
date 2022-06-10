const fs = require('fs');
const n = fs.readFileSync('input.txt', 'utf8');


function tub(n) {
    let array = []
    let sqrti = 1
    let kvi = 1
    let isPrime = 0
    
    for (let i = 2; i <= +n; i++) {
        isPrime = true
        if(kvi < i) {
            sqrti += 1
            kvi = sqrti*sqrti
        }

        for (let a = 2; a <= sqrti; a++) {
            if (i % a === 0) {
                isPrime =false
                break
            }
        }
        if(isPrime) {
            array.push(i)
        }
    }
    return array
}

fs.writeFileSync('output.txt', `${tub(n)}`, 'utf8');





