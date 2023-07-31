const createCounter = function (n) {
  let i = 0
  return function () {
    let count = n+i
    i++;
    console.log("n = ", n)
    console.log("i = ", i)
    return count
  };
};

myCounter = createCounter(10)
console.log("myCounter() =  ", myCounter())
console.log("myCounter() =  ", myCounter())
console.log("myCounter() =  ", myCounter())