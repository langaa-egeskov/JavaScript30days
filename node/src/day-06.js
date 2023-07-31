// first pass
// function filter(arr, fn) {
//   let filteredArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       filteredArr.push(arr[i])
//     }
//   }
//   return filteredArr
// }

//  // second pass
// function filter(arr, fn) {
//   // preallocate memory
//   let filteredArr = new Array(arr.length)
//   let filteredArrLength = 0

//   // try it with Object.entries and for..of
//   // but for..of does not handle sparse arrays
//   for (const [index, value] of Object.entries(arr)) {
//     console.log(`[${index}, ${value}]`)
//     console.log(`fn(value, index) = ${fn(value, index)}`)
//     // fn expects a numerical index for example 2
//     if (fn(value, Number(index))) {
//       filteredArr[filteredArrLength] = value
//       filteredArrLength++
//     }
//   }

//   // then truncate
//   filteredArr.length = filteredArrLength
//   return filteredArr

// }

// third pass
function filter(arr, fn) {
  // preallocate memory
  let filteredArr = new Array(arr.length)
  let filteredArrLength = 0

  // try it with Object.entries and for..of
  for (const index of Object.keys(arr)) {
    // fn expects a numerical index for example 2
    if (fn(arr[index], Number(index))) {
      filteredArr[filteredArrLength] = arr[index]
      filteredArrLength++
    }
  }

  // then truncate
  filteredArr.length = filteredArrLength
  return filteredArr

}

export {filter}
// mini test
// const arr = [1, 2, 3]
// const fn = function firstIndex(n, i) {
//   return i === 0
// }
// const newArray = filter(arr, fn)
// console.log(`Example 2 newArray = [${newArray}]`)