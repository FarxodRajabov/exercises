const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [len, nums] = data.split('\n');
let numbers = nums.split(' ').map(elem => parseInt(elem))















fs.writeFileSync('output.txt', `${arr(numbers)}`, 'utf8');

