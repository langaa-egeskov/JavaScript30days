function createCounter(n: number): () => number {
    let i: number = 0
    return function () {
        let count: number = n + i
        i++
        return count
    }
}

const myCounter = createCounter(10)
console.log("myCounter() =  ", myCounter())
console.log("myCounter() =  ", myCounter())
console.log("myCounter() =  ", myCounter())