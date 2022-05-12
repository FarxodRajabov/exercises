const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');



const [a, b] = data.split(' ').map(item => parseInt(item));

let sqrtB = Math.ceil(Math.sqrt(b))


function res(a,b) {
    if (Math.abs(b - a) === 2) {
        for (let i = 2; i <= sqrtB; i++) {
            if (a % i === 0 || b % i === 0) {
                return 'No'
            }
        }
    } else {
        return 'No'
    }
    return 'Yes'
  
}

fs.writeFileSync('output.txt', `${res(a,b)}`, 'utf8');

