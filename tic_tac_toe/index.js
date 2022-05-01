const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const values = data

let X = 0
let O = 0

function TicTacToe (values) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] === 'X') {
            X++
        }else if (values[i] === 'O') {
            O++
        }
    }

    if (X > O) {
        return 'X'
    }else {
        return 'O'
    }
}


fs.writeFileSync('output.txt', `${TicTacToe(values)}`, 'utf8');

