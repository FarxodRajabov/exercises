const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n')
const [a,b] = input.map(elem => elem.split(' '))

const numbers = new Map()

function couple(a,b) {
    let res = 0
    let currentNum = 0
    for (let i = 0; i < +a; i++) {
        currentNum = numbers.get(b[i])
        if(!currentNum) {
            numbers.set(b[i], 1)
        } else {
            numbers.set(b[i], currentNum+1)
        }
    }
    const key = [...numbers.keys()] 
    console.log(key);
    const value = [...numbers.values()] 
    
    for (let i = 0; i < value.length; i++) {
        if (value[i] % 2 !== 0) {
             res += i
        }
    }
    return key[res]
}

fs.writeFileSync('output.txt', `${couple(a,b)}`, 'utf8');

