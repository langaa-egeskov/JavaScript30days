// day 03

const expect = function(val) {
  function toBe (act) {
    if (val === act) {
      return {"value": true}
    } 
    throw {"error": "Not Equal"}
  }

  function notToBe (act) {
    if (val !== act) {
      return {"value": true}
    } 
    throw  {"error":"Equal"}
  }


  return {toBe, notToBe}
};

//console.log('expect throw, ', expect(5).toBe(3))
console.log('expect true, ', expect(5).toBe(5))
console.log('expect true, ', expect(5).notToBe(3))
console.log('expect throw, ', expect(3).notToBe(3))