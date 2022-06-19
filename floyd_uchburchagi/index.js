const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const a = data.split(' ').map(item => parseInt(item));

function res(a) {
    let num = 1
    let sum = '1'
    for (let i = 1; i <= +a - 1; i++) {
        sum += '\n'
        for (let b = 0; b <= i; b++){
            num += 1
            sum = sum + num + ' '
        }
        
    }
    return sum 
}


fs.writeFileSync('output.txt', `${res(a)}`, 'utf8');

