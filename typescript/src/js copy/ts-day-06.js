function filter(arr, fn) {
    // preallocate memory
    let filteredArr = new Array(arr.length);
    let filteredArrLength = 0;
    // try it with Object.entries and for..of
    for (let index of Object.keys(arr)) {
        // fn expects a numerical index for example 2
        if (fn(arr[Number(index)], Number(index))) {
            filteredArr[filteredArrLength] = arr[Number(index)];
            filteredArrLength++;
        }
    }
    // then truncate
    filteredArr.length = filteredArrLength;
    return filteredArr;
}
export { filter };
