const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const n = data.split(' ').map(item => parseInt(item));

function bigs(n) {
    let maxElems = []
    let maxSum = n[0] + n[1]
    let isMax = 0
    for (let i = 1; i < n.length; i++) {
        isMax = n[i] + n[i + 1]
        if (isMax > maxSum) {
            maxSum = isMax
            maxElems[0] = n[i]
            maxElems[1] = n[i + 1]
        }
    }
    return maxElems
}


fs.writeFileSync('output.txt', `${bigs(n)}`, 'utf8');

