const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a,b] = data.split('\r\n') //.map(item => parseInt(item));
const arr = b.split(' ').map(elem => parseInt(elem))

function res(a,arr) {
    let sum = ''
    for (let i = 0; i < +a; i++) {
        let num = (Math.sqrt(1 + 8 * arr[i]))
        if (num === Math.ceil(num)) {
            sum += '1'
        }else {
            sum += '0'
        }
    }
    return sum
}



fs.writeFileSync('output.txt', `${res(a,arr)}`, 'utf8');

