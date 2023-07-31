function reduce(nums, fn, init) {
  // deal with whether we have init
  let i = 0
  
  // be robust to not getting an init passed
  if (init === null || init === undefined) {
    init = nums[0]
    ++i
  } 

  let output = init
  // console.log(`i = ${i}`)
  // console.log(`output = ${output}`)
  // console.log(`boolean = ${i<nums.length}`)

  while (i < nums.length) {
    // console.log(`fn(${init}, nums[${i}] )`)
    output = fn(output, nums[i++])
    // console.log(`output = ${output}`)
  }
  // console.log(`output = ${output}`)
  return output

}

export {reduce}

// function minitest(reduce) {
//   const nums = []
//   const fn = function sum (accum, curr) {
//     return 0
//   }
//   const init = 25
//   return reduce(nums, fn, init)
// }
// console.log(`run minitest`)
// console.log(`${minitest(reduce)}`)

 