const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, ...b] = data.split('\n')
const c = +a 


function str(a, b) {
    let res = ''
    const elems = b.map(elem => elem.split(''))
    for (let i = 0; i < a; i++) {
        res = res + `${elems[i].length - new Set(elems[i]).size}\n`
    }
    return res
}


fs.writeFileSync('output.txt', `${str(c,b)}`, 'utf8');

