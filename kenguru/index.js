const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b, c, d] = data.split(' ').map(item => parseInt(item));


function kenguru(a, b, c, d) {
    let Ken = (c - a)/(b - d)
    let Keng = (c - a)%(b - d)
    if( Ken >= 0 && Keng === 0) {
        return 'YES'
    }
    return 'NO'
}



fs.writeFileSync('output.txt', `${kenguru(a, b, c, d)}`, 'utf8');

