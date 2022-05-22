const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');


const n = +data 

function res(n) {
    let sum = n
    for (let i = 1; i < n; i++) {
        sum += (n+i)
        
    }
    
    return sum

}






fs.writeFileSync('output.txt', `${res(n)}`, 'utf8');

