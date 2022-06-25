const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const [a, b] = data.split('\n')
lenArr= +a
const Arr = b.split(' ')

function arr(a,b) {
    const map = new Map()
    let res = 0
    let getMap = 0
    for (let i = 0; i < lenArr; i++) {
        getMap = map.get(b[i])
        if (!getMap){
            map.set(Arr[i],1)
        }else{
            map.set(Arr[i], getMap + 1)
        }
    }
    let val = [...map.values()]
    res = lenArr - Math.max(...val)
    return res
}
fs.writeFileSync('output.txt', `${arr(lenArr,Arr)}`, 'utf8');