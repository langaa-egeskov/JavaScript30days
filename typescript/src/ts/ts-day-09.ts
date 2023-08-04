// how i wrote it
function once (fn: Function): Function {

    let alreadyCalled = false    

    return function (...args: any): any {
        if (!alreadyCalled) {
            alreadyCalled = true
            return fn(...args)
        }
    }
}

export {once}

// the better way
// type Fn = (...args: any[]) => any

// function once(fn: Fn): Fn {

//   let alreadyCalled = false

//   return function (...args) {
//       if (!alreadyCalled) {
//           alreadyCalled = true
//           return fn(...args)
//       }
//   };
// }