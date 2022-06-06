const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const a = data.split('\n') 
let [b,c] = a.map(elem => elem.split(' ').map(elem => parseInt(elem)))

function clock(b,c) {
    let sumB = b[0] * 3600 + b[1] * 60 + b[2]  
    let sumA = c[0] * 3600 + c[1] * 60 + c[2]  
    
    let sumRes = sumA - sumB
    return sumRes
}


fs.writeFileSync('output.txt', `${clock(b,c)}`, 'utf8');

