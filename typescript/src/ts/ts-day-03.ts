type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    function toBe(act: any): boolean {
        if (val === act) {
            return true
        }
        throw "Not Equal"
    }

    function notToBe(act: any) : boolean {
        if (val !== act) {
            return true
        }
        throw "Equal"
    }

    return {toBe, notToBe}
};
