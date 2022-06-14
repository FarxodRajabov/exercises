const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [...a] = data.split('\n') //.map(item => parseInt(item));
const [n,m] = a.map(elem => elem.split(' ').map(elem => parseFloat(elem)))


function res(n,m) {
    const numbers = new Map()
    let count = 0
    let isTrue = 0
    for (let i = 0; i < n; i++) {
        isTrue = numbers.get(m[i])
        if(isTrue) {  
            count += 1
            numbers.set(m[i],false)
        }else {
            numbers.set(m[i],true)
        }
    }
    return count

}

fs.writeFileSync('output.txt', `${res(n,m)}`, 'utf8');

