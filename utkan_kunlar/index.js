const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function res(input) {
    const count = new Map()

    for (let i = 97; i < 123; i++) {
        count.set(String.fromCharCode(i), 0)
    }

    for (let i = 65; i < 91; i++) {
        count.set(String.fromCharCode(i), 0)
    }

    for(let i = 0; i < input.length; i++) {
        if(("a" <= input[i] && "z" >= input[i]) || ("A" <= input[i] && "Z" >= input[i])) {
            count.set(input[i], count.get(input[i])+1)
        }
    }

    let ress = ""

    count.forEach(function(value, key) {
        ress = ress + key + " " + value + "\n"
    })

    return ress
}

fs.writeFileSync('output.txt', `${res(input)}`, 'utf8');







// for(let i = 0; i < input.length; i++) {
//     if(("a" <= input[i] && "z" >= input[i]) || ("A" <= input[i] && "Z" >= input[i])) {
//         if(count[input[i]] === undefined) {
//             count[input[i]] = 1
//         } else {
//             count[input[i]]++
//         }
//     }
// }