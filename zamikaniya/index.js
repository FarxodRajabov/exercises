function zam(a) {
    return function add(b) {
        return a + b
    }
}

console.log(zam(6)(7));
