function createCounter(n) {
    let i = 0;
    return function () {
        let count = n + i;
        i++;
        return count;
    };
}
const myCounter = createCounter(10);
console.log("myCounter() =  ", myCounter());
console.log("myCounter() =  ", myCounter());
console.log("myCounter() =  ", myCounter());
