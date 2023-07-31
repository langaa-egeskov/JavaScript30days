function reduce(nums: number [], fn: (accum: number, curr: number) => number, init?: number): number {
    
    let i = 0
    // deal with whether we have init
    if (init === null || init === undefined) {
      init = nums[0]
      ++i
    } 
  
    let output = init
  
    while (i < nums.length) {
      output = fn(output, nums[i++])
    }
 
    return output
  
  }
  
  export {reduce}

  // compile with commandline from typscript directory
  // npx tsc src/ts-day-07.ts --target es6