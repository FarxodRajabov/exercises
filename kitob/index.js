const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');


const [a, b] = data.split(' ').map(item => parseInt(item));


function pages(a,b) {
    if(b === 1) {
        return 0
    }
    if (b <= a/2) {
        return Math.ceil(b / 2)  
    }
    if (a % 2 === 0) {
        return Math.floor((a + 1 - b) / 2) 
    }

    return  Math.floor((a - b) / 2)
}

fs.writeFileSync('output.txt', `${pages(a,b)}`, 'utf8');