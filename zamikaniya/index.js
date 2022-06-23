function zam(a) {
    return function add(b) {
        return a + 1 + b
    }
}

console.log(zam(6)(7));
