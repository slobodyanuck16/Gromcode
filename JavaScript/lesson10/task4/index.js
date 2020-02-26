const getMaxAbsoluteNumer = arr => {
    const absoluteValues = arr
        .map(num => Math.abs(num));
        if (!Array.isArray(arr) && arr === []) {
            return null;
        }
    const max = Math.max(...absoluteValues);
    return max;
}