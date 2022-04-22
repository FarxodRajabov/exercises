const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b, c] = data.split(' ').map(item => parseInt(item));

function IsFinished(a, b, c) {
    let res = a * (b-1) + 1
    if (res <= c){
        return 1
    }
    return -1
}
fs.writeFileSync('output.txt', `${IsFinished(a,b,c)}`, 'utf8');

