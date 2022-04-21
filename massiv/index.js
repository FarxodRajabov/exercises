const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const [len, nums] = data.split('\n')
let numbers = nums.split(' ').map(elem => parseInt(elem))

let counts = new Map()
let max_count = 1
let max_elem = numbers[0]

counts[max_elem] = max_count

for (let i = 1; i < len; i++) {
    if(!counts[numbers[i]]){
        counts[numbers[i]] = 1
    } else {
        counts[numbers[i]]++
    }

    if(counts[numbers[i]] > max_count) {
        max_count = counts[numbers[i]]
        max_elem = numbers[i]
    }
}
console.log('okok');

fs.writeFileSync('output.txt', `${len-max_count}`, 'utf8');

