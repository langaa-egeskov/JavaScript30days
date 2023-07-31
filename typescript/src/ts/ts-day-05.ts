function map(arr: number[], fn: (n: number, i: number) => number): number [] {
    let returnedArray: number[] = new Array(arr.length)
    for (let i: number = 0; i < arr.length; ++i) {
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray
}