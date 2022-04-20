const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const input = +data

function whoes(input) {
    if(input % 2 ===0) {
        return 'Second player'
    }
    return 'First player'
}

fs.writeFileSync('output.txt', `${whoes(input)}`, 'utf8');

