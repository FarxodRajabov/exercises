const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split(' ')



function length(a,b) {
    if(b.length === +a){
        return 'yes'
    }else {
        return 'no'
    }
}


fs.writeFileSync('output.txt', `${length(a,b)}`, 'utf8');

