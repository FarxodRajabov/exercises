const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [len, nums] = data.split('\n');
let numbers = nums.split(' ').map(elem => parseInt(elem))



function arr(numbers) {
    let max1 = 0
    let max2 = numbers[1]

    for (let i = 0; i < len; i++) {
        if (numbers[i] > max1 ) {
            max2 = max1
            max1 = numbers[i]
        } else if (numbers[i] > max2) {
            max2 = numbers[i]
        }
    }
    return max2
}



fs.writeFileSync('output.txt', `${arr(numbers)}`, 'utf8');

