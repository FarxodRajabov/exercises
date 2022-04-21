const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split(' ').map(item => parseInt(item));

function iftorlik(a,b) {
    if (b % a === 0) {
        return 'Yes'
    }
    return 'No'
}

fs.writeFileSync('output.txt', `${iftorlik(a,b)}`, 'utf8');

