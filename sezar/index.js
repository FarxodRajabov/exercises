const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a,b] = data.split('\n')
const interval = +a

function str(b) {
    let shrift = ''
    let dataChar = 0

    for (let i = 0; i < b.length; i++) {
        dataChar = b.charCodeAt(i)

        if (dataChar >= 65 && dataChar <= 90) {
            if (dataChar + interval >90 && dataChar + interval <= 116) {
             shrift += String.fromCharCode(((dataChar + interval) - 26))
        }else {
            shrift += String.fromCharCode(dataChar + interval)
        }
    }else if (dataChar >= 97 && dataChar <= 122) {
        if (dataChar + interval >122 && dataChar + interval <= 148) {
            shrift += String.fromCharCode(((dataChar + interval) - 26))
        }else {
            shrift += String.fromCharCode(dataChar + interval)
        }
    } else {
        shrift += String.fromCharCode(dataChar)
    }
    
}
return shrift
}

fs.writeFileSync('output.txt', `${str(b)}`, 'utf8');
