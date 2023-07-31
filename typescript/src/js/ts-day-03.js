function expect(val) {
    function toBe(act) {
        if (val === act) {
            return true;
        }
        throw "Not Equal";
    }
    function notToBe(act) {
        if (val !== act) {
            return true;
        }
        throw "Equal";
    }
    return { toBe, notToBe };
}
;
