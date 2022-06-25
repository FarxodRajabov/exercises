const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

function res(data) {
    let dataChar = 0
    const str = new Map()

    for (let i = 97; i < 123; i++) {
        str.set(String.fromCharCode(i),0)
      }
    for (let i = 65; i < 91; i++) {
      str.set(String.fromCharCode(i),0)
    }

    for(let i = 0; i < data.length; i++) {
        dataChar = data.charCodeAt(i)
        if (dataChar >= 65 && dataChar <= 91 || dataChar >= 97 && dataChar <= 123) {
            str.set(data[i], str.get(i) + 1)
        }
    }
   return str
}
console.dir(res(data))

fs.writeFileSync('output.txt', `${res(data)}`, 'utf8');

