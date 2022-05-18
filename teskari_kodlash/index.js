const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, ...b] = data.split('\n');
const [c,d,e,f] = b.map(elem => elem.split(' '))

const sum = ''
function res(c,d,e,f) {
    if(+c[1] % 2 === 0) {
        
    }
}


console.log(c,d,e,f);



fs.writeFileSync('output.txt', `${a+b}`, 'utf8');

