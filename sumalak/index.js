const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a,b] = data.split('\n')  //.map(item => parseInt(item));
const nums = b.split(' ').map(elem => parseInt(elem))
const [m,n] = a.split(' ').map(elem => parseInt(elem))

const sumArr = nums.reduce((elem,first) => elem + first,0) 

// function res(m,n,nums) {
//     let sum = 0
//     if (sumArr < m ) {
//         return -1
//     }else{
//         for (let i = 0; i < n; i++) {
//             if (sum < m) {
//                 return su
//             }
//         }
//     }
// }

const arr = [1,24,6,7,8,3,2,1]

console.log(new Set (arr));




fs.writeFileSync('output.txt', `${a}`, 'utf8');

