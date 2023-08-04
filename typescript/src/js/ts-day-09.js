function once(fn) {
    let alreadyCalled = false;
    return function (...args) {
        if (!alreadyCalled) {
            alreadyCalled = true;
            return fn(...args);
        }
    };
}
export { once };
