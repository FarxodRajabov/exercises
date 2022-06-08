const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');



function str(data) {  
    let numStr = ''
    for (let i = 0; i < (data.length - 1); i++) {
        numStr += data[i]
    }
    let res = Math.ceil(10000 / +numStr)
    return res + '%'
   
}


fs.writeFileSync('output.txt', `${str(data)}`, 'utf8');

