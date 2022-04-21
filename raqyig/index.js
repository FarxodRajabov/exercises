const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const sum = data.split('').reduce((num, elem) => num+(+elem),0)


fs.writeFileSync('output.txt', `${sum}`, 'utf8');


// function sumIndex(input) {
//     let sum = 0
//     for (let i = 0; i < input.length; i++) {
//         sum += input[i]
//     }
//     return sum
// }