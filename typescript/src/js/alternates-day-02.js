// increment then return

var createCounter01 = function(n) {
  let currentCount = n - 1;
  return function() {
    currentCount += 1;
    return currentCount;      
  };
};

// Post fix increment 
var createCounter02 = function(n) {
  let currentCount = n - 1;
  return function() {
    currentCount += 1;
    return currentCount;      
  };
};

// prefix decrement increment
var createCounter03 = function(n) {
  --n;
  return function() {
    return ++n;      
  };
};

// postfix with arrow function