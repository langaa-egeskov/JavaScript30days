function reduce(nums, fn, init) {
    let i = 0;
    // deal with whether we have init
    if (init === null || init === undefined) {
        init = nums[0];
        ++i;
    }
    let output = init;
    while (i < nums.length) {
        output = fn(output, nums[i++]);
    }
    return output;
}
export { reduce };
