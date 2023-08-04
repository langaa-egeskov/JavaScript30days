function once(fn) {
    
    let count = 0

    return function (...args) {
        console.log(`count = ${count}`)
        if (count <= 0) {
            ++count
            return fn(...args)
        }

        return
    }
}

export {once}


// in line testing
// const fn1 = (a, b, c) => (a + b + c)
// const onceFn1 = once(fn1)
// console.log(`ex 1, first call: ${onceFn1(1, 2, 3)}`)
// console.log(`ex 1, second call: ${onceFn1(2, 3, 6)}`)

// and this is how you implement once more professionally
// to allow for the function being pass potentially being a method
// var once = function(fn) {
//     let hasBeenCalled = false;
//     return function(...args){
//       if (!hasBeenCalled) {
//         hasBeenCalled = true;
//         return fn.apply(this, args);
//       }
//     }
//   };