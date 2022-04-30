const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const n = data.split(`\r\n`).map(item => item.split(' ')).reduce((arr, elem) => {
    arr.push(...elem)
    return arr 
}, []).map(elem => parseInt(elem))

function robot(n) {
   const index = n.indexOf(1) + 1
   const devide = Math.ceil(index / 7)
   const q = index % 7
   let res = 0
   if (q === 0) {
    res = Math.abs(devide - 4) + Math.abs(7 - 4) 
   } else {
    res = Math.abs(devide - 4) + Math.abs(q - 4) 
   }
   return res
}



fs.writeFileSync('output.txt', `${robot(n)}`, 'utf8');

