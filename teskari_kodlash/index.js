const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [testsCount, ...pairs] = data.split('\n')

const numbers = pairs.map(pair => pair.split(' ').map(elem => parseInt(elem)))

const result = numbers.reduce((res, elem) => {
    if (elem[0] % 2 === 0) {
        res += elem[0] / 2 * (elem[0] + 1) === elem[1] ? '1' : '0'
    } else {
        res += Math.ceil(elem[0] / 2) * elem[0] === elem[1] ? '1' : '0'
    }

    return res
}, '')


fs.writeFileSync('output.txt', `${result}`, 'utf8');