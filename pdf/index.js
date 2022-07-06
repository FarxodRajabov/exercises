const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const input = data.split('\n')

const [a,c] = input.map(elem => elem.split(' '))

const nums = a.map(elem => +elem)

const [str]= c

function pdf(a,c) {
    let arr = []
    let maxHeight = 0
    let res = 0
    for (let i = 0; i < str.length; i++) {
        arr.push(nums[str[i].charCodeAt() - 97])
    }
    maxHeight = Math.max(...arr)
    res = maxHeight * str.length
    return res
}

fs.writeFileSync('output.txt', `${pdf(a,c)}`, 'utf8');