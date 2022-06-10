const fs = require('fs');
const n = fs.readFileSync('input.txt', 'utf8');

function tub(n) {
    let array = []
    for (let i = 2; i <= +n; i++) {
        for (let a = 2; a < Math.sqrt(i); a++) {
            if (i % a === 0) {
                break
            }else {
                array.push(i)
                break
            }
        }
    }
    return array
}

fs.writeFileSync('output.txt', `${tub(n)}`, 'utf8');

